const state = {
  search: "",
  viewStyle: "grid"
};

const getters = {
  getSearchValue: state => state.search,
  getViewStyle: state => state.viewStyle
};

const actions = {
  setViewStyleGrid: ({ commit }) => {
    commit("setViewStyle", "grid");
  },
  setViewStyleList: ({ commit }) => {
    commit("setViewStyle", "list");
  },
  setSearchValue: ({ commit }, val) => {
    commit("setSearch", val);
  }
};

const mutations = {
  setSearch: (state, val) => (state.search = val),
  setViewStyle: (state, val) => (state.viewStyle = val)
};

export default { state, getters, actions, mutations };
