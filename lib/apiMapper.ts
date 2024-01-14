const URL_PATH = {
  AUTH_CONTROLLER: "/auth",
  LINK_CONTROLLER: "/api/links",
  FOLDER_CONTROLLER: "/api/folders",
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
    get: {
      GET_FOLDERS: `${URL_PATH.USER_CONTROLLER}/:userId/folders`,
      GET_FOLDER: `${URL_PATH.FOLDER_CONTROLLER}`,
    },
  },
  link: {
    get: {
      GET_LINK: `${URL_PATH.LINK_CONTROLLER}`,
      GET_LINKS: `${URL_PATH.USER_CONTROLLER}/:userId/links`,
    },
  },
  auth: {
    post: {
      SIGN_IN: `${URL_PATH.AUTH_CONTROLLER}/sign-in`,
      SIGN_UP: `${URL_PATH.AUTH_CONTROLLER}/sign-up`,
    },
  },
};
