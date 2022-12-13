<template>
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
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding-top: 6-px;
}
.navbar__left {
  display: flex;
}
.navbar__right {
  display: flex;
  align-items: center;
}
.nav__logo {
  margin-right: 70px;
  width: 64px;
  height: 64px;
  object-fit: cover;
  object-position: center;
}
.language__selection {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #323130;
  display: flex;
  align-items: center;
}
.lg__line {
  width: 35px;
  border-bottom: 1px solid #323130;
  transform: rotate(90deg);
}

.nav-link {
  color: #323130;
  text-decoration: none;
}

.nav__line {
  width: 58px;
  border-bottom: 2px solid #323130;
  transform: rotate(90deg);
}
.hamburger__menu {
  display: flex;
  flex-direction: column;
}
.burger-item {
  padding: 2px;
  width: 22px;
  border-bottom: 1.5px solid #323130;
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
.res__title {
  margin: 35px 0px 23px 0px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #323130;
}
.res__description {
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

.res__block {
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
