# 项目介绍

项目是基于手机端uni-app框架开发环境的项目，能够同时兼容H5、微信小程序, app

## 项目目录

```js
APP-|
    |---assemby: 这是组件目录 里面的子目录必须要和pages层级目录相同,这个目录里面的子集目录不需要写在开发规范的项目目录中，但要在每个子组件中子组件的功能
       	|---common:公共组件
		|---
		|---
		
	|---npm: 这是通过npm安装的插件
		|---
		|---
		
    |---components: 这是第三方组件库
		|---popup-layer:弹出层组件
			|---login.vue:TB
		|---
		|---
    
    |---pages:视图目录,这个目录相当于每个功能页面的window页面
		|---index:首页
		|---login:登陆
		|---classify:分享
		|---discover:发现
		|---findPassword:找回密码
		|---my:我的
		|---noteLogin:短信登陆
		|---register:注册
		|---personalData:个人资料
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---
		|---

    |---static:静态目录,这个目录存放静态资源
		|---js : 存放第三方js
			|---tool:自定义工具js
			|---filters:过滤器
		|---images : 存放静态图片
		|---css : 存放公共css
				|---default : 公共css
		|---fonts : 字体图标
				|---iconfont : 字体图标

	|---unlis:路由、ajax

	|---App.vue: 项目的全局vue配置

	|---main.js: 项目的全局js配置
	
	|---pages.json: 项目的 pages 节点配置应用由哪些页面组成

	|---uni.scss: 项目的全局scss配置

	|---README.md: 记录

````	



    