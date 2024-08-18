const state = () => ({
  isLogged: false,
  loggedTime: null,
  user: null,
  name: ''
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
          console.log('checando se o usuário está logado')
          console.log(response)
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
            if (window.location.pathname.includes('/redacao/corrigida')) {
              return resolve(data)
            }
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
  },
  getUserProfile({ commit }: { commit: any }) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-usuario-ms/usuario/dados-perfil', {
        method: 'GET',
        credentials: 'include'
      })
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then(async (data) => {
          if (data.status === 200) {
            commit('setUser', await data.data)
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
  updateName({ commit }: { commit: any }, { name }: { name: string }) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-usuario-ms/usuario/editar-perfil', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: name }),
        credentials: 'include'
      })
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then(async (data) => {
          if (data.status === 200) {
            commit('setUserName', name)
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
  updatePassword(
    { commit }: { commit: any },
    { passwordNew, passwordOld }: { passwordNew: string; passwordOld: string }
  ) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-usuario-ms/usuario/editar-perfil', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ senhaantiga: passwordOld, senhanova: passwordNew }),
        credentials: 'include'
      })
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then(async (data) => {
          if (data.status === 200) {
            resolve(data)
          } else {
            reject({ status: 500, data: await data.data })
          }
        })
        .catch(async (error) => {
          reject({ status: 500, data: await error.json() })
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
  },
  setUser(state: any, user: any) {
    state.user = user
    state.name = user.perfil.nome
  },
  setUserName(state: any, name: string) {
    state.user.nome = name
    state.name = name
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
