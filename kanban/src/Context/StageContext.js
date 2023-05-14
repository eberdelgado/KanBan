import { createContext, useState } from "react";

export const StageContext = createContext();

export const StageContextProvider = ({children}) =>{
    const [stage,setStage] = useState(stageEntity);
    return (
        <StageContext.Provider value={{ stage, setStage }}>
          {children}
        </StageContext.Provider>
      );
}

const stageEntity = [{
    id:1,
    title : "Fazer",
    tasks : [{id:1},{id:2},{id:3},{id:4}]
},
{
    id:2,
    title : "Fazendo",
    tasks : [{id:5},{id:6},{id:7},{id:8}]
 },{
    id:3,
    title : "Feito",
    tasks : [{id:9},{id:10},{id:11},{id:12}]
 }]