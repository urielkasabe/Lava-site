<template>
  <div class="over">
    <div class="menu-img">
      <img v-if="isVisible" :src="menuFoodMob" alt="menu-food" class="food" />
      <img v-else :src="menuFood" alt="menu-food" class="food" />
      <img v-if="isVisible" :src="menuDrinksMob" alt="menu-drinks" />
      <img v-else :src="menuDrinks" alt="menu-drinks" />
    </div>
  </div>
</template>

<script>
import menuFood from "../../images/menu/desk-01.jpg";
import menuDrinks from "../../images/menu/desk-02.jpg";
import menuFoodMob from "../../images/menu/Menu_pages-to-jpg-0001.jpg";
import menuDrinksMob from "../../images/menu/Menu_pages-to-jpg-0002.jpg";

import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const isVisible = ref(false);

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
      isVisible,
      menuFood,
      menuFoodMob,
      menuDrinks,
      menuDrinksMob,
    };
  },
};
</script>

<style scoped>
.over{
  width: 100%;
  height: 100%;
  background: url('../../images/Untitled.jpeg');
}

.menu-img {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
}

img {
  display: flex;
  justify-content: space-around;
  margin: 5rem;
  border: 18px solid rgb(60, 60, 60);
}

.food {
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  div {
    margin: 10rem auto 3rem auto;
    width: 100%;
  }

  img {
    margin: 2rem;
    border: 8px solid rgb(60, 60, 60);
  }

  .food {
    margin-bottom: 1rem;
  }
}
</style>
