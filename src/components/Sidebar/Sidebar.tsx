import {FC} from "react";
import {roomStore} from "../../store/RoomStore.ts";
import {observer} from "mobx-react-lite";
import './Sidebar.css'


const Sidebar: FC = observer(() => {
  const {roomList, deleteRoom, addRoom} = roomStore

  return (
    <>
      <div className="sidebar-container">
        <ul className={"sidebar-list"}>
          {
            roomList.map((room) => (
              <li key={room.room_id} className={"sidebar-item"}>
                {room.room_id}
                <button onClick={() => deleteRoom(room.room_id)}>удалить</button>
              </li>
            ))
          }
          <button onClick={addRoom}>Add Room</button>
        </ul>
      </div>
    </>
  )
})

export default Sidebar