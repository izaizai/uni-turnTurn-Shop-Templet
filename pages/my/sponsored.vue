<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">我的红包</block>
			<block slot="right">
				<text class="text-black">使用说明</text>
			</block>
		</bar-title>
		
		<!--红包Tab-->
		<scroll-view scroll-x class="bg-white nav z text-center">
			<block v-for="(item,index) in TabData" :key="index">
				<view class="cu-item" :class="index == TabCur?'select':''" @tap="tabSelect" :data-id="index">
					<view :class="index == TabCur?'text-black':''">{{item}}</view>
					<view class="tab-dot bg-red"/>
				</view>
			</block>
		</scroll-view>
		
		<!--红包列表-->
		<view class="zaiui-sponsored-card-view">
			<view class="card-price-view">
				<view class="text-red price-left-view">
					<text class="text-sm">￥</text>
					<text class="price">10</text>
				</view>
				<view class="name-content-view">
					<view class="text-cut text-red">限购【某某某】店铺商品</view>
					<view class="text-xs">满99元可用</view>
					<view class="text-xs">04.01 00:00 - 12.01 23:59</view>
				</view>
				<view class="btn-right-view">
					<button class="cu-btn bg-red round sm">去使用</button>
				</view>
			</view>
			<view class="card-num-view">
				<view class="text-xs">满99可用</view>
				<text class="cuIcon-unfold"/>
			</view>
		</view>
		
		<view class="zaiui-sponsored-card-view">
			<view class="card-price-view">
				<view class="text-red price-left-view">
					<text class="text-sm">￥</text>
					<text class="price">10</text>
				</view>
				<view class="name-content-view">
					<view class="text-cut text-red">限购【某某某】店铺商品</view>
					<view class="text-xs">满99元可用</view>
					<view class="text-xs">04.01 00:00 - 12.01 23:59</view>
				</view>
				<view class="btn-right-view">
					<button class="cu-btn bg-red round sm">去使用</button>
				</view>
			</view>
			<view class="card-num-view">
				<view class="text-xs">满99可用</view>
				<text class="cuIcon-unfold"/>
			</view>
		</view>
		
		<view class="zaiui-sponsored-card-view">
			<view class="card-price-view">
				<view class="text-red price-left-view">
					<text class="text-sm">￥</text>
					<text class="price">10</text>
				</view>
				<view class="name-content-view">
					<view class="text-cut text-red">限购【某某某】店铺商品</view>
					<view class="text-xs">满99元可用</view>
					<view class="text-xs">04.01 00:00 - 12.01 23:59</view>
				</view>
				<view class="btn-right-view">
					<button class="cu-btn bg-red round sm">去使用</button>
				</view>
			</view>
			<view class="card-num-view">
				<view class="text-xs">满99可用</view>
				<text class="cuIcon-unfold"/>
			</view>
		</view>
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		components: {
			barTitle
		},
		data() {
			return {
				TabCur: 0, TabData: ['未使用(4)','已使用','已过期'],
			}
		},
		onLoad() {
			
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 0
				});
			},
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	page {
		background: #FFFFFF;
	}
	.zaiui-sponsored-card-view {
		position: relative;
		margin: 27.27rpx 27.27rpx 0;
		.card-price-view {
		    position: relative;
		    background: #FFF5F5;
			border-radius: 14.54rpx 14.54rpx 0 0;	
		    padding: 18.18rpx;
			.price-left-view {
				position: absolute;
				height: 125.45rpx;
				width: 145.45rpx;
				text-align: center;
				line-height: 125.45rpx;
				.price {
				    font-size: 45.45rpx;
				    font-weight: 400;	
				}
			}
			.name-content-view {
				position: relative;
			    padding-left: 163.63rpx;
			    padding-right: 145.45rpx;
				height: 125.45rpx;
				line-height: 1.8;
				color: #999898;
				&::before {
					content: '';
					position: absolute;
					top: -18.18rpx;
					bottom: -18.18rpx;
					margin-left: -18.18rpx;
					border-left: 2rpx dashed #fdbabc;
				}
			}
			.btn-right-view {
				position: absolute;
			    right: 27.27rpx;
			    top: 18.18rpx;
				height: 125.45rpx;
				line-height: 125.45rpx;
			}
		}
		.card-num-view {
		    position: relative;
		    background: #FFECED;
		    border-radius: 0 0 14.54rpx 14.54rpx;
			border-top: 2rpx dashed #dedbdb;
		    padding: 10.9rpx 27.27rpx;
			color: #999898;
			&::before {
				content: '';
			    position: absolute;
			    width: 36.36rpx;
			    height: 36.36rpx;
			    background: #ffffff;
			    border-radius: 50%;
			    top: -18.18rpx;
			    left: -18.18rpx;
			}
			&::after {
			    content: '';
			    position: absolute;
			    width: 36.36rpx;
			    height: 36.36rpx;
			    background: #ffffff;
			    border-radius: 50%;
			    top: -18.18rpx;
			    right: -18.18rpx;
			}
			view {
				position: relative;
				padding-right: 72.72rpx;
			}
			text {
			    position: absolute;
			    right: 27.27rpx;
			    top: 14.54rpx;
			}
		}
	}
</style>
