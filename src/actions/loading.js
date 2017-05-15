export const SET_LOADING = "SET_LOADING";
export const REMOVE_LOADING = "REMOVE_LOADING";

export const setLoading = () => {
  return {
    type: SET_LOADING,
    isLoading: true
  };
};

export const removeLoading = () => {
  return {
    type: REMOVE_LOADING,
    isLoading: false
  };
};
