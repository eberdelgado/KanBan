import { useStageContext } from "../../Hook/useStageContext"
import Task from "../Task";
import {Container, Title, TaskList} from "./style"

const Stage = (props) => {
  const {stage: stageList} = useStageContext();
  const stage= stageList.filter((s)=>s.id===props.id)[0]  ;
  
  const drag=(e)=>{
    e.preventDefault();
    //console.log(e);
  }

  const onDragEnter=(e)=>{
    e.preventDefault();
    console.log(e)
  }

  const drop = (e) =>{
    e.preventDefault();
  }
  return (
    <Container>
        <Title> {stage.title}</Title>
        <TaskList 
            onDragEnter={e=> onDragEnter(e)} 
            onDragOver={(e)=> e.preventDefault()} 
            onDrop={drop}>
                {stage.tasks && (
                    stage.tasks.map((t)=>(
                        <Task draggable onDragStart={(e)=> drag(e)} key={t.id} id={t.id}/>
                    ))
                )}
        </TaskList>

    </Container>
  )
}

export default Stage