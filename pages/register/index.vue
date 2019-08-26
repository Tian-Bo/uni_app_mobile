<!-- 注册 -->
<template>
<view class="register">
	<view class="regis-head"><image src="../../static/images/xiaopaopao.png"></image></view>
	<view class="regis-item">
		<i class="iconfont icon-tel"></i>
		<input type="number" placeholder="手机号" v-model="tel" maxlength="11">
	</view>
	<view class="regis-item-code">
		<view class="regis-item">
			<i class="iconfont icon-msg"></i>
			<input type="number" placeholder="验证码" v-model="code" maxlength="4">
		</view>
		<button type="warn">{{ getCode }}</button>
	</view>
	<view class="regis-item">
		<i class="iconfont icon-open-password"></i>
		<input type="setPassword" placeholder="密码" v-model="setPassword" maxlength="16" password="true">
	</view>
	<view class="regis-item">
		<i class="iconfont icon-password"></i>
		<input type="affPassword" placeholder="确认密码" v-model="affPassword" maxlength="16" password="true">
	</view>
	<button type="primary" class="regis-submit" @click="register">免费注册</button>
	<button type="default" @click="login">已有账号, 马上登陆</button>
</view>
</template>

<script>
import { checkTel, checkPassword } from '@/static/js/tool.js'
export default {
	data() {
		return {
			// 手机
			tel: '',
			// 验证码
			code: '',
			// 密码
			setPassword: '',
			// 确认密码
			affPassword: '',
			// 获取验证码按钮文字
			getCode: '获取验证码'
		}
	},
	methods: {
		// 跳转登录页
		login() {
			uni.navigateTo({
				url: '/pages/login/index'
			})
		},
		register() {
			// 校验手机号
			if (checkTel(this.tel)) {
				uni.showModal({ content: '请输入正确手机号' })
				return
			}
			// 校验密码
			if (checkPassword(this.setPassword)) {
				uni.showModal({ content: '请输入6-18位包含字母和数字的密码' })
				return
			}
			// 校验两次密码是否一致
			if (this.setPassword !== this.affPassword) {
				uni.showModal({ content: '两次密码输入不一致' })
				return
			}
			
			let params = {
				password: this.setPassword,
				tel: this.tel
			}
			
			this.$uniRequest('/user/register', { data: params, method: 'POST' }, res => {
				try{
					if (res.status === 0) {
						uni.showModal({ content: res.message })
					}
				}
				catch(e){
					console.log(e)
				}
			})
		}
	}
}
</script>

<style lang="scss">
$height: 90upx;

page {
	background-color: $xpp-bg-color-00CCFF;
}

button{
	line-height: $height;
}	

.register{
	padding: 30upx;
}
// 头像
.regis-head{
	width: 200upx;
	height: 200upx;
	margin: 70upx auto;
	overflow: hidden;
	image{
		width: 100%;
		height: 100%;
	}
}
.regis-item-code,
.regis-item{
	display: flex;
	align-items: center;
	height: $height;
	margin-bottom: 30upx;
}
.regis-item{
	background-color: #fff;
	border-radius: 5upx;
	input{
		width: 100%;
		height: 100%;
	}
	i{
		font-size: 48upx;
		padding: 0 20upx;
	}
}
.regis-item-code{
	height: $height;
	justify-content: space-between;
	.regis-item{
		margin-bottom: 0;
	}
	button{
		width: 300upx;
		margin-left: 30upx;
		height: 100%;
		line-height: $height;
		border-radius: 5upx;
	}
}
.regis-submit{
	margin-top: 70upx;
	margin-bottom: 30upx;
}
</style>

