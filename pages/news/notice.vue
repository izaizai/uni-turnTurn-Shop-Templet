<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">通知助手</block>
		</bar-title>
		
		<!--卡片区域-->
		<view class="zaiui-cart-view-box">
			<view class="text-gray text-center">3月30日 15:30</view>
			<!--内容-->
			<view class="bg-white margin-top radius card-view" @tap="tapCard">
				<view class="cu-avatar head-img" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
				<view class="zaiui-content-view">
					<view class="text-black text-cut">全网首发iPhone11系列低至4349</view>
					<view class="text-gray text-sm text-cut margin-tb-sm">苹果官方货源机,送1年苹果原厂配件质保!</view>
					<view class="solid-line"/>
					<view class="text-gray text-sm margin-top-sm view-text-box">
						<text class="text-black">查看详情</text>
						<text class="cuIcon-right"/>
					</view>
				</view>
			</view>
		</view>
		
		<view class="zaiui-cart-view-box">
			<view class="text-gray text-center">3月30日 15:35</view>
			<!--内容-->
			<view class="bg-white margin-top radius card-view">
				<view class="zaiui-content-view">
					<view class="text-black text-cut">品质生活的必备神器</view>
					<view class="text-gray text-sm text-cut margin-tb-sm">都2020了,你也该用上了</view>
					<view class="solid-line"/>
					<view class="text-gray text-sm margin-top-sm view-text-box">
						<text class="text-black">查看详情</text>
						<text class="cuIcon-right"/>
					</view>
				</view>
			</view>
		</view>
		
		<view class="zaiui-cart-view-box">
			<view class="text-gray text-center">3月30日 15:40</view>
			<!--内容-->
			<view class="bg-white margin-top radius card-view">
				<view class="zaiui-content-view">
					<view class="text-black text-cut">买得起的K30 Pro和98寸4K电视来了</view>
					<view class="text-gray text-sm text-cut margin-tb-sm">这次你有借口换个大房子啦!</view>
					<view class="solid-line"/>
					<view class="text-gray text-sm margin-top-sm view-text-box">
						<text class="text-black">查看详情</text>
						<text class="cuIcon-right"/>
					</view>
				</view>
			</view>
		</view>
		
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
				bg_img: '/static/images/home/goods/1.png',
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
			tapCard() {
				uni.navigateTo({
					url: '/pages/news/details'
				});
			}
		}
	}
	
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	
	.zaiui-cart-view-box {
		padding: 36.36rpx 27.27rpx;
		.card-view {
			position: relative;
			border-radius: 18.18rpx;
			.head-img {
				width: 100%;
				height: 236.36rpx;
				border-radius: 9.09rpx 9.09rpx 0 0;
			}
			.zaiui-content-view {
				padding: 27.27rpx;
				.view-text-box {
					position: relative;
					.cuIcon-right {
						position: absolute;
						top: 5.45rpx;
						right: 0;
					}
				}
			}
		}
	}
</style>
