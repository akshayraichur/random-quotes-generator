const createHTMLElement = (type, classname) => {
    const elm = document.createElement(type);
    if(classname){
        elm.classList.add(classname);
    }
    return elm;
}

export default createHTMLElement;
