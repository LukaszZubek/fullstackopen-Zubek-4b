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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header text={course}/>
      <Content parts={[part1.name, part2.name, part3.name]} values={[part1.exercises, part2.exercises, part3.exercises]}/>
      <Total text="Number of excercises" sum={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App