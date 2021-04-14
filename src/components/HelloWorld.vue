<template>
  <div class="hello">
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="1-1">待审核用户</el-menu-item>
              <el-menu-item index="1-2">所有用户</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="2-1">待审核商品</el-menu-item>
              <el-menu-item index="2-2">商品标签</el-menu-item>
              <el-menu-item index="2-3">所有商品</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>管理员</span>
              </template>
              <el-menu-item index="3-1">所有管理员</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <home/>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>@yihuo APP 后端管理系统</el-footer>
    </el-container>
  </div>
</template>

<script>
import Home from "@/view/home";
export default {
  name: 'HelloWorld',
  components: {Home},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
