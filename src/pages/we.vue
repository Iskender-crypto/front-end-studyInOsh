<template>
  <header class="header">
    <div class="container">
      <Nav></Nav>
      <div class="title__text">
        <h1 class="title__1">What we do?</h1>
        <p>
          Christian Bale (born 1974) is an English actor. <br />
          Known for his versatility and recurring physical
        </p>
      </div>
    </div>
  </header>

  <section class="What">
    <div class="container">
      <div>
        <div class="block_what">
          <h1 class="title1">What we do?</h1>
          <div class="info">
            <p class="The__Paramount">
              The Paramount Theatre was a movie palace in downtown<br />
              Atlanta, Georgia, United States.<br />
              The building was designed by Philip T. Shutze and was<br />
              completed in 1920 as the Howard Theatre,?<br />
              a name it kept until 1929. It was located along Peachtree
              <br />Street, in an area that soon became<br />
              the location of several other major theaters.
            </p>
            <div class="line"></div>
            <div class="block_links">
              <h4 class="Links">Links</h4>
              <div class="links">
                <p class="link">Paramount</p>
                <p class="link">Theatre</p>
                <p class="link">movie</p>
                <p class="link">palace in downtown</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="What we do?">
    <div class="container">
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
  height: 900px;
}
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
  color: #e8f7f7;
}
.title__text p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #f5f5f5;
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
/* ******************************************************************************** */

.block_what {
  display: flex;
  padding-top: 50px;
}
.title1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 69px;
  color: #323130;
  padding-right: 200px;
}
.The__Paramount {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 30px;
  color: #323130;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
}
.block_links {
}

.line {
  border-bottom: 1px solid #a19f9d;
  margin: 20px 0px;
}
.Links {
}

.links {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 30px;
  color: #a19f9d;
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  /* display: flex;
justify-content: space-between;
padding-left: 20px;
padding-right: 50px; */
}
.link {
  margin-right: 20px;
}
/* *********************************************************************** */
.block {
  background: #d9d9d9;
  border-radius: 22px;
  display: flex;
  align-items: center;
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
  padding-left: 50px;
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
  padding-left: 100px;
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
.block_what {
  display: flex;
}
nav {
  margin-top: 70px;
}
</style>
