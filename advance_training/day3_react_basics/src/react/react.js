const React = {
    createElement: (type,props,...children)=>{
        // console.log(type,props,children);
        return {
            type,
            key: null,
            props: {
                ...props,
                children: children.length === 1 ? children[0] : children
            },
            ref: null,

        }
    }
}
export default React;