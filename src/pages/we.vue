<template>
  <header class="header__all">
    <div class="container">
      <div class="header_info">
        <Nav>
          <router-link :to="`/contact`">Contacts</router-link>
        </Nav>
        <div class="title all__ist">
          <h2>What we do?</h2>
          <p>
            Christian Bale (born 1974) is an English actor. Known for his
            versatility and recurring physical
          </p>
        </div>
      </div>
    </div>
  </header>
  <section class="doing">
    <div class="container">
      <div class="doing__info">
        <h2>What we do?</h2>
        <div class="doing__text">
          <p>
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre, a name it
            kept until 1929. It was located along Peachtree Street, in an area
            that soon became the location of several other major theaters.
          </p>
          <h3>Links</h3>
          <div class="doing__items">
            <p>Paramount</p>
            <p>Theatre</p>
            <p>movie</p>
            <p>palace in downtown</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="work">
    <div class="container">
      <div class="work__info">
        <h2 class="work__title">What we do?</h2>
        <div class="work__item">
          <h2>1.</h2>
          <h3>We do something</h3>
          <p>
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre
          </p>
        </div>
        <div class="work__item">
          <h2>2.</h2>
          <h3>We do something</h3>
          <p>
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre
          </p>
        </div>
        <div class="work__item">
          <h2>3.</h2>
          <h3>We do something</h3>
          <p>
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States. The building was designed by Philip T.
            Shutze and was completed in 1920 as the Howard Theatre
          </p>
        </div>
        <div class="work__item">
          <h2>4.</h2>
          <h3>We do something</h3>
          <p>
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
<style src="../assets/css/reset.css"></style>
<style src="../assets/css/style.css"></style>
<style src="../assets/css/allList.css"></style>
<style src="../assets/css/we.css"></style>
<style scoped>
nav {
  margin-top: 70px;
}
</style>
