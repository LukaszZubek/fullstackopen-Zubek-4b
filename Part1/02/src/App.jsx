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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header text={course}/>
      <Content parts={[parts[0].name, parts[1].name, parts[2].name]} values={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}/>
      <Total text="Number of excercises" sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App