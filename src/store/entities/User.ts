
export interface IUser {
  user_id: number,
  username: string,
  session: string
}

class User implements IUser {
  public user_id
  public username
  public session

  constructor(user_id: number, username: string, session: string) {
    this.user_id = user_id
    this.username = username
    this.session = session
  }

}

export default User