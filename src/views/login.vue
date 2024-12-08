<template>
  <div class="login__container">
    <div class="login__inner">
      <h2>百果厨商户管理系统</h2>
      <el-form ref="ruleFormRef" label-width="70px" :model="ruleForm" :rules="rules" class="demo-ruleForm" size="middle"
        status-icon>
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" autocomplete="off" v-model="ruleForm.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入验证码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%; margin-top: 20px;"
            @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
// import { useUserStore } from "@/store/user.ts";
// const userStore = useUserStore();
// console.log(userStore.token, 'token');
interface RuleForm {
  account: string
  password: string
  code: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  account: '',
  password: '',
  code: ''
})

const rules = reactive<FormRules<RuleForm>>({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    }
  })
}
</script>

<style lang="scss">
.login__inner {
  .el-form-item__label {
    color: #fff;
  }
}
</style>

<style lang="scss" scoped>
.login__container {
  width: 100%;
  height: 100vh;
  background-color: rgba(2, 13, 30, 1);

  .login__inner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    height: 350px;
    padding: 40px;
    background-color: rgba(28, 35, 74, 1);
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-sizing: border-box;

    h2 {
      font-size: 20px;
      color: #fff;
      text-align: center;
      font-weight: normal;
      margin-bottom: 40px;
    }
  }
}
</style>