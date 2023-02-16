import { useEffect } from "react";

export default function useLog(component){
    useEffect(()=>{
        console.log(component,"rerendered");
    })
}