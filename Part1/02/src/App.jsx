import { useState } from 'react'

const Stats = ({vars}) => {
  if(vars[3] > 0){
    return(
      <div>
        <StatsContent statName="good" value={vars[0]} />
        <StatsContent statName="neutral" value={vars[1]} />
        <StatsContent statName="bad" value={vars[2]} />
        <StatsContent statName="all" value={vars[3]} />
        <StatsContent statName="average" value={(vars[0] + vars[2]) / vars[3]} />
        <StatsContent statName="positive" value={((vars[0] / vars [3]) * 100) + "%"} />
      </div>
    )
  }
  else return(<div>No feedback given</div>)
}

const StatsContent = ({statName, value}) => {
  return(
    <p>{statName} {value}</p>
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