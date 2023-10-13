import { instance } from '../api.js'

// 이메일 중복 확인
export default async function emailDoubleCheck(email) {
  const statusCode = 409
  await instance.post('/api/check-email', { email: email }).then((res) => {
    if (res.response?.status == statusCode) {
      alert('동일한 이메일이 존재합니다 😢')
    }
  })
}
