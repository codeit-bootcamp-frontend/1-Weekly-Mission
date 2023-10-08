export default function requestSignInForm() {
  const test = {
    email: 'test@codeit.com',
    password: 'codeit101',
  };
  return {
    login(request) {
      return request.email === test.email && request.password === test.password
    }
  }
};
