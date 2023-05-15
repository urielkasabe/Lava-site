<template>
  <div>
    <img src="../../images/lavabarwhitesmall.png" alt="lava-logo" />
    <ul>
      <li>עמוד הבית</li>
      <li>תפריט</li>
      <li>גלריה</li>
      <li>אודות</li>
      <li>צור קשר</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    closeContactModal() {
      window.removeEventListener("scroll", this.handleScroll);
      this.scrolled = false;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  async created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  computed: {
    activateClass() {
      return {
        active: this.scrolled
      };
    },
  },
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
  left: 3rem;
  height: 8rem;
  width: 8rem;
  margin: 0;
}

ul {
  display: flex;
  list-style: none;
  direction: rtl;
  
/*   justify-content: center; */
}

li {
  margin: 0 5rem;
  font-size: 1.5rem;
  position: relative;
  top: -5rem;
}
</style>
