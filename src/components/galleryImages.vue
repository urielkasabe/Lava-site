<template>
  <div class="gallery">
    <div
      class="gallery-item skeleton"
      v-for="imageName in imageNames"
      :key="imageName"
    >
      <img
        :src="require(`../../images/gallery/${imageName}`)"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedImages: [],
      imageNames: [
        "DSC07527.jpg",
        "DSC07576.jpg",
        "DSC07647.jpg",
        "DSC07711.jpg",
        "DSC07887.jpg",
        "DSC08131.jpg",
        "DSC08151.jpg",
        "DSC07807.jpg",
        "IMG_2548.jpg",
      ],
    };
  },
  methods: {
    imageLoaded(imageName) {
      this.loadedImages.push(imageName);
    },
  },
};
</script>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  width: 75%;
  margin: 0 auto;

}

.gallery-item {
  position: relative;
  overflow: hidden;
  border: 1px solid #aaa;
  border-radius: 100% 0% 100% 0% / 19% 83% 17% 81%;
  box-shadow: 5px 10px 30px black;
  margin-bottom: 1.5rem;
  width: 20rem;
  height: 20rem;
}

.skeleton {
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(180, 2%, 49%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.gallery-item:hover img {
  transform: scale(1.1) rotate(5deg);
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

  .gallery-item {
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

  .gallery-item {
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
    position: relative;
  left: 50%;
  transform: translateX(-67%);
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
