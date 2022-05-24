import  Elements from './CreateDOM';
import getQuote  from "./GetQuote";
import AppendDOMElement from '../Utils/AppendDomElement';
import UpdateInnerContent from '../Utils/UpdateInnerContent';

const InitialQuote = async () => {
  try{
    const response = await getQuote();
    
    UpdateInnerContent(Elements.mainContent,response.data.content);
    UpdateInnerContent(Elements.authorElement,response.data.author);
    AppendDOMElement(Elements.div, Elements.mainContent);
    AppendDOMElement(Elements.div, Elements.authorElement);

    return Elements.div;

  }
  catch(err){
    console.log(err)
  }
};

export default InitialQuote;
