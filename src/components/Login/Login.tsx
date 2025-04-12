import {FC, useState} from "react";
import {userStore} from "../../store/UserStore.ts";
import {observer} from "mobx-react-lite";

const Login: FC = observer(() =>{
  const [username, setUsername] = useState<string>("")
  const {initUser} = userStore

 const loginSubmit =() => {
    if (username !== "") initUser(username)
    else throw new Error("Username не должен быть пустым")
 }

  return (
    <>
      <div className={""}>
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={loginSubmit}>
          Войти
        </button>
      </div>
    </>
  )
})

export default Login