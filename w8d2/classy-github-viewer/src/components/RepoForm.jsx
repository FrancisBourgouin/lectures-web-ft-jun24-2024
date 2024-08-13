import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { owner: "", repo: "" };
    // this.setState()

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange = function (event) {
  handleChange = (event) => {
    const { name, value } = event.target;

    const newState = { ...this.state };
    newState[name] = value;

    this.setState(newState);
  };

  // handleSubmit = function (event) {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };


  componentDidMount(){
    console.log("Component is loaded and ready to go!")
  }

  componentWillUnmount(){
    console.log("bye bye!")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="Enter the owner"
          onChange={this.handleChange}
          value={this.state.owner}
        />
        <input
          type="text"
          name="repo"
          placeholder="Enter the repo"
          onChange={this.handleChange}
          value={this.state.repo}
        />
        <button>Fetch commits</button>
      </form>
    );
  }
}
