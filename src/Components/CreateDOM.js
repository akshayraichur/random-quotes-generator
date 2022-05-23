import getHTMLElement from "../Utils/CreateDOMElement";
import { DOM, CLASSNAMES }  from "../Constants/DOM";
import BUTTON from "../Constants/Button"

const Elements = {
    loadingDiv : getHTMLElement(DOM.DIV,CLASSNAMES.DUAL_RING),
    div : getHTMLElement(DOM.DIV,CLASSNAMES.QUOTE_SECTION),
    mainContent : getHTMLElement(DOM.H1,CLASSNAMES.SECTION__CONTENT),
    authorElement : getHTMLElement(DOM.H4,CLASSNAMES.SECTION__AUTHO),
    btn:  getHTMLElement(BUTTON.DOM.BUTTON, BUTTON.CLASSENAMES.BTN),
    container: getHTMLElement(BUTTON.DOM.DIV, BUTTON.CLASSENAMES.BTN_CONTAINER)
}

export default Elements;
