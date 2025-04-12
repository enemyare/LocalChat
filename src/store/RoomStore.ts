import {autorun, makeAutoObservable} from "mobx";
import Room from "./entities/Room.ts";
import {generateId} from "../utils/generateId.ts";

export type RoomList = Room []

class RoomStore {
  public roomList: RoomList = []

  constructor() {
    makeAutoObservable(this)
  }

  public addRoom = () => {
    const id = generateId(this.roomList, "room_id")
    const room: Room = new Room(id)
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