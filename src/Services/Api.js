import axios from "axios";

export default function fetchData(url, method, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data: payload,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}
