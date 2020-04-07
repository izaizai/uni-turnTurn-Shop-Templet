<template>
	<view>
		<block v-for="(item,index) in list_data" :key="index" v-if="getMinToMax(index)">
			<view class="bg-white margin-top padding radius zaiui-trends">
				<!--用户信息-->
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round" :style="[{backgroundImage:'url('+ item.avatar +')'}]" @tap="listTap('userTap',item,index)"/>
						<view class="content" @tap="listTap('userTap',item,index)">
							<view class="text-black">
								<view class="text-cut">{{item.username}}</view>
							</view>
							<view class="text-sm flex">
								<text>{{item.time}}</text>
							</view>
						</view>
						<view class="action">
							<button class="cu-btn sm line-red" @tap="listTap('viewBtnTap',item,index)" v-if="viewBtn">
								<text class="cuIcon-goods"/>
								<text class="margin-left-xs">看TA</text>
							</button>
							
							<button class="cu-btn sm" :class="item.follow?'bg-red':'line-red'" @tap="listTap('followTap',item,index)" v-else>
								<text class="cuIcon-add" v-if="!item.follow"></text>
								<text class="margin-left-xs" v-if="!item.follow">关注</text>
								<text v-if="item.follow">已关注</text>
							</button>
						</view>
					</view>
				</view>
				
				<!--内容-->
				<view class="margin-tb text-black zaiui-text-content" @tap="listTap('contentTap',item,index)">
					<text v-html="item.text">{{item.text}}</text>
					<text class="text-blue margin-left-xs" v-if="item.text_btn">
						<text>查看全文</text>
						<text class="cuIcon-right"/>
					</text>
				</view>
				
				<!-- #ifndef APP-PLUS -->
				<view class="zaiui-video-box" v-if="item.video">
					<video class="video-view" :src="item.video" @error="videoErrorCallback"/>
				</view>
				<!-- #endif -->
				
				<!-- #ifdef APP-PLUS -->
				<view class="zaiui-video-box" v-if="item.video">
					<video-render :isCover="item.cover" :isSrc="item.video" :isNum="(index+1)"/>
				</view>
				<!-- #endif -->
				
				<view class="zaiui-img-grid-col" v-if="item.img.length > 0">
					<!--单图-->
					<view class="one-img" v-if="item.img.length == 1" @tap="imgTap(item.img[0],item.img,0)">
						<view class="img-grid" :style="[{backgroundImage:'url('+ item.img[0] +')'}]"/>
					</view>
					
					<!--两图-->
					<view class="grid col-2" v-if="item.img.length == 2">
						<block v-for="(items,indexs) in item.img" :key="indexs">
							<view class="img-grid-view" @tap="imgTap(items,items,indexs)">
								<view class="img-grid" :style="[{backgroundImage:'url('+ items +')'}]"/>
							</view>
						</block>
					</view>
					
					<!--多图-->
					<view class="grid col-3" v-if="item.img.length > 2">
						<block v-for="(items,indexs) in item.img" :key="indexs" v-if="indexs < 9">
							<view class="img-grid-view" @tap="imgTap(items,items,indexs)">
								<view class="img-grid" :style="[{backgroundImage:'url('+ items +')'}]"/>
							</view>
						</block>
					</view>
				</view>
				
				<!--话题-->
				<view class="cu-tag light bg-red round margin-top" v-if="item.talk" @tap="listTap('talkTap',item,index)">
					<text class="cuIcon-creativefill"></text>
					<text class="margin-left-xs">{{item.talk}}</text>
				</view>
				
				<!--操作-->
				<view class="flex p-xs zaiui-footer-tool">
					<view class="flex-sub" @tap="listTap('forwardTap',item,index)">
						<text class="cuIcon-forward icon"></text>
						<text class="margin-left-xs">分享</text>
					</view>
					<view class="flex-twice text-right">
						<text class="text-right margin-right-lg" @tap="listTap('commentTap',item,index)">
							<text class="cuIcon-comment icon"/>
							<text class="margin-left-xs">{{item.comment}}</text>
						</text>
						<text class="text-right" :class="item.appreciate_btn?'text-red':''" @tap="listTap('appreciateTap',item,index)">
							<text class="cuIcon-appreciate icon"/>
							<text class="margin-left-xs">{{item.appreciate}}</text>
						</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import videoRender from '@/components/zaiui-common/basics/video-render';
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'trends-list',
		components: {
			videoRender
		},
		props: {
			list_data: {
				type: Array,
				default: () => {
					return []
				}
			},
			isMin: {
				type: Number,
				default: 0
			},
			isMax: {
				type: Number,
				default: 0
			},
			viewBtn: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			listTap(tap,data,index) {
				this.$emit(tap, {
					data,
					index
				});
			},
			imgTap(img,arr,index) {
				this.$emit('imgTap', {
					img,
					arr,
					index
				});
			},
			getMinToMax(index) {
				let isMin = this.isMin, isMax = this.isMax;
				if(isMin == 0 && isMax == 0 ) {
					return true;
				} else if (isMin > 0 && isMax == 0) {
					if(index >= isMin) {
						return true;
					} else {
						return false;
					}
				} else if (isMin == 0 && isMax > 0) {
					if(index < isMax) {
						return true;
					} else {
						return false;
					}
				} else if (isMin > 0 && isMax > 0) {
					if(index >= isMin && index < isMax) {
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			},
			videoErrorCallback(e) {
				uni.showToast({
				    title: e.target.errMsg,
				    duration: 2000,
					icon: 'none'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-trends {
		border-radius: 18.18rpx;
		.cu-list {
			.cu-item {
				padding-right: 0;
				height: 99.99rpx;
				.cu-avatar {
					left: 0;
					width: 81.81rpx;
					height: 81.81rpx;
				}
				.content {
					left: 99.99rpx;
					line-height: 1.5em;
				}
				.action {
					width: 154.54rpx;
					text-align: right;
					.cu-btn {
						&:after {
							border-radius: 18.18rpx;
						}
						.cuIcon-add {
							font-size: 27.27rpx;
						}
					}
				}
				&:after {
				    width: 0;
				    height: 0;
					border-bottom: 0;
				}
			}
		}
		.zaiui-text-content {
			line-height: 1.6;
			.cuIcon-right {
				position: relative;
				top: 1rpx;
			}
		}
		.zaiui-video-box {
			position: relative;
			width: 100%;
			.video-view {
				width: 100%;
				height: 363.63rpx;
				z-index: 0;
			}
		}
		.zaiui-img-grid-col {
			position: relative;
			width: 100%;
			.one-img {
				position: relative;
				.img-grid {
					width: 100%;
					height: 363.63rpx;
					border-radius: 9.09rpx;
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
				}
			}
			.col-2 {
				.img-grid-view {
					padding: 5.45rpx;
					.img-grid {
					    position: relative;
					    width: 309.09rpx;
						height: 218.18rpx;
					    background-size: cover;
					    background-position: center;
					    border-radius: 9.09rpx;
					}
				}
			}
			.col-3 {
				.img-grid-view {
					padding: 5.45rpx;
					.img-grid {
					    position: relative;
					    width: 204.79rpx;
					    height: 204.79rpx;
					    background-size: cover;
					    background-position: center;
					    border-radius: 9.09rpx;
					}
				}
			}
		}
		.zaiui-footer-tool {
			margin: 40rpx 0 18.18rpx;
			.margin-right-lg {
			    margin-right: 94.54rpx;
			}
			.icon {
			    position: relative;
				font-size: 36.36rpx;
			    top: 4rpx;	
			}
		}
	}
</style>
