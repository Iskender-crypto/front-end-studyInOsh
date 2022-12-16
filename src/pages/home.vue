<template>
  <header class="header_banner">
    <div class="header container">
      <!-- ======================== Header Nav =============================== -->
      <div class="header__Nav">
        <Nav></Nav>
      </div>

      <div class="header__past">
        <!-- ======================== Header Center =============================== -->
        <div class="header__center">
          <div class="center__left">
            <h1 class="h1">Study at universities in Osh</h1>

            <p class="p">
              Christian Bale (born 1974) is an English actor. Known for his
              versatility and recurring physical
            </p>
          </div>

          <div class="center__right">
            <div class="right__row">
              <div class="right__col">
                <div class="right__block">
                  <div class="inblock">
                    <div class="top__inblock">
                      <img src="../assets/img/Sulaiman_oshmu.png" alt="" />

                      <h4 class="h4">Osh SU</h4>
                    </div>

                    <p class="bottom__inblock">More 1200+ students</p>
                  </div>
                </div>
              </div>

              <div class="right__col">
                <div class="right__block">
                  <div class="inblock">
                    <div class="top__inblock">
                      <img src="../assets/img/Sulaiman_oshmu.png" alt="" />

                      <h4 class="h4">Osh SU</h4>
                    </div>

                    <p class="bottom__inblock">More 1200+ students</p>
                  </div>
                </div>
              </div>

              <div class="right__col">
                <div class="right__block">
                  <div class="inblock">
                    <div class="top__inblock">
                      <img src="../assets/img/Sulaiman_oshmu.png" alt="" />

                      <h4 class="h4">Osh SU</h4>
                    </div>

                    <p class="bottom__inblock">More 1200+ students</p>
                  </div>
                </div>
              </div>

              <div class="right__col">
                <div class="right__block">
                  <div class="inblock">
                    <div class="top__inblock">
                      <img src="../assets/img/Sulaiman_oshmu.png" alt="" />

                      <h4 class="h4">Osh SU</h4>
                    </div>

                    <p class="bottom__inblock">More 1200+ students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ======================== Header Footer =============================== -->
        <div class="header__footer">
          <img
            class="down__vector"
            src="../assets/img/down-vector.png"
            alt=""
          />

          <div class="footer__right">
            <p class="footer__p">+ 15 universities</p>

            <div class="footer__block">
              <div class="footer__block__top">
                <img
                  class="assistant"
                  src="../assets/img/Assistant.png"
                  alt=""
                />
                <p class="assistant__p">Assistant</p>
              </div>

              <div class="footer__block__bottom">Can we help?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import Nav from "../layouts/component/nav.vue";
</script>
<style scoped>
.header_banner {
  background-image: url("../assets/img/Header.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 930px;
}

.header__past {
  margin-top: 120px;
}

.center__left {
  width: 671px;
}

.h1 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 136px;

  letter-spacing: -0.025em;

  color: #ffffff;
}

.p {
  width: 351px;
  margin-top: 36px;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;

  letter-spacing: -0.01em;

  color: #ffffff;
}

.header__center {
  display: flex;
}

.right__row {
  width: 450px;
  height: 450px;
  display: flex;
  flex-flow: wrap;
  margin-left: -27px;
}

.right__col {
  width: 50%;
  padding-left: 27px;
  margin-top: 50px;
}
.right__block {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 0px 0px 20px;
}

.inblock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 180px;
}

.h4 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  color: #323130;

  margin-top: 8px;
}

.bottom__inblock {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #a19f9d;
}

.header__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 30px;
}

.down__vector {
  width: 14px;
  height: 28px;
  margin-bottom: 20px;
}

.footer__right {
  display: flex;
  align-items: flex-end;
}

.footer__p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  margin-right: 90px;
  margin-bottom: 20px;
  color: #a19f9d;
}

.footer__block {
  width: 140px;
  height: 140px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0px 9px 16px;

  background: linear-gradient(143.3deg, #f5b23d -16.85%, #ff0b44 131.1%);
  border-radius: 11px;
}

.footer__block__top {
  display: flex;
}

.assistant {
  width: 14px;
  height: 13px;
  margin-right: 7px;
}

.assistant__p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
}

.footer__block {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
}
</style>
