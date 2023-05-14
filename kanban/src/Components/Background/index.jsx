import { useStageContext } from "../../Hook/useStageContext"
import {Blackboard} from "./style"
import Stage from "../Stage"

const Background = () => {
  const {stage}= useStageContext()
  console.log(stage)
  return (
    <Blackboard>
      {stage && stage.map((s)=>{
        return(
          <Stage is={s.id}/>
        )
      })}
    </Blackboard>
  )
}

export default Background