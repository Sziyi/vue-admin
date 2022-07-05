<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#fff"
      router
      unique-opened
    >
      <!-- <el-menu-item index="/index">
        <el-icon>
          <svg-icon icon="user"></svg-icon>
        </el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="/">
        <template #title>
          <el-icon> <svg-icon icon="user"></svg-icon></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/sys/users">
          <svg-icon icon="user"></svg-icon
          ><span>&emsp;用户管理</span></el-menu-item
        >
        <el-menu-item index="/sys/roles">
          <svg-icon icon="user"></svg-icon
          ><span>&emsp;角色管理</span></el-menu-item
        >
        <el-menu-item index="1-3">
          <svg-icon icon="user"></svg-icon
          ><span>&emsp;菜单管理</span></el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon> <svg-icon icon="user"></svg-icon></el-icon>
          <span>系统工具</span>
        </template>
        <el-menu-item index="3-3">
          <svg-icon icon="user"></svg-icon
          ><span>&emsp;数字字典</span></el-menu-item
        >
      </el-sub-menu> -->

      <MenuItem
        v-for="(item, index) in list"
        :key="index"
        :tree="item"
      ></MenuItem>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import MenuItem from './menuItem'
import { getMenus, getParentMenu } from '@/utils/menus'
import { reactive } from 'vue'
const router = useRouter()
const list = reactive(getMenus(getParentMenu(router.getRoutes())))
</script>
<style scoped lang="scss"></style>
