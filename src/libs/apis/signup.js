import { instance } from '../api.js'

export default async function signup(email, password) {
  let auth = {
    email: email,
    password: password,
  }

  await instance
    .post('/api/sign-up', auth)
    .then((res) => {
      localStorage.setItem('accessToken', res.data.accessToken)
      location.href = '/folder.html'
    })
    .catch((error) => {
      console.log(error)
    })
}
