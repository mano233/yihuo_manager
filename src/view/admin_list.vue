<template>
  <div>
    <h4 style="margin-top: 0">管理员列表</h4>
    <!--<el-table-->
    <!--    :data="tableData"-->
    <!--    v-loading="loading"-->
    <!--    style="width: 100%">-->
    <!--  <el-table-column-->
    <!--      prop="id"-->
    <!--      label="ID"-->
    <!--      width="50">-->
    <!--  </el-table-column>-->
    <!--  <el-table-column-->
    <!--      label="用户名"-->
    <!--      width="180">-->
    <!--    <template slot-scope="scope">-->
    <!--      {{ scope.row.name }}-->
    <!--    </template>-->
    <!--  </el-table-column>-->
    <!--  <el-table-column label="密码">-->
    <!--    <template slot-scope="scope">-->
    <!--      {{scope.row.pwd}}-->
    <!--    </template>-->
    <!--  </el-table-column>-->
    <!--  <el-table-column label="操作">-->
    <!--    <template slot-scope="scope">-->
    <!--      <el-button-->
    <!--          size="mini"-->
    <!--          type="danger"-->
    <!--          @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
    <!--    </template>-->
    <!--  </el-table-column>-->
    <!--</el-table>-->
    <!--<el-pagination-->
    <!--    background-->
    <!--    :page-size.sync="pageSize"-->
    <!--    :current-page.sync="currentPage"-->
    <!--    layout="prev, pager, next"-->
    <!--    @current-change="changePage"-->
    <!--    :total="total">-->
    <!--</el-pagination>-->
  </div>
</template>

<script>
export default {
  name: "admin_list"
}
</script>

<style scoped>

</style>
