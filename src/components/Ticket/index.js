import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { moveTicket } from "../../actions";


const styles = {
  ticket: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    minHeight: "7em",
    padding: "0.5em",
    margin: "0.5em",
    fontWeight: "normal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    button: {
      border: "1px solid #ccc",
      padding: "5px 15px",
      hidden: {
        display: "none"
      }
    }
  }
};

class Ticket extends Component {
  static propTypes = {
    desc: PropTypes.string.isRequired,
  };
  
  componentDidMount = (e) => {
    const self = this;
    const { status } = self.props;
    
    if (status === 'done') {
      this.isTimeOut = setTimeout(() => {
        self.moveTicketHandler(e, "close");
      }, 5000);
    }
  }
  
  componentWillUnmount = () => {
    this.clearTimeout();
  }

  clearTimeout = () => {
    if (this.isTimeOut) {
      clearTimeout(this.isTimeOut);
    }
  };
  
  moveTicketHandler = (e, status) => {
    if (e) {
      e.stopPropagation();
    }

    const { id, moveTicketStatus } = this.props;
    moveTicketStatus(id, status);
  };

  render() {
    const { id, desc, status, detailHandler } = this.props;

    return (
      <div style={styles.ticket} onClick={(e) => detailHandler(e, id)}>
        {/* Ticket description */}
        <span>{id}</span>
        <span>{desc}</span>
        {/* Ticket actions [Done/Not Fix/Close]. Modify to display them properly */}
        <div>
          <button
            style={
              status === "done" || status === "close"
                ? styles.ticket.button.hidden
                : styles.ticket.button
            }
            onClick={(e) => this.moveTicketHandler(e, "done")}
          >
            Done
          </button>
          <button
            style={
              status === "todo" || status === "close"
                ? styles.ticket.button.hidden
                : styles.ticket.button
            }
            onClick={(e) => this.moveTicketHandler(e, "todo")}
          >
            Not Fix
          </button>
          <button
            style={
              status === "close"
                ? styles.ticket.button.hidden
                : styles.ticket.button
            }
            onClick={(e) => this.moveTicketHandler(e, "close")}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  moveTicketStatus: (id, status) => dispatch(moveTicket(id, status))
})

export default connect(null, mapDispatchToProps)(Ticket);
