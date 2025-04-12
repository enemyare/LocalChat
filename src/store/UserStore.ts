import {autorun, makeAutoObservable} from "mobx";
import User from "./entities/User.ts";
import {generateId} from "../utils/generateId.ts";

export type UserList = User[]

class UserStore{
  public userList: UserList = []

  constructor() {
    makeAutoObservable(this)
  }

  initUser = (username: string) => {
    const id = generateId(this.userList, 'user_id')
    const session = crypto.randomUUID()
    const user = new User(id, username, session)
    this.userList.push(user)
  }
}

export const userStore = new UserStore()

autorun(()=>{
  console.log(userStore.userList)
})