export function checkLocalToken (response) {
  let accessToken;
  if (!localStorage.getItem('access_token')) {
    accessToken = response.data.data.accessToken;
    localStorage.setItem('access_token', accessToken);
  }
}