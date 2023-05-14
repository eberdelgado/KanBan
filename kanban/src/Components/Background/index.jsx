import { useStageContext } from "../../Hook/useStageContext"
import {Blackboard} from "./style"
import Stage from "../Stage"

const Background = () => {
  const {stage}= useStageContext()
  return (
    <Blackboard>
      {stage && stage.map((s)=>{
        return(
          <Stage key={s.id} id={s.id}/>
        )
      })}
    </Blackboard>
  )
}

export default Background