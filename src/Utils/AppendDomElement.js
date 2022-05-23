const AppendDOMElement = (parent, child) => {
    console.log(child)
    if(parent && child){
        parent.append(child);
    } 
}

export default AppendDOMElement;
