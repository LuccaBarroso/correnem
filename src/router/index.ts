import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import RedacoesView from '../views/RedacoesView.vue'
import NovaRedacaoView from '../views/nova-redacao/NovaRedacaoView.vue'
import NovaRedacaoTextoView from '../views/nova-redacao/NovaRedacaoTextoView.vue'
import perfil from '../views/PerfilView.vue'
import ResultRedacaoView from '../views/ResultRedacaoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/redacoes',
      name: 'Redacoes',
      component: RedacoesView
    },
    {
      path: '/nova-redacao',
      name: 'NovaRedacao',
      component: NovaRedacaoView
    },
    {
      path: '/nova-redacao/texto',
      name: 'NovaRedacaoTexto',
      component: NovaRedacaoTextoView
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: perfil
    },
    {
      path: '/result',
      name: 'Result',
      component: ResultRedacaoView
    }
  ]
})

export default router
