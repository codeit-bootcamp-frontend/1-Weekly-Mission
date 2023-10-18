import { goToFolderPage } from './functions.js';

const checkToken = () => {
  const LOGIN_ACCESS_TOKEN = localStorage.getItem('access-token');
  if (LOGIN_ACCESS_TOKEN) {
    goToFolderPage();
  }
};

export { checkToken };
