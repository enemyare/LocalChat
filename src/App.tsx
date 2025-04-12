import './App.css'
import {observer} from "mobx-react-lite";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Chat from "./components/Chat/Chat.tsx";

const App = observer(() => {

  return (
    <>
      <div className="App">
        <Sidebar/>
        <Chat/>
      </div>
    </>

  )
})

export default App