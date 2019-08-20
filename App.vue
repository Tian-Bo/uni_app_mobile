<script>
// 引入字体图标
import '@/static/fonts/iconfont.css'
// 引入公共css
import '@/static/css/default.css'

export default {
	onLaunch: function() {
		console.log('App Launch')
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	}
}
</script>

<style>
.iconfont {
	display: inline;
	color: #666;
}
body,html{
	background-color: #fff;
	min-height: 100%;
}
/* 去除H5端的导航 */
/* #ifdef H5 */
uni-page-head {
	display: none;
}
/* #endif */
</style>
