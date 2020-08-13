const initialState = {
  config: [],
  dashboard: [],
};

const mutation = {
  SET_DATA: (state, [index, data]) => {
    return {
      ...state,
      config: data,
    };
  },
};
