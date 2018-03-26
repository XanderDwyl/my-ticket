import { STATUS } from "../constants";

export const ADD = "ADD";
export const MOVE = "MOVE";
export const UPDATE = "UPDATE";

export const updateTicket = ticket => {
  return { type: UPDATE, payload: ticket };
};

export const addTicket = name => {
  const newTicket = {
    desc: name,
    status: STATUS.TODO
  };
  return { type: ADD, payload: newTicket };
};

export const moveTicket = (id, newStatus) => {
  return { type: MOVE, payload: { id, newStatus } };
};
