import React, { Component } from "react";
import { connect } from "react-redux";
import Ticket from "../Ticket";
import AddTicketForm from "../Ticket/add.js";

const styles = {
  container: {
    display: "flex"
  },
  input: {
    padding: "5px 15px"
  },
  button: {
    cursor: "pointer",
    border: "1px solid #ccc",
    padding: "5px 15px",

    disabled: {
      border: "1px solid #ccc",
      padding: "5px 15px",
      cursor: "not-allowed",
      pointerEvents: "none",
      color: "#ccc",
      backgroundColor: "#fff"
    }
  },
  list: {
    textAlign: "left",
    listStyle: "none",
    padding: 0
  },
  box: {
    flex: "0 1 33%",
    textAlign: "center",
    borderRight: "1px solid #ccc",
    label: {
      fontWeight: 600
    }
  }
};

class App extends Component {
  countStatus = status => {
    return this.state.tickets.filter(item => item.status === status).length;
  };

  ticketDetails = (e, id) => {
    e.preventDefault();

    this.props.history.push(`/ticket/${id}`);
  };
  
  display_tickets = arr => (
    <ul style={styles.list}>
      {arr.map(item => (
        <li key={item.id}>
          <Ticket {...item} detailHandler={this.ticketDetails} />
        </li>
      ))}
    </ul>
  );

  render() {
    const { tickets } = this.props;
    return (
      <div>
        <AddTicketForm />
        <hr />
        <div style={styles.container}>
          <div style={styles.box}>
            <label style={styles.box.label}>
              IN-PROGRESS <span></span>
            </label>
            {/** show Todo tickets below */}
            { this.display_tickets(tickets.filter(item => item.status === "todo")) }
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>
              DONE <span></span>
            </label>
            {/** show Done tickets below */}
            {this.display_tickets(tickets.filter(item => item.status === "done"))}
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>
              CLOSE <span></span>
            </label>
            {/** show Close tickets below */}
            {this.display_tickets(tickets.filter(item => item.status === "close"))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.ticket
});

export default connect(mapStateToProps)(App);