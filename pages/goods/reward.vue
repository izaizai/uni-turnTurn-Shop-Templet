<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-red">
			<block slot="content">打赏</block>
		</bar-title>
		
		<view class="padding bg-white">
			<image src="/static/images/reward/zfb.png" mode="widthFix"/>
			<image src="/static/images/reward/wx.png" mode="widthFix"/>
		</view>
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		components: {
			barTitle, 
		},
		data() {
			return {
				
			}
		},
		onReady() {
			_tool.setBarColor(false);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	
	image {
		width: 100%;
	}
</style>

