<template>
<div style="height:100vh">
    <Nav></Nav>
    <router-view></router-view>
    <Rodape></Rodape>
 
</div>
</template>
  
  <script>
  import Nav from './componentesArea/NavArea.vue'
  import Rodape from './components/Rodape.vue'

  
  export default {
    name: 'App',
    components: {
    Nav,
    Rodape
}
  
  }
  
  
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  