const state = () => ({
  redacaoAtual: {}
})

// getters
const getters = {}

// actions
const actions = {
  createRedacao(
    { commit }: { commit: any },
    { title, text, theme }: { title: string; text: string; theme: string }
  ) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-llm-ms/llm/corrigir-redacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ titulo: title, texto: text, tema: theme })
      })
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then(async (data) => {
          const responseData = await data.data
          if (data.status === 200) {
            commit('setRedacaoAtual', responseData)
            resolve({ error: false, message: 'Redação cadastrada com sucesso' })
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
  setRedacaoAtual(state: any, redacao: any) {
    state.redacaoAtual = redacao
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
