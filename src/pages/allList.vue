<template>
  <header class="header__allList">
    <div class="header__info">
      <div class="container">
        <div class="header__logo">
          <h1 class="header__title">All list</h1>
          <p class="header__nav">
            Christian Bale (born 1974) is an English actor. <br />
            Known for his versatility and recurring physical
          </p>
        </div>
      </div>
    </div>
  </header>

  <section class="project">
    <div class="container">
      <div class="project__tittle">
        <div class="project__row">
          <div class="project__coll">
            <p class="project__blockk">
              <img src="../assets/img/Vector-back.png" alt="" /> Back
            </p>
          </div>
          <div class="project__col1">
            <p class="project__block1">Dostupno 6 universitetov</p>
          </div>
          <div class="project__col">
            <h2 class="project__block2">OshTU</h2>
          </div>
          <div class="project__col">
            <h3 class="project__block">OshSU</h3>
          </div>
          <div class="project__col">
            <h3 class="project__block">Osh HaPI</h3>
          </div>
          <div class="project__col">
            <h3 class="project__block">Osh SLI</h3>
          </div>
          <div class="project__col">
            <h3 class="project__block">AE College</h3>
          </div>
          <div class="project__col">
            <h3 class="project__block">K-UI University</h3>
          </div>
        </div>
        <div class="project__line"></div>
        <div class="project__tittle__bottom">
          <h1 class="h1">OshTU</h1>
          <p class="p">
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre, a name it
            kept until 1929. It was located along Peachtree Street, in an area
            that soon became the location of several other major theaters.
          </p>
          <h3 class="h3">What you need?</h3>
          <div class="project-coll">
            <div class="project-col">
              <div class="project-block">
                <h4 class="h4">2400$</h4>
                <p class="pp">Pay for 12 months</p>
              </div>
            </div>
            <div class="project-col">
              <div class="project-block">
                <h4 class="h4">12</h4>
                <p class="pp">Years of education</p>
              </div>
            </div>
            <div class="project-col">
              <div class="project-block">
                <h4 class="h4">14</h4>
                <p class="pp">All medicians lists</p>
              </div>
            </div>
            <div class="project-col">
              <div class="project-block">
                <h4 class="h4">7100$</h4>
                <p class="pp">Dollars for live</p>
              </div>
            </div>

            <div class="project-col">
              <div class="project-block">
                <h4 class="h4">2</h4>
                <p class="pp">People for verify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Nav from "../layouts/component/nav.vue";
</script>
<style scoped>
nav {
  margin-top: 70px;
}
.header__logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header__info {
  background-image: url("../assets/img/allListBanner.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 147px;
  color: #f5f5f5;
}
.header__nav {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #f5f5f5;
  margin-top: 23px;
}

.project__blockk {
  margin: 53px 0px 94px 0px;
}
.project__block1 {
  margin-bottom: 53px;
}
.project__col {
  padding-top: 35px;
}
.project__block2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #353535;
}
.project__block {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #a19f9d;
}
.project__tittle {
  display: flex;
}
.project__line {
  height: 900px;
  width: 0px;
  border: 1px solid #000000;
  margin-left: 64px;
}
.project__tittle__bottom {
  margin-left: 94px;
}
.h1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 69px;
  color: #323130;
  margin: 52px 0px 17px 0px;
}
.p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 30px;
  color: #323130;
  margin-bottom: 36px;
  width: 477px;
}

.h3 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #323130;
}
.project-coll {
  display: flex;
  flex-flow: wrap;
  margin-left: -20px;
}
.project-col {
  width: 33.3333%;
  padding-left: 20px;
}

.project-block {
  width: 150px;
  height: 150px;
  background: #d9d9d9;
  border-radius: 12px;
}
</style>
