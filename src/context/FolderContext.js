import { createContext, useState  } from 'react';

// Context 생성
export const FolderContext = createContext();

// Provider를 사용하여 데이터 제공
export const FolderProvider = ({ children }) => {
  const [folderId, setFolderId] = useState('');

  // 데이터 업데이트 콜백 함수
  const changeFolderId = (newId) => {
    setFolderId(newId);
  };  
  
  return (
    <FolderContext.Provider value={{ folderId, changeFolderId }}>
      {children}
    </FolderContext.Provider>
  );
}

