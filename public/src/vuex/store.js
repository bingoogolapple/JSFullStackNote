import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 需要维护的状态
const state = {
  comments: []
}

const mutations = {
  // 初始化 state
  INIT_STORE(state, data) {
    state.comments = data.comments
  },
  SET_COMMENTS(state, comments) {
    state.comments = comments;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
