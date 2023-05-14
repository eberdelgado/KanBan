import Background from "../../Components/Background"
import { StageContextProvider } from "../../Context/StageContext"

const Home = () => {
  return (
    <>
      <StageContextProvider>
        <Background/>
      </StageContextProvider>
    </>
  )
}

export default Home