import fetchData from "../Services/Api";
import { BASE_URL, RANDOM } from "../Constants/Urls";

const generateRandomQuote = (btnElement, quoteContainer) => {
  let url = BASE_URL + RANDOM;
  btnElement.addEventListener("click", function () {
    const mainContentElement = quoteContainer.querySelector("h1");
    const authorElement = quoteContainer.querySelector("h4");

    mainContentElement.innerText = "";
    authorElement.innerText = "";

    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("lds-dual-ring");
    quoteContainer.append(loadingDiv);

    fetchData(url, "get")
      .then((response) => {
        mainContentElement.innerText = response.content;
        authorElement.innerText = response.author;
        loadingDiv.remove();
      })
      .catch((err) => console.log(err));
  });
};

export default generateRandomQuote;
