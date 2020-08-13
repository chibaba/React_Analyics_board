const initialState = {
  config: [],
  dashboard: [],
};

const mutation = {
  SET_DATA: (state, [index, data]) => {
    return {
      ...state,
      config: state.config.map((conf, ind) => {
        if (index === ind) {
          conf["data"] = data;
        }
        return conf;
      }),
    };
  },
  SET_CONFIG: (state, config) => {
    return {
      ...state,
      config,
    };
  },
};
