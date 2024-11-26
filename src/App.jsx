import { useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {
  const [userData, setUserData] = useState({
    id: 1,
    username: "kevin",
    email: "kevin@gmail.com",
    displayName: "kevinGG"
  })
  
  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </>
  )
}

