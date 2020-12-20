import Vue from "vue";

export default {
  async login({ commit }, payload) {
    const username = payload.username;
    const password = payload.password;
    var res = await Vue.makeRequest("login", {
      data: {
        username,
        password,
      },
      p: {
        id: "2",
      },
    });
    commit("TOKEN", res);
  },
};
