<script>
	//仅供学习交流，如作它用所承受的法律责任一概与作者无关 !!!!
	//----------------------------------------------------------------------
	//如果您运行的时候，出现了报错，请自行解决,我使用的HBX版本号：2.6.9.20200403
	//推荐此项目运行到APP上，不推荐运行到小程序中，虽然已经做了简单的适配
	//QQ交流群：707134214
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		onLaunch: function() {
			_tool.zaiui_log();
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
	//H5端引用。玄学问题，我这边在这里引入的css，在APP上无效。前面加/也一样。原因未知...
	//可自行测试在APP上是否有效，如果有效，可在vue里删除css引入的代码。
	/* #ifndef APP-PLUS */
		@import "static/colorui/main.css";
		@import "static/colorui/icon.css";
		@import "static/zaiui/style/app.scss";
	/* #endif */
</style>
