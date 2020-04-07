<template>
	<view>
		<view class="zaiui-bar-search-title-box">
			<view class="cu-bar fixed no-shadow bg-white">
				<view class="action" @tap="BackPage">
					<text class="cuIcon-back"/>
				</view>
				<view class="content search" @tap="searchTap">
					<view class="search-form round">
						<text class="cuIcon-search"/>
						<text class="margin-left-xs">输入您正在找的宝贝</text>
					</view>
				</view>
			</view>
			<!--占位的-->
			<view class="zaiui-seat-height"/>
		</view>
		
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop">
				<block v-for="(item,index) in list" :key="index">
					<view class="cu-item" :class="index==tabCur?'text-red cur':''" @tap="TabSelect" :data-id="index">
						<view :class="index==tabCur?'text-black text-bold':''">分类-{{item.name}}</view>
					</view>
				</block>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<block v-for="(item,index) in list" :key="index">
					<view class="padding-top padding-lr" :id="'main-'+index">
						
						<!--标题栏-->
						<view class="cu-bar bg-white">
							<view class="action">
								<text class="cuIcon-title text-red"/>
								<text>标题栏-{{item.name}}</text>
							</view>
						</view>
						
						<!--图标导航-->
						<view class="zaiui-grid-icon-box">
							<view class="cu-list grid col-3 no-border">
								<block v-for="(items,indexs) in sortList" :key="indexs">
									<view class="cu-item">
										<view class="grid-icon">
											<image class="icon" :src="items.img" lazy-load mode="widthFix"/>
										</view>
										<text class="text-black">{{items.name}}</text>
									</view>
								</block>
							</view>
						</view>
						
					</view>
				</block>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import _sort_data from '@/static/zaiui/data/sort_vue.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		data() {
			return {
				list: [], tabCur: 0, mainCur: 0, verticalNavTop: 0, load: true, sortList: [],
			}
		},
		onLoad() {
			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
			}
			this.list = list;
			this.listCur = list[0];
			
			this.sortList = _sort_data.sortListData();
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			BackPage() {
				uni.navigateBack();
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
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
	
	@import "../../static/zaiui/style/sort_vue.scss";
	
</style>
