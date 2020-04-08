<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack @rightTap="rightTap">
			<block slot="content">登录</block>
		</bar-title>
		
		<!--登录图标-->
		<view class="zaiui-user-login-avatar-view">
			<view class="cu-avatar round lg" style="background-image:url(/static/images/avatar/1.jpg);"/>
		</view>
		
		<!--按钮-->
		<view class="flex flex-direction zaiui-btn-view">
			<button class="cu-btn bg-red">
				<text class="cuIcon-weixin icon"/>
				<text>登录开启转转世界</text>
			</button>
		</view>
		
		<!--协议-->
		<view class="zaiui-agreement-checked-view">
			<checkbox class='round red sm zaiui-checked checked'/>
			<view class="text-sm text-black-view">
				<view class="text-gray">已阅读并同意以下协议</view>
				<view class="text-red">《转转用户服务协议》《转转隐私政策》</view>
			</view>
		</view>
		
		<!--底部说明-->
		<view class="text-sm text-gray zaiui-foot-ad-view">腾讯投资-更专业的闲置二手交易平台</view>
		
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
	
	.zaiui-user-login-avatar-view {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 218.18rpx;
		.cu-avatar {
		    width: 181.81rpx;
		    height: 181.81rpx;	
		}
	}
	.zaiui-btn-view {
		position: relative;
		margin-top: 72.72rpx;
		padding: 0 45.45rpx;
		.cu-btn .icon {
			position: relative;
			font-size: 47.27rpx;
			right: 9.09rpx;
			top: -3.63rpx;	
		}
	}
	.zaiui-agreement-checked-view {
		position: relative;
		padding: 27.27rpx 45.45rpx;
		.zaiui-checked {
			position: absolute;
			transform: scale(0.7);
		}
		.text-black-view {
			padding-left: 54.54rpx;
			line-height: 47.27rpx;
		}
	}
	.zaiui-foot-ad-view {
		position: fixed;
		text-align: center;
	    bottom: 72.72rpx;
	    width: 100%;	
	}
</style>
