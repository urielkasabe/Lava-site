<template>
  <div :class="activateClass">
    <router-link to="/">
      <img src="../../images/lavabarwhitesmall.png" alt="lava-logo" />
    </router-link>
    <HamBtn @click="toggleHamburger" v-if="isVisible" :class="{'hamburger--open': isHamburgerOpen}"></HamBtn>
    <a href="tel:+972524717176" id="phone" v-if="isVisible"
      ><PhoneSvg></PhoneSvg
    ></a>
    <transition-group>
      <ul v-if="(isVisible && isHamburgerOpen) || !isVisible" :class="ulActive">
       <li @click="toggleHamburger" ><a href="/menu">תפריט</a></li>
        <li @click="toggleHamburger"><a href="/#about">עלינו</a></li>
        <li @click="toggleHamburger" ><a href="/#gallery">גלריה</a></li>
        <li @click="toggleHamburger"><a href="/#contact-us">צור קשר</a></li>
      </ul>
    </transition-group>
  </div>
</template>

<script>
import HamBtn from "./UI/HamBtn.vue";
import PhoneSvg from "./svg/PhoneSvg.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  components: {
    HamBtn,
    PhoneSvg,
  },
  computed: {
    activateClass() {
      return {
        active: this.isVisible,
      };
    },

    ulActive() {
      return {
        ulActiveClass: this.isVisible,
      };
    },
  },

  setup() {
    const isHamburgerOpen = ref(false);
    const isVisible = ref(false);

    function toggleHamburger() {
      isHamburgerOpen.value = !isHamburgerOpen.value;
    }

    const updateVisibility = () => {
      isVisible.value = window.innerWidth < 1024;
    };

    onMounted(() => {
      updateVisibility();
      window.addEventListener("resize", updateVisibility);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateVisibility);
    });

    return {
      isHamburgerOpen,
      toggleHamburger,
      isVisible,
    };
  },
};
</script>

<style scoped>

.router-link-active {
  color: rgb(242, 178, 59);
  text-decoration: underline;
}

div {
  background-color: rgb(35, 35, 35);
  margin: 0;
  color: rgb(215, 215, 215);
  padding: 0.1rem;
  height: 10rem;
}

img {
  position: relative;
  display: block;
  top: 1.3rem;
  /* left: 7rem; */
  left: 10%;
  transform: translateX(-70%);
  height: 8rem;
  width: 8rem;
  margin: 0 2rem;
}

ul {
  display: flex;
  list-style: none;
  direction: rtl;
}

li {
  margin: 0 5rem;
  font-size: 1.5rem;
  position: relative;
  top: -5rem;
  right: 10rem;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: rgb(242, 178, 59);
  text-decoration: underline;
}

/* phone */
.hamburger {
  display: block;
  position: absolute;
  width: 30px;
  height: 40px;
  z-index: 2;
}

.hamburger--open .hamburger__inner {
  background: none;
}

.hamburger--open .hamburger__inner::before,
.hamburger--open .hamburger__inner::after {
  top: 12px;
}

.hamburger--open .hamburger__inner::before {
  transform: rotate(-45deg);
}

.hamburger--open .hamburger__inner::after {
  transform: rotate(45deg);
}





.active {
  width: 100%;
  font-weight: bold;
  line-height: 100px;
  position: fixed;
  top: 0;
  background-color: rgb(35, 35, 35);
  display: block;
  z-index: 5;
}

#phone {
  display: block;
  position: absolute;
  top: 3.5rem;
  right: 85%;
  width: 30px;
  height: 40px;
}

.ulActiveClass {
  background-color: black;
  display: block;
  position: relative;
  top: 90%;
  left: 50%;
  z-index: 6;
  padding: 5rem 0 2rem 0;
  height: 50rem;
  width: 100%;
}



@media (max-width: 768px) {
  li {
    margin: 0 1rem;
    font-size: 1.5rem;
    position: relative;
    top: -5rem;
    right: 12rem;
  }

  img {
  position: absolute;
  top: 1.3rem;
  left: 50%;
  transform: translateX(-70%);
  height: 8rem;
  width: 8rem;
  margin: 0 2rem;
}
  .v-enter-active{
animation: slide-scale 0.3s ease-out forwards;
}

.v-leave-active {
  animation: slide-scale 0.3s ease-in reverse;

}

@keyframes slide-scale {
  0% {
    transform: translateX(50%) scale(1);
    opacity: 0;
  }

  70% {
    transform: translateX(15%) scale(1.05);
    transform: translateY(0);
    opacity: 0.3;
  }

  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}
}
</style>
