<template>
	<view class="zaiui-find-box" :class="show?'show':''">
		<!--分类标题栏-->
		<view class="bg-white zaiui-title-tab-box">
			
			<!--小程序端的标题-->
			<!-- #ifdef MP -->
			<view class="text-center text-black zaiui-small-routine-title">发现</view>
			<!-- #endif -->
			
			<view class="flex flex-wrap">
				<view class="basis-l">
					<scroll-view scroll-x class="nav z">
						<block v-for="(item,index) in TabData" :key="index">
							<view class="cu-item text-black" :class="index==TabCur?'select':''" @tap="tabSelect" :data-id="index">
								<view>{{item}}</view>
								<view class="tab-dot bg-red"/>
							</view>
						</block>
					</scroll-view>
				</view>
				<view class="basis-s text-right">
					<button class="cu-btn sm bg-red margin-top-xs">
						<text class="cuIcon-write"/>
						<text class="margin-left-xs">发布</text>
					</button>
				</view>
			</view>
		</view>
		
		<!--占位的-->
		<view class="zaiui-seat-height"/>
		
		<!--中间内容区域-->
		<view class="zaiui-view-content" v-if="TabCur == 0">
			
			<!--动态列表-->
			<trends-list :list_data="followTrendsData" :viewBtn="true"
			@userTap="trends_userTap" @followTap="trends_followTap" @contentTap="trends_contentTap"
			@imgTap="trends_imgTap" @talkTap="trends_talkTap" @viewBtnTap="trends_viewBtnTap"
			@commentTap="trends_commentTap" @appreciateTap="trends_appreciateTap"/>

			<!--占位底部距离-->
			<view class="cu-tabbar-height"/>
		</view>
		
		<!--中间内容区域-->
		<view class="zaiui-view-content" v-if="TabCur == 1">
			
			<!--动态列表1-->
			<trends-list :list_data="trendsData" :isMax="2" 
			@userTap="trends_userTap" @followTap="trends_followTap" @contentTap="trends_contentTap"
			@imgTap="trends_imgTap" @talkTap="trends_talkTap" @forwardTap="trends_forwardTap"
			@commentTap="trends_commentTap" @appreciateTap="trends_appreciateTap"/>
			
			<!--热门话题,小程序上无效，待查原因-->
			<!-- #ifndef MP -->
			<hot-topic-list :list_data="hotTopicData" @listTap="hotTopicTap" @viewAllTap="viewAllTap"/>
			<!-- #endif -->
			
			<!--为你推荐-->
			<recommend-scroll-list :list_data="recommendScrollData" @userTap="r_userTap"
			@followTap="r_followTap" @viewAllTap="r_viewAllTap"/>
			
			<!--动态列表2-->
			<trends-list :list_data="trendsData" :isMin="2" 
			@userTap="trends_userTap" @followTap="trends_followTap" @contentTap="trends_contentTap"
			@imgTap="trends_imgTap" @talkTap="trends_talkTap" @forwardTap="trends_forwardTap"
			@commentTap="trends_commentTap" @appreciateTap="trends_appreciateTap"/>
			
			<!--占位底部距离-->
			<view class="cu-tabbar-height"/>
		</view>
		
		<!--中间内容区域-->
		<view class="margin-top" v-show="TabCur == 2?true:false">
			<!--话题类型-->
			<topic-grid-list :list_data="topicGridData" @listTap="topicGridTap"/>
			
			<view class="zaiui-view-content">
				<!--热门话题,小程序上无效，待查原因-->
				
				<!-- #ifndef MP  -->
				<hot-topic-list isSort="topic" :list_data="hotTopicData" @listTap="hotTopicTap" @viewAllTap="viewAllTap"/>
				<!-- #endif -->
				
				<!--话题列表-->
				<topic-card-list :list_data="topicCardData" @listTap="topicCardTap" @viewTap="topicCardViewTap"/>
				
				<!--占位底部距离-->
				<view class="cu-tabbar-height"/>
			</view>
		</view>
		
	</view>
