export const ACTION_TYPES = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE"
};

export const increaseAsync = () => ({ type: ACTION_TYPES.INCREASE });
export const decrease = () => ({ type: ACTION_TYPES.DECREASE });

export const increase = () => {
  return (dispatch, getState) => {
    const { counter } = getState();
    if (counter < 4) {
      setTimeout(() => {
        dispatch(increaseAsync());
      }, 2000);
    } else return;
  };
};
