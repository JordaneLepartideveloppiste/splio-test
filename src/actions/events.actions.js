import { events$ } from "../events";

export const GET_EVENTS = "GET_EVENTS";
export const ADD_EVENT = "ADD_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const ADD_COLOR = "ADD_COLOR";
export const UPDATE_COLOR = "UPDATE_COLOR";


export const getEvents = () => {
  return (dispatch) => {
    return events$
      .then((res) => {
          console.log(res);
        dispatch({ type: GET_EVENTS, payload: res });
      })
      .catch((err) => console.log(err));
  };
};



export const addEvent = (data) => {
  return (dispatch) => {
    return events$
      .then((res) => {
        dispatch({ type: ADD_EVENT, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

export const updateEvent = (data) => {
  return (dispatch) => {
    return events$
      .then((res) => {
        dispatch({ type: UPDATE_EVENT, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteEvent = (eventId) => {
  return (dispatch) => {
    return events$
      .then((res) => {
        dispatch({ type: DELETE_EVENT, payload: { eventId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addColor = (data) => {
  return (dispatch) => {
    return events$
      .then((res) => {
        dispatch({ type: ADD_COLOR, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

export const updateColor = (data) => {
  return (dispatch) => {
    return events$
      .then((res) => {
        dispatch({ type: UPDATE_COLOR, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
