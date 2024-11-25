import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [counter, setCounter] = useState(3)

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "kevin",
      email: "kevin@mail.com"
    },
    {
      id: 2,
      username: "ben",
      email: "benn@mail.com"
    }
  ])

  return (
    <div>
      <form onSubmit={e => {
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
      {users.map((user) => <UserDetails key={user.id} user={user} setUsers={setUsers} />)}    
    </div>
  )
}

