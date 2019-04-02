import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Accueil from './components/Accueil/Accueil.vue'
import topFilms from './components/Films/topFilm.vue'
import topSeries from './components/Series/topSeries.vue'
import Infos from './components/Infos/Infos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/topFilms',
      name: 'topFilms',
      component: topFilms
    },
    {
      path: '/topSeries',
      name: 'topSeries',
      component: topSeries
    },
    {
      path: '/Infos',
      name: 'Infos',
      component: Infos
    },
    
  ]
})
