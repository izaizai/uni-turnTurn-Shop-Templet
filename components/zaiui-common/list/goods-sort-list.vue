<template>
	<view class="margin-top zaiui-goods-list-box" :class="show?'show':''">
		<view class="cu-list menu-avatar">
			<block v-for="(item,index) in list_data" :key="index">
				<view class="cu-item" @tap="listTap(item,index)">
					<view class="cu-avatar radius lg" :style="[{backgroundImage:'url('+ item.img +')'}]"></view>
					<view class="content">
						<view class="text-black text-cut">
							<text class="cu-tag bg-red radius sm" v-if="item.autarky">自营</text>
							<text>{{item.title}}</text>
						</view>
						<view class="text-gray text-cut text-sm">
							<block v-for="(items,indexs) in item.type" :key="indexs">
								<text class="cu-tag radius sm">{{items}}</text>
							</block>
						</view>
						<view class="text-gray text-cut text-sm zaiui-tag-view">
							<text class="text-red text-price text-lg">{{item.price}}</text>
							<text class="text-gray through" v-if="item.cost_price">￥{{item.cost_price}}</text>
							<block v-for="(items,indexs) in item.discount" :key="indexs">
								<text class="cu-tag line-orange radius sm">{{items}}</text>
							</block>
						</view>
						<view class="text-gray text-cut text-sm ">
							<text class="cu-tag light bg-red radius sm" v-if="item.quv">已验机</text>
							<block v-for="(items,indexs) in item.style" :key="indexs">
								<text class="cu-tag line-blue radius sm">{{items}}</text>
							</block>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'goods-sort-list',
		props: {
			list_data: {
				type: Array,
				default: () => {
					return []
				}
			},
			show: {
				type: Boolean,
				default: true
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
	.zaiui-goods-list-box {
		display: none;
		.cu-list.menu-avatar > .cu-item {
			height: 218.18rpx;
			&:after {
				width: 0;
				height: 0;
				border-bottom: 0;
			}
			.cu-avatar.lg {
				width: 181.81rpx;
				height: 181.81rpx;
				font-size: 2em;
			}
			.content {
				left: 236.36rpx;
				width: calc(100% - 94.54rpx - 59.99rpx - 119.99rpx);
				line-height: 1.7em;
				.cu-tag.sm {
					display: inline-block;
					margin-left: 0;
					height: 29.09rpx;
					font-size: 14.54rpx;
					line-height: 29.09rpx;
					margin-right: 9.09rpx;
					margin-bottom: 9.09rpx;
				}
				view:first-child {
					font-size: 29.09rpx;
					display: inherit;
					align-items: inherit;
				}
				.through {
					text-decoration:line-through;
				}
				.zaiui-tag-view {
					text {
						margin-right: 9.09rpx;
					}
				}
			}
		}
	}
	.zaiui-goods-list-box.show {
		display: block;
	}
</style>
