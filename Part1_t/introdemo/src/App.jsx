import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
    console.log("+1")
  }

  const handleReset = () => {
    setCounter(0)
    console.log("reset")
  }

  return (
    <center>
      <div>
        {counter}
        <p><button onClick={handleClick}>PLUS 1</button></p>
        <p><button onClick={handleReset}>RESET</button></p>
      </div>
    </center>
  )
}

export default App