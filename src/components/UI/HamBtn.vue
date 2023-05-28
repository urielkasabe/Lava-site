<template>
  <div class="header__menu">
    <a
      id="header__button"
      href="#"
      @click="toggleHamburger"
      :class="{ hamburger: true }"
    >
      <div class="hamburger__inner"></div>
    </a>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isHamburgerOpen = ref(false);

    function toggleHamburger() {
      isHamburgerOpen.value = !isHamburgerOpen.value;
    }

    return {
      isHamburgerOpen,
      toggleHamburger,
    };
  },
};
</script>

<style scoped>
/* .header__menu */
.header__menu {
  position: absolute;
  top: 4rem;
  right: 15%;
  background-color: transparent;
}

/* Hamburger component */
/* Config */
.hamburger {
  display: block;
  position: absolute;
  width: 30px;
  height: 40px;
  z-index: 2;
}

.hamburger__inner {
  display: block;
  width: 30px;
  height: 6px;
  margin-top: 12px;
  background: #fff;
  transition: all 0.4s ease-in-out;
}

.hamburger__inner::before,
.hamburger__inner::after {
  display: block;
  position: absolute;
  content: "";
  z-index: -1;
  width: 30px;
  height: 6px;
  background: #fff;
  transition: all 0.4s ease-in-out;
}

.hamburger__inner::before {
  top: 0;
}

.hamburger__inner::after {
  top: 24px;
}

/* Clicked State */
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
</style>
