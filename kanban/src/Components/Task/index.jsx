import {Container} from "./style"

const Task = (props) => {
  return (
    <Container 
        key={props.key}
        draggable 
        onDragStart={props.onDragStart}
        onDragEnd={props.onDragEnd}
        style={props.style}  
        id={props.id}>
        id: {props.id}
    </Container>
  )
}

export default Task