<template>
  <div id="container" class="container">
    <div class="dashboard__nav">
      <span class="nav__left"></span>
      百果厨大数据平台
      <span class="nav__right"></span>
    </div>
    <div class="nav__line"></div>

    <div class="container__box">
      <!--dashborad left-->
      <div class="dashboard__left">
        <div class="dashboard__left__section">
          <div class="dashboard__left__section__title">合作店铺分布情况</div>
          <div class="shops__map__count">
            <h2><span>全国合作店铺数量: </span>1120家</h2>
            <div class="shops__map__charts"></div>
          </div>
        </div>

        <div class="dashboard__left__section">
          <div class="dashboard__left__section__title">
            <span>店铺销售额排名</span>
            <a>查看更多&gt;</a>
          </div>
          <div class="dashboard__left__table">
            <div class="dashboard__left__table__header">
              <span>排名</span>
              <span>店铺名称</span>
              <span>销售额</span>
            </div>
            <div class="dashboard__left__table__body">
              <div class="dashboard__left__table__body__item" v-for="(item, index) in shopsList" :key="index">
                <span><i :class="{ 'active': index < 3 }">{{ index + 1 }}</i></span>
                <span>{{ item.name }}</span>
                <span>{{ item.value }}元</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard__center">
        <div class="dashboard__center__box">
          <div class="dashboard__center__title">全店累计交易总额</div>
          <div class="dashboard__count">
            <el-statistic title="" :value="totalCount" />.
            <span>05<i>元</i></span>
          </div>
          <div class="dashboard__center__trade">
            <div>
              今日交易额：&yen;
              <el-statistic :value="todayTrade" /><span>.05</span>
              <span class="green ml10" title="较昨日">
                24%
                <el-icon>
                  <Top />
                  <!-- <Bottom /> -->
                </el-icon>
              </span>
            </div>
            <div>昨日交易额：&yen;<el-statistic :value="yesterdayTrade" /><span>.38</span></div>
          </div>
        </div>
      </div>

      <!--dashborad right-->
      <div class="dashboard__right">
        <!--order statictis-->
        <div class="right__section__order mb10">
          <div class="section__order__item">
            <b>50</b>
            <span>当日新增店铺</span>
          </div>
          <div class="section__order__item">
            <b>265</b>
            <span>当日活跃店铺</span>
          </div>
          <div class="section__order__item">
            <b>158</b>
            <span>认证店铺数</span>
          </div>
        </div>
        <div class="right__section__order">
          <div class="section__order__item">
            <b>128</b>
            <span>生成小程序数</span>
          </div>
          <div class="section__order__item">
            <b>128</b>
            <span>累计开通多门店（家）</span>
          </div>
          <div class="section__order__item">
            <b>12825.50</b>
            <span>累计多门店费用</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { getRandomColor } from '@/utils/tools.ts';
import { onMounted, ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { Top, Bottom } from '@element-plus/icons-vue'

const source = ref(17200012541.05)
const yesterdayTrade = ref(2548761.38)
const todayTrade = ref(5412543.05)
const totalCount = useTransition(source, {
  duration: 2500,
})


setInterval(() => {
  source.value = source.value + 123.45
}, 10000)

const initCharts = () => {
  const myChart = echarts.init(document.querySelector('.shops__map__charts') as HTMLElement);
  // 绘制图表

  const options = {
    grid: {
      left: '10px',
      right: '10px',
      bottom: '10px',
      top: '30px',
      containLabel: true
    },
    tooltip: {},
    xAxis: {
      data: ['上海', '安徽', '江苏', '浙江', '北京', '广东', '福建', '四川', '山东', '湖北', '湖南', '江西', '河南', '重庆', '陕西', '贵州', '云南', '山西', '河北', '天津', '辽宁', '吉林', '黑龙江', '内蒙古', '广西', '海南', '宁夏', '新疆', '西藏', '甘肃', '青海'],
      axisLabel: {
        color: '#00d5fe'
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(76, 48, 251, 0.3)' // 设置 x 轴底部线颜色为白色
        }
      }
    },
    yAxis: {
      axisLabel: {
        color: '#00d5fe'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed', // 设置网格线为虚线
          color: 'rgba(76, 48, 251, 0.1)' // 设置网格线颜色为半透明白色
        }
      }
    },
    series: [
      {
        name: '合作店铺数量',
        type: 'bar',
        data: [20, 10, 15, 30, 7, 15, 10, 20, 25, 40, 45, 34, 55, 51, 119, 31, 34, 54, 56, 21, 73, 135, 41, 14, 23, 30, 7, 15, 10, 20, 25, 40, 45].map(value => ({
          value: value,
          itemStyle: {
            color: getRandomColor()
          }
        }))
      }
    ]
  }

  myChart.setOption(options);
}

const shopsList = ref([
  { name: '山东金锣优先店', value: '3586548.65' },
  { name: '小小霍生鲜超市便利店', value: '1254861.00' },
  { name: '点点鲜食', value: '985241.00' },
  { name: '一元优先品牌超市', value: '658452.20' },
  { name: '柏杰家政服务有限公司（厦门）', value: '235487.30' },
  { name: '在家买菜', value: '158476.05' },
  { name: '百果厨小店', value: '96552.65' },
  { name: '77生活超市Pro', value: '87456.21' },
  { name: '大美批发严选', value: '65254.00' },
  { name: '致远山海集', value: '5482.50' },
])

