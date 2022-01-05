const initState = { data: null };

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default searchReducer;
