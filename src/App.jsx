import { useEffect, useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import { useFetchUser } from "./utils/hooks/useFetchUser";

export default function App() {
  const { user, loading, error } = useFetchUser(1)

  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (!loading && !error && user) setUserData(user)
  }, [loading, error, user])
  
  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>
          {loading ? "Loading..." : <PostContainer />}
        </div>
      </UserContext.Provider>
    </>
  )
}

