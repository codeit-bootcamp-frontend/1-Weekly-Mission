import { createContext, useContext, useEffect, useState } from 'react';
import axios from '@/src/lib/axios';
import { useRouter } from 'next/router';

export const AuthContext = createContext({
  user: null,
  folders: null,
  links: null,
  isPending: () => {},
  getMe: () => {},
  signIn: (data) => {},
  signUp: (data) => {},
  checkEmail: (data) => {},
  getFolders: () => {},
  getLinks: () => {},
});

export function AuthProvider({ children }) {
  const [values, setValues] = useState({
    user: null,
    folders: null,
    links: null,
    isPending: true,
  });

  async function getMe() {
    setValues((prev) => ({
      ...prev,
      isPending: true,
    }));
    let nextUser;
    try {
      const response = await axios.get('/users');
      nextUser = response.data.data[0];
    } finally {
      setValues((prev) => ({
        ...prev,
        user: nextUser,
        isPending: false,
      }));
    }
  }

  async function signIn(data) {
    const { email, password } = data;
    const response = await axios.post('/sign-in', { email, password });
    const { accessToken } = response.data.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  async function signUp(data) {
    const { email, password } = data;
    await axios.post('/sign-up', { email, password });
    await signIn(data);
    await getMe();
  }

  async function checkEmail(data) {
    const { email } = data;
    const response = await axios.post('/check-email', { email: `${email}` });
    return response.data?.isUsableNickname;
  }

  async function getFolders(folderId) {
    const response = await axios.get(`/folders${folderId ? folderId : ''}`);
    const nextFolders = response.data.data.folder;
    setValues((prev) => ({ ...prev, folders: nextFolders }));
  }

  async function getLinks(folderId, userId) {
    const response = await axios.get(
      `${userId ? `users/${userId}` : ''}/links${folderId ? `${folderId}` : ''}`  
    );
    const nextLinks = response.data.data.folder;
    setValues((prev) => ({ ...prev, links: nextLinks }));
  }

  return (
    <AuthContext.Provider
      value={{
        user: values.user,
        folders: values.folders,
        links: values.links,
        isPending: values.isPending,
        getMe,
        signIn,
        signUp,
        checkEmail,
        getFolders,
        getLinks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(require) {
  const context = useContext(AuthContext);
  const router = useRouter();
  if (!context) {
    throw new Error('provider안에서 사용하세요');
  }

  useEffect(() => {
    if (require && !context.user && !context.isPending) {
      router.push('/signin');
    }
  }, [require, context.user, context.isPending, router]);

  return context;
}
