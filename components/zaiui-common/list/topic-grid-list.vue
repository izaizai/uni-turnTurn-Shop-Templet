<template>
	<view class="zaiui-topic-grid-box">
		<scroll-view class="scroll-view" scroll-x>
			<block v-for="(item,index) in list_data" :key="item.id">
				<view :id="['topicGrid' + (index + 1 )]" class="scroll-item" @tap="listTap(items,index)">
					<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ item.img +')'}]"/>
					<view class="bg-shade"/>
					<view class="text-sm text">{{item.title}}</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'topic-grid-list',
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
	.zaiui-topic-grid-box {
		position: relative;
		width: 100%;
		.scroll-view {
			position: relative;
			height: 118.18rpx;
			white-space: nowrap;
			width: 100%;
			.scroll-item {
				display: inline-block;
				position: relative;
				border-radius: 9.09rpx;
				margin: 0 9.09rpx;
				width: 172.72rpx;
				&:first-child {
					margin-left: 27.27rpx;
				}
				&:last-child {
					margin-right: 27.27rpx;
				}
				.cu-avatar {
				    width: 172.72rpx;
				    height: 118.18rpx;
					border-radius: 9.09rpx;
				}
				.bg-shade {
					position: absolute;
				    bottom: 0;
				    top: 0;
				    left: 0;
				    right: 0;
				    background-color: rgba(0, 0, 0, 0.2);
				    border-radius: 9.09rpx;	
				}
				.text {
				    position: absolute;
				    bottom: 0;
				    color: #fff;
				    padding: 14.54rpx 18.18rpx; 
				    width: 100%;	
				}
			}
		}
	}
</style>
