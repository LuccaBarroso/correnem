const state = () => ({
  isLogged: false,
  loggedTime: null
})

// getters
const getters = {}

// actions
const actions = {
  login({ commit }: { commit: any }, { email, password }: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-usuario-ms/auth/criartoken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha: password }),
        credentials: 'include'
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data.idUsuario && data.idUsuario !== null) {
            commit('setLogged', true)
            commit('setLoggedTime', new Date())
            resolve(data)
          } else {
            reject(data)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  firstAccessCheck({ commit }: { commit: any }) {
    // check if user has a cookie
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-usuario-ms/teste', {
        method: 'GET',
        credentials: 'include'
      })
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then((data) => {
          if (data.status === 200) {
            commit('setLogged', true)
            commit('setLoggedTime', new Date())
            resolve(data)
          }
          if (data.status === 401) {
            commit('setLogged', false)
            commit('setLoggedTime', null)
            reject(data)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  logout({ commit }: { commit: any }) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-usuario-ms/auth/invalidartoken', {
        method: 'GET',
        credentials: 'include'
      })
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then((data) => {
          if (data.status === 200) {
            commit('setLogged', false)
            commit('setLoggedTime', null)
            resolve(data)
          } else {
            reject(data)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

// mutations
const mutations = {
  setLogged(state: any, logged: boolean) {
    state.isLogged = logged
  },
  setLoggedTime(state: any, loggedTime: Date) {
    state.loggedTime = loggedTime
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
