<template>
  <div class="common-layout">
    <aside class="aside">
      <Aside></Aside>
    </aside>
    <div class="r">
      <Header></Header>
      <Main></Main>
    </div>
  </div>
</template>

<script setup>
import Aside from './aside'
import Header from './header'
import Main from './main'
</script>
<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;
  display: flex;
}
.aside {
  width: 200px;
  height: 100%;
  background: rgb(84, 92, 100);
  float: left;
}
.r {
  flex: 1;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
