import {makeAutoObservable} from "mobx";
import User from "./User.ts";

export type UserList = User[]

class UserStore{
  public userList: UserList = []

  constructor() {
    makeAutoObservable(this)
  }



}

export default UserStore

