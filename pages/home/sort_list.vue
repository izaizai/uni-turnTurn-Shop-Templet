<template>
	<view>
		<!--标题栏-->
		<bar-search-title bgColor="bg-white" content="苹果8p" @contentTap="searchTap">
			<block slot="right">
				<text class="cuIcon-service"/>
			</block>
		</bar-search-title>
		
		<!--轮播图-->
		<view class="bg-white zaiui-swiper-box">
			<swiper class="screen-swiper square-dot c" autoplay circular indicator-dots :current="swiperIndex"  @change="swiperChange">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<view class="swiper-padding">
						<image :src="item.img" mode="widthFix"/>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<!--投资-->
		<view class="bg-white zaiui-invest-title-box">
			<view class="text-box">
				<text class="cuIcon-title text-black"/>
				<text class="text-lg text-bold text-black">腾讯战略投资</text>
				<text class="text-sm margin-left-sm">严格质检消毒，4重保障放心购买</text>
			</view>
			<view class="img" style="background-image:url(/static/images/home/sundry/16.png)"/>
		</view>
		
		<!--圆图标导航-->
		<view class="bg-white zaiui-grid-round-box">
			<view class="cu-list grid col-5 no-border">
				<block v-for="(item,index) in gridRoundList" :key="index" v-if="index < 5">
					<view class="cu-item">
						<view class="grid-icon">
							<image class="icon" :src="item.img" mode="widthFix"/>
						</view>
						<view class="cu-tag badge z bg-orange" v-if="item.badge">{{item.badge}}</view>
						<text class="text-black">{{item.name}}</text>
					</view>
				</block>
			</view>
		</view>
		
		<!--小图标导航-->
		<view class="zaiui-grid-sm-box">
			<view class="cu-list grid col-5 no-border">
				<block v-for="(item,index) in gridSmList" :key="index" v-if="index < 10">
					<view class="cu-item">
						<view class="grid-icon">
							<image class="icon" :src="item.img" mode="widthFix"/>
						</view>
						<text class="text-black">{{item.name}}</text>
					</view>
				</block>
			</view>
		</view>
		
		<!--限时秒杀-->
		<view class="bg-white zaiui-seckill-list-view-box">
			<view class="list-title-box">
				<view class="text-view">
					<text class="text-red text-lg text-bold">限时秒杀</text>
					<text class="cu-tag bg-black radius sm">00</text>
					<text class="text-black sm colon">:</text>
					<text class="cu-tag bg-black radius sm">07</text>
					<text class="text-black sm colon">:</text>
					<text class="cu-tag bg-black radius sm">50</text>
				</view>
				<view class="text-gray text-sm text-right-view">
					<text>更多</text>
					<text class="cuIcon-right"/>
				</view>
			</view>
			<view class="seckill-goods-list-view">
				<scroll-view class="recommend-scroll" scroll-x>
					<block v-for="(items,indexs) in goodsSortListData" :key="indexs">
						<view :id="['scroll' + (indexs + 1 )]" class="recommend-scroll-item">
							<view class="goods-img-view">
								<view class="cu-avatar xl radius" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
								<text class="cu-tag radius sm bg-gradual-pink">直降200</text>
							</view>
							<view class="text-cut-2 text-sm text-black text-bold margin-tb-sm">{{items.title}}</view>
							<view class="text-red text-price margin-top-sm text-lg">{{items.price}}</view>
							<view class="text-gray text-through text-sm">￥{{items.cost_price}}</view>
							<text class="cu-tag round sm bg-orange rob-tag">抢</text>
						</view>
					</block>
				</scroll-view>
			</view>
		</view>
		
		<!--宫格活动-->
		<view class="zaiui-gird-hot-goods-box">
			<view class="bg-white margin">
				<view class="cu-list grid col-2">
					<view class="cu-item">
						<view class="text-view">
							<text class="text-title">热销榜</text>
							<view class="text-gray text-sm text-right-view">
								<text class="text-m">更多</text>
								<text class="cuIcon-right icon"/>
							</view>
						</view>
						<view class="grid col-2 margin-top-sm">
							<view class="goods-item">
								<view class="cu-avatar xl radius" style="background-image:url(/static/images/home/goods/4.png);"/>
								<text class="text-goods-title">iPhoneX</text>
							</view>
							<view class="goods-item">
								<view class="cu-avatar xl radius" style="background-image:url(/static/images/home/goods/1.png);"/>
								<text class="text-goods-title">iPhone7</text>
							</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="text-view">
							<text class="text-title">卖手机</text>
							<text class="cu-tag bg-red radius sm">红包</text>
						</view>
						<view class="margin-top-sm zaiui-list-2-view">
							<view class="goods-img-view">
								<view class="cu-avatar xl radius" style="background-image:url(/static/images/home/goods/5.png);"/>
								<view class="zaiui-text-view">
									<view class="text-price text-red text-lg">2999</view>
									<view class="text-gray text-sm">比回收价高760</view>
									<view class="text-gray text-sm">500w+人已卖</view>
								</view>
							</view>
							<text class="text-goods-title">
								<text class="text-title-1">本机</text>
								<text class="text-title-2">iPhone7 Plus</text>
							</text>
						</view>
					</view>
					<view class="cu-item">
						<view class="text-view">
							<text class="text-title">iPhone X 特惠</text>
							<view class="text-sm text-gray">低至3600元起</view>
						</view>
						<view class="grid col-2 margin-top-sm">
							<view class="text-left goods-item">
								<view class="cu-avatar xl radius" style="background-image:url(/static/images/home/goods/6.png);"/>
							</view>
							<view class="text-left goods-item">
								<view class="cu-avatar xl radius" style="background-image:url(/static/images/home/goods/10.png);"/>
							</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="text-view">
							<text class="text-title">自营准新机专区</text>
							<view class="text-sm text-gray">99新！5折起</view>
						</view>
						<view class="grid col-2 margin-top-sm">
							<view class="text-left goods-item">
								<view class="cu-avatar xl radius" style="background-image:url(/static/images/home/goods/11.png);"/>
							</view>
							<view class="text-left goods-item">
								<view class="cu-avatar xl radius" style="background-image:url(/static/images/home/goods/9.png);"/>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--商品列表-->
		<view class="bg-white margin-top padding-bottom-sm padding-top-sm zaiui-goods-list-view-box">
			<scroll-view scroll-x class="nav z">
				<view class="flex text-center">
					<block v-for="(item,index) in goodsTab" :key="index">
						<view class="cu-item flex-sub text-black" :class="index==TabCur?'select':''"  @tap="tabSelect" :data-id="index">
							<view>{{item}}</view>
							<view class="tab-dot bg-red"/>
						</view>
					</block>
				</view>
			</scroll-view>
			<!--商品列表1-->
			<goods-sort-list :list_data="goodsSortListData" @listTap="goodsSortListTap" :show="TabCur==0?true:false"></goods-sort-list>
			<!--商品列表2-->
			<goods-sort-list :list_data="goodsSortListData" @listTap="goodsSortListTap" :show="TabCur==1?true:false"></goods-sort-list>
		</view>
		
		<!--加号按钮-->
		<view class="zaiui-footer-fixed zaiui-add-btn-view-box">
			<button class="cu-btn cuIcon-add bg-red"/>
		</view>
		
	</view>
</template>

<script>
	import barSearchTitle from '@/components/zaiui-common/basics/bar-search-title';
	import goodsSortList from '@/components/zaiui-common/list/goods-sort-list';

	import _sort_list_data from '@/static/zaiui/data/sort_list.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		components: {
			barSearchTitle, goodsSortList,
		},
		data() {
			return {
				swiperIndex: 0, swiperList: [], gridRoundList: [], gridSmList: [], goodsTab: ['推荐','官方自营'], TabCur: 0, goodsSortListData: [],
			}
		},
		onLoad() {
			this.swiperList = _sort_list_data.swiperListData();
			this.gridRoundList = _sort_list_data.gridRoundList();
			this.gridSmList = _sort_list_data.gridSmList();
			this.goodsSortListData = _sort_list_data.goodsSortListData();
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			swiperChange(e) {
				this.swiperIndex = e.detail.current;
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			goodsSortListTap(e) {
				console.log(e);
			},
			searchTap() {
				uni.navigateTo({
					url: "/pages/home/search"
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
	@import "../../static/zaiui/style/sort_list.scss";
</style>
