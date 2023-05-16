<template>
    <div class="container" id="gallery">
        <h1 v-motion-slide-visible-top-once>הגלריה שלנו</h1>
        <galleryImages>

        </galleryImages>
    </div>
    
</template>

<script>
import galleryImages from './galleryImages.vue';

export default{
    components: {
        galleryImages
    }
}
</script>

<style scoped>
.container{
    margin: 10rem auto;
}

h1{
    display: block;
    color: white;
    text-align: center;
    font-size: 3rem;
}
</style>