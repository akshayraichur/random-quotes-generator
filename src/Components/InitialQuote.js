import fetchData from "../Services/Api";
import { BASE_URL, RANDOM } from "../Constants/Urls";

const initialQuote = async (mainElement) => {
  let url = BASE_URL + RANDOM;

  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add("lds-dual-ring");

  const div = document.createElement("div");
  div.classList.add("random_quote_section");

  const mainContent = document.createElement("h1");
  mainContent.classList.add("random_quote_section__content");

  const authorElement = document.createElement("h4");
  authorElement.classList.add("random_quote_section__author");

  div.append(mainContent, loadingDiv, authorElement);

  fetchData(url, "get")
    .then((response) => {
      mainContent.innerText = response.content;
      authorElement.innerText = response.author;
      loadingDiv.remove();
    })
    .catch((err) => console.log(err));

  return div;
};

export default initialQuote;
