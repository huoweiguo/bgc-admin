<template>
  <div class="page__container">
    <el-descriptions title="店铺审核" :column="4" border>
      <el-descriptions-item label="店铺名称" label-align="right" label-class-name="my-label" class-name="my-content"
        :span="2">小小霍生鲜超市</el-descriptions-item>
      <el-descriptions-item label="公司名称" label-align="right" :span="2">上海名致唯京信息技术有限公司</el-descriptions-item>
      <el-descriptions-item label="店铺简介" label-align="right" :span="4">上海名致唯京信息技术有限公司</el-descriptions-item>
      <el-descriptions-item label="统一社会信用代码" label-align="right" :span="4">XHSJSK13134X43131</el-descriptions-item>
      <el-descriptions-item label="公司实际注册地址" label-align="right" :span="4">上海市临港试验片区1204室</el-descriptions-item>
      <el-descriptions-item label="公司实际经营地址" label-align="right"
        :span="4">上海市黄浦区南京东路1212栋501-505室</el-descriptions-item>
      <el-descriptions-item label="负责人姓名" label-align="right" :span="2">霍维国</el-descriptions-item>
      <el-descriptions-item label="手机号" label-align="right" :span="2">18721586596</el-descriptions-item>

      <el-descriptions-item label="营业执照" label-align="right" :span="4">上海名致唯京信息技术有限公司</el-descriptions-item>
      <el-descriptions-item label="身份证正反面" label-align="right" :span="4">上海名致唯京信息技术有限公司</el-descriptions-item>
      <el-descriptions-item label="卫生许可证" label-align="right" :span="4">1212121</el-descriptions-item>
    </el-descriptions>
    <div class="btn-group">
      <el-button type="success" :icon="Check" @click="agree">同意</el-button>
      <el-button type="danger" :icon="Close" @click="refuse">拒绝</el-button>
    </div>

    <el-dialog v-model="visible" title="审核拒绝" width="450px">
      <el-input type="textarea" :rows="4" maxlength="100" show-word-limit v-model="params.reason" placeholder="请输入拒绝理由"
        clearable />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="visible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import { Check, Close } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue';
const visible = ref(false);
const params = reactive({
  reason: ''
})
const refuse = () => {
  visible.value = true;
}
const agree = () => {
  ElMessageBox.alert('确定同意该店铺的申请吗?', '店铺审核', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>

<style lang="scss" scoped>
.btn-group {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>