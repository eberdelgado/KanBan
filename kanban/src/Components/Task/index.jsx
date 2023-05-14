import {Container} from "./style"

const Task = (props) => {
  return (
    <Container draggable="true" id={props.id} onDragStart={props.onDragStart}>
        aqui
    </Container>
  )
}

export default Task