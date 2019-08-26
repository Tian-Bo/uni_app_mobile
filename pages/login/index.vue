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
$height: 90upx;
page {
	background-color: #00ccff;
}
button {
	line-height: $height;
}

.login-logo {
	width: 200upx;
	height: 200upx;
	margin: 0 auto;
	padding: 70upx 0;
	image {
		width: 100%;
		height: 100%;
	}
}
.login-body {
	padding: 0 70upx;
	.login-body-item {
		display: flex;
		align-items: center;
		flex-flow: wrap;
		line-height: 110upx;
		@include border-bottom(0.5px, 100%, #999);
		i {
			font-size: 42upx;
			padding: 0 10upx;
		}
	}
	.login-login {
		margin-top: 70upx;
	}
	.login-hint {
		padding: 0 10upx;
		display: flex;
		align-items: center;
		flex-flow: wrap;
		justify-content: space-between;
		color: #007aff;
		font-size: 28upx;
		margin-top: 15upx;
	}
}
.login-way {
	.login-way-title {
		@include border-top(0.5px, 100%, #999, 50%);
		.login-way-text {
			font-size: 28upx;
			width: 320upx;
			margin: 70upx auto;
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
			width: 120upx;
			height: 120upx;
			margin: 0 30upx;
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
		margin: 5upx auto;
		color: #007aff;
	}
	.login-popup-close {
		margin-top: 20upx;
	}
}
</style>
