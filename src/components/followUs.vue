<template>
  <div>
    <img src="../../images/DSC07764.jpg" alt="" v-motion-slide-visible-left/>
    <svg
    v-motion-slide-visible-top 
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      id="Volcano"
    >
      <g
        data-name="&amp;lt;Group&amp;gt;"
        fill="#ffffff"
        class="color000000 svgShape"
      >
        <path
          d="M478.4,485.167C410.823,428.226,371.983,356.052,351.3,305.532c-20.288-49.554-27.575-88.565-28.862-96.088a14.505,14.505,0,0,0,.109-1.777c0-9.881-9.754-17.509-28.99-22.673-15.531-4.168-36.042-6.464-57.756-6.464s-42.226,2.3-57.756,6.464c-19.236,5.164-28.99,12.792-28.99,22.673,0,.068.006.135.006.2-.039.794-1.756,33.672-16.74,78.326-13.872,41.341-42.3,101.565-98.976,153.7a8,8,0,1,0,10.832,11.775,374.83,374.83,0,0,0,64.083-77.353c-1.378,17.174,1.909,24.043,4.952,27.822a15.774,15.774,0,0,0,14.434,5.764c17.292-1.836,29.309-21.556,38.965-37.4,2.71-4.447,6.466-10.611,9.182-13.951,2.467,5.761,4.652,17.217,6.617,27.513,5.788,30.338,12.992,68.094,39.96,73,11.86,2.155,21.654-4.981,29.081-21.224,5.424-11.86,9.341-27.5,13.13-42.623,2.841-11.341,5.524-22.052,8.6-30.289,3.672-9.831,6.3-11.558,6.73-11.783.943.153,5.155,1.647,10.758,15.741,4.431,11.143,8.1,25.9,11.644,40.176,6.878,27.678,11.543,45.011,20.4,52.306,6.916,5.695,14.88,8.669,22.627,8.669a29.038,29.038,0,0,0,10.735-2.031c18.49-7.325,24.013-29.957,25.659-42.8,1.135-8.853,1.873-15.759,2.376-21.159,21.465,32.522,48.993,65.876,83.972,95.352A8,8,0,0,0,478.4,485.167ZM285.776,215.8c-13.756,3.228-31.505,5.006-49.975,5.006s-36.219-1.778-49.976-5.006c-12.9-3.027-18.5-6.41-20.3-8.13,1.8-1.721,7.4-5.1,20.3-8.131,13.758-3.228,31.506-5.006,49.977-5.006s36.219,1.778,49.976,5.006c12.9,3.027,18.5,6.41,20.3,8.131C304.273,209.387,298.679,212.77,285.776,215.8Z"
          data-name="&amp;lt;Compound Path&amp;gt;"
          fill="#ffffff"
          class="color000000 svgShape"
        ></path>
        <path
          d="M89.242 60.2a8 8 0 0 0-4.983 15.2c.48.159 48.094 16.424 56.12 61.62a8 8 0 1 0 15.754-2.8C146.406 79.465 91.572 60.963 89.242 60.2zM212.425 14.987a8 8 0 0 0 5.61 14.292c1.008 1.744 2.75 5.795 4.369 14.611 2.569 13.987 3.871 34.711 3.871 61.594a8 8 0 1 0 16 0c0-73.447-9.426-87.485-17.639-91.509A11.652 11.652 0 0 0 212.425 14.987zM371.967 80.136c-2.014.6-49.523 15.194-66.224 61.977a8 8 0 1 0 15.069 5.379c13.914-38.974 55.266-51.883 55.728-52.023a8 8 0 0 0-4.573-15.333z"
          data-name="&amp;lt;Path&amp;gt;"
          fill="#ffffff"
          class="color000000 svgShape"
        ></path>
      </g>
    </svg>
    <h1 v-motion-slide-visible-top >עקבו אחרינו ותתעדכנו על כל מה שחדש</h1>
    <div class="social">
      <ul>
        <li name="Fb" v-motion-pop-visible>
          <a href="https://www.facebook.com/LavaBarRaanana/?locale=ky_KG"><FbAnimated></FbAnimated></a>
          <label for="Fb">Facebook</label>
        </li>
        <li name="Ig" v-motion-pop-visible>
          <a href="https://www.instagram.com/lava_bar7/ "><IgAnimated></IgAnimated></a>
          <label for="Ig">Instagram</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FbAnimated from "../components/svg/FbAnimated.vue";
import IgAnimated from "../components/svg/IgAnimated.vue";

export default {
  components: {
    FbAnimated,
    IgAnimated,
  },
};
</script>

<style scoped>
div {
  /* display: flex; */
  padding: 2rem 0 5rem 0;
  margin: 0;
  background: linear-gradient(180deg, black, rgb(35, 35, 35), rgb(69, 68, 68));
}

img {
  height: 30rem;
  width: 40rem;
  object-fit: cover;
  float: left;
  margin: 2rem 1rem 2rem 2rem;
  border-radius: 8px;
  box-shadow: 10px 5px 80px rgb(167, 163, 163);
}

svg {
  display: flex;
  height: 5rem;
  width: 5rem;
  margin: 1rem auto 0 auto;
  position: relative;
  /*   top: -10%;
  left: 25%;
  transform: translateX(-50%); */
}

h1 {
  font: 700;
  font-size: 3rem;
  color: rgb(215, 215, 215);
  margin: 2rem 3rem 0 0;
  direction: rtl;
}

.social {
  display: inline-block;
  height: fit-content;
  position: relative;
  left: 15%;
  transform: translateX(-7.5%);
  background: transparent;
}
.social ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

.social ul li {
  margin: 2rem;
}

label {
  font-size: 1rem;
  color: rgb(215, 215, 215);
  margin: 2rem 3rem 0 0;
  position: relative;
  top: 10%;
  left: 20%;
}
</style>
