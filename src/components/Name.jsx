import React, { Component } from "react";
import { connect } from "react-redux";
import { setName } from "../redux/actions";

class UpdateName extends Component {
  state = {
    textInput: "",
  };
  handleChange = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setName(this.state.textInput);
  };
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} placeholder="newname" />
        <button type="submit"> change name </button>
      </form>
    );
  }
}

export default connect(null, { setName })(UpdateName);
