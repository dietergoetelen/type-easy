import localforage from "localforage";

export const state = () => ({
  user: {
    id: 1,
    name: "Dieter Goetelen"
  }
});

export const actions = {
  setUser({ commit }, user) {
    commit("SET_USER", user);
  }
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

export const getters = {
  user: state => state.user
};
