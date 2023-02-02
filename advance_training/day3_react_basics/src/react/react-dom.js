const ReactDOM = {
    createRoot: (rootHTMLElement)=>{
        return {
            render: (reactElem)=>{
                const elem = document.createElement("div");
                elem.textContent = "placeholder";
                rootHTMLElement.append(elem);
            }
        }
    }
}


export default ReactDOM;