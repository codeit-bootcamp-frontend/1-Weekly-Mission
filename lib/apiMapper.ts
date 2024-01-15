const URL_PATH = {
  AUTH_CONTROLLER: "/auth",
  LINK_CONTROLLER: "/links",
  FOLDER_CONTROLLER: "/folders",
  USER_CONTROLLER: "/users",
};

export const ApiMapper = {
  user: {
    get: {
      GET_USERS: `${URL_PATH.USER_CONTROLLER}`,
    },
    post: {
      CHECK_EMAIL: `${URL_PATH.USER_CONTROLLER}/check-email`,
    },
  },
  folder: {
    FOLDER: `${URL_PATH.FOLDER_CONTROLLER}`,
  },
  link: {
    LINK: `${URL_PATH.LINK_CONTROLLER}`,
    get: {
      GET_LINKS: `${URL_PATH.FOLDER_CONTROLLER}/:folderId/links`,
    },
  },
  auth: {
    post: {
      SIGN_IN: `${URL_PATH.AUTH_CONTROLLER}/sign-in`,
      SIGN_UP: `${URL_PATH.AUTH_CONTROLLER}/sign-up`,
    },
  },
};
