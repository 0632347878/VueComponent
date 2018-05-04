// import Vue from 'vue'
//
// import App from 'js/vue'
// import Example from '../src/Example.vue'

// Vue.component ('app-example', Example);



// global component
Vue.component ('app-car', {
 data: function () {
  return {
   cars: [
    {model: "BMW"},
    {model: "Volvo"},
    {model: "Mersedes"},
    {model: "Ford"}
   ]
  }
 },
 template: 	`<div>
              <div v-for="car in cars" class="car"><p>{{ car.model }}</p></div>
             </div>`
});

new Vue({
 el: '#app',
 // local component
 components: {
   'random-name':
    {
     data: function () {
      return {
       cars: [
        {model: "BMW"},
        {model: "Volvo"},
        {model: "Mersedes"},
        {model: "Ford"}
       ]
      }
     },
     template: 	`<div>
              <div v-for="car in cars" class="car-two"><p>{{ car.model }}</p></div>
             </div>`
    }
 }
});

new Vue({
 el: '#app2'
});
