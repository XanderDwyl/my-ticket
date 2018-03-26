import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

import { updateTicket } from "../../actions";
import textRenderField from '../Common/textboxRenderField';
import selectRenderField from '../Common/dropDownSelect';
import { required } from '../Common/validate';
import { STATUS } from '../../constants';


const styles = {
  ticket: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    maxWidth: "400px",
    minHeight: "7em",
    padding: "0.5em",
    margin: "0.5em auto",
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

const ticketStatus = [
  { val: '1', name: STATUS.TODO },
  { val: '2', name: STATUS.DONE },
  { val: '3', name: STATUS.CLOSE },
];

class TicketDetails extends Component {
  state = {
    id: this.props.match.params.id
  }

  updateHandler = form => {
    const { ticket, updateTicketHandler, history } = this.props;
    const updatedTicket = {
      ...form,
      id: ticket.id
    };
    
    updateTicketHandler(updatedTicket);
    history.push("/");
  };

  render() {

    const { handleSubmit } = this.props;
    
    return <div style={styles.ticket}>
      <form onSubmit={handleSubmit(this.updateHandler)}>      
        <h4>Update Ticket</h4>
        <div className="row">
          <label className="col-md-3 form-control-label">Description</label>
          <Field
            name="desc"
            type="text"
            component={textRenderField}
            validate={[required]}
          />
        </div>
        <div className="row">
          <label className="col-md-3 form-control-label">Status</label>
          <div className="col-md-9">
            <Field
              name="status"
              type="text"
              validate={[required]}
              component={selectRenderField}
              selectData={ticketStatus}
            />
          </div>
        </div>
        <button type="submit">
          Update
        </button>
      </form>
    </div>;
  }
}

let InitializeEditForm = reduxForm({
  form: 'ticketDetailsForm',
  enableReinitialize: true,
})(TicketDetails);

const mapStateToProps = (state, { match }) => {
  const { params } = match
  const ticket = state.ticket.find(ticket => ticket.id === parseInt(params.id, 10));

  return ({
    ticket,
    initialValues: {
      desc: ticket ? ticket.desc : '',
      status: ticket ? ticket.status : ''
    }
  })
};


const mapDispatchToProps = dispatch => ({
  updateTicketHandler: ticket => dispatch(updateTicket(ticket))
})

export default connect(mapStateToProps, mapDispatchToProps)(InitializeEditForm);
