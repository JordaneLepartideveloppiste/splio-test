import {
  GET_EVENTS,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from "../actions/events.actions";

 

const initialState = [];

export default function eventsReducer(state = initialState, action) {
  
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;

    case ADD_EVENT:
      return state.map((event) => {
        if (event.id === action.payload.id) {
          return {
            ...event,
            title: action.payload.title,
            color: action.payload.color,
           
          };
        }
        return event;
      });

    case UPDATE_EVENT:
      return state.events.map((event) => {
        if (event.id === action.payload.id) {
          return {
            ...event,
            title: action.payload.title,
            color: action.payload.color,
          };
        }
        return event;
      });

    case DELETE_EVENT:
      return state.filter(
        (event) => event.id !== action.payload.eventId
      );

    default:
      return state;
  }
}
