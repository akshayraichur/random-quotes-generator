import "./index.css";
import initialQuote from "./Components/InitialQuote";
import RefreshButton from "./Components/RefreshButton";
import generateRandomQuote from "./Components/RandomQuote";
const mainElement = document.querySelector(".main");

const App = async () => {
  // fetches a random quote and returns a div
  const initialQuoteElement = await initialQuote(mainElement);
  mainElement.append(initialQuoteElement);

  // Refresh Button
  const refreshButtonElement = RefreshButton(mainElement);

  generateRandomQuote(refreshButtonElement, initialQuoteElement);
};

App();
