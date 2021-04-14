<template>
  <el-container style="height: 100%">
    <el-header>
      后端管理系统
      <el-dropdown trigger="click">
        <el-avatar shape="square" :size="50" ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
            default-active="2"
            :router="true"
            class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1" route="/home/user_audit">待审核用户</el-menu-item>
            <el-menu-item index="1-2" route="/home/user_list">所有用户</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="2-1">商品标签</el-menu-item>
            <el-menu-item index="2-2">所有商品</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理员</span>
            </template>
            <el-menu-item index="3-1" route="/home/admin_list">所有管理员</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <el-footer>@yihuo APP 后端管理系统</el-footer>
  </el-container>

</template>

<script>
export default {
  name:'home',
}
</script>
