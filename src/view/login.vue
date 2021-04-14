<template>
  <div style="display: flex;justify-content: center;padding-top: 200px">
    <div style="display: flex;flex-direction: column;text-align: center">
      <h1>后端管理系统</h1>
      <el-form :model="ruleForm" status-icon ref="ruleForm" style="height: min-content">
        <el-form-item label="账号" prop="name" style="width: 100%">
          <el-input v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>
