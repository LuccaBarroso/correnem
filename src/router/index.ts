import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import RedacoesView from '../views/RedacoesView.vue'
import NovaRedacaoView from '../views/nova-redacao/NovaRedacaoView.vue'
import NovaRedacaoTextoView from '../views/nova-redacao/NovaRedacaoTextoView.vue'
import RedacaoCorrigidaView from '../views/RedacaoCorrigidaView.vue'
import perfil from '../views/PerfilView.vue'
import RedacaoView from '../views/RedacaoView.vue'
import NovaRedacaoFotoView from '../views/nova-redacao/NovaRedacaoFotoView.vue'
import NovaRedacaoImagemView from '../views/nova-redacao/NovaRedacaoImagemView.vue'
import store from '../store'

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
      component: RedacoesView,
      meta: { requiresAuth: true }
    },
    {
      path: '/nova-redacao',
      name: 'NovaRedacao',
      component: NovaRedacaoView,
      meta: { requiresAuth: true }
    },
    {
      path: '/nova-redacao/texto',
      name: 'NovaRedacaoTexto',
      component: NovaRedacaoTextoView,
      meta: { requiresAuth: true }
    },
    {
      path: '/nova-redacao/foto',
      name: 'NovaRedacaoFoto',
      component: NovaRedacaoFotoView,
      meta: { requiresAuth: true }
    },
    {
      path: '/nova-redacao/imagem',
      name: 'NovaRedacaoImagem',
      component: NovaRedacaoImagemView,
      meta: { requiresAuth: true }
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: perfil,
      meta: { requiresAuth: true }
    },
    {
      path: '/redacao/corrigida/:id',
      name: 'RedacaoCorrigida',
      component: RedacaoCorrigidaView
    },
    {
      path: '/redacao/:id',
      name: 'Redacao',
      component: RedacaoView,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      let isLogged = await store.dispatch('login/firstAccessCheck')
      if (!isLogged) {
        return next({
          name: 'Login',
          query: { redirect: to.fullPath }
        })
      } else {
        return next()
      }
    } catch (error) {
      console.error('Error during navigation guard:', error)
      return next({ name: 'Login', query: { redirect: to.fullPath } })
    }
  }
  next()
})

export default router
