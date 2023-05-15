import Background from "../../Components/Background"
import { StageContextProvider } from "../../Context/StageContext"
import DraggableComponent from "../../Components/Drag"

const Home = () => {
  return (
    <>
      <StageContextProvider>
        {/* <DraggableComponent/>*/}
        <Background/>
      </StageContextProvider>
    </>
  )
}

export default Home