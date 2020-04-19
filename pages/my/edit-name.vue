<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">修改昵称</block>
			<block slot="right">
				<text class="text-orange">保存</text>
			</block>
		</bar-title>
		
		<!--提示栏-->
		<view class="bg-red light text-sm zaiui-tip-view">
			<view class="text-cut content">昵称90天只能修改一次，请慎重哦</view>
			<text class="cuIcon-close icon"/>
		</view>
		
		<view class="cu-form-group margin-top">
			<view class="title">新昵称</view>
			<input placeholder="请输入新昵称" value="仔仔"></input>
		</view>
		
		<view class="text-sm text-gray padding-sm">13个字以内，仅支持汉字、字母、数字或下划线</view>
		
		
		<!--小程序端显示-->
		<!-- #ifdef MP -->
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom">
			<view class="flex flex-direction">
				<button class="cu-btn bg-red">保存昵称</button>
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
		.title {
			&:before {
			    content: "";
			    position: absolute;
			    height: 27.27rpx;
			    width: 3.63rpx;
			    background: #e6e6e6;
			    top: 16.36rpx;
			    right: 12.72rpx;
			}
		}
		input {
			color: #333333;
		}
	}
</style>
