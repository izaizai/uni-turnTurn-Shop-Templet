<template>
	<view class="zaiui-home-box" :class="show?'show':''">
		<!--欢迎-->
		<welcome-tip content="中午好，仔仔" :show="true" :c_s="3000" @closeFinish="welcomeClose"/>
		
		<!--轮播背景-->
		<swiper-background :list_data="swiperInfo.list" :indexs="swiperInfo.index" :show="swiperInfo.show" :welcome="swiperInfo.welcome"/>
		
		<view class="zaiui-head-search-box" :class="headInfo.Class" :style="[{backgroundColor:'rgba(229, 77, 66,'+ headInfo.opacity +')'}]">
			
			<!--小程序端的标题-->
			<!-- #ifdef MP -->
			<view class="text-center text-white zaiui-small-routine-title">首页</view>
			<!-- #endif -->
			
			<!--搜索框-->
			<view class="cu-bar search zaiui-search-box">
				<view class="search-form round" @tap="searchTap">
					<text class="cuIcon-search"/>
					<text>口罩</text>
				</view>
				<view class="action text-white">领现金</view>
			</view>
			
			<!--选项卡-->
			<view class="zaiui-flex-tab show">
				<view class="flex text-white">
					<view class="basis-xxl">
						<scroll-view scroll-x class="nav z" scroll-with-animation :scroll-left="headTab.scrollLeft">
							<block v-for="(item,index) in headTab.list" :key="index">
								<view class="cu-item" :class="index==headTab.TabCur?'select':''" @tap="tabSelect" :data-id="index">
									<view>{{item}}</view>
									<view class="tab-dot bg-white"/>
								</view>
							</block>
						</scroll-view>
					</view>
					<view class="basis-xxs">
						<view class="sort-icon" @tap="sortVueTap">
							<text class="cuIcon-sort"/>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--中间内容区域-->
		<view class="zaiui-view-content" :class="[viewContent.welcome?'welcome':'',headTab.TabCur==0?'show':'']">
			<!--轮播图-->
			<view class="zaiui-swiper-box">
				<swiper class="screen-swiper square-dot c" autoplay circular indicator-dots :current="swiperInfo.index"  @change="swiperChange">
					<swiper-item v-for="(item,index) in swiperInfo.list" :key="index">
						<view class="swiper-padding">
							<image :src="getImgUrl(item.swiper)" mode="widthFix"/>
						</view>
					</swiper-item>
				</swiper>
			</view>
			
			<!--滑动菜单-->
			<grid-menu-list :list_data='gridMenuData' @listTap='gridMenuTap'/>
			
			<!--红包块-->
			<!-- #ifndef APP-PLUS -->
			<view class="bg-red margin radius padding-sm">
				<image class="red-envelopes" src="../../../static/images/home/sundry/2.png" mode="widthFix"/>
			</view>
			<!-- #endif -->
			
			<!-- #ifdef APP-PLUS -->
			<view class="bg-red margin radius padding-sm">
				<image class="red-envelopes" src="../../static/images/home/sundry/2.png" mode="widthFix"/>
			</view>
			<!-- #endif -->
			
			<!--免费鉴别-->
			<identify-list :list_data='identifyData' @listTap='identifyTap'/>
			
			<!--省心快卖-->
			<sell-quickly-list :list_data='quickly' @listTap='quicklyTap'/>
			
			<!--活动区域-->
			<activity-list :list_data='activity' @listTap='activityTap'/>
			
			<!--商品tab-->
			<view class="zaiui-goods-tab-box">
				<scroll-view scroll-x class="nav z margin-tb-sm">
					<view class="flex text-center">
						<block v-for="(item,index) in goodsTabData.list" :key="index">
							<view class="cu-item flex-sub nf" :class="index==goodsTabData.TabCur?'select':''" @tap="goodsTab" :data-id="index">
								<view class="cu-tag badge z bg-gradual-pink" v-if="item.tag">{{item.tag}}</view>
								<view :class="index == goodsTabData.TabCur?'text-red':''">{{item.title}}</view>
								<view class="tab-dot bg-red"/>
							</view>
						</block>
					</view>
				</scroll-view>
			</view>
			
			<view class="zaiui-tab-list">
				<!--商品列表-->
				<goods-list :list_data="goodsData" @listTap="goodsListTap" :show="goodsTabData.TabCur!=2 && goodsTabData.TabCur!=4?true:false"/>
				
				<!--直播列表-->
				<live-list :list_data="liveData" @listTap="liveListTap" :show="goodsTabData.TabCur==2?true:false"/>
				
				<!--视频列表-->
				<video-list :list_data="videoData" @listTap="videoListTap" :show="goodsTabData.TabCur==4?true:false"/>
			</view>
			
			<!--占位底部距离-->
			<view class="cu-tabbar-height"/>
		</view>
		
		<!--中间内容区域-分类-->
		<view class="zaiui-view-content" :class="headTab.TabCur!=0?'show':''">
			
			<!--宫格分类-->
			<grid-sort-list :list_data="gridSortData" @listTap="gridSortTap"/>
			
			<!--广告-->
			
			<!-- #ifndef APP-PLUS -->
			<view class="margin">
				<image class="zaiui-ad-img" src="../../../static/images/home/swiper/swiper-1.png" mode="widthFix"/>
			</view>
			<!-- #endif -->
			
			<!-- #ifdef APP-PLUS -->
			<view class="margin">
				<image class="zaiui-ad-img" src="../../static/images/home/swiper/swiper-1.png" mode="widthFix"/>
			</view>
			<!-- #endif -->
			
			<!--标题-->
			<view class="margin-bottom-sm zaiui-tab-list-title">
				<view class="flex flex-wrap">
					<view class="basis-sm text-right">
						<!-- #ifndef APP-PLUS -->
						<image class="img-aau" src="../../../static/zaiui-img/aau.png" lazy-load mode="widthFix"/>
						<!-- #endif -->
						
						<!-- #ifdef APP-PLUS -->
						<image class="img-aau" src="../../static/zaiui-img/aau.png" lazy-load mode="widthFix"/>
						<!-- #endif -->
					</view>
					<view class="basis-xs text-center">
						<text class="text-black text-xl text-bold">为您推荐</text>
					</view>
					<view class="basis-sm text-left">
						<!-- #ifndef APP-PLUS -->
						<image class="img-aau" src="../../../static/zaiui-img/aau.png" lazy-load mode="widthFix"/>
						<!-- #endif -->
						
						<!-- #ifdef APP-PLUS -->
						<image class="img-aau" src="../../static/zaiui-img/aau.png" lazy-load mode="widthFix"/>
						<!-- #endif -->
					</view>
				</view>
			</view>
			
			<!--商品列表-->
			<goods-list :list_data="goodsData" @listTap="goodsListTap"/>
			
			<!--占位底部距离-->
			<view class="cu-tabbar-height"/>
		</view>
		
		<!--弹出框-->
		<!-- #ifdef MP -->
		<modal-img :show="modalShow" src="../../../static/images/home/sundry/reward.png" @imgTap="imgTap" @closeTap="closeTap"/>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS || H5 -->
		<modal-img :show="modalShow" src="../../static/images/home/sundry/reward.png" @imgTap="imgTap" @closeTap="closeTap"/>
		<!-- #endif -->
		
		<!--打赏-->
		<view class="zaiui-add-btn-view-box" @tap="rewardTap">
			<button class="cu-btn cuIcon-likefill bg-red"></button>
		</view>
		
	</view>
