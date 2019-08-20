<template>
	<view class="register"><register /></view>
</template>

<script>
// 注册表单填写
import register from '@/assemby/register/register.vue';

export default {
	components: {
		register
	}
};
</script>

<style lang="scss">
page {
	background-color: $xpp-bg-color-00CCFF;
}
</style>
