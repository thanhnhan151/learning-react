import { UserProfile } from "./components/UserProfile";

export default function App() {

  const callMe = () => {
    console.log("hello")
  }

  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile 
      username="Bob"
      age={20} 
      isLoggedIn={false} 
      favoriteFoods={[
        {
          id: "sushi",
          name: "Sushi"
        },
        {
          id: "pizza",
          name: "Pizza"
        }
      ]} 
      callMe={callMe}
      />
    </div>
  )
}

