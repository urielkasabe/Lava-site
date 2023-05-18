<template>
  <div class="loading-animation">
    <img class="imagen" src="../images/lavabarwhitesmall.png" alt="lava-logo" />
  </div>
<!--   <h1 class="loading-h1">העמוד בטעינה אנא המתן...</h1> -->
  <header>
    <menu-list ></menu-list>
  </header>
  <router-view v-if="showRouterView"></router-view>

  <TheCarousel v-if="showCmp"></TheCarousel>

  <AboutUs v-if="showCmp"></AboutUs>

  <div class="gray" v-if="showCmp">
    <followUs></followUs>

    <hr />

    <card-board></card-board>

    <hr class="hr-2" />

    <the-gallery></the-gallery>

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
  computed: {
    showCmp() {
      return this.$route.path !== "/menu";
    },
    showRouterView() {
      return this.$route.path === "/menu";
    },
  },

  mounted() {
    window.addEventListener("load", this.hideLoadingAnimation);
  },
  beforeUnmount() {
    window.removeEventListener("load", this.hideLoadingAnimation);
  },
  methods: {
    hideLoadingAnimation() {
      const loadingAnimation = document.querySelector(".loading-animation");
      const loadingH1 = document.querySelector(".loading-h1");
      if (loadingAnimation) {
        loadingAnimation.remove();
      }
      if (loadingH1) {
        loadingH1.remove();
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Heebo", sans-serif;
  margin: 0;
  padding: 0;
}

.gray {
  padding: 2rem 0 5rem 0;
  margin: 0;
  background: linear-gradient(180deg, black, rgb(35, 35, 35), rgb(69, 68, 68));
}

hr {
  margin: 20rem auto 0 auto;
  color: white;
  width: 70%;
}

.hr-2 {
  margin: 10rem auto 0 auto;
  color: white;
  width: 70%;
}

.loading-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-animation:after {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid white;
  border-color: white transparent white transparent;
  animation: spin 1s linear infinite;
}

.imagen {
  height: 5rem;
  width: 5rem;
}

/* .loading-h1{
  display: block;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  margin: 1rem auto;
  text-align: center;
  color: white;
  direction: rtl;
  font-size: 2rem;
  z-index: 9999;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 5s steps(60, end) infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
} */

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  html {
    width: 100%;
  }

  hr {
    margin: 5rem auto 0 auto;
  }
}
</style>
