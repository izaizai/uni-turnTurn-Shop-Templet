<template>
	<view class="zaiui-bar-search-title-box">
		<view class="cu-bar" :class="[fixed?'fixed':'', shadow?'':'no-shadow', bgColor]">
			<view class="action" @tap="BackPage" v-if="isBack">
				<text class="cuIcon-back"/>
			</view>
			<view class="content search" @tap="contentTap">
				<view class="search-form round">
					<text class="cuIcon-search"/>
					<text class="margin-left-xs">{{content}}</text>
				</view>
			</view>
			<view class="action" @tap="rightTap">
				<!--小程序端不显示-->
				<!-- #ifndef MP -->
				<slot name="right"/>
				<!-- #endif -->
			</view>
		</view>
		<!--占位的-->
		<view class="zaiui-seat-height" v-if="fixed"/>
	</view>
</template>

<script>
	export default {
		name: 'bar-search-title',
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			content: {
				type: String,
				default: '输入关键字'
			},
			isBack: {
				type: Boolean,
				default: true
			},
			fixed: {
				type: Boolean,
				default: true
			},
			shadow: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			BackPage() {
				uni.navigateBack();
			},
			contentTap() {
				this.$emit('contentTap');
			},
			rightTap() {
				this.$emit('rightTap');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-bar-search-title-box {
		.cu-bar {
			padding-top: var(--status-bar-height);
			min-height: calc(var(--status-bar-height) + 101rpx);
			.content {
				top: var(--status-bar-height);
				/* #ifndef MP */
				width: calc(100% - 181.81rpx);
				/* #endif */
				
				/* #ifdef MP */
				left: -140rpx;
				width: calc(100% - 300rpx);
				/* #endif */
				
				.search-form {
					display: inherit;
					flex: inherit;
					margin: 0;
					color: #717171;
					[class*="cuIcon-"] {
					    margin: 0;
					}
				}
			}
		}
		.cu-bar.fixed.no-shadow {
			box-shadow: inherit;
		}
		.cu-bar.bg-white {
		    color: #333333;
		}
		.zaiui-seat-height {
			width: 100%;
			height: calc(var(--status-bar-height) + 101rpx);
		}
	}
</style>
