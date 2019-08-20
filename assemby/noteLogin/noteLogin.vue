<template>
<view class="note-login">
	<view class="logo"><image src="../../static/images/xiaopaopao.png" mode="widthFix"></image></view>
	<view class="note-login-input"><input type="number" placeholder="请输入你的手机号"></view>
	<view class="verification">
		<view class="note-login-input"><input type="number" placeholder="输入验证码"></view>
		<button type="warn">获取验证码</button>
	</view>
	<button type="primary" class="login" @click="login">登陆</button>
</view>
</template>

<script>
export default {
	methods: {
		// 登陆
		login() {
			uni.switchTab({
				url: '/pages/my/my'
			})
		}
	}
}
</script>

<style lang="scss">
$heihgt: 90upx;

button{
	line-height: $heihgt;
}
	
.note-login{
	padding: 30upx;
}
.logo{
	width: 200upx;
	height: 200upx;
	margin: 0 auto;
	padding: 70upx 0;
	image{
		width: 100%;

	}
}
.verification{
	display: flex;
	align-items: center;
	height: 100%;
	margin-top: 20upx;
	button{
		width: 300upx;
		margin-left: 30upx;
		border-radius: 5upx;
	}
}
.note-login-input{
	height: $heihgt;
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 0 30upx;
	border-radius: 5upx;
	text{
		color: #007AFF;
	}
}
.login{
	margin-top: 70upx;	
}
</style>
