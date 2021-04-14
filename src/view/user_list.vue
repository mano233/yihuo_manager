<template>
  <div>
    <h4 style="margin-top: 0">所有用户列表</h4>
    <!--<div style="display: flex">-->
    <!--  <el-input-->
    <!--      placeholder="输入用户名"-->
    <!--      clearable>-->
    <!--  </el-input>-->
    <!--  <el-button type="primary" icon="el-icon-search">搜索</el-button>-->
    <!--</div>-->

    <el-table
        :data="tableData"
        v-loading="loading"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID">
      </el-table-column>
      <el-table-column
          label="注册日期"
          width="280">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.ctime }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="姓名"
          width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>邮箱: {{ scope.row.email }}</p>
            <p>电话: {{ scope.row.telPhone }}</p>
            <p>qq: {{ scope.row.qq }}</p>
            <p>微信: {{ scope.row.wechat }}</p>
            <div slot="reference" class="name-wrapper">
              {{ scope.row.name }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status===0">待审核</el-tag>
          <el-tag type="success" v-if="scope.row.status===1">正常</el-tag>
          <el-tag type="warning" v-if="scope.row.status===3">锁定</el-tag>
          <el-tag type="danger"  v-if="scope.row.status===-1">已删除</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          prop="telPhone"
          label="电话">
      </el-table-column>
      <el-table-column
          prop="qq"
          label="QQ">
      </el-table-column>
      <el-table-column
          prop="wechat"
          label="微信">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        :page-size.sync="pageSize"
        :current-page.sync="currentPage"
        layout="prev, pager, next"
        @current-change="changePage"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {getAllUsers,delUser} from "../api/apis";

export default {
  name: "user_list",
  created () {
    this.changePage(1)
  },
  data() {
    return {
      currentPage:1,
      pageSize:10,
      total:0,
      loading:true,
      tableData: []
    }
  },
  methods: {
    changePage(e){
      this.currentPage = e
      getAllUsers(this.pageSize,this.currentPage,null,0).then(({content})=>{
        this.total = content.total
        this.tableData = content.list
        this.loading = false
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      delUser(row.id).then((e)=>{
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>

</style>
