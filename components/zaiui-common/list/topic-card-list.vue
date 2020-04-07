<template>
	<view>
		<block v-for="(item,index) in list_data" :key="index">
			<view class="bg-white margin-top radius zaiui-topic-card-list-box">
				<!--标题-->
				<view class="head-img-box" @tap="viewBtnTap(item,index)">
					<view class="cu-avatar" :style="[{backgroundImage:'url('+ item.bg_img +')'}]"/>
					<view class="bg-shade"></view>
					<view class="zaiui-text">
						<view class="text-xl">
							<text class="text-bold margin-right-xs">{{item.type}}</text>
							<text class="cuIcon-roundright"></text>
						</view>
						<view class="text-cut text">{{item.type_text}}</view>
					</view>
				</view>
				<!--列表-->
				<view class="cu-list menu-avatar margin-tb-sm">
					<block v-for="(items,indexs) in item.list" :key="indexs" v-if="indexs < 5">
						<view class="cu-item" @tap="listTap(items,indexs)">
							<view class="cu-avatar lg" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
							<view class="corner-mark text-sm text-bold one" v-if="indexs == 0">{{indexs + 1}}</view>
							<view class="corner-mark text-sm text-bold two" v-if="indexs == 1">{{indexs + 1}}</view>
							<view class="corner-mark text-sm text-bold three" v-if="indexs == 2">{{indexs + 1}}</view>
							<view class="corner-mark text-sm text-bold" v-if="indexs >= 3">{{indexs + 1}}</view>
							<view class="content">
								<view class="text-black">
									<view class="text-cut">{{items.title}}</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">{{items.text}}</view>
								</view>
							</view>
						</view>
					</block>
				</view>
				<view class="text-blue text-center" @tap="viewBtnTap(item,index)">
					<text>查看更多</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'topic-card-list',
		props: {
			list_data: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		methods: {
			listTap(data,index) {
				this.$emit('listTap', {
					data,
					index
				});
			},
			viewBtnTap(data,index) {
				this.$emit('viewTap', {
					data,
					index
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-topic-card-list-box {
		position: relative;
		border-radius: 18.18rpx;
		padding-bottom: 27.27rpx;
		width: 100%;
		.head-img-box {
			position: relative;
			width: 100%;
			.cu-avatar {
				width: 100%;
				height: 181.81rpx;
				border-radius: 9.09rpx 9.09rpx 0 0;
			}
			.bg-shade {
				position: absolute;
				bottom: 0;
				top: 0;
				left: 0;
				right: 0;
				background-color: rgba(0, 0, 0, 0.4);
				border-radius: 9.09rpx 9.09rpx 0 0;
			}
			.zaiui-text {
				position: absolute;
				bottom: 0;
				color: #fff;
				padding: 18.18rpx 23.63rpx; 
				width: 100%;
				.text {
					margin-top: 5.45rpx;
				}
			}
		}
		.cu-list.menu-avatar>.cu-item>.cu-avatar {
			left: 27.27rpx;
		    width: 81.81rpx;
		    height: 81.81rpx;
			border-radius: 9.09rpx;
		}
		.cu-list.menu-avatar>.cu-item {
			height: 109.09rpx;
			&:after {
				width: 0;
				height: 0;
				border-bottom: 0;
			}
			.corner-mark {
			    position: absolute;
			    width: 29.09rpx;
			    height: 29.09rpx;
			    text-align: center;
			    line-height: 29.09rpx;
			    top: 14.54rpx;
			    left: 27.27rpx;
				border-radius: 7.27rpx 0 9.09rpx;
				color: #fff;
				background-image: linear-gradient(130deg, #F2F2F2, #B4B4B5);
			}
			.corner-mark.one {
				background-image: linear-gradient(130deg, #FF8388, #FF5861);
			}
			.corner-mark.two {
				background-image: linear-gradient(130deg, #FF9D5C, #FF6E30);
			}
			.corner-mark.three {
				background-image: linear-gradient(130deg, #FFCF86, #FFA93B);
			}
			.content {
			    left: 136.36rpx;
			    width: calc(100% - 136.36rpx - 27.27rpx);
			}
		}
	}
</style>
