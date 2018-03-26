import React, { Component } from "react";
import { connect } from "react-redux";
import { addTicket } from "../../actions";

class AddTicket extends Component {
  state = {
    isCreating: false
  };

  createTicket = () => {
    const self = this;
    let description = this.refs.description.value;
    self.setState({ isCreating: true });
    if (description.trim().length) {
      setTimeout(function() {
        self.setState({ isCreating: false });
        self.props.addNewTicket(description)
      }, 1000) // Simulate this behavior using ES6 Promise, delay 1 or 2 seconds then add new ticket
    }

    this.refs.description.value = "";
  };

  handleEnterKeyPressed = e => {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      this.createTicket();
    }
  };
  
  render = () => {
    return (
      <div>
        <input
          type="text"
          style={{ borderRadius: "3px", padding: "5px 15px" }}
          ref="description"
          onKeyDown={this.handleEnterKeyPressed}
        />
        <button onClick={this.createTicket.bind(this)} >
          ADD {this.state.isCreating && '...'}
        </button>
      </div>
    )
  }
};


const mapDispatchToProps = dispatch => ({
  addNewTicket: name => dispatch(addTicket(name))
})

export default connect(null, mapDispatchToProps)(AddTicket);