</template>

<script>
	import trendsList from '@/components/zaiui-common/list/trends-list';
	import hotTopicList from '@/components/zaiui-common/list/hot-topic-list';
	import recommendScrollList from '@/components/zaiui-common/list/recommend-scroll-list';
	import topicGridList from '@/components/zaiui-common/list/topic-grid-list';
	import topicCardList from '@/components/zaiui-common/list/topic-card-list';
	
	//======================================================================
	import _find_data from '@/static/zaiui/data/find.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';
	
	export default {
		name: 'find',
		components: { 
			trendsList, hotTopicList, recommendScrollList, topicGridList, topicCardList
		},
		data() {
			return {
				TabCur: 1, TabData: ['关注','推荐','广场'], followTrendsData: [], trendsData: [], hotTopicData: [], recommendScrollData: [],
				topicGridData: [], topicCardData: [],
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
			this.trendsData = _find_data.trendsData();
			this.hotTopicData = _find_data.hotTopicData();
			this.recommendScrollData = _find_data.recommendScrollData();
			this.followTrendsData = _find_data.followTrendsData();
			this.topicGridData = _find_data.topicGridData();
			this.topicCardData = _find_data.topicCardData();
		},
		mounted() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			//页面被滚动
			setPageScroll(scrollTop) {
				//console.log(scrollTop);
			},
			//触底了
			setReachBottom() {
				console.log('触底了');
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 0
				});
			},
			trends_userTap(e) {
				console.log('用户区域被点击：' + JSON.stringify(e));
			},
			trends_followTap(e) {
				console.log('关注按钮被点击：' + JSON.stringify(e));
			},
			trends_contentTap(e) {
				console.log('文字内容被点击：' + JSON.stringify(e));
			},
			trends_imgTap(e) {
				console.log('图片被点击：' + JSON.stringify(e));
			},
			trends_talkTap(e) {
				console.log('话题被点击：' + JSON.stringify(e));
			},
			trends_forwardTap(e) {
				console.log('分享被点击：' + JSON.stringify(e));
			},
			trends_commentTap(e) {
				console.log('评论被点击：' + JSON.stringify(e));
			},
			trends_appreciateTap(e) {
				console.log('点赞被点击：' + JSON.stringify(e));
			},
			trends_viewBtnTap(e) {
				console.log('查看TA被点击：' + JSON.stringify(e));
			},
			hotTopicTap(e) {
				console.log(e);
			},
			viewAllTap() {
				console.log('点击了查看全部');
			},
			r_userTap(e) {
				console.log('用户信息被点击：' + JSON.stringify(e));
			},
			r_followTap(e) {
				console.log('关注按钮被点击：' + JSON.stringify(e));
			},
			r_viewAllTap() {
				console.log('点击了查看全部');
			},
			topicGridTap(e) {
				console.log(e);
			},
			topicCardTap(e) {
				console.log(e);
			},
			topicCardViewTap(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-find-box {
		display: none;
	}
	.zaiui-find-box.show {
		display: block;
	}
	.zaiui-title-tab-box {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 999999;
		padding: calc(var(--status-bar-height) + 9.09rpx) 27.27rpx 9.09rpx 9.09rpx;
		.flex {
			.basis-l {
				flex-basis: 70%;
			}
			.basis-s {
				flex-basis: 30%;
			}
		}
	}
	.zaiui-seat-height {
		width: 100%;
		
		/* #ifndef MP */
		height: calc(var(--status-bar-height) + 81.81rpx);
		/* #endif */
		
		/* #ifdef MP */
		margin-top: calc(var(--status-bar-height) + 185rpx);
		/* #endif */
	}
	.zaiui-view-content {
		padding: 0 27.27rpx 54.54rpx;
	}
</style>
