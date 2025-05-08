const Header = (args) => {
  return(
    <h1>
      {args.text}
    </h1>
  )
}

const Content = (args) => {
  return(
    <div>
      <Part text={args.parts[0]} val={args.values[0]}/>
      <Part text={args.parts[1]} val={args.values[1]}/>
      <Part text={args.parts[2]} val={args.values[2]}/>
    </div>
  )
}

const Part = (args) => {
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
      <Content parts={[part1, part2, part3]} values={[exercises1, exercises2, exercises3]}/>
      <Total text="Number of excercises" sum={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App