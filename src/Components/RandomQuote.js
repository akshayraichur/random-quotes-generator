import axios from "axios";
import { BASE_URL, RANDOM } from "../Constants/Urls";

function fetchData(url, method, payload = {}) {
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

const generateRandomQuote = (mainElement) => {
  let url = BASE_URL + RANDOM;

  const mainContent = mainElement.querySelector(
    ".random_quote_section__content"
  );
  fetchData(url, "get")
    .then((response) => {
      console.log(response);
      mainContent.innerText = response.content;
    })
    .catch((err) => console.log(err));
};

export default generateRandomQuote;
