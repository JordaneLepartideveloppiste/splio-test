import { user$ } from "../user";

export const GET_USER = "GET_USER";

export const getUser = () => {
    
  return (dispatch) => {
    return user$
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_USER, payload: res });
      })
      .catch((err) => console.log(err));
  };
};
