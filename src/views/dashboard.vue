<template>
  <div id="container" class="continer">
    <div class="dashdoard__nav">
      <span class="nav__left"></span>
      百果厨大数据平台
      <span class="nav__right"></span>
      <div class="nav__line"></div>
    </div>

    <!--dashborad left-->
    <div class="dashdoard__left">
      <div class="dashdoard__left__section">
        <div class="dashdoard__left__section__title">门店分布情况</div>
        <div class="shops__map__count">
          <h2>全国门店: 1120家</h2>
          <div class="shops__map__charts"></div>
        </div>
      </div>
    </div>

    <!--dashborad right-->
    <div class="dashdoard__right"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.continer {
  padding: 0px;
  margin: 0px;
  width: 100%;
  min-width: 1200px;
  height: 100vh;
  background-color: rgba(1, 11, 63, 1);
  overflow: hidden;

  .dashdoard__nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    font-size: 36px;
    color: #fff;
    font-family: "Microsoft YaHei";

    span {
      position: relative;
      display: block;
      height: 65px;
      width: 35%;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
      }
    }

    .nav__left {
      transform: skew(-30deg);
      background-image: linear-gradient(to right, rgb(1, 11, 63), rgb(22, 37, 115));
      border-right: 1px solid rgb(1, 106, 178);

      &::after {
        background-image: linear-gradient(to right, rgb(1, 11, 63), rgb(1, 106, 178));
      }
    }

    .nav__right {
      transform: skew(30deg);
      background-image: linear-gradient(to right, rgb(22, 37, 115), rgb(1, 11, 63));
      border-left: 1px solid rgb(1, 106, 178);

      &::after {
        background-image: linear-gradient(to right, rgb(1, 106, 178), rgb(1, 11, 63));
      }
    }

    .nav__line {
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 1px;

      &::after {
        content: '';
        position: absolute;
        left: 20%;
        bottom: 0;
        width: 30%;
        height: 1px;
        background-image: linear-gradient(to right, rgb(1, 11, 63), rgb(13, 191, 206));
      }

      &::before {
        content: '';
        position: absolute;
        right: 20%;
        bottom: 0;
        width: 30%;
        height: 1px;
        background-image: linear-gradient(to right, rgb(13, 191, 206), rgb(1, 11, 63));
      }
    }
  }

  .dashdoard__left {
    width: 25%;
    margin-top: 50px;
    margin-left: 20px;

    .dashdoard__left__section {
      .dashdoard__left__section__title {
        height: 30px;
        background-image: linear-gradient(to right, rgb(7, 31, 148), rgb(2, 22, 71));
        line-height: 30px;
        padding: 0 20px;
        color: #fff;
        font-weight: bold;
      }
    }
  }

  .dashdoard__right {
    width: 25%;
    margin-top: 50px;
    margin-right: 20px;
  }
}
</style>