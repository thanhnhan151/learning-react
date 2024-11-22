import { UserDetails } from "./components/UserDetails"

export default function App() {

  const mockUsers = [
    {
      id: 1,
      username: "daigo",
      email: "nhan@mail.com"
    },
    {
      id: 2,
      username: "hikaru",
      email: "hikaru@mail.com"
    },
    {
      id: 3,
      username: "hikaru",
      email: "hikaru@mail.com"
    },
    {
      id: 4,
      username: "hikaru",
      email: "hikaru@mail.com"
    }
  ]

  return (
    <div>
      {mockUsers.map((user) => {
        return <UserDetails key={user.id} user={user} />
      })}
    </div>
  )
}

