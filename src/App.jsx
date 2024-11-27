import { useEffect, useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import { useFetchUser } from "./utils/hooks/useFetchUser";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function App() {
  const { user, loading, error } = useFetchUser(1);

  const [userData, setUserData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !error && user) {
      setUserData(user);
    }
  }, [loading, error, user]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/blog-posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div>
        <label htmlFor="data">Enter Data</label>
        <input
          type="text"
          id="data"
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value.length > 10) {
              navigate("/blog-posts", {
                state: {
                  posts: [
                    {
                      id: 1,
                      title: "Hello world",
                      content: "Welcome to my web page",
                    },
                  ],
                },
              });
            }
          }}
        />
      </div>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>{loading ? "Loading..." : <PostContainer />}</div>
      </UserContext.Provider>
      <Outlet />
    </>
  );
}
