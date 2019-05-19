export const ACTION_TYPES = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE"
};

export const increase = () => ({ type: ACTION_TYPES.INCREASE });
export const decrease = () => ({ type: ACTION_TYPES.DECREASE });
