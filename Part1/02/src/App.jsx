import { useState } from 'react'

const Stats = ({vars}) => {
  return(
    <div>
      <p>good {vars[0]}</p>
      <p>neutral {vars[1]}</p>
      <p>bad {vars[2]}</p>
      <p>all {vars[3]}</p>
      <p>average {(vars[0] + vars[2]) / vars[3]}</p>
      <p>positive {(vars[0] / vars [3]) * 100}%</p>
    </div>
  )
}
const Header = ({text}) => {
  return(
    <h1>
      {text}
    </h1>
  )
}

const FeedbackButton = ({variable, text}) => {
  return(
    <button onClick={variable}>
      {text}
    </button>
  )
}

const FeedbackButtons = ({vars}) => {
  return(
    <div>
      <FeedbackButton variable={vars[0]} text="good"/>
      <FeedbackButton variable={vars[1]} text="neutral"/>
      <FeedbackButton variable={vars[2]} text="bad"/>
    </div>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [votes, setVotes] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <FeedbackButtons vars={[() => {setGood(good + 1), setVotes(votes + 1)}, () => {setNeutral(neutral + 1), setVotes(votes + 1)}, () => {setBad(bad + 1), setVotes(votes + 1)}]} />
      <Header text="statistics"/>
      <Stats vars={[good, neutral, bad, votes]}/>
    </div>
  )
}

export default App