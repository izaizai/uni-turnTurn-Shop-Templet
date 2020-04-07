<template>
	<view class="zaiui-bar-title-box">
		<view class="cu-bar" :class="[fixed?'fixed':'', shadow?'':'no-shadow', bgColor]">
			<view class="action" @tap="BackPage" v-if="isBack">
				<text class="cuIcon-back"/>
				<text>{{backText}}</text>
			</view>
			<view class="action" @tap="leftTap" v-if="!isBack">
				<slot name="left"/>
			</view>
			<view class="content" @tap="contentTap">
				<slot name="content"/>
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
		name: 'bar-title',
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: Boolean,
				default: true
			},
			backText: {
				type: String,
				default: ""
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
			leftTap() {
				this.$emit('leftTap');
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
	.zaiui-bar-title-box {
		.cu-bar {
			padding-top: var(--status-bar-height);
			min-height: calc(var(--status-bar-height) + 101rpx);
			.content {
				top: var(--status-bar-height);
				.cu-tag {
				    position: relative;
				    top: -2.72rpx;
				    padding: 0 5.45rpx;
					text {
						position: relative;
						top: 2rpx;
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
