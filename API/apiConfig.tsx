const apiConfig = {
  baseUrl: "https://bootcamp-api.codeit.kr/api",
  endpoints: {
    user: {
      checkEmail: "/check-email",
      specificUserData: (userID: number) => `/users/${userID}`,
      currentUserData: "/users",
    },
    folder: {
      getFolderByFolderID: (folderID: string | string[] | undefined) => `/folders/${folderID}`,
      specificUserFolderData: (userID: number) => `/users/${userID}/folders`,
    },
    link: {
      getLinksByFolderID: (userID: number, folderID?: string | string[] | undefined) => {
        if (folderID) {
          return `/users/${userID}/links?folderId=${folderID}`;
        } else {
          return `/users/${userID}/links`;
        }
      },
    },
    auth: {
      sign: (signType: string) => `/sign-${signType}`,
    },
  },
};

export { apiConfig };
