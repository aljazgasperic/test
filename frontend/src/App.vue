<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from './components/NavBar.vue';
</script>
<script>
export default {
  name: 'App',
  components: { NavBar }
}

</script>

<template>
  <div class="app" style="margin-top:-60px;">
    <NavBar/>
    <router-view/>
  </div>
</template>

<style>

#app {
font-family: Avenir, Arial, Helvetica, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}

body{
  margin: 0;
  overscroll-behavior-block: #eee;
}
</style>
