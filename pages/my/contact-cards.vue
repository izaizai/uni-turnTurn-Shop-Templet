<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">联系卡</block>
			<block slot="right">
				<text class="text-red">保存</text>
			</block>
		</bar-title>
		
		<!--提示栏-->
		<view class="bg-red light text-sm padding-sm">
			<text class="cuIcon-warnfill"/>
			<text class="margin-left-xs">
				重要交易信息建议在平台内进行沟通，并务必在平台内下单及付款，切勿私下转账交易！走平台担保更安全~
			</text>
		</view>
		
		<view class="bg-white padding">
			<view class="text-lg text-black margin-bottom">我的联系卡</view>
			<view class="text-sm text-gray">
				您可以选择添加以下一种或多种联系方式，根据具体沟通需求选择对应号码发送
			</view>
		</view>
		
		<view class="bg-white padding form-view">
			<view class="text-black title">微信</view>
			<input placeholder="请填写您的微信号" value=""/>
		</view>
		<view class="bg-white padding form-view">
			<view class="text-black title">QQ号</view>
			<input placeholder="请填写您的QQ号" value=""/>
		</view>
		<view class="bg-white padding form-view">
			<view class="text-black title">手机号</view>
			<input placeholder="请填写您的手机号" value=""/>
		</view>
		
		
		<!--小程序端显示-->
		<!-- #ifdef MP -->
		<view class="bg-white wecanui-footer-fixed foot-pb">
			<view class="flex flex-direction padding-sm">
				<button class="cu-btn bg-red">保存</button>
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
	page {
		background: #FFFFFF;
	}
	.form-view {
		border-bottom: 2rpx solid #f5f5f5;
		.title {
			margin-bottom: 27.27rpx;
		}
		input {
			color: #333333;
		}
	}
</style>
