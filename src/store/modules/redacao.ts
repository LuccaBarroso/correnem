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
            resolve({
              error: false,
              message: 'Redação cadastrada com sucesso',
              id: responseData.redacao.id
            })
          } else {
            resolve({ error: true, message: responseData?.message })
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getRedacoes({ commit }: { commit: any }, { page, limit }: { page: number; limit: number }) {
    return new Promise((resolve, reject) => {
      fetch(
        import.meta.env.VITE_APP_API_URL +
          '/correnem-redacao-ms/redacao/redacoes/' +
          limit +
          '/' +
          page,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        }
      )
        .then((response) => {
          return { data: response.json(), status: response.status }
        })
        .then(async (data) => {
          const responseData = await data.data
          if (data.status === 200) {
            resolve({ error: false, data: responseData })
          } else {
            resolve({ error: true, message: responseData?.message })
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getRedacaoById({ commit }: { commit: any }, { id }: { id: string }) {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_APP_API_URL + '/correnem-redacao-ms/redacao/' + id, {
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
            commit('setRedacaoAtual', responseData)
            resolve({ error: false, data: responseData })
          } else {
            resolve({ error: true, message: responseData?.message })
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  putRedacao({ commit }: { commit: any }, data: any) {
    //   return new Promise((resolve, reject) => {
    //     fetch(import.meta.env.VITE_APP_API_URL + '/correnem-redacao-ms/redacao/' + data.id, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       credentials: 'include',
    //       body: JSON.stringify(data)
    //     })
    //       .then((response) => {
    //         return { data: response.json(), status: response.status }
    //       })
    //       .then(async (data) => {
    //         const responseData = await data.data
    //         if (data.status === 200) {
    //           commit('setRedacaoAtual', responseData)
    //           resolve({ error: false, data: responseData })
    //         } else {
    //           resolve({ error: true, message: responseData?.message })
    //         }
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       })
    //   })
    // }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ error: false, message: 'Redação atualizada com sucesso' })
      }, 2000)
    })
  },
  finishRedacao({ commit }: { commit: any }, { id }: { id: string }) {
    // return new Promise((resolve, reject) => {
    //   fetch(import.meta.env.VITE_APP_API_URL + '/correnem-redacao-ms/redacao/finish/' + id, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     credentials: 'include'
    //   })
    //     .then((response) => {
    //       return { data: response.json(), status: response.status }
    //     })
    //     .then(async (data) => {
    //       const responseData = await data.data
    //       if (data.status === 200) {
    //         commit('setRedacaoAtual', responseData)
    //         resolve({ error: false, message: 'Redação finalizada com sucesso' })
    //       } else {
    //         resolve({ error: true, message: responseData?.message })
    //       }
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    // })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ error: false, message: 'Redação finalizada com sucesso' })
      }, 2000)
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
