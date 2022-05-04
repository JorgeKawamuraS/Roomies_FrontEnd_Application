import Vue from 'vue'
import App from './app.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store';
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDTPT3W6x6gZ0UqySZDgUSGGAO9mLlwWEg',
    libraries: 'places',
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
