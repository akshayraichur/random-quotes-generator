import "./index.css";
import generateRandomQuote from "./Components/RandomQuote";

const mainElement = document.querySelector(".main");

const App = async () => {
  // fetches a random quote and returns a div
  const randomQuoteElement = await generateRandomQuote();
  mainElement.append(randomQuoteElement);
};

App();
