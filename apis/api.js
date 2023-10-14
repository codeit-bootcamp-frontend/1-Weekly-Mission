const BASE_URL = "https://bootcamp-api.codeit.kr"

// const fetchPost
const fetchPost = async (url, body, headers = {}) => {
  const fullUrl = BASE_URL + url
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  }
  const res = await fetch(fullUrl, options)
  return await res.json()
}

export { fetchPost }
