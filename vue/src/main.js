import Vue from 'vue'
import App from './App.vue'
import Example from './Example.vue'
// import Field from './Field.vue'

Vue.component ('app-example', Example);

new Vue({
  el: '#app',
  render: h => h(App)
});