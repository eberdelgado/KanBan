import { useContext } from "react";
import { StageContext } from "../Context/StageContext";

export const useStageContext = ()=>{
    const context =useContext(StageContext)
    if(!context)
    {
        console.error("Context nor found!!!!")
    }
    return context;


}


