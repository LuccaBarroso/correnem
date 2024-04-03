const state = () => ({
  user: null
})

// getters
const getters = {}

// actions
const actions = {
  login({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@' && password === 'admin') {
          commit('setUser', { email })
          resolve({ error: false })
        } else {
          resolve({ error: true, message: 'Usuário ou senha inválidos' })
        }
      }, 1000)
    })
  }
}

// mutations
const mutations = {
  setUser(state, { email }) {
    state.user = { email }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
