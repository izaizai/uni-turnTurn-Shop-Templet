<template>
	<view class="zaiui-scroll-view-box">
		<scroll-view class="zaiui-scroll-view" scroll-x @scroll="navScroll">
			<view id="scroll1" class="zaiui-scroll-view-item">
				<view class="cu-list grid col-5 no-border">
					<block v-for="(item,index) in ListData" :key="index" v-if="index < 10">
						<view class="cu-item" @tap="listTap(item,index)">
							<view class="grid-icon">
								<image class="icon" :src="item.img" mode="widthFix"/>
							</view>
							<view class="cu-tag badge z" :class="['bg-' + item.color]" v-if="item.badge">{{item.badge}}</view>
							<text class="text-black">{{item.name}}</text>
						</view>
					</block>
				</view>
			</view>
			<view id="scroll2" class="zaiui-scroll-view-item" v-if="ListData.length > 10">
				<view class="cu-list grid col-5 no-border">
					<block v-for="(item,index) in ListData" :key="index" v-if="index >= 10">
						<view class="cu-item" @tap="listTap(item,index)">
							<view class="grid-icon">
								<image class="icon" :src="item.img" mode="widthFix"></image>
							</view>
							<view class="cu-tag badge z" :class="['bg-' + item.color]" v-if="item.badge">{{item.badge}}</view>
							<text class="text-black">{{item.name}}</text>
						</view>
					</block>
				</view>
			</view>
		</scroll-view>
		<view class="zaiui-scroll-h-view" :style="{width: `${scrollPage * 16}px`}">
			<view class="box">
				<view class="bg-red dot" :style="{left: `${scrollDot}px`}"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'grid-menu-list',
		data() {
			return {
				ListData: [], scrollPage: 1, scrollDot: 0,
			};
		},
		props: {
			list_data: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		created() {
			this.ListData = this.list_data;
			this.getScrollPageNum();
		},
		watch: {
			list_data() {
				this.ListData = this.list_data;
				this.getScrollPageNum();
			}
		},
		methods: {
			getScrollPageNum() {
				this.scrollPage =  _tool.getPageNum(this.ListData.length,10);
			},
			navScroll(e) {
				//计算公式: 移动距离 /（A总 / B总）
				let pageWidth = this.scrollPage * 16;
				let Width = e.detail.scrollWidth / pageWidth;
				this.scrollDot = e.detail.scrollLeft / Width;
			},
			listTap(data,index) {
				this.$emit('listTap', {
					data,
					index
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-scroll-view-box {
		position: relative;
		.zaiui-scroll-view {
			position: relative;
			height: 388rpx;
			white-space: nowrap;
			width: 100%;
			.zaiui-scroll-view-item {
				display: inline-block;
				width: 100%;
				.cu-list.grid {
					background-color: inherit;
					.grid-icon {
						margin: 0 30rpx;
						.icon {
							border-radius: 100%;
						}
					}
				}
				.cu-list.grid>.cu-item text {
					color: #333333;
				}
				.cu-list.grid>.cu-item .cu-tag {
				    transform: scale(0.8);
				}
			}
		}
		.zaiui-scroll-h-view {
			position: absolute;
			height: 10rpx;
			bottom: 2rpx;
			left: 0;
			right: 0;
			width: 32px;
			margin: auto;
			.box {
				position: relative;
				background: #d0cfcf;
				border-radius: 40rpx;
				width: 100%;
				height: 100%;
				.dot {
					position: absolute;
					width: 16px;
					height: 100%;
					border-radius: 40rpx;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
				}
			}
		}
	}
</style>
