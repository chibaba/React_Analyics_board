const initialState = {
  config: undefined,
  dashboard: [],
};

const mutations = {
  'SET_DATA': (state, [index, data]) => {
    return {
      ...state,
      config: state.config.map((conf, ind) => {
        if (index === ind) {
          conf["data"] = data;
        }
        return conf;
      })
    };
  },
  'SET_CONFIG': (state, config) => {
    return {
      ...state,
      config
    }
  },

  // 'SET_DASHBOARD_LIST': (state, dashboardList) => {
  //   return {
  //     ...state,
  //     dashboardList,
  //   };
  // },
}

const DashboardReducer = (state = initialState, { type, payload }) => {
  if (mutations[type]) {
    return mutations[type](state, payload);
  }
  return { ...state };
};
export default DashboardReducer;
