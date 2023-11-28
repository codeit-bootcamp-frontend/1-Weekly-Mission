interface APIEndpoints {
  baseUrl: string;
  user: {
    checkEmail: string;
    getUser: (params: { userId: number }) => string;
    getUsers: string;
    folders: {
      getFolder: (params: { folderId: number }) => string;
      deleteFolder: (params: { folderId: number }) => string;
      updateFolder: (params: { folderId: number }) => string;
      createFolder: string;
      getUserFolder: (params: { userId: number; folderId: number }) => string;
      getUserFolders: (params: { userId: number }) => string;
    };
    links: {
      deleteLink: (params: { linkId: number }) => string;
      getLinks: string;
      createLink: string;
      getUserLinks: (params: { userId: number }) => string;
    };
  };
  auth: {
    refreshToken: string;
    signIn: string;
    signUp: string;
  };
  sample: {
    getSampleFolder: string;
    getSampleUser: string;
  };
}

const API_ENDPOINTS: APIEndpoints = {
  baseUrl: "https://bootcamp-api.codeit.kr/api",
  user: {
    checkEmail: "/check-email",
    getUser: ({ userId }) => `/users/${userId}`,
    getUsers: "/users",
    folders: {
      getFolder: ({ folderId }) => `/folders/${folderId}`,
      deleteFolder: ({ folderId }) => `/folders/${folderId}`,
      updateFolder: ({ folderId }) => `/folders/${folderId}`,
      createFolder: "/folders",
      getUserFolder: ({ userId, folderId }) =>
        `/users/${userId}/folders/${folderId}`,
      getUserFolders: ({ userId }) => `/users/${userId}/folders`,
    },
    links: {
      deleteLink: ({ linkId }) => `/links/${linkId}`,
      getLinks: "/links",
      createLink: "/links",
      getUserLinks: ({ userId }) => `/users/${userId}/links`,
    },
  },
  auth: {
    refreshToken: "/refresh-token",
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
  sample: {
    getSampleFolder: "/sample/folder",
    getSampleUser: "/sample/user",
  },
};
export default API_ENDPOINTS;
