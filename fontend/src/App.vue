<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <el-container>
    <el-header>
    </el-header>
    <el-main>
      <div style="width: 70%">
        <!--      <img alt="intro." src="./assets/intro.png" style="width: 100%">-->
        <!--      <div onclick="window.open('https://www.baidu.com')"><img src="./assets/strat.png" style="width: 100%"></div>-->
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" :disabled="!edit" class="demo-ruleForm" label-width="100px">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="resource" required>
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="出生日期" required>
            <el-date-picker v-model="ruleForm.date1" placeholder="选择日期" style="width: 100%;"
                            type="date"></el-date-picker>
          </el-form-item>
          <el-form-item label="地址" required>
            <el-input
                placeholder="请输入所在地"
                v-model="ruleForm.address"
                clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="e-mail" required>
            <el-input
                placeholder="e-mail@example.com "
                v-model="ruleForm.email"
                clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="phone" required>
          <el-input
              placeholder="+8612345678910"
              v-model="ruleForm.phone"
              clearable>
          </el-input>
        </el-form-item>
          <el-form-item label="graduateSchool" required>
            <el-input
                placeholder="graduateSchool"
                v-model="ruleForm.graduateSchool"
                clearable>
            </el-input>
          </el-form-item>

          <el-form-item label="自我描述" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea"></el-input>
          </el-form-item>

        </el-form>
        <el-form v-if="edit">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// import HelloWorld from './components/UsrPage.vue'

import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      edit: true,
      ruleForm: {
        name: '',
        gender: '',
        date1: '',
        address: '',
        email: '',
        phone: '',
        graduateSchool: '',
        desc: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
          {min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur'}
        ],
        date1: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],
        gender: [
          {type: true, required: true, message: '请至少选择一个', trigger: 'change'}
        ],
        phone: [
          {required: true, message: '请填写phone', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请填写e-mail', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '请填写address', trigger: 'blur'}
        ],
        graduateSchool: [
          {required: true, message: '请填写school', trigger: 'blur'}
        ]

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const TEST_URL_PREFIX = '/api';
          const url=`${TEST_URL_PREFIX}/create/`;
          axios.post(url, this.ruleForm)
              .then(response =>{
                this.ruleForm = response.data
                this.edit = false
              }, errResponse => {
                console.log(errResponse)
              })
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
