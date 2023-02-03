import { ReactElement } from "./react";

const ReactDOM = {
  createRoot: (rootHTMLElement) => {
    const setAttributesBasedOnProps = (props, elem) => {
      for (const [key, value] of Object.entries(props)) {
        if (key === "className") {
          elem.setAttribute("class", value);
        } else if (key.substring(0, 2) === "on") {
          elem.addEventListener(key.substring(2).toLowerCase(), value);
        } else if (key === "style") {
          for (const [styleName, styleValue] of Object.entries(value)) {
            elem.style[styleName] = styleValue;
          }
        } else {
          elem.setAttribute(key, value);
        }
      }
    };

    const renderElement = (element, parentElem) => {
      if (typeof element === "string" || typeof element === "number") {
        const textNode = document.createTextNode(element);
        parentElem.append(textNode);
      }

      if (element instanceof ReactElement) {
        const { type, props } = element;
        if(typeof type === "string"){
            const { children, ...restProps } = props;
            const domElem = document.createElement(type);
            setAttributesBasedOnProps(restProps, domElem);
            
            if (typeof children === "string" || typeof children === "number") {
                domElem.textContent = children;
            } else if (children instanceof ReactElement) {
                renderElement(children, domElem);
            } else if (children instanceof Array) {
                console.log(children);
                children.forEach((child) => {
                    renderElement(child, domElem);
                });
            }
            parentElem.append(domElem);
        } else if(typeof type === "function" && !!type.prototype.render){
            const ClassComponent = type;
            const instance = new ClassComponent();
            const instanceReactElem = instance.render();
            renderElement(instanceReactElem,parentElem);
        } else if(typeof type === "function"){
            const FunctionComponent = type;
            const instanceReactElem = FunctionComponent();
            renderElement(instanceReactElem,parentElem);
        }
      }
    };

    const render = (reactElem) => {
      renderElement(reactElem, rootHTMLElement);
    };

    return {
      render,
    };
  },
};

export default ReactDOM;
