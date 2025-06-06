import { useState } from 'react'

const Header = ({text}) => {
  return(
    <h1>
      {text}
    </h1>
  )
}
const RandButton = ({min, max, setSelected}) => {
  return(
    <button onClick={() => setSelected(Math.floor(Math.random() * (max - min + 1)) + min)}>
      next anecdote
    </button>
  )
}

const VoteButton = ({vote}) => {
  return(
    <button onClick={vote}>
      vote
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Header text="Anectode of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <p><VoteButton vote={vote}/> <RandButton min={0} max={anecdotes.length - 1} setSelected={setSelected}/></p>
      <Header text="Anectode with the most votes" />
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App