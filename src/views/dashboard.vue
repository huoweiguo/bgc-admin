<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted, onUnmounted } from "vue";
let map = null;

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "6570702363a28ce994786cb7acf10d8e",
  };
  AMapLoader.load({
    key: "08fc5312b2a5a38de2f320071d283e20", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "3D", // 是否为3D地图模式
        zoom: 4.9, // 初始化地图级别
        mapStyle: "amap://styles/darkblue",
        resizeEnable: true,
        center: [116.397428, 39.90923], // 初始化地图中心点位置
      });
    })
    .catch((e) => {
      console.log(e);
    });
})


onUnmounted(() => {
  map?.destroy();
})
</script>

<style lang="scss" scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
}
</style>