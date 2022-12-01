<template>
  <header class="header__all">
    <div class="container">
      <div class="header_info">
        <Nav></Nav>
        <div class="title all__ist">
          <h2>All list</h2>
          <p>
            Christian Bale (born 1974) is an English actor. Known for his
            versatility and recurring physical
          </p>
        </div>
      </div>
    </div>
  </header>
  <section class="univers">
    <div class="container">
      <div class="univers__info">
        <ul class="univers__menu">
          <p class="univers__back">
            <img src="img/Vector-back.png" alt="" /> Back
          </p>
          <p class="univers__dost">Dostupno 6 universitetov</p>
          <li><a href="#" class="univers__menu-active">OshTU</a></li>
          <li><a href="#">OshSU</a></li>
          <li><a href="#">Osh HaPI</a></li>
          <li><a href="#">Osh SLI</a></li>
          <li><a href="#">AE College </a></li>
          <li><a href="#">K-UI University</a></li>
        </ul>
        <div class="univers__show">
          <div class="univers__text">
            <h3>OshTU</h3>
            <p class="univers__subtitle">
              The Paramount Theatre was a movie palace in downtown Atlanta,
              Georgia, United States. The building was designed by Philip T.
              Shutze and was completed in 1920 as the Howard Theatre, a name it
              kept until 1929. It was located along Peachtree Street, in an area
              that soon became the location of several other major theaters.
            </p>
            <div class="univers__mintitle">
              <h4>What you need?</h4>
              <p>For the start, read more in link down</p>
            </div>
            <div class="univers__row">
              <div class="univers__col">
                <div class="univers__block">
                  <h5>2400$</h5>
                  <p>Pay for 12 months</p>
                </div>
              </div>
              <div class="univers__col">
                <div class="univers__block">
                  <h5>2400$</h5>
                  <p>Pay for 12 months</p>
                </div>
              </div>
              <div class="univers__col">
                <div class="univers__block">
                  <h5>2400$</h5>
                  <p>Pay for 12 months</p>
                </div>
              </div>
              <div class="univers__col">
                <div class="univers__block">
                  <h5>2400$</h5>
                  <p>Pay for 12 months</p>
                </div>
              </div>
              <div class="univers__col">
                <div class="univers__block">
                  <h5>2400$</h5>
                  <p>Pay for 12 months</p>
                </div>
              </div>
            </div>
            <p class="univers__footer-title">Ya zainteresovan, eto ssylka</p>
          </div>
          <div class="univers__img"></div>
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
<style scoped>
nav {
  margin-top: 70px;
}
</style>
