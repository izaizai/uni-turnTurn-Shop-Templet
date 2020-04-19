<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">个人简介</block>
			<block slot="right">
				<text class="text-orange">保存</text>
			</block>
		</bar-title>
		
		<view class="cu-form-group solid-top">
			<textarea placeholder="优秀的用户会这么写。例如:我是XX熊，最爱收集各种闲置物品，交朋友。在架的宝贝都可以交易，快来联系我吧!"/>
			<text class="text-gray font-num-view">0 / 300</text>
		</view>
		
		
		<!--小程序端显示-->
		<!-- #ifdef MP -->
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom">
			<view class="flex flex-direction">
				<button class="cu-btn bg-red">保存个人简介</button>
			</view>
		</view>
		<!-- #endif -->
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		components: {
			barTitle
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	.cu-form-group {
		textarea {
			height: 8.6em;
		}
		.font-num-view {
		    position: absolute;
		    bottom: 9.09rpx;
		    right: 27.27rpx;	
		}
	}
</style>
