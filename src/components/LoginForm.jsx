import { useEffect } from "react"
import { useDocumentClick } from "../utils/hooks/useDocumentClick"

useEffect

export function LoginForm() {

  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log("Window/ViewPost Resized!")
    }
    window.addEventListener("resize", resizeEventHandler)

    return () => {
      console.log("Unmounting LoginForm")
      console.log("Remove Resize Event Listener")
      window.removeEventListener("resize", resizeEventHandler)
    }
  }, [])

  useDocumentClick()

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      const username = formData.get("username")
      const password = formData.get("password")
      fetch("http://localhost:30001/api/login", {
        body: {
          username,
          password
        },
        method: "POST"
      })
    }}>
      <label htmlFor="username">Username</label>
      <br />
      <input 
        id="username" 
        onChange={(e) => {
          console.log(`Username: ${e.target.value}`)
        }} 
        name="username"
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input id="password" type="password" onChange={(e) => {
        console.log(`Password: ${e.target.value}`)
      }} 
      name="password"
      />
      <br />
      <button>Login</button>
    </form>
  )
}