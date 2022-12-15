<template>
  <div class="navbar">
    <div class="navbar__left">
      <img class="nav__logo" src="../../assets/img/square-black.png" alt="" />
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
</template>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
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
</style>
