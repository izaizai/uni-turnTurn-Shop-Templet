<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">小资生活神器</block>
			<block slot="right">
				<text class="cuIcon-forward"/>
			</block>
		</bar-title>
		
		<!--文章标题-->
		<view class="text-black text-bold text-lg zaiui-title">提升幸福感的居家好物</view>
		<view class="text-gray text-sm text-right margin-lr zaiui-right-text">
			<text>浏览38439</text>
			<text>关注38439</text>
		</view>
		
		<!--内容区域,此处只做模板演示，不做富文本解析功能。可自行更换为富文本解析。-->
		<view class="content-view-box">
			<view class="font-view">
				早买早享受，细数宅家必备的那些提升幸福感的小家电!
				随着现在人们的生活水平逐渐提高，人们对自己的生活质
				量也越来越重视。大部分都希望自己生活在一个幸福，健
				康，卫生，高质量，高品质又充满快乐的一个环境中。
			</view>
			<view class="font-view">
				不过想要提高自己的幸福指数，并不是只能靠一些奢侈而
				又华贵的家具。今天小编就给大家分享-些小编自己爱不
				释手同时又好用不贵，方便实惠的居家好物，希望能够帮
				助大家提升居家幸福感!
			</view>
			<view class="font-view">
				<image src="/static/images/home/goods/13.png" mode="widthFix"/>
			</view>
			<view class="font-view">
				想不想在每天早上都拥有可口的早餐呢，那就快入手这款
				三明治机吧，十分的简单、方便、好操作。不仅节省了很
				多时间，长期来看也节省了不少金钱成本!轻松按一下就
				可以拥有可口美味的早餐啦!
			</view>
			<image src="/static/images/home/goods/10.png" mode="widthFix"/>
		</view>
		<view class="zaiui-hight-view"/>
		
		<!--评论头部-->
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="text-black text-lg">全部评论 75</text>
			</view>
			<view class="action">
				<view class="text-red">
					<text class="cuIcon-hot"/>
					<text class="margin-left-xs">按热度</text>
				</view>
				<view class="margin-left">
					<text class="cuIcon-time"/>
					<text class="margin-left-xs">按时间</text>
				</view>
			</view>
		</view>
		
		<!--评论区域-->
		<view class="zaiui-comment-box">
			<view class="zaiui-view-box">
				<view class="flex flex-wrap">
					<view class="basis-1">
						<view class="cu-avatar round" style="background-image:url(/static/images/avatar/1.jpg)"/>
					</view>
					<view class="basis-9">
						<view class="text-black">仔仔</view>
						<view class="text-gray text-sm tag-text">
							<text>第4楼</text>
							<text>1天前</text>
						</view>
						<view class="margin-tb">X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢</view>
					</view>
				</view>
				<view class="text-lg text-gray text-right tools-icon-view">
					<text class="cuIcon-comment"/>
					<text class="cuIcon-appreciate">20</text>
				</view>
			</view>
			<view class="zaiui-border-view"/>
			
			<view class="zaiui-view-box">
				<view class="flex flex-wrap">
					<view class="basis-1">
						<view class="cu-avatar round" style="background-image:url(/static/images/avatar/2.jpg)"/>
					</view>
					<view class="basis-9">
						<view class="text-black">仔仔</view>
						<view class="text-gray text-sm tag-text">
							<text>第3楼</text>
							<text>2天前</text>
						</view>
						<view class="margin-tb">X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢</view>
					</view>
				</view>
				<view class="text-lg text-gray text-right tools-icon-view">
					<text class="cuIcon-comment"/>
					<text class="cuIcon-appreciate">4</text>
				</view>
			</view>
			<view class="zaiui-border-view"/>
			
			<view class="zaiui-view-box">
				<view class="flex flex-wrap">
					<view class="basis-1">
						<view class="cu-avatar round" style="background-image:url(/static/images/avatar/3.jpg)"/>
					</view>
					<view class="basis-9">
						<view class="text-black">仔仔</view>
						<view class="text-gray text-sm tag-text">
							<text>第2楼</text>
							<text>3天前</text>
						</view>
						<view class="margin-tb">X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢</view>
					</view>
				</view>
				<view class="text-lg text-gray text-right tools-icon-view">
					<text class="cuIcon-comment"/>
					<text class="cuIcon-appreciate">6</text>
				</view>
			</view>
		</view>
		
		<view class="foot-hight-view"/>
		
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom">
			<view class="flex flex-direction">
				<button class="cu-btn bg-red">我也有话说</button>
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
				bg_img: '/static/images/home/goods/1.png', content: {},
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
	.zaiui-title {
		margin: 36.36rpx 27.27rpx;
	}
	.zaiui-right-text {
		text {
			position: relative;	
		}
		text + text {
			margin-left: 18.18rpx;
			&:after {
				content: ' ';
				position: absolute;
				width: 2rpx;
				height: 18.18rpx;
				border-left: 2rpx solid;
				top: 3.63rpx;
				left: -9.09rpx;
			}
		}
	}
	.content-view-box {
		position: relative;
		.font-view {
			padding: 27.27rpx;
			line-height: 1.7;
		}
		image {
			width: 100%;
		}
	}
	.zaiui-hight-view {
		width: 100%;
		height: 36.36rpx;
		background: #FAFAFA;
	}
	.solid-bottom::after {
	    border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
	}
	.zaiui-view-box {
		position: relative;
		padding: 18.18rpx 27.27rpx;
		.flex {
			.basis-1 {
				flex-basis: 10%;
			}
			.basis-9 {
				flex-basis: 90%;
			}
		}
	}
	.zaiui-comment-box {
		.zaiui-border-view {
			position: relative;
			background: #efebeb;
			margin: 18.18rpx 27.27rpx;
			height: 2rpx;
		}
		.basis-9 {
			padding-left: 18.18rpx;
		}
		.tag-text {
			position: relative;
			text {
				position: relative;	
			}
			text + text {
				margin-left: 18.18rpx;
				&:after {
					content: ' ';
					position: absolute;
					width: 2rpx;
					height: 18.18rpx;
					border-left: 2rpx solid;
					top: 3.63rpx;
					left: -9.09rpx;
				}
			}
		}
		.tools-icon-view {
			.cuIcon-comment:before,.cuIcon-appreciate:before {
				position: relative;
			    margin-right: 9.09rpx;
				font-size: 40rpx;
				top: 3.63rpx;
			}
			text + text {
				margin-left: 36.36rpx;
			}
		}
	}
	.zaiui-footer-fixed {
		box-shadow: 0 -3.63rpx 10.9rpx 0 #eaeaea;
		.flex-direction {
			padding: 18.18rpx 27.27rpx;
		}
	}
	.foot-hight-view {
		width: 100%;
		height: 154.54rpx;
		background: #FAFAFA;
	}
</style>
