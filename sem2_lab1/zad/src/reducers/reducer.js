import { ACTION_TYPES as types } from "../actions/actions";

const initState = {
  user: null,
  isLoading: true,
  isError: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_USER:
      return { ...initState };

    case types.FETCH_USER_SUCCESS:
      return { user: action.user, isLoading: false, isError: false };

    case types.FETCH_USER_ERROR:
      return { user: null, isLoading: false, isError: true };

    default:
      return state;
  }
};

export default reducer;
