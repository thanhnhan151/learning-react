import { useState, useEffect } from "react";
// import { UserDetails } from "./components/UserDetails";

export default function App() {
  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")
  const [counter, setCounter] = useState(0)
  const [sync, setSync] = useState(false)
  useEffect(() => {
    console.log("Rendering...")
    document.title = "React Tutorial " + counter
  }, [sync])
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: "kevin",
  //     email: "kevin@mail.com"
  //   },
  //   {
  //     id: 2,
  //     username: "ben",
  //     email: "benn@mail.com"
  //   }
  // ])

  return (
    <div>
      <div>You clicked the button {counter} times</div>
      <button onClick={() => {
        setCounter((count) => count + 1)
      }} >CLick Me</button>
      <button onClick={() => setSync((current) => !current)}></button>
      {/* <form onSubmit={e => {
        e.preventDefault()
        const newUser = {
          id: counter,
          username,
          email
        }
        setCounter((currentCounter) => currentCounter + 1)
        setUsers((currentUsersState) => [...currentUsersState, newUser])
      }}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
          name="username" 
          id="username" 
          value={username} 
          onChange={(e) => {
            setUsername(e.target.value)
          }}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          name="email" 
          id="email" 
          value={email} 
          onChange={(e) => {
            setEmail(e.target.value)
          }}/>
        </div>
        <button>Add User</button>
      </form>
      <br />
      {users.map((user) => <UserDetails key={user.id} user={user} setUsers={setUsers} />)} */}
    </div>
  )
}

