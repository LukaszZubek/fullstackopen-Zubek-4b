const Hello = () => {
  console.log("hello world");
}

const Cprint = (tekst) => {
  console.log(tekst.toString())
}

const Print = (tekst) => {
  return(
    <div>
      <p>{tekst.name}</p>
    </div>
  )
}

const App = () => {
  console.log("dziala")
  const now = Date.now();
  const a = 2, b = 4;
  console.log("dzisiaj jest " + now.toString());
  console.log(a + " + " + b + " = " + a+b);
  Cprint("joł joł joł");
  return(
    <div>
      <p>Hello World</p>
      <p>Dzisiaj jest {new Date(now).getDate().toString()}.{(new Date(now).getMonth() + 1).toString()}.{new Date(now).getFullYear().toString()}</p>
      <input id="tetetekst"></input>
      <button id="tetetekst_btn">SEND</button>
      <p>{a} + {b} = {a+b}</p>
      <Hello/>
      <Print name="yo yo yo"/>
    </div>
  )
}

export default App