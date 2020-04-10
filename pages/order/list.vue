<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor='bg-white' @rightTap="barEditTap">
			<block slot="content">我买到的</block>
			<block slot="right">
				<text v-if="goods_checked">完成</text>
				<text v-else>编辑</text>
			</block>
		</bar-title>
		
		<!--分类滑动列表-->
		<view class="zaiui-sort-grid-box">
			<scroll-view class="scroll-view" scroll-x>
				<block v-for="(item,index) in sort_grid_data" :key="index">
					<view :id="['sortGrid' + (index + 1 )]" class="scroll-item">
						<view class="cu-avatar radio" :style="[{backgroundImage:'url('+ item.img +')'}]"/>
						<view class="text-sm text">{{item.title}}</view>
					</view>
				</block>
			</scroll-view>
		</view>
		
		<!--tab列表-->
		<view class="bg-white zaiui-nav-tab-view">
			<scroll-view scroll-x class="nav z" scroll-with-animation :scroll-left="tab_scroll">
				<block v-for="(item,index) in nav_list" :key="index">
					<view class="cu-item" :class="index == tab_cur?'select':''" @tap="tabSelect" :data-id="index">
						<view :class="index == tab_cur?'text-black':''">{{item}}</view>
						<view class="tab-dot bg-red"/>
					</view>
				</block>
			</scroll-view>
		</view>
		
		<!--订单列表-->
		<block v-for="(item,index) in order_list" :key="index" v-if="tab_cur == 0">
			<view class="bg-white zaiui-order-tab-view" @tap="detailsTap">
				<!--店铺名称-->
				<view class="shop-title-view">
					<view class="cu-avatar sm round" :style="[{backgroundImage:'url('+ item.img +')'}]"/>
					<view class="text-black text-cut shop-name">{{item.name}}</view>
					<text class="text-right text-gray text-sm">{{item.status}}</text>
				</view>
				<!--商品列表-->
				<block v-for="(items,indexs) in item.goods_list" :key="indexs">
					<view class="goods-list-view">
						<view class="cu-avatar lg radius" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
						<view class="goods-info-view">
							<view class="text-black text-cut name">{{items.name}}</view>
							<view class="text-gray text-sm text-cut introduce">{{items.introduce}}</view>
							<view class="text-cut tag-view">
								<block v-for="(item_s,index_s) in items.tag" :key="index_s">
									<text class="cu-tag sm line-blue radius">{{item_s}}</text>
								</block>
							</view>
							<view class="text-price text-red">{{items.price}}</view>
						</view>
					</view>
				</block>
				<!--统计-->
				<view class="statistics-view">
					<view class="text-black text-sm text-right">
						<text>共{{item.num}}件</text>
						<text v-if="item.type == 1">商品 实付款：</text>
						<text v-if="item.type == 0">商品 应付款：</text>
						<text class="text-price text-lg">{{item.price}}</text>
					</view>
				</view>
				<!--按钮-->
				<view class="zaiui-btn-view" v-if="item.type == 1">
					<button class="cu-btn line-black sm radius">联系卖家</button>
					<button class="cu-btn line-black sm radius" @tap="whereaboutsTap">查看钱款去向</button>
					<button class="cu-btn line-red sm radius" @tap="appraiseTap">查看评价</button>
				</view>
				<!--按钮-->
				<view class="zaiui-btn-view" v-if="item.type == 0">
					<button class="cu-btn line-black sm radius">联系卖家</button>
				</view>
			</view>
		</block>
		
		<!--无数据-->
		<view class="bg-white zaiui-null-view" v-if="tab_cur != 0">
			<view class="img-view">
				<view class="cu-avatar lg round" style="background-image:url('/static/zaiui/img/aa6.png')"/>
			</view>
			<view class="text-sm margin-top-sm">您还没有相关订单哦</view>
		</view>
		
		
		<!--到底了-->
		<view class="zaiui-foot-tip-view" v-if="tab_cur == 0">
			<view class="img-view">
				<view class="cu-avatar round" style="background-image:url('/static/zaiui/img/acn.png')"/>
			</view>
			<view class="text-gray">hi,到底啦~</view>
		</view>
		
		<!--小程序端显示-->
		<!-- #ifdef MP -->
			<!--编辑-->
			<view class="zaiui-add-btn-view-box" @tap="barEditTap">
				<button class="cu-btn cuIcon-check bg-red" v-if="goods_checked"></button>
				<button class="cu-btn cuIcon-write bg-red" v-else></button>
			</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	
	import _sort_grid from '@/static/zaiui/data/order_list.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		components: {
			barTitle,
		},
		data() {
			return {
				sort_grid_data: [], nav_list: [], tab_cur: 0, tab_scroll: 0, order_list: [], goods_checked: false,
			}
		},
		onLoad() {
			this.sort_grid_data = _sort_grid.sortGridData();
			this.order_list = _sort_grid.orderListData();
			this.nav_list = _sort_grid.navListData();
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
				let index = e.currentTarget.dataset.id;
				this.tab_cur = index;
				this.tab_scroll = (index - 1) * 60;
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 0
				});
			},
			barEditTap() {
				if (this.goods_checked) {
					this.goods_checked = false;
				} else {
					this.goods_checked = true;
				}
			},
			whereaboutsTap() {
				uni.navigateTo({
					url: "/pages/order/whereabouts"
				});
			},
			appraiseTap() {
				uni.navigateTo({
					url: "/pages/order/view_appraise"
				});
			},
			detailsTap() {
				uni.navigateTo({
					url: "/pages/order/details"
				});
			}
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	@import "../../static/zaiui/style/order-list.scss";
</style>
