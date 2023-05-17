<template>
  <div class="gallery">
    <div class="gallery-item" v-motion-pop-visible-once>
      <img
        src="../../images/gallery/DSC07527.jpg"
        alt="image"
      />
    </div>
    <div class="gallery-item" v-motion-pop-visible-once>
      <img
        src="../../images/gallery/DSC07576.jpg"
        alt="image"
      />
    </div>
    <div class="gallery-item" v-motion-pop-visible-once>
      <img
        src="../../images/gallery/DSC07647.jpg"
        alt="image"
      />
    </div>
    <div class="gallery-item" v-motion-pop-visible-once>
      <img
        src="../../images/gallery/DSC07711.jpg"
        alt="image"
      />
    </div>
    <div class="gallery-item" v-motion-pop-visible-once>
      <img
        src="../../images/gallery/DSC07887.jpg"
        alt="image"
      />
    </div>
    <div class="gallery-item" v-motion-pop-visible-once>
      <img
        src="../../images/gallery/DSC08131.jpg"
        alt="image"
      />
    </div>
    <div class="gallery-item" v-motion-pop-visible-once>
      <img
        src="../../images/gallery/DSC08151.jpg"
        alt="image"
      />
    </div>
    <div class="gallery-item" v-motion-pop-visible-once>
      <img
        src="../../images/gallery/DSC07807.jpg"
        alt="image"
      />
    </div>
    <div class="gallery-item" v-motion-pop-visible-once>
        <img src="../../images/gallery/IMG_2548.jpg" alt="image">
    </div>
  </div>
</template>

<script></script>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  width: 75%;
  margin: 5rem auto;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border: 1px solid #aaa;
  border-radius: 100% 0% 100% 0% / 19% 83% 17% 81%;
  box-shadow: 5px 10px 30px black;
  width: 20rem;
  height: 20rem;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .gallery {
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 5rem auto;
  position: relative;
  left: 2%;
  width: 90%;
}

.gallery-item{
  height: 9rem;
  width: 9rem;
}
}

@media (min-width: 768px) {
  .gallery {
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 1rem;
  margin: 5rem auto;
  position: relative;
  left: 6%;
  width: 75%;
}

.gallery-item{
  height: 15rem;
  width: 15rem;
}
}

@media (min-width: 1200px) {
  .gallery {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 1.5rem;
  width: 75%;
  margin: 5rem auto;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border: 1px solid #aaa;
  border-radius: 100% 0% 100% 0% / 19% 83% 17% 81%;
  box-shadow: 5px 10px 30px black;
  width: 20rem;
  height: 20rem;
}
}
</style>
