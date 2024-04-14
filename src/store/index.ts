import { createStore, createLogger } from 'vuex'
import login from './modules/login'
import redacao from './modules/redacao'

export default createStore({
  modules: {
    login,
    redacao
  }
})
