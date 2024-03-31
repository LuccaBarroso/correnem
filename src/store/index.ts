import { createStore, createLogger } from 'vuex'
import login from './modules/login'

export default createStore({
  modules: {
    login
  }
})
