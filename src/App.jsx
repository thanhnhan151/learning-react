import { useState, useEffect } from "react";
// import { UserDetails } from "./components/UserDetails";

export default function App() {
  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")
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

  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: ""
  })

  console.log(blogPostData)

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (blogPostData.title && blogPostData.body) {
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
              userId: 1,
              title: blogPostData.title,
              body: blogPostData.body
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then((response) => response.json()).then((data) => {
            console.log("Success!")
            console.log(data)
          })
          .catch((error) => console.log(error));
        }
      }}>
        <div>
          <label htmlFor="title">Title</label>
          <input 
          type="text" 
          id="title" 
          value={blogPostData.title} 
          onChange={(e) => {
            setBlogPostData ((currentBlogPostData) => ({ 
            ...currentBlogPostData,
            title: e.target.value
           }))
          }} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input 
          type="text" 
          id="body" 
          value={blogPostData.body} 
          onChange={(e) => {
            setBlogPostData((currentBlogPostData) => ({ 
            ...currentBlogPostData,
            body: e.target.value
            }))
          }} />
        </div>
        <button>Create post</button>
      </form>
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

