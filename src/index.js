import "./index.css";
import generateRandomQuote from "./Components/RandomQuote";

const bodyElement = document.body;
const headerElement = document.querySelector(".header");
const randomQuoteSection = document.querySelector(".random_quote_section");
const mainElement = document.querySelector(".main");

function App() {
  console.log("Hi there");

  generateRandomQuote(randomQuoteSection);
}

App();
