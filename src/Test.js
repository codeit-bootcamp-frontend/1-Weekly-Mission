import { useState, useEffect } from "react";

export default function Test() {
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const url = "https://bootcamp-api.codeit.kr/api/sample/folder";

  async function fetchData() {
    // 사용자가 보내는 request, 정보를 담는다.
    // 보내는 request 정보들을 담는다. method, url, headers, destiation, reffer.. 등등
    const requestObj = new Request(url);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(requestObj);
        if (response.status === 200) {
          resolve(response);
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  useEffect(() => {
    const result = fetchData();
    console.log(result);
  }, []);
}
