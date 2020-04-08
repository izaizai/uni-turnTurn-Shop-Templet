<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">评价详情</block>
		</bar-title>
		
		<!--商品信息-->
		<view class="bg-white zaiui-goods-details-box">
			<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
			<view class="goods-info-view">
				<view class="text-cut text-black">商品名称 99新 苹果 iPhoneX 256G 银色</view>
				<view class="text-gray text-sm">交易时间: 2020-04-02 15:22</view>
			</view>
			<view class="text-gray text-sm text-cut zaiui-goods-tip-view">您购买的商品信息仅对您本人可见,不会对他人展示。</view>
		</view>
		
		<!--间距-->
		<view class="zaiui-hight-view"/>
		
		<!--评价内容-->
		<view class="zaiui-appraise-view">
			<view class="title-view">
				<view class="name">我的评价：</view>
				<view class="content">很棒，66666</view>
			</view>
			<view class="text-sm text-gray time-view">
				<view class="time">买家 2020-04-02</view>
				<view class="status">非常满意</view>
			</view>
		</view>
		
		<!--到底了-->
		<view class="zaiui-foot-tip-view">
			<view class="img-view">
				<view class="cu-avatar round" style="background-image:url('/static/zaiui/img/acn.png')"/>
			</view>
			<view class="text-gray">hi,到底啦~</view>
		</view>
		
		<!--按钮-->
		<view class="zaiui-btn-view">
			<view class="flex flex-direction">
				<button class="cu-btn bg-red" @tap="addTap">追加评价</button>
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
			addTap() {
				uni.navigateTo({
					url: "/pages/order/add_appraise"
				})
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
	page {
		background: #FFFFFF;
	}
	.zaiui-goods-details-box {
		position: relative;
		padding: 27.27rpx;
		.cu-avatar {
			position: absolute;
		    width: 81.81rpx;
		    height: 81.81rpx;	
		}
		.goods-info-view {
		    position: relative;
		    padding-left: 109.09rpx;
		    height: 81.81rpx;
		    line-height: 1.7;	
		}
		.zaiui-goods-tip-view {
			position: relative;
		    margin-top: 27.27rpx;	
		}
	}
	.zaiui-hight-view {
		width: 100%;
		height: 36.36rpx;
		background: #FAFAFA;
	}
	.zaiui-appraise-view {
		position: relative;
		background-color: #F8F8F8;
		margin: 27.27rpx 27.27rpx 27.27rpx 136.36rpx;
		border-radius: 9.09rpx;
		padding: 21.81rpx;
		.title-view {
			position: relative;
			.name {
			    position: absolute;	
			}
			.content {
				position: relative;
			    padding-left: 136.36rpx;	
			}
		}
		.time-view {
			position: relative;
			margin-top: 14.54rpx;
			.time {
			    position: relative;
			    padding-right: 145.45rpx;	
			}
			.status {
			    position: absolute;
			    right: 0;
			    top: 0;	
			}
		}
	}
	.zaiui-foot-tip-view {
		position: relative;
		text-align: center;
		margin-top: 72.72rpx;
		margin: 27.27rpx 0;
		.img-view {
			position: relative;
			margin-bottom: 9.09rpx;
			.cu-avatar {
			    background: #FFFFFF;
			    background-size: cover;
			    background-position: center;
			}
		}
	}
	.zaiui-btn-view {
	    position: fixed;
	    width: 100%;
	    bottom: calc(env(safe-area-inset-bottom) / 2);
		.flex {
			padding: 18.18rpx;	
		}
	}
</style>