onMounted(() => {
  // 初始化echarts
  initCharts()
})
</script>

<style lang="scss" scoped>
.container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  min-width: 1400px;
  height: 100vh;
  background-color: rgba(1, 11, 63, 1);

  .dashboard__nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    font-size: 36px;
    color: #fff;
    font-family: "Microsoft YaHei";
    width: 100%;
    overflow: hidden;

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
  }

  .container__box {
    display: flex;
    justify-content: space-between;
  }

  .nav__line {
    position: relative;
    width: 100%;
    margin-top: 20px;
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

  .dashboard__left {
    width: 25%;
    min-width: 400px;
    margin-top: 20px;
    margin-left: 20px;

    .dashboard__left__section {
      margin-bottom: 20px;

      .dashboard__left__section__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        background-image: linear-gradient(to right, rgb(7, 31, 148), rgb(2, 22, 71));
        line-height: 30px;
        padding: 0 20px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 10px;

        a {
          cursor: pointer;
          font-size: 14px;
          font-weight: normal;

          &:hover {
            color: rgb(0, 213, 254);
          }
        }
      }

      .shops__map__count {
        h2 {
          font-size: 18px;
          font-weight: normal;
          color: #fff;
          background: linear-gradient(to bottom, rgb(0, 213, 254), rgb(0, 118, 254));
          /* 裁剪背景到文字 */
          -webkit-background-clip: text;
          background-clip: text;
          /* 使文字颜色透明，显示背景 */
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;

          span {
            font-size: 14px;
          }
        }

        .shops__map__charts {
          width: 100%;
          min-width: 400px;
          height: 300px;
        }
      }

      .dashboard__left__table {
        .dashboard__left__table__header {
          display: flex;
          height: 35px;
          border: 1px solid rgba(76, 48, 251, 0.1);
          align-items: center;
          border-right: 0;

          span {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-start;
            color: rgb(0, 213, 254);
            font-size: 16px;
            height: 35px;
            line-height: 35px;
            border-right: 1px solid rgba(76, 48, 251, 0.1);
            padding: 0 10px;

            &:nth-of-type(1) {
              justify-content: center;
            }

            &:nth-of-type(2) {
              flex: 2;
            }
          }
        }

        .dashboard__left__table__body {
          .dashboard__left__table__body__item {
            display: flex;
            height: 30px;
            align-items: center;
            border: 1px solid rgba(76, 48, 251, 0.1);
            border-right: 0;
            border-top: 0;

            span {
              display: flex;
              flex: 1;
              align-items: center;
              justify-content: flex-start;
              height: 30px;
              line-height: 30px;
              color: rgba(255, 255, 255, 0.8);
              font-size: 14px;
              border-right: 1px solid rgba(76, 48, 251, 0.1);
              padding: 0 10px;

              &:nth-of-type(1) {
                justify-content: center;
              }

              &:nth-of-type(2) {
                flex: 2;
              }

              i {
                display: inline-block;
                width: 20px;
                height: 20px;
                background-color: rgba(220, 220, 220, 0.3);
                border-radius: 50%;
                line-height: 20px;
                text-align: center;
                font-size: 12px;
                font-style: normal;

                &.active {
                  background-color: rgb(245, 154, 35);
                }
              }
            }
          }
        }
      }
    }

  }

  .dashboard__center {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 106px;
    width: 100%;
    min-width: 1400px;
    text-align: center;

    .dashboard__center__box {
      width: 480px;
      height: 135px;
      padding: 20px;
      background-color: rgba(21, 36, 113, 0.3);

      .dashboard__count {
        margin-bottom: 10px;

        span {
          i {
            font-size: 16px;
            color: #fff;
            background-color: transparent !important;
            align-self: baseline;
            font-style: normal;
            margin-left: 5px;
          }
        }
      }

      .dashboard__center__trade {
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        color: #fff;

        &>div {
          display: flex;
          align-items: baseline;
          font-size: 13px;

          span {
            color: rgb(245, 154, 35);
          }

          .green {
            display: flex;
            color: green;
            align-items: flex-end;
          }
        }
      }
    }
  }

  .dashboard__right {
    width: 25%;
    margin-top: 20px;
    margin-right: 20px;

    .right__section__order {
      display: flex;
      justify-content: space-between;
      overflow: hidden;

      .section__order__item {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 32%;
        float: left;
        background-color: rgba(21, 36, 113, 0.3);
        color: #fff;
        padding: 13px 0;
        font-size: 14px;

        b {
          background: linear-gradient(to bottom, rgb(0, 213, 254), rgb(0, 118, 254));
          /* 裁剪背景到文字 */
          -webkit-background-clip: text;
          background-clip: text;
          /* 使文字颜色透明，显示背景 */
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          font-size: 20px;
          margin: 5px 0;
        }
      }
    }
  }
}
</style>