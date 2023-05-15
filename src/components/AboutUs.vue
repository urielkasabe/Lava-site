<template>
  <div id="about">
      <svg
      v-motion-slide-visible-top
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        ></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        ></path>
      </svg>
    <h1 v-motion-slide-visible-top>קצת עלינו</h1>
    <h2 v-motion-slide-visible-top>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      quidem error est debitis mollitia! Dolor ea suscipit, necessitatibus,
      similique blanditiis corrupti quos autem repudiandae aspernatur nobis
      aperiam adipisci hic esse.
    </h2>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  background-image: url(../../images/desert-gbe7e83584_640.jpg);
  background-size: cover;
  opacity: 0.9;
  color: rgb(0, 0, 0);
  padding: 15rem 0;
}

svg{
    height: 5rem;
    width: 5rem;
    margin: 1rem auto 0 auto;
    position: relative;
    top: 10%;
}

h1 {
  font: 700;
  font-size: 3rem;
  margin-top: 0;

}

h2 {
  font: 400;
  width: 55%;
  margin: 0 auto;

}
</style>
