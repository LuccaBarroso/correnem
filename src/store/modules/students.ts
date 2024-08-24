const state = () => ({
  studentsAtual: null
})

// getters
const getters = {
  getStudentsAtual: (state: any) => {
    return state.studentsAtual
  }
}

// actions
const actions = {
  getStudents({ commit }: { commit: any }) {
    if (state.studentsAtual !== null) {
      return state.studentsAtual
    }
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-redacao-ms/alunos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then(async (data) => {
          const responseData = await data.data
          if (data.status === 200) {
            commit('setStudentsAtual', responseData)
            resolve({ error: false, data: responseData })
          } else {
            resolve({ error: true, message: responseData?.message })
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
  setStudentsAtual(state: any, redacao: any) {
    state.studentsAtual = redacao
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
