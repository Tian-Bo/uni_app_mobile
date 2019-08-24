<template>
	<view class="find-password">
		<find-password />
	</view>
</template>

<script>
import findPassword from "@/assemby/findPassword/findPassword.vue"

export default {
	components: {
		findPassword
	}
}
</script>

<style lang="scss">
page{
	background-color: $xpp-bg-color-00CCFF;
}
</style>
