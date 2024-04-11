import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../GlobalContext.jsx"

export default function Login() {
  const navigate = useNavigate()
  const { setUser } = useContext(GlobalContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function login(e) {
    e.preventDefault()

    const response = await fetch("/api/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    const result = await response.json()

    if (response.status == 201) {
      setUser(result)
      navigate("/")
    } else if (response.status == 404) {
      alert(result.message)
    } else if (response.status == 409) {
      alert(result.message)
    }

  }

  return <>
    <form onSubmit={login} id="loginForm">
      <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} required />
      <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required />
      <button>Logga in</button>
    </form>
  </>
}
