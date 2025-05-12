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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header text={course.name}/>
      <Content parts={[course.parts[0].name, course.parts[1].name, course.parts[2].name]} values={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]}/>
      <Total text="Number of excercises" sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App