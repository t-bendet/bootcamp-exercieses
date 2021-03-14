import logo from "./logo.svg";
import "./App.css";
const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "i Love React";
function App() {
  return (
    <div>
      <div>{`1)${data[0]} ${" "} ${data[1]}`}</div>
      <div>{`2)const ${number1} + ${number2} = ${number1 + number2}`}</div>
      <div>{`3)the string's length is ${string.length}`}</div>
    </div>
  );
}

export default App;
