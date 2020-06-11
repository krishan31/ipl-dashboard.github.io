<template >
  <div id="app">
    
    <userdashboard />
    
  <!-- <line-chart :data="chartData"></line-chart> -->
  
  
 
  
  </div>
</template>

<script>
import userdashboard from './components/userdashboard.vue'

export default {
  name: 'App',
  components: {
    userdashboard
  }

}
</script>

<style>

       @media only screen and (max-width: 600px) {
         #app{
           width: 144%;
         }
       }
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
