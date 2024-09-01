const state = () => ({
  user: null
})

// getters
const getters = {}

// actions
const actions = {
  register(
    { commit }: { commit: any },
    { name, email, password }: { name: string; email: string; password: string }
  ) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-usuario-ms/usuario/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: name, email, senha: password })
      })
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then(async (data) => {
          const responseData = await data.data
          if (data.status === 200) {
            resolve({ error: false, message: 'Usuário cadastrado com sucesso' })
          } else {
            resolve({ error: true, message: responseData?.message })
          }
        })
        .catch((error) => {
          console.error('Error:', error)
          reject(error)
        })
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
