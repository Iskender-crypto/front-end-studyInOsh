<template>
  <header class="header">
    <Nav></Nav>
    <h1 class="title__1">What we do?</h1>
  </header>

  <section class="What we do?">
    <div class="my__container">
      <p class="title">What we do?</p>
      <div class="blocks">
        <div class="block">
          <p class="block__title">1</p>
          <p class="block__title">We do something</p>
          <p class="block__description">
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre
          </p>
        </div>

        <div class="block">
          <p class="block__title">2</p>
          <p class="block__title">We do something</p>
          <p class="block__description">
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre
          </p>
        </div>

        <div class="block">
          <p class="block__title">3</p>
          <p class="block__title">We do something</p>
          <p class="block__description">
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre
          </p>
        </div>
        <div class="block">
          <p class="block__title">4</p>
          <p class="block__title">We do something</p>
          <p class="block__description">
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Nav from "../layouts/component/nav.vue";
</script>

<style scoped>
body {
  margin: 0;
}
.header {
  background-image: url(../assets/img/allListBanner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.title__1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Gilroy";
  font-style: normal;
  font-size: 120px;
  line-height: 147px;
  color: #e8f7f7;
  padding-top: 200px;
  padding-left: -174px;
}

.my__container {
  width: 1140px;
  margin: auto;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 147px;
  letter-spacing: -0.01em;
  color: #323130;
  margin-top: 100px;
}

/* .colum {
  width: 1280px;
  height: 176px;
  background: #e4e4e4;
  border-radius: 20px;
} */

.block {
  background: #d9d9d9;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 45px;
  margin-bottom: 35px;
}
.block__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -0.01em;
  color: #323130;
}
.block__description {
  width: 354px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #323130;
}
.block__example {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #323130;
}

nav {
  margin-top: 70px;
}
</style>
