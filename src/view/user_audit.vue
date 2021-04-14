<template>
  <div>
    <h4 style="margin-top: 0">待审核用户列表</h4>
      <el-table
          :data="tableData"
          v-loading="loading"
          style="width: 100%">
        <el-table-column
            prop="id"
            label="ID"
            width="50">
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
                type="success"
                @click="handleEdit(scope.$index, scope.row)">通过</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
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
import {getAllUsers} from "../api/apis";
export default {
  name: "user_audit",
  created () {
    this.changePage(1)
  },
  data() {
    return {
      currentPage:1,
      pageSize:10,
      loading:true,
      total:0,
      tableData: []
    }
  },
  methods: {
    changePage(e){
      this.currentPage = e
      getAllUsers(this.pageSize,this.currentPage,0,0).then(({content})=>{
        this.total =content.total
        this.tableData = content.list
        this.loading = false
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>

</style>
