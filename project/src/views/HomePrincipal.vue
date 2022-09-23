<template>
<Slider></Slider>
<Corpo></Corpo>
</template>
<script>
  import Slider from '../components/Slider.vue';
  import Corpo from '../components/corpoPrincipal.vue';
  
  
  export default {
    name: 'App',
    components: {
    Slider,
    Corpo
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