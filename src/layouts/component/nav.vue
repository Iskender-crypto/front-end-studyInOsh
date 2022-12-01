<template>
  <nav class="header_nav">
    <div class="header_logo">
      <div class="logo"></div>
      <div class="header_language">
        <div class="header_language">
          <p class="header_language-line">Ru</p>
          <p>Choose your language</p>
        </div>
      </div>
    </div>
    <div class="header_menu">
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/we">About</router-link></li>
        <li><a href="#contact">Contacts</a></li>
        <li><router-link to="/allList">All list</router-link></li>
        <li><router-link to="/news">News</router-link></li>
      </ul>
      <div class="header_burger">
        <div class="burger_item"></div>
        <div class="burger_item"></div>
        <div class="burger_item"></div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.header_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header_logo .logo {
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  margin-right: 70px;
}
.header_menu {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}

.header_menu .menu {
  display: flex;
  padding-right: 18px;
  border-right: 2px solid #c4c4c4;
  height: 58px;
  align-items: center;
  margin-right: 25px;
}
.header_menu .menu li {
  margin-left: 50px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
}

.header_menu .menu li:hover {
  text-decoration: underline;
}
header .container {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.header_language {
  display: flex;
}
.header_language p {
  height: 35px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 0px;
}
.header_language-line {
  border-right: 1px solid #e0dedd;
  padding-right: 7px;
  margin-right: 7px;
}
</style>
