import {createStore} from 'vuex'

const state = {
  count: 0,
  year: '1970',
}

const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
}

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd({commit, state}) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  onSetYear: ({commit}, year) => commit('setYear', {year}),
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  setYear: (state, {year}) => (state.year = year),
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
