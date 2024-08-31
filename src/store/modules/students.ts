const state = () => ({
  studentsAtual: null
})

// getters
const getters = {
  getStudentsAtual() {
    if (state.studentsAtual === null) {
      state.dispatch('getStudents')
    }
    return state.studentsAtual
  }
}

// actions
const actions = {
  getStudents({ commit }: { commit: any }) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-redacao-ms/redacao/alunos', {
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

// action would be called as this.$store.dispatch('students/getStudents', payload)

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
