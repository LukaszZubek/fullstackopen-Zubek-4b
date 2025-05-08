const Header = (args) => {
  return(
    <h1>
      {args.text}
    </h1>
  )
}

const Content = (args) => {
  return(
    <p>
      {args.text} {args.val}
    </p>
  )
}

const Total = (args) => {
  return(
    <p>
      {args.text} {args.sum}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header text={course}/>
      <Content text={part1} val={exercises1}/>
      <Content text={part2} val={exercises2}/>
      <Content text={part3} val={exercises3}/>
      <Total text="Number of excercises" sum={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App