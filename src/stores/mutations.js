export default {
  TOKEN(state, payload) {
    state.token = payload.data;
  },
};
