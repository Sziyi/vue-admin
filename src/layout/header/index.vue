<template>
<div class="h">
  <header class="header">
    <h2>VueAdmin后台管理系统</h2>
    <img src="../../assets/1.jpg" class="img" />
    <el-dropdown>
      <span class="el-dropdown-link">
        test
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="tc">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span class="s">视频讲解</span>
    <span class="s">网站</span>
  </header>
   <div class='tagsview'>
      <TagsView></TagsView>
    </div>
    </div>
</template>

<script setup>
import route from '../../router'

import TagsView from '@/components/TagsView'
const tc = () => {
  localStorage.removeItem('router')
  localStorage.removeItem('authorization')
  localStorage.removeItem('token')
  route.push('/login')
}
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 50px;
  background-color: #17b3a3;
  h2 {
    text-align: center;
    line-height: 50px;
    width: 75%;
    float: left;
  }
  .img {
    width: 35px;
    height: 35px;
    float: left;
    margin-top: 8px;
    border-radius: 50%;
  }
  .el-dropdown {
    line-height: 50px;
    margin-left: 10px;
  }
  .s {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin-left: 15px;
    color: gray;
    font-size: 15px;
  }
  .s:hover {
    color: rgb(22, 110, 242);
    border-bottom: 2px solid rgb(22, 110, 242);
  }
}
.h{
  height:93px;
  background-color: antiquewhite;
  .tagsview {
    color: #333;
    border-bottom: 1px solid #f5f7f9;
    height: 40px;
  }
}
</style>
