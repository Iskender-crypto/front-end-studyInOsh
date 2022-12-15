<template>
  <header class="header_banner">
    <div class="header container">
      <div class="header__Nav">
        <Nav></Nav>
      </div>

      <div class="header__center">
        <div class="center__left">
          <h1 class="h1">Study at universities in Osh</h1>

          <p class="p">
            Christian Bale (born 1974) is an English actor. Known for his
            versatility and recurring physical
          </p>
        </div>

        <div class="center__right">
          <div class="right__row">
            <div class="right__col">
              <div class="right__block"></div>
            </div>

            <div class="right__col">
              <div class="right__block"></div>
            </div>

            <div class="right__col">
              <div class="right__block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import Nav from "../layouts/component/nav.vue";
</script>
<style scoped>
.header_banner {
  background-image: url("../assets/img/Header.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 930px;
}

.center__left {
  width: 671px;
}

.h1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 136px;

  letter-spacing: -0.025em;

  color: #ffffff;
}

.p {
  width: 351px;
  margin-top: 36px;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;

  letter-spacing: -0.01em;

  color: #ffffff;
}

.header__center {
  display: flex;
}

.right__row {
  width: 450px;
  height: 450px;
  display: flex;
  flex-flow: wrap;
  margin-left: -27px;
}

.right__col {
  width: 50%;
  padding-left: 27px;
  margin-top: 50px;
}
.right__block {
  width: 200px;
  height: 200px;
  background-color: #fff;
}
</style>
