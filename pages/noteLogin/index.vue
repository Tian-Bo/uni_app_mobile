<template>
<view class="note-login">
	<note-login />
</view>
</template>

<script>
import noteLogin from '@/assemby/noteLogin/noteLogin.vue'
	
export default {
	components: {
		noteLogin
	}
}
</script>

<style lang="scss">
page{
	background-color: $xpp-bg-color-00CCFF;
}
</style>
