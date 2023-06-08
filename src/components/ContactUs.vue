<template>
  <div id="contact-us">
    <section class="social-logo">
      <h1 v-motion-slide-visible-once-top>דברו איתנו!</h1>
      <div class="social-div">
        <a v-motion-pop-visible-once :href="whatsAppLink" id="WhatsApp"
          ><WhatsApp></WhatsApp
        ></a>
        <a v-motion-pop-visible-once :href="gmailLink" id="mail"><GMail></GMail></a>
        <a v-motion-pop-visible-once :href="IgLink" id="ig"><IgSvg> </IgSvg></a>
        <a v-motion-pop-visible-once :href="fbLink" id="fb"><FbSvg></FbSvg></a>
        <a v-motion-pop-visible-once href="tel:+972532799207" id="phone" title="0532799207"
          ><PhoneSvg></PhoneSvg
        ></a>
      </div>
      <div class="social">
        <h2 v-motion-slide-visible-once-top>איפה אנחנו יושבים?</h2>
        <a
          v-motion-pop-visible-once
          href="https://www.google.com/maps/place/Lava+Bar/@32.1818721,34.8304696,13z/data=!4m6!3m5!1s0x151d39520f6ff273:0xb6ae30c939fd1077!8m2!3d32.1818788!4d34.8716693!16s%2Fg%2F11kjk9jv8m"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 32 32"
            id="Location"
          >
            <path
              d="M16,2A11,11,0,0,0,5,13c0,8.58,10,16.46,10.38,16.79a1,1,0,0,0,1.24,0C17,29.46,27,21.58,27,13A11,11,0,0,0,16,2Zm0,16a5,5,0,1,1,5-5A5,5,0,0,1,16,18Z"
              fill="#ffffff"
              class="color000000 svgShape"
            ></path>
          </svg>
          <p>היובל 7,  רעננה</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import WhatsApp from "./svg/WhatsApp.vue";
import GMail from "./svg/GMail.vue";
import FbSvg from "./svg/FbSvg.vue";
import IgSvg from "./svg/IgSvg.vue";
import PhoneSvg from "./svg/PhoneSvg.vue";

export default {
  components: {
    WhatsApp,
    GMail,
    IgSvg,
    FbSvg,
    PhoneSvg,
  },
  data() {
    return {
      gmailLink: "mailto: lavabar142@gmail.com",
      whatsAppLink:
        "https://wa.me/972532799207?text=שלום,%20רציתי%20להזמין%20מקום%20להיום%20בערב%20.",
      fbLink: "https://www.facebook.com/LavaBarRaanana/",
      IgLink: "https://www.instagram.com/lava_bar7/",
    };
  },
};
</script>

<style scoped>

#contact-us{
  width: 100%;
}
.social-logo {
  display: block;
  text-align: center;
  width: 100%;
}

h1 {
  font-size: 3rem;
  color: white;
  direction: rtl;
}

.social-div {
  display: flex;
  justify-content: center;
}

.social-div svg {
  margin: 2rem 5rem 2rem 5rem;
  filter: drop-shadow(1rem 0 0.6rem rgb(46, 46, 46));
}

.social svg {
  height: 4rem;
  width: 4rem;
}

.social a {
  text-decoration: none;
}

h2 {
  color: white;
  font-size: 2rem;
  text-align: center;
  direction: rtl;
}

p {
  color: white;
  font-size: 1.3rem;
  text-align: center;
}

@media (max-width: 768px) {
  .social-div svg {
  margin: 2rem 1rem 2rem 1rem;
  height: 2.5rem;
  width: 2.5rem;
}
}
</style>
