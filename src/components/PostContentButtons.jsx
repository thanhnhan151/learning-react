import { useContext } from "react"
import { UserContext } from "../utils/contexts/UserContext"

export function PostContentButtons() {
  const { id, setUserData } = useContext(UserContext)
  
  return (
    <div>
      <div>
        <span>PostContentButtons</span>
      </div>
      {id}
      <br />
      <button onClick={() => {
        setUserData((currentState) => ({ ...currentState, 
          displayName: "Updated Displayname" 
        }))
      }}>Click Me</button>
    </div>
  )
}