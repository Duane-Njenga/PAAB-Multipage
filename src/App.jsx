import Description from "./components /Description"
import Footer from "./components /Footer"
import Intro from "./components /Introduction"
import Navbar from "./components /Navbar"
import WhyUS from "./components /WhyUs"
import Assets from "./components /AssetClasses"

function App() {

  return (
    <>
    <Navbar/>
    <Intro />
    <WhyUS/>
    <Description/>
    <Assets />
    <Footer/>
    </>
  )
}

export default App
