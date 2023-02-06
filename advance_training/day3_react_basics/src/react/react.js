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

const rerender = (element, rootParent) => {
    rootParent.innerHTML = "";
    const update = (element, parentElem) => {
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
                  update(children, domElem);
              } else if (children instanceof Array) {
                  // console.log(children);
                  children.forEach((child) => {
                      update(child, domElem);
                  });
              }
              parentElem.append(domElem);
          } else if(typeof type === "function" && !!type.prototype.render){
              const ClassComponent = type;
              const instance = new ClassComponent(props);
              console.log(instance);
              const instanceReactElem = instance.render();
              update(instanceReactElem,parentElem);
          } else if(typeof type === "function"){
    
              const FunctionComponent = type;
              const instanceReactElem = FunctionComponent(props);
              // const instanceReactElem = <div>function</div>;
    
              update(instanceReactElem,parentElem);
          }
        }
      };

    update(element,rootParent);
}


export class ReactElement {
    constructor(type,props,key,ref){
        this.type = type;
        this.props = props;
        this.key = key;
        this.ref = ref;
    }
}

class Component {
    constructor(props){
        this.props = props;
    }

    setState(newState){
        this.state = {
            ...this.state,
            ...newState
        };
        const newElem = this.render();
        // console.log(this.parentDom);
        rerender(newElem,this.parentDom)
    }

}

const React = {
    Component,
    createElement: (type,props,...children)=>{
        // console.log(type,props,children);
        return new ReactElement(type,{
            ...props,
            children: children.length === 1 ? children[0] : children
        },null,null);
        // return {
        //     type,
        //     key: null,
        //     props: {
        //         ...props,
        //         children: children.length === 1 ? children[0] : children
        //     },
        //     ref: null,

        // }
    }
}
export default React;