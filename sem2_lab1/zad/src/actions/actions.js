export const ACTION_TYPES = {
  FETCH_USER: "FETCH_USER",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR: "FETCH_USER_ERROR"
};

export const fetchUser = () => ({
  type: ACTION_TYPES.FETCH_USER
});

export const fetchUserSuccess = user => ({
  type: ACTION_TYPES.FETCH_USER_SUCCESS,
  user
});

export const fetchUserError = () => ({
  type: ACTION_TYPES.FETCH_USER_ERROR
});

export const fetchRandomUser = () => {
  return async dispatch => {
    try {
      dispatch(fetchUser());

      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      console.log(data);
      const [user] = data.results;

      dispatch(fetchUserSuccess(user));
    } catch (err) {
      console.log(err);
      dispatch(fetchUserError());
    }
  };
};
