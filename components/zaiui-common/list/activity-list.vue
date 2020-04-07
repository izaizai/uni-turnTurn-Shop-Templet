<template>
	<view class="bg-white margin padding-sm radius zaiui-activity">
		<view class="cu-list grid col-2">
			<view class="cu-item">
				<view class="text-black text-bold text-left margin-left-xs">附近的人</view>
				<view class="flex p-xs margin-tb mb-sm">
					<view class="flex-twice text-left">
						<button class="cu-btn bg-blue sm round margin-top margin-left-xs">
							<text class="cuIcon-locationfill"></text>
							<text class="text">开启定位</text>
						</button>
					</view>
					<view class="flex-sub">
						<view class="padding-right-sm">
							<image class="location-img" src="/static/images/home/sundry/9.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="grid col-2">
					<view class="padding-left-sm" v-for="(item,index) in list_data" :key="index" v-if="index < 2" @tap="listTap(item,index)">
						<view class="text-black text-bold text-left">{{item.title}}</view>
						<view class="text-orange text-sm text-left">{{item.text}}</view>
						<view class="margin-tb-sm">
							<image class="width-img" :src="item.img" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="grid col-2 padding-right-sm margin-top-sm">
					<view class="padding-lr-xs" v-for="(item,index) in list_data" :key="index" v-if="index >= 2 && index < 4" @tap="listTap(item,index)">
						<view class="text-black text-bold text-left ">{{item.title}}</view>
						<view class="margin-top-sm">
							<image class="width-img" :src="item.img" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="grid col-2 margin-top-sm">
					<view class="padding-left-sm" v-for="(item,index) in list_data" :key="index" v-if="index >= 4 && index < 6" @tap="listTap(item,index)">
						<view class="text-black text-bold text-left ">{{item.title}}</view>
						<view class="margin-top-sm">
							<image class="width-img" :src="item.img" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'activity-list',
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-activity {
		.cu-list.grid>.cu-item {
			padding: 0;
			.cu-btn {
				text{
					color: #FFFFFF;
					font-size: 26rpx;
					margin: 0;
					width: auto;
				}
				.text {
					margin-left: 10rpx;
				}
			}
			image {
				width: 100%;
			}
			&::after {
				top: 0;
				left: 0;
				width: 200%;
				height: 200%;
				content: " ";
				position: absolute;
				transform: scale(.5);
				transform-origin: 0 0;
				pointer-events: none;
				box-sizing: border-box;
				border-radius: inherit;
			}
			&:nth-of-type(1) {
				&::after {
					border-right: 2rpx solid rgba(0, 0, 0, .1);
					border-bottom: 2rpx solid rgba(0, 0, 0, .1);
				}
			}
			&:nth-of-type(2) {
				&::after {
					border-right: 0;
					border-bottom: 2rpx solid rgba(0, 0, 0, .1);
				}
			}
			&:nth-of-type(3) {
				&::after {
					border-right: 2rpx solid rgba(0, 0, 0, .1);
					border-bottom: 0;
				}
			}
			&:nth-of-type(4) {
				&::after {
					border-right: 0;
					border-bottom: 0;
				}
			}
		}
	}
</style>
