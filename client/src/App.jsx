import { useEffect } from "react"

export default function App() {

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("/api/users")
      const result = await response.json()
      console.log(result)
    }

    loadUsers()
  })

  return <>
    <h1>React startsida!</h1>
  </>
}
