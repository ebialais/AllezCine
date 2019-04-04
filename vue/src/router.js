import Vue from 'vue'
import Router from 'vue-router'
import Accueil from './views/Accueil/Accueil.vue'
import topFilms from './views/Films/topFilm.vue'
import topSeries from './views/Series/topSeries.vue'
import Infos from './views/Infos/Infos.vue'

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
      path: '/Infos/:id',
      name: 'Infos',
      component: Infos
    },
    
  ]
})
