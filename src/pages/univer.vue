<template>
  <header class="header"></header>

  <section class="faculty">
    <div class="container">
      <h1 class="title">Faculty</h1>
      <div class="flex-row">
        <h3>OshMU</h3>
        <div class="row">
          <div class="col">
            <div class="block">
              <div class="img__and__text">
                <div class="img">
                  <img src="../assets/img/faculty1.png" alt="" />
                </div>

                <div class="text">
                  <p>Architecture and Construction</p>
                  <a href="#"
                    ><img src="../assets/img/white-next.png" alt="#"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="img__and__text">
                <div class="img">
                  <img src="../assets/img/faculty2.png" alt="" />
                </div>

                <div class="text">
                  <p>Cybernetics and Information Technology</p>
                  <a href="#"
                    ><img src="../assets/img/white-next.png" alt="#"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="img__and__text">
                <div class="img">
                  <img src="../assets/img/faculty3.png" alt="" />
                </div>

                <div class="text">
                  <p>Economics and Management</p>
                  <a href="#"
                    ><img src="../assets/img/white-next.png" alt="#"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="img__and__text">
                <div class="img">
                  <img src="../assets/img/faculty4.png" alt="" />
                </div>

                <div class="text">
                  <p>Natural-technical</p>
                  <a href="#"
                    ><img src="../assets/img/white-next.png" alt="#"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="img__and__text">
                <div class="img">
                  <img src="../assets/img/faculty5.png" alt="" />
                </div>

                <div class="text">
                  <p>Technology and environmental management</p>
                  <a href="#"
                    ><img src="../assets/img/white-next.png" alt="#"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="img__and__text">
                <div class="img">
                  <img src="../assets/img/faculty6.png" alt="" />
                </div>

                <div class="text">
                  <p>Road Transport and Service Technology</p>
                  <a href="#"
                    ><img src="../assets/img/white-next.png" alt="#"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="img__and__text">
                <div class="img">
                  <img src="../assets/img/faculty7.png" alt="" />
                </div>

                <div class="text">
                  <p>Road Transport and Service Technology</p>
                  <a href="#"
                    ><img src="../assets/img/white-next.png" alt="#"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="img__and__text">
                <div class="img">
                  <img src="../assets/img/faculty8.png" alt="" />
                </div>

                <div class="text">
                  <p>Energy Faculty</p>
                  <a href="#"
                    ><img src="../assets/img/white-next.png" alt="#"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="documents">
    <div class="container">
      <h1 class="title">Documents</h1>
      <div class="long__blocks">
        <div class="long__block">
          <p class="long__block__title">DOC1</p>
          <p class="long__block__description">
            Christian Bale (born 1974) is an English actor. Known for his
            versatility and recurring physical
          </p>
          <p class="long__block__example">Example</p>
        </div>
        <div class="long__block">
          <p class="long__block__title">DOC2</p>
          <p class="long__block__description">
            Christian Bale (born 1974) is an English actor. Known for his
            versatility and recurring physical
          </p>
          <p class="long__block__example">Example</p>
        </div>
        <div class="long__block">
          <p class="long__block__title">DOC3</p>
          <p class="long__block__description">
            Christian Bale (born 1974) is an English actor. Known for his
            versatility and recurring physical
          </p>
          <p class="long__block__example">Example</p>
        </div>
      </div>
    </div>
  </section>
  <section class="price">
    <div class="container">
      <h1 class="title">Price</h1>
      <div class="price__border"></div>
    </div>
  </section>
</template>
<style scoped>
body {
  margin: 0;
}
.header {
  background-image: url(../assets/img/allListBanner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.container {
  width: 1140px;
  margin: auto;
}
.flex-row {
  width: 1140px;
  background: #d9d9d9;
  border-radius: 22px;
}
.flex-row h3 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -0.01em;
  color: #323130;
  padding: 35px 0px 0px 35px;
}
.title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 147px;
  letter-spacing: -0.01em;
  color: #323130;
}
.row {
  display: flex;
  flex-flow: wrap;
  margin-left: 20px;
}
.col {
  width: 25%;
  padding-left: -20px;
  padding-bottom: 20px;
}
.block {
  position: relative;
  width: 260px;
  height: 260px;
  background: #1c1c1c;
  border-radius: 17px;
  display: flex;
}

.img__and__text {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.img__and__text .img {
  width: 42px;
  height: 42px;
  object-fit: cover;
  object-position: center;
}
.text {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.text p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: #f5f5f5;
}
.text a img {
  width: 8px;
  height: 16px;
  object-fit: cover;
  object-position: center;
  color: aliceblue;
}

.long__block {
  background: #d9d9d9;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 45px;
  margin-bottom: 35px;
}
.long__block__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -0.01em;
  color: #323130;
}
.long__block__description {
  width: 354px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #323130;
}
.long__block__example {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #323130;
}

.price__border {
  width: 1140px;
  height: 343px;
  background-color: black;
  border-radius: 33px;
}
</style>
