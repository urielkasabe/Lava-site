<template>
  <div>
    <router-link to="/">
      <img src="../../images/lavabarwhitesmall.png" alt="lava-logo" />
    </router-link>
    <ul>
      <li><a href="">תפריט</a></li>
      <li><a href="#gallery">גלריה</a></li>
      <li><a href="#about">אודות</a></li>
      <li><a href="#contact-us">צור קשר</a></li>
    </ul>
  </div>
</template>

<script>
export default {



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
</style>
