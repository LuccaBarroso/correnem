import { createStore, createLogger } from 'vuex'
import login from './modules/login'
import redacao from './modules/redacao'
import register from './modules/register'
import students from './modules/students'

export default createStore({
  modules: {
    login,
    redacao,
    register,
    students
  }
})
