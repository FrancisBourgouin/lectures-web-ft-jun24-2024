import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [message, setMessage] = useState("Hello!")
  const [hack, setHack] = useState(false)


  const [userInfo, setUserInfo] = useState({name:"Pequeno Polo", age:66})

  const toggleMessage = () => setMessage(message === "Hello!" ? "Bye!" : "Hello!")

  const setTheSameMessage = () => setMessage("SAME!") // If the same message is already in state, will not cause a rerender

  console.log("RERENDERED!")


  const ageTheChicken = () => {
    const updatedUserInfo = {...userInfo}
    updatedUserInfo.age++

    setUserInfo(updatedUserInfo)

    // IMMUTABILITY

  }

  // toggleMessage()

  // let someMessageAgain = "Hello again!"

  // const anotherToggle = () => {
  //   someMessageAgain = someMessageAgain === "Something else" ? "Hello again!" : "Something else"
  //   console.log(someMessageAgain)
  //   setHack(!hack)
  // }
  return (
    <>
      <header>
        <h1 onClick={setTheSameMessage}>Super review!</h1>
        <h2 onClick={toggleMessage}>{message}</h2>
        {/* <h2 onClick={anotherToggle}>{someMessageAgain}</h2> */}
      </header>
      <main>
        <ul>
          <li>Props: Short properties, are given to a component and are available inside the function</li>
          <li>State!: Value that will trigger a change in the react tree</li>
        </ul>
        <article>
          <h1>{userInfo.name}</h1>
          <h1>{userInfo.age}</h1>
          <button onClick={ageTheChicken}>MAKE THE CHICKEN OLDER!</button>
        </article>
      </main>
    </>
  )
}

export default App
