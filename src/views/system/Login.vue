<template>
	<el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
		<h3 class="title">系统登录</h3>
		<el-form-item prop="username">
			<el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
		</el-form-item>
		<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
		<el-form-item style="width:100%;">
			<el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
  import {setToken} from "../../utils/auth";
  import {login} from '../../api/system'

	export default {
		data() {
			return {
				logining: false,
				loginForm: {
					username: 'admin',
					password: '123456'
				},
				loginRules: {
					username: [
						{ required: true, message: '请输入账号', trigger: 'blur' },
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
					]
				},
				checked: true
			};
		},
		methods: {
			handleSubmit(ev) {
				this.$refs.loginForm.validate((valid) => {
					if(valid) {
						login(this.loginForm).then( res => {
							const userinfo = res.data.data;
              setToken(userinfo.username);
							localStorage.setItem('user_username',userinfo.username);
							this.$router.push({ path: '/main' });
						}).catch(err => {
							this.$message.error(err);
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-container {
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		background-clip: padding-box;
		margin: 180px auto;
		width: 350px;
		padding: 35px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 25px #cac6c6;
		.title {
			margin: 0px auto 40px auto;
			text-align: center;
			color: #505458;
		}
		.remember {
			margin: 0px 0px 35px 0px;
		}
	}
</style>
