<template>
	<view class="bg-white margin-top radius zaiui-recommend-box">
		<!--标题-->
		<view class="recommend-title">
			<view class="cu-list menu">
				<view class="cu-item">
					<view class="content">
						<text class="text-black text-lg">为您推荐</text>
					</view>
					<view class="action">
						<text class="text-gray text-sm" @tap="viewAllTap">
							<text>查看全部</text>
							<text class="cuIcon-right"/>
						</text>
					</view>
				</view>
			</view>	
		</view>
		
		<!--滑动列表-->
		<view class="recommend-scroll-box">
			<scroll-view class="recommend-scroll" scroll-x>
				<block v-for="(items,indexs) in list_data" :key="indexs">
					<view :id="[isSort + (indexs + 1 )]" class="text-center recommend-scroll-item">
						<view @tap="listTap('userTap',items,indexs)">
							<view class="cu-avatar xl round" :style="[{backgroundImage:'url('+ items.avatar +')'}]"/>
							<view class="text-black text-cut margin-tb-sm">{{items.name}}</view>
						</view>
						
						<button class="cu-btn sm margin-top" :class="items.follow?'bg-red':'line-red'" @tap="listTap('followTap',items,indexs)">
							<text class="cuIcon-add" v-if="!items.follow"></text>
							<text class="margin-left-xs" v-if="!items.follow">关注</text>
							<text v-if="items.follow">已关注</text>
						</button>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'recommend-scroll-list',
		props: {
			list_data: {
				type: Array,
				default: () => {
					return []
				}
			},
			isSort: {
				type: String,
				default: "recommend_scroll"
			}
		},
		methods: {
			listTap(tap,data,index) {
				this.$emit(tap, {
					data,
					index
				});
			},
			viewAllTap() {
				this.$emit('viewAllTap');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-recommend-box {
		border-radius: 18.18rpx;
		.recommend-title {
			.cu-list.menu {
				border-radius: 18.18rpx;
			}
		}
		.recommend-scroll-box {
			position: relative;
			width: 100%;
			.recommend-scroll {
				position: relative;
				height: 363.63rpx;
				white-space: nowrap;
				width: 100%;
				.recommend-scroll-item {
					display: inline-block;
					padding-top: 27.27rpx;
					width: 199.99rpx;
					.cu-btn {
						&:after {
							border-radius: 18.18rpx;
						}
						.cuIcon-add {
							font-size: 27.27rpx;
						}
					}
				}
			}
		}
	}
</style>
