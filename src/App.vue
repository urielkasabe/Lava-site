<template>
  <header>

    <menu-list ></menu-list>
  </header>

 <TheCarousel></TheCarousel> 

 <AboutUs></AboutUs>

 <followUs></followUs>

 <footer>
  <TheFooter></TheFooter>
 </footer>

</template>

<script>
import menuList from '../src/components/menu-list.vue';
import TheCarousel from '../src/components/UI/TheCarousel.vue';
import AboutUs from './components/AboutUs.vue';
import followUs from './components/followUs.vue';
import TheFooter from './components/TheFooter.vue';

export default {
components: {
  menuList,
 TheCarousel,
 AboutUs,
 followUs,
 TheFooter
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
