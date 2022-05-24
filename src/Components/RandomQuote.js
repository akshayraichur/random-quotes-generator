import  Elements from './CreateDOM';
import getQuote  from "./GetQuote";
import RemoveDOMElement from "../Utils/RemoveElement";
import AppendDOMElement from "../Utils/AppendDomElement";
import UpdateInnerContent from "../Utils/UpdateInnerContent";
import { DOM } from "../Constants/DOM";

const generateRandomQuote =  (btnElement, quoteContainer) => {

  btnElement.addEventListener("click", async function () {
    try{
      const mainContentElement = quoteContainer.querySelector(DOM.H1);
      const authorElement = quoteContainer.querySelector(DOM.H4);
  
      UpdateInnerContent(mainContentElement," ");
      UpdateInnerContent(authorElement," ");
  
      const response = await getQuote();
      UpdateInnerContent(mainContentElement,response.data.content);
      UpdateInnerContent(authorElement,response.data.author);
      
      RemoveDOMElement(Elements.loadingDiv);
    }
    catch(err){
      console.log(err)
    }
   

   });
};

export default generateRandomQuote;
