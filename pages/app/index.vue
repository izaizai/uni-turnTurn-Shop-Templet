<template>
	<view>
		<!--首页-->
		<home :scrollY="scrollY" :scrollBottom="scrollBottom" :show="tabID==0?true:false" v-if="loadOn.home"/>
		
		<!--发现-->
		<find :scrollY="scrollY" :scrollBottom="scrollBottom" :show="tabID==1?true:false" v-if="loadOn.find"/>
		
		<!--卖二手-->
		<sell :scrollY="scrollY" :scrollBottom="scrollBottom" :show="tabID==2?true:false" v-if="loadOn.sell" @closeTap="sellCloseTap"/>
		
		<!--消息-->
		<news :scrollY="scrollY" :scrollBottom="scrollBottom" :show="tabID==3?true:false" v-if="loadOn.news"/>
		
		<!--我的-->
		<my :scrollY="scrollY" :scrollBottom="scrollBottom" :show="tabID==4?true:false" v-if="loadOn.my"/>
		
		<!--底部导航-->
		<footer-tabbar :tabID='tabID' :msgDot='true' @tabTap='tabTap'/>
	</view>
</template>

<script>
	//加载组件
	import home from '@/components/zaiui-common/view/home';
	import find from '@/components/zaiui-common/view/find';
	import sell from '@/components/zaiui-common/view/sell';
	import news from '@/components/zaiui-common/view/news';
	import my from '@/components/zaiui-common/view/my';
	
	//固定组件
	import footerTabbar from '@/components/zaiui-common/footer/footer-tabbar';
	
	//工具函数
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		components: { 
			home, find, sell, news, my, footerTabbar, 
		},
		data() {
			return {
				loadOn: {home: true, find: false, sell: false, news: false, my: false }, scrollY: 0, scrollBottom: 0, tabID: 0, tabIndex: 0,
			}
		},
		onLoad() {
			
		},
		onReady() {
			_tool.setBarColor(true);
		},
		methods: {
			tabTap(index) {
				this.tabIndex = this.tabID;
				if (index == 1 && !this.loadOn.find) {
					this.loadOn.find = true;
				}
				if (index == 2 && !this.loadOn.sell) {
					this.loadOn.sell = true;
				}
				if (index == 3 && !this.loadOn.news) {
					this.loadOn.news = true;
				}
				if (index == 4 && !this.loadOn.my) {
					this.loadOn.my = true;
				}
				this.tabID = index;
				//设置颜色
				if (index == 0) {
					_tool.setBarColor(false);
				}
				if (index == 1 || index == 2 || index == 3) {
					_tool.setBarColor(true);
				}
				if (index == 4) {
					_tool.setBarColor(false);
				}
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 0
				});
			},
			sellCloseTap() {
				this.tabTap(this.tabIndex);
			},
		},
		onPageScroll(e) {
			this.scrollY = e.scrollTop;
			//console.log(e.scrollTop);
		},
		onReachBottom(e) {
			let timestamp = new Date().getTime();
			this.scrollBottom = timestamp;
		},
	}
</script>

<style lang="scss">
	//APP端引用。玄学问题，在这里引入css文件后，APP端才生效，在app.vue里引入无效。原因未知...
	//可自行测试在APP上是否有效，如果有效，可删除下面的引入代码。
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
</style>
