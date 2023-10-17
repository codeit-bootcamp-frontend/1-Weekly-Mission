import { instance } from '../api.js'

export default async function signin(email, password) {
  let auth = {
    email: email,
    password: password,
  }

  await instance
    .post('/api/sign-in', auth)
    .then((res) => {
      localStorage.setItem('accessToken', res.data.accessToken)
      location.href = '/folder.html'
    })
    .catch(() => {
      alert('다시 입력해주세요 😄')
    })
}
