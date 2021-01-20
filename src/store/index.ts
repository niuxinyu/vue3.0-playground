import { createStore } from 'vuex';

interface State {
  msg: string;
}

export default createStore({
  state: {
    msg: ''
  },
  mutations: {
    sayHi (state: State, msg: string) {
      state.msg = msg;
    }
  },
  getters: {
    getMsg: state => state.msg
  },
  actions: {
  },
  modules: {
  }
});
