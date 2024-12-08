<template>
  <el-container>
    <el-header>
      <div class="bgc__header">
        <div class="bgc__logo">
          <img src="@/assets/logo.png" class="logo__img" />
          <img src="@/assets/title.png" />
        </div>
        <div class="bgc__nickname">
          <el-badge is-dot>
            <el-icon>
              <Bell />
            </el-icon>
          </el-badge>

          <el-dropdown>
            <div class="avator__user">
              <el-avatar size="small" :icon="UserFilled"></el-avatar>
              <span>18721586596</span>
            </div>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>清理缓存</el-dropdown-item>
                <el-divider />
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div class="bgc__aside">
          <el-menu default-active="dashboard" class="el-menu-vertical-demo">

            <template v-for="item in menuList" :key="item.name">

              <el-menu-item :index="item.name" v-if="!item.children || item.children?.length === 0" :route="item.path"
                @click="$router.push(item.path)">
                <el-icon>
                  <component :is="iconName[item.meta.icon]" />
                </el-icon>
                {{ item.meta.title }}
              </el-menu-item>

              <el-sub-menu v-else :index="item.name">
                <template #title>
                  <el-icon>
                    <component :is="iconName[item.meta.icon]" />
                  </el-icon>
                  <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item-group v-if="item.children">
                  <el-menu-item :index="attr.name" v-for="attr in item.children" :key="attr.name"
                    @click="$router.push(item.path + '/' + attr.path)" :route="attr.path">{{
                      attr.meta.title
                    }}</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </template>
          </el-menu>
        </div>
      </el-aside>
      <el-main class="bgc__main"><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Monitor, VideoCamera, Management, Tools, UserFilled, Bell } from '@element-plus/icons-vue'
import { defineRoutes } from '@/router'

const iconName = reactive({
  'Monitor': Monitor,
  'VideoCamera': VideoCamera,
  'Management': Management,
  'Tools': Tools
})
const msgCount = ref(0)
const menuList = ref(defineRoutes)

</script>

<style lang="scss">
.el-dropdown,
.el-dropdown * {
  outline: none;
}

/* 样式 */
.el-header {
  height: 50px;
  background-color: rgba(24, 24, 28, 1);
}

.el-aside {
  background-color: rgba(24, 24, 28, 1);
  height: calc(100vh - 50px);
}

.bgc__main {
  padding: 0;
}

.bgc__aside {
  .el-menu {
    background-color: transparent;
    border-right: none;
  }

  .el-sub-menu__title {
    color: #fff;
    height: 50px;
  }

  .el-menu-item {
    color: #fff;
    height: 50px;
    line-height: 50px;
  }

  .el-menu-item:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .el-sub-menu__title:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .el-menu-item.is-active {
    color: #409eff;
  }

  .el-sub-menu .el-menu-item {
    height: 50px;
    line-height: 50px;
  }

  .el-menu-item-group__title {
    padding: 0;
  }
}

.bgc__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 50px;

  .bgc__logo {
    display: flex;

    img {
      display: block;
      height: 25px;
      margin-right: 10px;
    }

    .logo__img {
      height: 20px;
    }
  }
}

.avator__user {
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;

  span {
    margin-left: 5px;
  }
}

.bgc__nickname {
  display: flex;
  align-items: flex-end;

  .el-divider--horizontal {
    margin: 0;
  }

  .el-badge {
    display: flex;
    align-items: flex-end;
    margin-right: 10px;
  }
}
</style>