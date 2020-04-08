<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">平台交易打款提示</block>
			<block slot="right">
				<text class="text-orange">联系客服</text>
			</block>
		</bar-title>
		
		<!--内容区域,此处只做模板演示，不做富文本解析功能。可自行更换为富文本解析。-->
		<view class="content-view-box">
			<view class="font-view">
				<text class="text-green cuIcon-title"></text>
				<text>平台为卖家打款成功后，卖家会收到来自</text>
				<text class="text-green">微信支付</text>
				<text>的消息</text>
			</view>
			<view class="font-view">
				<image src="/static/images/home/goods/13.png" mode="widthFix"/>
			</view>
			<view class="font-view">
				<text class="text-green cuIcon-title"></text>
				<text>在微信支付的消息中找到</text>
				<text class="text-green">零钱入账</text>
			</view>
			<view class="font-view">
				<image src="/static/images/home/goods/10.png" mode="widthFix"/>
			</view>
		</view>
		<view class="zaiui-hight-view"/>
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
	page {
		background: #FFFFFF;
	}
	.content-view-box {
		position: relative;
		.font-view {
			padding: 18.18rpx;
			line-height: 1.7;
		}
		image {
			padding-left: 27.27rpx;
			width: 100%;
		}
	}
	.zaiui-hight-view {
		width: 100%;
		height: 36.36rpx;
	}
</style>
