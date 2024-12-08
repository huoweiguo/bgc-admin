<template>
  <div class="page-box">
    <BreadCrumb />
    <div class="page__container">
      <el-form :inline="true" :model="params" class="demo-form-inline">
        <el-form-item label="店铺名称">
          <el-input v-model="params.shopName" placeholder="请输入店铺名称" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="shopName" label="店铺名称" align="center" />
        <el-table-column prop="account" label="商家账号" align="center" />
        <el-table-column prop="date" label="注册时间" align="center" />
        <el-table-column prop="date" label="店铺状态" align="center" />
        <el-table-column prop="count" label="当日营业额" align="center" />
        <el-table-column prop="total" label="总营业额" align="center" />
      </el-table>
      <div class="page__footer">
        <el-pagination background layout="prev, pager, next, jumper" size="small" :total="total" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { reactive, ref } from 'vue'

const tableData = ref([])
const total = ref(100)
const params = reactive({
  shopName: '',
  pageNum: 1,
  pageSize: 20
})

const query = () => { }
</script>