class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedByDefault: this.props.initial_value,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ isCheckedByDefault: event.target.checked });
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.onChange}
          checked={this.state.isCheckedByDefault}
        />
        <label>{this.props.text}</label>
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <div>
      <Checkbox initial_value={false} text="I read the term of the app" />
      <Checkbox initial_value={false} text="I accept the term of the app" />
      <Checkbox
        initial_value={true}
        text="I want to get the weekly news letter"
      />
      <Checkbox initial_value={true} text="I want to get sales and offers" />
    </div>,
    document.getElementById("root")
  );
}

render();
