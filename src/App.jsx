import Display from "./components/Display"
import SideBar from "./components/SideBar"
import SignUp from "./components/SignUp"


function App() {

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar/>
        <Display/>
      </div>
      <SignUp/>
    </div>
  )
}

export default App
