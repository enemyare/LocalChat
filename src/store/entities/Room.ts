import Message from "./Message.ts";
import User from "./User.ts";

export type IRoom = {
  room_id: number,
  users: User[],
  room_history: Message[]
}

class Room implements IRoom{
  public room_id
  public users: User[]  = []
  public room_history: Message[]  = []

  constructor(room_id: number) {
    this.room_id = room_id
  }

  addMessage = (msg: Message) => {
    this.room_history.push(msg)
  }
}

export default Room