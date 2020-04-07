<template>
	<view class="zaiui-sell-box" :class="show?'show':''">
		
		<view class="zaiui-bar-view-box">
			<!--小程序端的标题-->
			<!-- #ifdef MP -->
			<view class="text-center text-black zaiui-small-routine-title">卖二手</view>
			<!-- #endif -->
			
			<!--标题栏-->
			<view class="text-gray zaiui-bar-box">
				<text class="text-black text-lg">发布闲置</text>
				<text class="margin-left-sm">平台帮你卖 极速成交</text>
				<text class="cuIcon-close text-right close" @tap="closeTap"></text>
			</view>
		</view>
		
		<!--占位的-->
		<view class="zaiui-seat-height"></view>
		
		<!--中间内容区域-->
		<view class="zaiui-view-content">
			<type-list :list_data="typeListData" @listTap="typeListTap"></type-list>
		</view>
	</view>
</template>

<script>
	import typeList from '@/components/zaiui-common/list/type-list';
	
	import _sell_data from '@/static/zaiui/data/sell.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	
	export default {
		name: 'sell',
		components: { 
			typeList
		},
		data() {
			return {
				typeListData: [],
			}
		},
		props: {
			show: {
				type: Boolean,
				default: true
			},
			scrollY: {
				type: Number,
				default: 0
			},
			scrollBottom: {
				type: Number,
				default: 0
			}
		},
		watch: {
			scrollY() {
				//通知他妈的滚动了。
				this.setPageScroll(this.scrollY);
			},
			scrollBottom() {
				if(this.scrollBottom != 0) {
					//通知他妈的触底了
					this.setReachBottom();
				}
			},
		},
		created() {
			//加载虚拟数据
			this.typeListData = _sell_data.typeListData();
		},
		mounted() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			//页面被滚动
			setPageScroll(scrollTop) {
				//console.log(scrollTop);
			},
			//触底了
			setReachBottom() {
				console.log('触底了');
			},
			closeTap() {
				this.$emit('closeTap');
			},
			typeListTap(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-sell-box {
		background: #FAFAFA;
		position: relative;
		min-height: 100vh;
		z-index: 99999;
		width: 100%;
		display: none;
		.zaiui-bar-view-box {
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 999999;
			background: #FAFAFA;
			
			/* #ifndef MP */
			height: calc(var(--status-bar-height) + 99.99rpx);
			/* #endif */
			
			/* #ifdef MP */
			height: calc(var(--status-bar-height) + 189.99rpx);
			/* #endif */
			
			padding: var(--status-bar-height) 27.27rpx 0 27.27rpx;
			align-items: center;
			.zaiui-bar-box {
				position: relative;
				width: 100%;
				align-items: center;
				line-height: 99.99rpx;
				.close {
					position: absolute;
					right: 27.27rpx;
					font-size: 40rpx;
					bottom: 9.09rpx;
				}
			}
		}
		
		.zaiui-seat-height {
			width: 100%;
			
			/* #ifndef MP */
			height: calc(var(--status-bar-height) + 99.99rpx);
			/* #endif */
			
			/* #ifdef MP */
			height: calc(var(--status-bar-height) + 199.99rpx);
			/* #endif */
		}
		.zaiui-view-content {
			padding: 0 27.27rpx 27.27rpx;
		}
	}
	.zaiui-sell-box.show {
		display: block;
	}
</style>
