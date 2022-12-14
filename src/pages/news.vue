<template>
  <div class="container">
    <NavBlack></NavBlack>
    <header class="header">
      <div class="title__text">
        <h1 class="title__1">News</h1>
        <p>
          Christian Bale (born 1974) is an English actor. <br />
          Known for his versatility and recurring physical
        </p>
      </div>
    </header>
    <div class="block">
      <div class="line"></div>
      <div class="d-flex justify-content-between align-items-end">
        <div class="content">
          <div>
            <h3 class="block__title">Residence</h3>
            <p class="block__description">
              The Paramount Theatre was a movie palace in downtown Atlanta,
              Georgia, United States.
            </p>
          </div>
          <p class="data">20.09.2022</p>
        </div>
        <div class="block__block"></div>
      </div>
    </div>
    <div class="block">
      <div class="line"></div>
      <div class="d-flex justify-content-between align-items-end">
        <div class="content">
          <div>
            <h3 class="block__title">Residence</h3>
            <p class="block__description">
              The Paramount Theatre was a movie palace in downtown Atlanta,
              Georgia, United States.
            </p>
          </div>
          <p class="data">20.09.2022</p>
        </div>
        <div class="block__block"></div>
      </div>
    </div>
    <div class="block">
      <div class="line"></div>
      <div class="d-flex justify-content-between align-items-end">
        <div class="content">
          <div>
            <h3 class="block__title">Residence</h3>
            <p class="block__description">
              The Paramount Theatre was a movie palace in downtown Atlanta,
              Georgia, United States.
            </p>
          </div>
          <p class="data">20.09.2022</p>
        </div>
        <div class="block__block"></div>
      </div>
    </div>
    <div class="block">
      <div class="line"></div>
      <div class="d-flex justify-content-between align-items-end">
        <div class="content">
          <div>
            <h3 class="block__title">Residence</h3>
            <p class="block__description">
              The Paramount Theatre was a movie palace in downtown Atlanta,
              Georgia, United States.
            </p>
          </div>
          <p class="data">20.09.2022</p>
        </div>
        <div class="block__block"></div>
      </div>
    </div>
    <div class="block">
      <div class="line"></div>
      <div class="d-flex justify-content-between align-items-end">
        <div class="content">
          <div>
            <h3 class="block__title">Residence</h3>
            <p class="block__description">
              The Paramount Theatre was a movie palace in downtown Atlanta,
              Georgia, United States.
            </p>
          </div>
          <p class="data">20.09.2022</p>
        </div>
        <div class="block__block"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title__text {
  margin-left: 100px;
  margin-top: 200px;
}
.title__1 {
  justify-content: center;
  font-family: "Gilroy";
  font-style: normal;
  font-size: 120px;
  line-height: 147px;
  color: #323130;
}
.title__text p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #323130;
}

.block__kvad {
  position: absolute;
  left: 72.89%;
  right: 3.75%;
  top: 8.85%;
  bottom: 2.95%;
  background: #9e9e9e;
  border-radius: 15px;
}

.line {
  margin-top: 111px;
  border-top: 1px solid black;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
}
.block__title {
  margin: 35px 0px 23px 0px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #323130;
}
.block__description {
  width: 477px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 30px;
  color: #323130;
}
.data {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 30px;
  color: #9b9793;
}

.block__block {
  width: 299px;
  height: 299px;
  background: #9e9e9e;
  border-radius: 15px;
}
.back__link {
  margin-top: 200px;
  color: #9b9793;
}
</style>
<script setup lang="ts">
import NavBlack from "../layouts/component/nav-black.vue";
</script>
