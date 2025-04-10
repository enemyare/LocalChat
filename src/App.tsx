import './App.css'
import {observer} from "mobx-react-lite";
import {roomStore} from "./store/RoomStore.ts";

const App = observer(() => {
  const {addRoom, deleteRoom, roomList} = roomStore;


  return (
    <div className="App">
      <ul>
        {
          roomList.map((room) => (
            <li key={room.room_id}>
              {room.room_id}
              <button onClick={() => deleteRoom(room.room_id)}>удалить</button>
            </li>
          ))
        }
      </ul>
      <button onClick={addRoom}>Add Room

      </button>
    </div>
  )
})

export default App