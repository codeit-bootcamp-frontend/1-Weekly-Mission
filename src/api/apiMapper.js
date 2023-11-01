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
  folder: {
    get: {
      GET_FOLDER: `${URL_PATH.USER_CONTROLLER}/:userId/folders`,
    },
  },
  links: {
    get: {
      GET_LINKS: `${URL_PATH.USER_CONTROLLER}/:userId/links`,
    },
  },
  user: {
    get: {
      GET_USER: `${URL_PATH.USER_CONTROLLER}/:userId`,
    },
  },
};
