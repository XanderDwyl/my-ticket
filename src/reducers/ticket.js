import { ADD, MOVE, UPDATE } from "../actions";

let id = 0
const initialState = [
  {
    id: id++,
    desc: "Have fun with Online Test",
    status: "todo"
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE: {
      return state.map(ticket => {
        if (ticket.id === action.payload.id) {
          ticket.desc = action.payload.desc;
          ticket.status = action.payload.status;
        }
        return ticket;
      });
    }
    case ADD: {
      action.payload.id = id++;
      return [...state, action.payload];
    }
    case MOVE: {
      return state.map(ticket => {
        if (ticket.id === action.payload.id) {
          ticket.status = action.payload.newStatus;
        }
        return ticket;
      });
    }
    default:
      return state;
  }
};
