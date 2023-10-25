const URL_PATH = {
  SAMPLE_CONTROLLER: "/api/sample",
};

export const ApiMapper = {
  sample: {
    get: {
      GET_FOLDER: `${URL_PATH.SAMPLE_CONTROLLER}/folder`,
      GET_USER: `${URL_PATH.SAMPLE_CONTROLLER}/user`,
    },
  },
};
