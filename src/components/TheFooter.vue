<template>
  <div>
    <img src="../../images/lavabarwhitesmall.png" alt="lava-logo" />
    <section>
      <div class="list">
        <ul>
          <li><a href="">תפריט</a></li>
          <li><a href="">גלריה</a></li>
          <li><a href="#about">אודות</a></li>
          <li><a href="">צור קשר</a></li>
        </ul>
      </div>

      <div class="work">
        <h2>שעות פעילות</h2>
        <p>ראשון-חמישי: 19:00 - 23:00</p>
        <p>שבת: שעה לאחר צאת שבת</p>
        <h3>כשר- בהשגחת הרבנות הראשית</h3>
      </div>
    </section>
    <section class="social-logo">
      <h2>דברו איתנו!</h2>
      <div class="social-div">
        <a :href="whatsAppLink"><WhatsApp></WhatsApp></a>
        <a :href="gmailLink"><GMail></GMail></a>
        <a :href="IgLink"><IgSvg> </IgSvg></a>
        <a :href="fbLink"><FbSvg></FbSvg></a>
        <a href=""><PhoneSvg></PhoneSvg></a>
      </div>
    </section>
    <p class="copy">&copy; Uriel Kasabe Vue.js developer ~ 052-8776372</p>
  </div>
</template>

<script>
import WhatsApp from "./svg/WhatsApp.vue";
import GMail from "./svg/GMail.vue";
import FbSvg from "./svg/FbSvg.vue";
import IgSvg from "./svg/IgSvg.vue";
import PhoneSvg from './svg/PhoneSvg.vue';

export default {
  components: {
    WhatsApp,
    GMail,
    IgSvg,
    FbSvg,
    PhoneSvg
  },
  data() {
    return {
      gmailLink: "mailto: urielkasabe5@gmail.com",
      whatsAppLink:
        "https://wa.me/972528776372?text=Hi,%20Uriel%20I%20would%20like%20to%20contract%20you%20to%20my%20company!",
      fbLink: "https://www.facebook.com/LavaBarRaanana/?locale=ky_KG",
      IgLink: "https://www.instagram.com/lava_bar7/",
    };
  },
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
  /*   margin: 0 auto;
  align-content: center; */
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
  margin-bottom: 10px;
}

ul a {
  color: inherit;
  font-size: 1.5rem;
}

.social-logo {
  display: block;
  text-align: center;
  width: 100%;
}

.social-div {
  display: flex;
  justify-content: center;
}

.social-div svg {
  margin: 0 2rem 2rem 2rem;
}

.copy {
  text-align: center;
  margin: 0.5rem;
  font-size: 1rem;
}
</style>
