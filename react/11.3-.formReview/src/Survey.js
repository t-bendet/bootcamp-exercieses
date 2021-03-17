import React from "react";
import "./Survey.css";
class Survey extends React.Component {
  state = { first: "", last: "", select: "", text: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div className="box">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>first name : </label>
            <input
              type="text"
              value={this.state.first}
              onChange={(e) => this.setState({ first: e.target.value })}
            />
          </div>
          <div className="field">
            <label>last name : </label>
            <input
              type="text"
              value={this.state.last}
              onChange={(e) => this.setState({ last: e.target.value })}
            />
          </div>
          <div className="field">
            <label>age : </label>
            <select
              value={this.state.select}
              onChange={(e) => this.setState({ select: e.target.value })}
            >
              <option>0-15</option>
              <option>15-24</option>
              <option>24-35</option>
              <option>40-100</option>
            </select>
          </div>
          <div className="field">
            <label>free text :</label>
            <textarea
              rows="4"
              cols="30"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            ></textarea>
          </div>
          <button type="submit">continue</button>
        </form>
      </div>
    );
  }
}

export default Survey;
