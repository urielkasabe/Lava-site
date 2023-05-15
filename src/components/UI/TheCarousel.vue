<template>
    <el-carousel height="700px">
      <el-carousel-item v-for="item in picturesBar" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </template>

  <script>
  import img1 from '../../../images/DSC07876.jpg';
  import img2 from '../../../images/DSC08167.jpg'; 
  import img3 from '../../../images/DSC07996.jpg'; 

export default{
  data() {
    return{
    picturesBar: [img1, img2, img3]
    }
  }
}
</script>
  
  <style scoped>

  img{
    height: 43.75rem;
    width: 100%;
    object-fit: cover;
  }
  .el-carousel__container{
    height: 50rem;
  }
  </style>
  