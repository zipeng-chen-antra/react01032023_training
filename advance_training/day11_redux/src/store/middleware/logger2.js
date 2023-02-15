const logger2 = (store) => (next) => (action) => {
    console.log("logger 2");
    let result = next(action);
    return result;
  };
  
  export default logger2;




  
  
  