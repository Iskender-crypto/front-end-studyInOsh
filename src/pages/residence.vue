<template>
  <link rel="stylesheet" href="../assets/font/Gilroy/stylesheet.css" />
  <div class="container">
    <NavBlack></NavBlack>
    <div class="line"></div>

    <div class="d-flex justify-content-between align-items-end">
      <div class="content">
        <div>
          <h3 class="res__title">Residence</h3>
          <p class="res__description">
            The Paramount Theatre was a movie palace in downtown Atlanta,
            Georgia, United States.
          </p>
        </div>
        <p class="data">20.09.2022</p>
      </div>
      <div class="res__block"></div>
    </div>

    <router-link to="/univer"><p class="back__link">Back</p></router-link>
  </div>
</template>
<style scoped src="../assets/css/residence.css"></style>
<script setup lang="ts">
import NavBlack from "../layouts/component/nav-black.vue";
</script>
