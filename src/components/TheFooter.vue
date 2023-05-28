<template>
  <div class="container">
    <router-link to="/">
      <img src="../../images/lavabarwhitesmall.png" alt="lava-logo" />
    </router-link>
    <section>
      <div class="list">
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <a :href="item.link">{{ item.label }}</a>
          </li>
        </ul>
      </div>

      <div class="work">
        <h2>שעות פעילות</h2>
        <p>ראשון-חמישי: 19:00 - 01:00</p>
        <h3>כשר- בהשגחת הרבנות הראשית</h3>
      </div>
    </section>

    <p class="copy">&copy; Uriel Kasabe Vue.js developer ~ 052-8776372</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, label: 'תפריט', link: '/menu' },
        { id: 2, label: 'גלריה', link: '/#gallery' },
        { id: 3, label: 'אודות', link: '/#about' },
        { id: 4, label: 'צור קשר', link: '/#contact-us' }
      ]
    };
  }
};
</script>

<style scoped>
div {
  background-color: black;
  color: white;
  padding: 1rem;
}

img {
  display: block;
  height: 10rem;
  width: 10rem;
  position: relative;
  left: 50%;

  transform: translateX(-50%);
}

section {
  display: flex;
  text-align: right;
  direction: rtl;
  font-size: 1.3rem;
}

.work {
  margin-right: 70%;
  text-align: center;
  width: 20%;
  margin-top: 0;
  padding: 0;
}

.work p {
  margin: 0.1rem;
}

.work h3 {
  font-size: 1.3rem;
  font: 400;
}

ul {
  list-style: none;
  margin: 0;
}

ul li {
  margin-bottom: 1rem;
}

ul a {
  color: inherit;
  font-size: 1.5rem;
}

.copy {
  text-align: center;
  margin: 0.5rem;
  font-size: 1rem;
}

@media (max-width: 480px) {

  section{
    flex-direction: column;
    width: 100%;
  }
  .work {
    margin-right: 13%;
    width: 70%;
  }

  .list {
    height: fit-content;
    width: 70%;
    padding: 0;
    align-items: center;
  
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0 auto;
    text-align: center;
    font-size: 0.5rem;
  }

  ul li {
  margin: 0 1rem;
  padding: 0;
  width: max-content;
}

}

@media (min-width: 768px) {
  section{
    flex-direction: column;
    width: 100%;
    
  }
  .work {
    margin-right: 35%;
    width: max-content;
    text-align: center;
  }

  .list {
    height: fit-content;
    width: max-content;
    padding: 0;
    align-items: center;
  }
  ul {
    display: flex;
    padding: 0;
    margin: 0 auto;
    text-align: center;
  }

  ul li {
  margin: 0 4rem;
  padding: 0;
  width: max-content;
}
}

@media (min-width: 1200px) {
  section {
  display: flex;
  flex-direction: row;
  text-align: right;
  direction: rtl;
  font-size: 1.3rem;
}

.work {
  margin-right: 65%;
  text-align: center;
  width: 20%;
  margin-top: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
  display: block;
}

ul li {
  margin-bottom: 1rem;
}
.work p {
  margin: 0.1rem;
}
}
</style>
