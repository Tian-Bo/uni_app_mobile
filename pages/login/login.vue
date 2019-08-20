<template>
	<view class="login">
		<login />
	</view>
</template>

<script>
// 登陆
import login from '@/assemby/login/login.vue'

export default {
	components: {
		login
	}
}
</script>

<style lang="scss">
page{
	background-color: #00CCFF;
}
</style>