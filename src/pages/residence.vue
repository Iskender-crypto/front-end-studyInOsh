<template>
  <link rel="stylesheet" href="../assets/font/Gilroy/stylesheet.css" />
  <div class="container">
    <div class="navbar">
      <div class="navbar__left">
        <img class="nav__logo" src="../assets/img/square-black.png" alt="" />
        <div class="language__selection">
          RU
          <div class="lg__line"></div>
          Choose your language
        </div>
      </div>
      <div class="navbar__right">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">All list</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
        </ul>
        <div class="nav__line"></div>
        <div class="hamburger__menu">
          <div class="burger-item"></div>
          <div class="burger-item"></div>
          <div class="burger-item"></div>
        </div>
      </div>
    </div>
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
