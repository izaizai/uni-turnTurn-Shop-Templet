<template>
	<view class="bg-white margin radius">
		<view class="cu-bar">
			<view class="action">
				<text class="text-black text-lg text-bold">免费鉴别</text>
				<text class="cu-tag bg-red radius sm margin-left-xs">直播</text>
			</view>
			<view class="action">
				<text class="text-sm">在线鉴别/专业估价</text>
			</view>
		</view>
		<view class="grid col-3 padding-bottom-sm zaiui-identify-box">
			<view class="padding-xs live-box" v-for="(item,index) in list_data" :key="index" @tap="listTap(item,index)">
				<view class="flex flex-wrap">
					<view class="basis-xs">
						<image class="img" :src="item.img" mode="widthFix"/>
					</view>
					<view class="basis-xl">
						<view class="text-black margin-left-xs">{{item.name}}</view>
						<view class="text-xs text-cut text-gray margin-left-xs">{{item.text}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'identify-list',
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
	.zaiui-identify-box {
		.live-box {
			position: relative;
			.flex-wrap {
				background-color: #FAFAFA;
				border-radius: 16rpx 16rpx;
				.basis-xs {
					flex-basis: 30%;
					width: 30%;
					.img {
						width: 100%;
						border-radius: 25%;
					}
				}
				.basis-xl {
					flex-basis: 70%;
					width: 70%;
				}
			}
		}
	}
</style>
