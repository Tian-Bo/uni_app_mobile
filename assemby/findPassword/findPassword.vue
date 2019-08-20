<template>
<view class="find-password">
	<view class="logo"><image src="../../static/images/xiaopaopao.png" mode="widthFix"></image></view>
	<view class="find-password-input"><input type="number" placeholder="请输入你的手机号"></view>
	<view class="verification">
		<view class="verification-input"><input type="number" placeholder="输入验证码"></view>
		<button type="warn">获取验证码</button>
	</view>
	<view class="find-password-input"><input type="number" placeholder="设置新密码"></view>
	<view class="find-password-input"><input type="number" placeholder="确认密码"></view>
	<button type="primary" class="find" @click="find">确认修改</button>
</view>	
</template>
<script>
export default {
	methods: {
		// 登陆
		find() {
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
	
.find-password{
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
	button{
		width: 300upx;
		margin-left: 30upx;
		border-radius: 5upx;
	}
}
.find-password-input,
.verification{
	margin-top: 30upx;
}
.find-password-input,
.verification-input{
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
.find{
	margin-top: 70upx;	
}
</style>