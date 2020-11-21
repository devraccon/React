import { useEffect, useState } from "react";
import rootStore from "../store";

function Counnter(){
    const [number , setNumber]  =  useState(0);
    
    function addNumber(e){
        setNumber(number + 1);
        console.log(number);
    }

    useEffect(()=>{
        console.log("Counnter render isLogin : " );
    });

    
    return(
        <div>
            <span>{number}</span>
            <button type="button" onClick={addNumber}>Add Number</button>
        </div>
    )
}

export default Counnter;