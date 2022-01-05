import axios from "axios";

export const toggleAuth = () => (dispatch) => {
  return dispatch({
    type: "AUTH_TOGGLE",
  });
};
export const searchAction = (searchTerm, page) => async (dispatch) => {
  try {
    const { data } = await axios(
      `https://api.github.com/search/repositories?q=${searchTerm}&page=${page}&per_page=5`
    );
    console.log(data);
    return dispatch({
      type: "SEARCH",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
