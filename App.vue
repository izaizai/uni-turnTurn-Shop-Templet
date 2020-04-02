<script>
	//本来想仿个完整的转转APP项目，但发现HBX或uni-app的坑，真的太多了，各种玄学BUG，搞的不怎么想玩uni-app了。
	//如果您运行的时候，出现了报错，请自行解决，或关闭V3编译模式，我使用的版本号：2.6.8.20200330
	//目前发现有很多的玄学问题，+ dom操作的一些问题，心态炸了，不想弄了，直接发布吧。。。。
	//推荐此项目运行到APP上，不推荐运行到小程序中，虽然已经做了简单的适配
	//微信小程序端，有原生开发的商城模板，地址：https://github.com/itianc/WeChat-ColorUI-shop-templet
	//QQ交流群：707134214
	export default {
		onLaunch: function() {
			//console.log('App Launch')
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	//H5端引用。玄学问题，我这边在这里引入的css，在APP上无效。。原因未知...
	//可自行测试在APP上是否有效，如果有效，可在vue里删除css引入的代码。
	/* #ifndef APP-PLUS */
		@import "static/colorui/main.css";
		@import "static/colorui/icon.css";
		@import "zaiui/style/app.scss";
	/* #endif */
</style>
