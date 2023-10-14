export default function signService() {
  return {
    async login(req, url) {
      const res = await fetch(`https://bootcamp-api.codeit.kr/api/${url}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
      })
      return res
    }
  }
};
