<template>
	<view class="bg-white margin-top radius zaiui-hot-topic-box">
		<!--标题-->
		<view class="hot-topic-title">
			<view class="cu-list menu">
				<view class="cu-item">
					<view class="content">
						<text class="text-black text-lg">热门话题</text>
					</view>
					<view class="action">
						<text class="text-gray text-sm" @tap="viewAllTap">
							<text>查看全部</text>
							<text class="cuIcon-right"></text>
						</text>
					</view>
				</view>
			</view>	
		</view>
		
		<!--滑动列表-->
		<view class="hot-topic-scroll-box">
			<scroll-view class="hot-topic-scroll" scroll-x>
				<block v-for="(item,index) in list_num" :key="index">
					<view :id="[isSort + (index + 1 )]" class="hot-topic-scroll-item">
						<view class="cu-list menu-avatar">
							<block v-for="(items,indexs) in list_data" :key="indexs" v-if="getItmeList(index,indexs)">
								<view class="cu-item" @tap="listTap(items,indexs)">
									<view class="cu-avatar radius xl" :style="[{backgroundImage:'url('+ items.img +')'}]"></view>
									<view class="content">
										<view class="text-black">
											<view class="text-cut">{{items.title}}</view>
										</view>
										<view class="text-gray text-sm"> 
											<view class="text-cut">{{items.text}}</view>
											<view class="text-cut">{{items.num}}</view>
										</view>
									</view>
								</view>
							</block>
							
						</view>
					</view>
				</block>
			</scroll-view>
			<!--右边阴影-->
			<view class="zaiui-right-shadow-box"></view>
		</view>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'hot-topic-list',
		data() {
			return {
				list_num: 1,
			}
		},
		props: {
			list_data: {
				type: Array,
				default: () => {
					return []
				}
			},
			isSort: {
				type: String,
				default: "scroll"
			},
		},
		watch: {
			list_data() {
				this.getScrollPageNum(this.list_data);
			}
		},
		created() {
			this.getScrollPageNum(this.list_data);
		},
		methods: {
			listTap(data,index) {
				this.$emit('listTap', {
					data,
					index
				});
			},
			viewAllTap() {
				this.$emit('viewAllTap');
			},
			getScrollPageNum(data) {
				this.list_num =  _tool.getPageNum(data.length,3);
			},
			getItmeList(index,indexs) {
				let max = (index + 1 ) * 3;
				let min = max - 3;
				if(indexs >= min && indexs < max) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-hot-topic-box {
		border-radius: 18.18rpx;
		.hot-topic-title {
			.cu-list.menu {
				border-radius: 18.18rpx;
			}
		}
		.hot-topic-scroll-box {
			position: relative;
			width: 100%;
			.hot-topic-scroll {
				position: relative;
				height: 499.99rpx;
				white-space: nowrap;
				width: 100%;
				.hot-topic-scroll-item {
					display: inline-block;
					width: 80%;
					.cu-list.menu-avatar>.cu-item {
						height: 154.54rpx;
						.content {
							left: 181.81rpx; 
							width: calc(100% - 190.9rpx);
						}
						&:after {
							width: 0;
							height: 0;
							border-bottom: 0;
						}
					}
				}
			}
			.zaiui-right-shadow-box {
				position: absolute;
				width: 118.18rpx;
				top: 0;
				bottom: 0;
				right: 0;
			    box-shadow: inset -63.63rpx 0 127.27rpx 0 rgba(255, 255, 255, 0.95);
				pointer-events: none;
			}
		}
	}
</style>
