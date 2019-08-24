<template>
	<view class="login">
		<view class="login-logo"><image src="../../static/images/xiaopaopao.png"></image></view>
		<view class="login-body">
			<view class="login-body-item">
				<i class="iconfont icon-user1"></i>
				<input type="number" v-model="tel" placeholder="手机号" maxlength="11" />
			</view>
			<view class="login-body-item">
				<i class="iconfont icon-password"></i>
				<input type="password" v-model="password" placeholder="密码" maxlength="16" password="true" />
			</view>
			<button type="primary" class="login-login" @click="login">登陆</button>
			<view class="login-hint">
				<view @click="registerSkip">立即注册</view>
				<view @click="forgetPassword">忘记密码?</view>
			</view>
			<view class="login-way">
				<view class="login-way-title"><view class="login-way-text">使用第三方账号登陆</view></view>
				<view class="login-way-body">
					<view class="login-way-item"><image src="../../static/images/weibo.png"></image></view>
					<view class="login-way-item"><image src="../../static/images/weixin.png"></image></view>
					<view class="login-way-item"><image src="../../static/images/qq.png"></image></view>
				</view>
			</view>
		</view>
		<popup-layer ref="popupRef" :direction="'top'">
			<view class="login-popup">
				<button type="default" @click="findPassword">找回密码</button>
				<button type="default" @click="noteLogin">短信登陆</button>
				<button type="default" class="login-popup-close" @click="loginClose">取消</button>
			</view>
		</popup-layer>
	</view>
</template>

<script>
import { checkTel, checkPassword } from '@/static/js/tool.js'
import popupLayer from '@/components/popup-layer/popup-layer.vue';

export default {
	components: {
		popupLayer
	},
	data() {
		return {
			tel: '',
			password: ''
		};
	},
	methods: {
		// 登陆
		login() {
			// 校验手机号
			if (checkTel(this.tel)) {
				uni.showModal({ content: '请输入正确手机号' })
				return
			}
			// 校验密码
			if (checkPassword(this.password)) {
				uni.showModal({ content: '请输入6-18位包含字母和数字的密码' })
				return
			}
			
			let params = {
				tel: this.tel,
				password: this.password
			};

			this.$uniRequest('/user/login', { data: params, method: 'POST' }, res => {
				try {
					if (res.status === 0) {
						uni.switchTab({ url: '/pages/my/index' })
						uni.setStorageSync('token', res.data.token)
					}
				} catch (e) {}
			});
		},
		// 跳转注册
		registerSkip() {
			uni.navigateTo({
				url: '/pages/register/index'
			});
		},
		// 找回密码
		findPassword() {
			uni.navigateTo({
				url: '/pages/findPassword/findPassword'
			});
		},
		// 忘记密码
		forgetPassword() {
			this.$refs.popupRef.show();
		},
		// 短信登陆
		noteLogin() {
			uni.navigateTo({
				url: '/pages/noteLogin/noteLogin'
			});
		},
		// 取消
		loginClose() {
			this.$refs.popupRef.close();
		}
	}
};
</script>

<style lang="scss">
$height: 90rpx;
page {
	background-color: #00ccff;
}
button {
	line-height: $height;
}

.login-logo {
	width: 200rpx;
	height: 200rpx;
	margin: 0 auto;
	padding: 70rpx 0;
	image {
		width: 100%;
		height: 100%;
	}
}
.login-body {
	padding: 0 70rpx;
	.login-body-item {
		display: flex;
		align-items: center;
		flex-flow: wrap;
		line-height: 110rpx;
		@include border-bottom(0.5px, 100%, #999);
		i {
			font-size: 42rpx;
			padding: 0 10rpx;
		}
	}
	.login-login {
		margin-top: 70rpx;
	}
	.login-hint {
		padding: 0 10rpx;
		display: flex;
		align-items: center;
		flex-flow: wrap;
		justify-content: space-between;
		color: #007aff;
		font-size: 28rpx;
		margin-top: 15rpx;
	}
}
.login-way {
	.login-way-title {
		@include border-top(0.5px, 100%, #999, 50%);
		.login-way-text {
			font-size: 28rpx;
			width: 320rpx;
			margin: 70rpx auto;
			color: #666;
			text-align: center;
			background-color: $xpp-bg-color-00CCFF;
			position: relative;
			z-index: 1;
		}
	}
	.login-way-body {
		display: flex;
		align-items: center;
		justify-content: center;
		.login-way-item {
			width: 120rpx;
			height: 120rpx;
			margin: 0 30rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
// 登陆弹窗
.login-popup {
	button {
		width: 98%;
		margin: 5rpx auto;
		color: #007aff;
	}
	.login-popup-close {
		margin-top: 20rpx;
	}
}
</style>
