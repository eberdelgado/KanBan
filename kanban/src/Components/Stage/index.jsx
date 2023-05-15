import { useStageContext } from "../../Hook/useStageContext"
import Task from "../Task";
import {Container, Title, TaskList} from "./style"
import {useState,useRef} from "react"


const Stage = (props) => {
  const {stage: stageList, setStage: setStageList} = useStageContext();
  const stage= stageList.filter((s)=>s.id===props.id)[0]  ;
  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const drag=(e)=>{
    e.preventDefault();
    e.dataTransfer.effectAlloewd = "move";
    e.dataTransfer.setData("text/plain", "test");
    //console.log(e);
  }

  const onDragEnter=(e)=>{
    e.preventDefault();
    //console.log(e)
  }

  const drop = (e) =>{
    e.preventDefault();
    const Ids = e.dataTransfer.getData("text/plain").split(",");
  
    const newStageList=[...stageList];
    const prevStage=newStageList.filter((s)=>s.id===parseInt(Ids[1]))[0]
    const newStage=newStageList.filter((s)=>s.id===props.id)[0] ;
    prevStage.tasks=prevStage.tasks.filter((t)=>t.id!==parseInt(Ids[0]))
    newStage.tasks=[...newStage.tasks,{id:parseInt(Ids[0])}]
    /*setStageList({...stage,
      tasks:[...stage.tasks]})
    */
   setStageList(newStageList)
   console.log(prevStage)
   // console.log(" task ID:", taskId);
  }

  const handleDragStart = (event) => {
    setIsDragging(true);
    // Configura o estilo de arraste (opcional)
   // event.dataTransfer.effectAllowed = 'move';
    // Define os dados a serem transferidos durante o arraste
    event.dataTransfer.setData('text/plain', [event.target.id,props.id]);
    //console.log(event.target.id)
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <Container>
        <Title> {stage.title}</Title>
        <TaskList 
            onDragEnter={onDragEnter} 
            onDragOver={(e)=> e.preventDefault()} 
            onDrop={drop}>
                {stage.tasks && (
                    stage.tasks.map((t)=>(
                  
                    (
                    <Task 
                      key={t.id}
                      draggable 
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      style={{
                        cursor: 'move',
                      }}  id={t.id}>
                     id: {t.id}
                    </Task>
                    )
                    ))
                )}
        </TaskList>

    </Container>
  )
}

export default Stage

/*<Task draggable="true" onDragStart={drag} key={t.id} id={t.id}/>*/