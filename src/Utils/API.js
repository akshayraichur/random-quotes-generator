import axios from "axios";

export default function fetchData(url, method, payload = {}) {
    return axios({
      method,
      url,
      data: payload,
    })
}
