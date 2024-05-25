import { createStore, createLogger } from 'vuex'
import login from './modules/login'
import redacao from './modules/redacao'
import register from './modules/register'

export default createStore({
  modules: {
    login,
    redacao,
    register
  }
})
