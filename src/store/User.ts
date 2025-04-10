
export interface IUser {
  id: number | null,
  username: string,
  session: string
}

class User implements IUser {
  id = null
  username = ""
  session = ""

}

export default User