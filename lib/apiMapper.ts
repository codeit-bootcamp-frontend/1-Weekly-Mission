const URL_PATH = {
  SAMPLE_CONTROLLER: "/api/sample",
  USER_CONTROLLER: "/api/users",
};

export const ApiMapper = {
  sample: {
    get: {
      GET_FOLDER: `${URL_PATH.SAMPLE_CONTROLLER}/folder`,
      GET_USER: `${URL_PATH.SAMPLE_CONTROLLER}/user`,
    },
  },
  user: {
    get: {
      GET_USERS: `${URL_PATH.USER_CONTROLLER}`,
    },
  },
  folder: {
    get: {
      GET_FOLDER: `${URL_PATH.USER_CONTROLLER}/:userId/folders`,
    },
  },
  link: {
    get: {
      GET_LINK: `${URL_PATH.USER_CONTROLLER}/:userId/links`,
    },
  },
};
