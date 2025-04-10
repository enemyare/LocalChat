import {autorun, makeAutoObservable} from "mobx";
import Room from "./Room.ts";

export type RoomList = Room []

class RoomStore {
  public roomList: RoomList = []
  public lastRoomId: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  public addRoom = () => {
    const maxId = this.roomList.length > 0
      ? Math.max(...this.roomList.map(room => room.room_id))
      : 0
    const room: Room = new Room(maxId + 1)
    this.roomList.push(room)
  }

  public deleteRoom = (id: number) => {
    this.roomList = [...this.roomList.filter((item) => item.room_id !== id)]
  }
}

export const roomStore = new RoomStore()

autorun(() => {
  console.log(roomStore.roomList)
})