import { goToFolderPage } from './functions.js';

const checkToken = () => {
  let token = localStorage.getItem('access-token');
  if (token) {
    return goToFolderPage();
  }
};

export { checkToken };
