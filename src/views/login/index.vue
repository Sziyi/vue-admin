<template>
  <div class="login">
    <el-form :model="loginForm" ref="LoginForm" :rules="loginRules" class="l">
      <h2>欢迎来到VueAdmin管理系统</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"
      /></el-form-item>
      <el-form-item label="密码&emsp;" prop="password">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="loginForm.code" class="yz" />
        <img :src="url" class="img" @click="gitImg"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button>获取密码</el-button></el-form-item
      >
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const LoginForm = ref()
const store = useStore()
const router = useRouter()
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})

//用户密码校验
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码必填项'
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      message: '验证码必填项'
    }
  ]
})

//图片验证码
const url = computed(() => {
  return store.getters.captchaImg
})
//调用图片接口
const getCapt = async () => {
  const res = await store.dispatch('user/getCapt')
  // console.log(res)
  loginForm.token = res.data.data.token
}
getCapt()
// 图形吗切换
const gitImg=()=>{
getCapt()
}
//点击登录
const login = async () => {
  if (!LoginForm.value) return
  await LoginForm.value.validate(async (valid) => {
    if (valid) {
      const res = await store.dispatch('user/login', loginForm)
      console.log(res)
      if (res.data.code === 200) {
        res()
        router.push('/')
      }
    }
  })
}
</script>
<style lang="scss">
.login {
  position: relative;
  height: 100%;
  .l {
    width: 500px;
    padding: 0 35px;
    position: absolute;
    left: 50%;
    margin-left: -260px;
    top: 160px;
    overflow: hidden;
    h2 {
      text-align: center;
      padding: 10px 10px;
    }
    .yz {
      width: 180px;
    }
    .img {
      position: absolute;
      left: 200px;
      height: 100pxs;
    }
  }
}
</style>
