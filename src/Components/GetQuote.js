import fetchData from "../Utils/API";
import { URL } from "../Constants/Urls";

const getQuote = async () => {
    return fetchData(URL, "get").catch((err) => console.log(err));
  };
  
export default getQuote;