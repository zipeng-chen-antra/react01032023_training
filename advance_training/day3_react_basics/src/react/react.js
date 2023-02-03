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