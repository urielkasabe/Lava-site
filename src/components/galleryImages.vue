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
  margin: 5rem 2.5rem;
}

.gallery-item{
  height: 10rem;
  width: 10rem;
}
}
</style>
