/**
 * @param {String} requestBodyData request body data
 * @param {String} requestUrlType request url type
 * @param {String} requestMethod request method (POST/ GET / DELETE / PUT)
 * @returns {Boolean} whether request result is Ok (status:200)
 */

async function requestData(requestBodyData, requestUrlType, requestMethod) {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/${requestUrlType}`,
      createConfig(requestBodyData, requestMethod)
    );
    console.log(response.status);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const resultData = await response.json();
    console.log(resultData);
    return resultData;
  } catch (error) {
    throw error;
  }
}

function createConfig(requestBodyData, requestMethod) {
  let config = {};
  if (requestMethod === ("POST" || "PUT")) {
    config = {
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBodyData),
    };
  } else {
    config = {
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  return config;
}

export default requestData;
