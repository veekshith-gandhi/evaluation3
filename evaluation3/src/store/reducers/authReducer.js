const initState = { isLogged: false };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "AUTH_TOGGLE":
      return {
        ...state,
        isLogged: !state.isLogged,
      };

    default:
      return state;
  }
};
export default authReducer;
