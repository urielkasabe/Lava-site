<template>
  <div>
    <figure class="snip1174 red">
      <img src="../../images/lava-ge5f4e75df_640.jpg" alt="sq-sample33" />
      <figcaption>
        <h2>צור קשר</h2>
        <p>!כל דבר שאתם צריכים, אנחנו כאן</p>
        <a href="#contact-us"> &#8592; לחץ כאן</a>
      </figcaption>
    </figure>
    <figure class="snip1174 blue">
      <img src="../../images/hamburger-g48199f71d_640.jpg" alt="sq-sample34" />
      <figcaption>
        <h2>התפריט שלנו</h2>
        <p>!מאכלים קוקטיילים, ועוד... קדימה תנו בקליק</p>
        <a href="/menu"> &#8592; לחץ כאן</a>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
div {
  display: flex;
  margin-top: 10rem;
  justify-content: center;
  align-items: center;
}

figure.snip1174 {
  color: #fff;
  position: relative;
  overflow: hidden;
  margin: 0 5rem;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  height: 20rem;
  background-color: #1a1a1a;
  color: #ffffff;
  text-align: right;
}
figure.snip1174 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
figure.snip1174 img {
  max-width: 100%;
  height: 100%;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  vertical-align: top;
  opacity: 0.3;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  object-fit: cover;
}
figure.snip1174 figcaption {
    width: 100%;
  position: absolute;
  padding: 40px 25px;
  top: 0;
  left: 0;
}
figure.snip1174 h2,
figure.snip1174 p {
  margin: 0;
  padding: 0;
}
figure.snip1174 h2 {
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 700;
  font-size: 1.8em;
}
figure.snip1174 p {
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 1.4em;
}
figure.snip1174 a {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ffffff;
  text-decoration: none;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 1em;
  -webkit-transform: translateY(50%);
  transform: translateY(70%);
  opacity: 0;
}
figure.snip1174 a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
figure.snip1174.blue {
  background-color: #20638f;
}
figure.snip1174.yellow {
  background-color: #c87f0a;
}
figure.snip1174.green {
  background-color: #1e8449;
}
figure.snip1174.navy {
  background-color: #222f3d;
}
figure.snip1174.red {
  background-color: #962d22;
}
figure.snip1174:hover img,
figure.snip1174.hover img {
  opacity: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
}
figure.snip1174:hover a,
figure.snip1174.hover a {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 768px) {
  div {
    flex-direction: column;
    align-items: center;
  }

  figure.snip1174{
    margin: 1rem auto;
  }
}
</style>
