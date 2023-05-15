<template>
  <menu-list ></menu-list>

 <TheCarousel></TheCarousel> 

 <AboutUs></AboutUs>

</template>

<script>
import menuList from '../src/components/menu-list.vue';
import TheCarousel from '../src/components/UI/TheCarousel.vue';
import AboutUs from './components/AboutUs.vue';

export default {
components: {
  menuList,
 TheCarousel,
 AboutUs
},
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Frank Ruhl Libre', serif;
  margin: 0;
}

body {
  margin: 0;
}

</style>
