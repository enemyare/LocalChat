import Message from "./Message.ts";
import User from "./User.ts";

export interface IRoom{
  room_id: number,
  users: User[]
  room_history: Message[]
}

class Room implements IRoom{
  public room_id
  public users = []
  public room_history = []

  constructor(room_id: number) {
    this.room_id = room_id
  }
}

export default Room