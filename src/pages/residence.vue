<template>
  <div class="container">
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
