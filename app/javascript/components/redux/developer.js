import axios from "axios";

const initialState = [];

const GET_DEVELOPERS = "GET_DEVELOPERS";

export const getDevelopers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/v1/developers");
      dispatch({
        type: GET_DEVELOPERS,
        developers: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const developersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVELOPERS:
      return action.developers;
    default:
      return state;
  }
};

export default developersReducer;