</template>

<script>
	//加载组件  
	import welcomeTip from '@/zaiui/components/basics/welcome-tip';
	import swiperBackground from '@/zaiui/components/basics/swiper-background';
	import gridMenuList from '@/zaiui/components/list/grid-menu-list';
	import identifyList from '@/zaiui/components/list/identify-list';
	import sellQuicklyList from '@/zaiui/components/list/sell-quickly-list';
	import activityList from '@/zaiui/components/list/activity-list';
	import goodsList from '@/zaiui/components/list/goods-list';
	import liveList from '@/zaiui/components/list/live-list';
	import videoList from '@/zaiui/components/list/video-list';
	import footerTabbar from '@/zaiui/components/footer/footer-tabbar';
	import gridSortList from '@/zaiui/components/list/grid-sort-list';
	import modalImg from '@/zaiui/components/basics/modal-img';
	//======================================================================
	import _home_data from '@/zaiui/data/home.js';	//虚拟数据
	import _tool from '@/util/tools.js';
	export default {
		name: 'home',
		components: { 
			welcomeTip, swiperBackground, gridMenuList, identifyList, sellQuicklyList, activityList, goodsList, liveList, videoList, footerTabbar,
			gridSortList, modalImg
		},
		data() {
			return {
				swiperInfo: {index: 0, show: true, welcome: true, list: []}, headInfo: {Class: "", opacity: 0,}, goodsShow: true, 
				headTab: {TabCur: 0, scrollLeft: 0, list: []}, viewContent: {welcome: true,}, gridMenuData: [], identifyData: [],
				quickly: {}, activity: [], goodsTabData: {TabCur: 0, list: []}, goodsData: [], liveData: [], videoData: [],
				gridSortData: [], modalShow: true,
			}
		},
		props: {
			show: {
				type: Boolean,
				default: true
			},
			scrollY: {
				type: Number,
				default: 0
			},
			scrollBottom: {
				type: Number,
				default: 0
			}
		},
		watch: {
			scrollY() {
				//通知他妈的滚动了。
				this.setPageScroll(this.scrollY);
			},
			scrollBottom() {
				if(this.scrollBottom != 0) {
					//通知他妈的触底了
					this.setReachBottom();
				}
			},
		},
		created() {
			//加载虚拟数据
			this.headTab.list = _home_data.tab();
			this.swiperInfo.list = _home_data.swiper();
			this.gridMenuData = _home_data.nav();
			this.identifyData = _home_data.live();
			this.quickly.swiper = _home_data.earn();
			this.quickly.list = _home_data.sellQuickly();
			this.activity = _home_data.activity();
			this.goodsTabData.list = _home_data.goodsTab();
			//商品列表数据
			let GoodsData = _home_data.goodsList();
			//推荐感兴趣数据
			let recommendData = _home_data.recommend();
			//把推荐感兴趣的数据，添加到商品数据里，可扩展为随机位置显示。
			GoodsData.splice(1, 0, recommendData);
			this.goodsData = GoodsData;
			this.headInfo.Class = 'welcome';
		},
		mounted() {
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
			//次级虚拟数据加载
			this.liveData = _home_data.liveData();
			this.videoData = _home_data.videoData();
			this.gridSortData = _home_data.gridSortData();
		},
		methods: {
			getImgUrl(url) {
				return _tool.getImgUrl(url);
			},
			//页面被滚动
			setPageScroll(scrollTop) {
				//console.log(scrollTop);
				if(this.headTab.TabCur == 0) {
					if(scrollTop <= 100) {
						let num = scrollTop / 100;
						this.headInfo.opacity = num;
					} else if(scrollTop > 100) {
						this.headInfo.opacity = 1;
					}
				}
			},
			//触底了
			setReachBottom() {
				console.log('触底了');
			},
			//欢迎提示关闭事件
			welcomeClose(bol) {
				this.swiperInfo.welcome = bol;
				this.headTab.welcome = bol;
				let Class = this.headInfo.Class;
				this.headInfo.Class = Class.replace(/welcome/g, '');
				this.viewContent.welcome = bol;
				//设置颜色
				_tool.setBarColor(false);
				console.log(bol);
			},
			//搜索框下的tab菜单被点击
			tabSelect(e) {
				let index = e.currentTarget.dataset.id;
				this.headTab.TabCur = index;
				this.headTab.scrollLeft = (index - 1) * 60;
				if(index == 0) {
					this.swiperInfo.show = true;
					this.headInfo.opacity = 0;
				} else {
					this.swiperInfo.show = false;
					this.headInfo.opacity = 1;
				}
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 0
				});
			},
			swiperChange(e) {
				this.swiperInfo.index = e.detail.current;
			},
			gridMenuTap(e) {
				console.log(e);
				uni.navigateTo({
					url: "/pages/home/sort_list"
				});
			},
			identifyTap(e) {
				console.log(e);
			},
			quicklyTap(e) {
				console.log(e);
			},
			activityTap(e) {
				console.log(e);
			},
			//商品列表上的分类tab被点击
			goodsTab(e) {
				this.goodsTabData.TabCur = e.currentTarget.dataset.id;
				// #ifdef H5
				uni.pageScrollTo({
				    scrollTop: 1060,
				    duration: 200
				});
				// #endif
				
				// #ifdef APP-PLUS
				uni.pageScrollTo({
				    scrollTop: 1010,
				    duration: 200
				});
				// #endif
			},
			goodsListTap(e) {
				console.log(e);
				if(e.index==0) {
					uni.navigateTo({
						url: '/pages/goods/goods'
					});
				} else if(e.index == 2) {
					uni.navigateTo({
						url: '/pages/goods/second_hand'
					});
				} else if(e.index == 3) {
					uni.navigateTo({
						url: '/pages/goods/second_terrace'
					});
				} else {
					
				}
			},
			liveListTap(e) {
				console.log(e);
			},
			videoListTap(e) {
				console.log(e);
			},
			gridSortTap(e) {
				console.log(e);
			},
			rewardTap() {
				uni.navigateTo({
					url: "/pages/goods/reward"
				});
			},
			imgTap() {
				this.modalShow = false;
				uni.navigateTo({
					url: "/pages/goods/reward"
				});
				console.log('图片被点击');
			},
			closeTap() {
				this.modalShow = false;
				console.log('点击了关闭');
			},
			sortVueTap() {
				uni.navigateTo({
					url: "/pages/home/sort"
				});
			},
			searchTap() {
				uni.navigateTo({
					url: "/pages/home/search"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../zaiui/style/home.scss";
	.zaiui-home-box {
		display: none;
	}
	.zaiui-home-box.show {
		display: block;
	}
</style>
