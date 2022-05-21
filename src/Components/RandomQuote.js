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

const generateRandomQuote = async () => {
  console.log("called");

  let url = BASE_URL + RANDOM;

  const div = document.createElement("div");
  div.classList.add("random_quote_section");

  const mainContent = document.createElement("h1");
  mainContent.classList.add("random_quote_section__content");

  const authorElement = document.createElement("h4");
  authorElement.classList.add("random_quote_section__author");

  div.append(mainContent, authorElement);

  fetchData(url, "get")
    .then((response) => {
      mainContent.innerText = response.content;
      authorElement.innerText = response.author;
    })
    .catch((err) => console.log(err));

  return div;
};

export default generateRandomQuote;
