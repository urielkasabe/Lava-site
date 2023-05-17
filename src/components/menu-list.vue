<template>
  <div :class="activateClass">
    <router-link to="/">
      <img src="../../images/lavabarwhitesmall.png" alt="lava-logo" />
    </router-link>
    <HamBtn @click="toggleHamburger" v-if="isVisible"></HamBtn>
    <ul v-if="isVisible && isHamburgerOpen || !isVisible">
      <li><a href="">תפריט</a></li>
      <li><a href="#gallery">גלריה</a></li>
      <li><a href="#about">אודות</a></li>
      <li><a href="#contact-us">צור קשר</a></li>
    </ul>
  </div>
</template>

<script>
import HamBtn from './UI/HamBtn.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  components: {
    HamBtn
  },
  computed: {
    activateClass() {
      return {
        active: this.isVisible,
        logo:this.isVisible,
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
      isVisible.value = window.innerWidth < 768;
    };

    onMounted(() => {
      updateVisibility();
      window.addEventListener('resize', updateVisibility);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateVisibility);
    });

    return {
      isHamburgerOpen,
      toggleHamburger,
      isVisible,
      
    };
  }
};
</script>


<style scoped>

div {
  background-color:  rgb(35, 35, 35);
  margin: 0;
  color: rgb(215, 215, 215);
  padding: 0.1rem;
  height: 10rem;
}

img {
  position: relative;
  top: 1.3rem;
  left: 7rem;
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

a{
    color: inherit;
    text-decoration: none;
}

a:hover{
    color: rgb(242, 178, 59);
    text-decoration: underline;
}

/* phone */
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


</style>
