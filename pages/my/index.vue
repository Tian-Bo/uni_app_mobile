<template>
<view class="my">
	<view class="my-title">
		<view class="my-title-left">
			<view class="my-head"><image src="../../static/images/xiaopaopao.png" mode="widthFix"></image></view>
			<view class="my-username">{{ data.username }}</view>
		</view>
		<view class="my-edit" @click="editInformation">个人主页></view>
	</view>
	<view class="my-body">
		<view hover-class="click-255" class="my-body-item" v-for="(item, index) in myList" :key="index" @click="route(item.route)">
			<view class="body-item-left">
				<i class="iconfont icon-setting"></i><text>{{ item.textLeft }}</text>
			</view>
			<view class="body-item-right">
				<text>{{ item.textRight }}</text><i class="iconfont icon-jiantou-right1"></i>
			</view>
		</view>
	</view>
</view>
</template>

<script>
export default {
	data() {
		return {
			data: {},
			myList: [
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'},
				{icon: 'icon-setting', textLeft: '设置', textRight: '设置', route: '/pages/personalData/index'}
			]
		}
	},
	methods: {
		// 跳转个人资料
		editInformation() {
			uni.navigateTo({
				url: '/pages/personalData/index'
			})
		},
		// 跳转
		route(route) {
			uni.navigateTo({
				url: route
			})
		},
		// 获取用户信息
		getInfo() {
			this.$uniRequest('/user/info', {}, res => {
				console.log(res)
				try {
					if (res.status === 0) {
						this.data = res.data[0]
					}
				} catch (e) {}
			});
		}
	},
	onShow() {
		this.getInfo()
	},
}
</script>

<style lang="scss">
	page{
		background-color: #f5f5f5;
	}
	.my-title{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 50upx 30upx;
		background-color: #37BECE;
		color: #fff;
		font-size: 30upx;
		font-weight: 350;
		.my-title-left{
			display: flex;
			align-items: center;
		}
		.my-head{
			width: 150upx;
			height: 150upx;
			border-radius: 50%;
			background-color: #eee;
			overflow: hidden;
			margin-right: 30upx;
			image{
				display: block;
				width: 100%;
			}
		}
	}
	// 主体
	.my-body-item{
		height: 100upx;
		padding: 0 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		@include border-bottom(1px, 100%, #ccc);
		i{
			font-size: 46upx;
		}
		.body-item-left,
		.body-item-right{
			display: flex;
			align-items: center;	
			text{
				font-weight: 400;
			}
		}
		.body-item-left{
			i{
				color: #37BECE;
			}
			text{
				margin-left: 15upx;
				font-size: 36upx;
			}
		}
		.body-item-right{
			text{
				font-size: 30upx;
				color: #666;
			}
		}
	}
</style>

