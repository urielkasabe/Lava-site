<template>
  <header>
    <menu-list></menu-list>
  </header>

  <TheCarousel></TheCarousel>

  <AboutUs></AboutUs>

  <div class="gray">
    <followUs></followUs>

    <hr/>

    <card-board></card-board>

    <hr class="hr-2"/>

    <the-gallery></the-gallery>

    <hr class="hr-2"/>

    <contact-us></contact-us>
  </div>

  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<script>
import menuList from "../src/components/menu-list.vue";
import TheCarousel from "../src/components/UI/TheCarousel.vue";
import AboutUs from "./components/AboutUs.vue";
import followUs from "./components/followUs.vue";
import cardBoard from "./components/cardBoard.vue";
import TheGallery from "./components/TheGallery.vue";
import ContactUs from "./components/ContactUs.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    menuList,
    TheCarousel,
    AboutUs,
    followUs,
    cardBoard,
    TheGallery,
    ContactUs,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Frank Ruhl Libre", serif;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

.gray {
  padding: 2rem 0 5rem 0;
  margin: 0;
  background: linear-gradient(180deg, black, rgb(35, 35, 35), rgb(69, 68, 68));
}

hr{
  margin: 20rem auto 0 auto;
  color: white;
  width: 70%;
}

.hr-2{
  margin: 10rem auto 0 auto;
  color: white;
  width: 70%;
}
</style>
