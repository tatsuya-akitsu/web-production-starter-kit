import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoading: false,
      isLoggined: false
    },
    mutations: {
      loggined (state) {
        state.isLoggined = true
      },
      logout (state) {
        state.isLoggined = false
      }
    }
  })
}

export default createStore
