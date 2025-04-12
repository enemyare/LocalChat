import {FC} from "react";
import {observer} from "mobx-react-lite";
import {roomStore} from "../../store/RoomStore.ts";

const Chat: FC = observer(()=> {
  const {} = roomStore
  return (
    <>
      <div>
        <ul>
          {

          }
        </ul>
        <div>
          <input type="text" placeholder={"Введите сообщение"}/>
          <button>Отправить</button>
        </div>
      </div>
    </>
  )
})

export default Chat