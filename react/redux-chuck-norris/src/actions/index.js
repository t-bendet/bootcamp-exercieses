import axios from "axios";

export const getJoke = () => {
  return async (dispatch) => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    dispatch({
      type: "GET_JOKE",
      payload: response,
    });
  };
};
