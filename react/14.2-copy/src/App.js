import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  copyMe = (e) => {
    e.preventDefault();
    let copyText = this.textInput.current;
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.copyMe}>
          <label>what is the meaning of life</label>
          <textarea ref={this.textInput}></textarea>
          <button type="submit">copy</button>
        </form>
      </div>
    );
  }
}
export default App;
