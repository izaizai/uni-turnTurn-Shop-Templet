<template>
	<view>
		<view class="zaiui-bar-search-title-box">
			<view class="cu-bar search bg-white fixed no-shadow">
				<view class="action" @tap="BackPage">
					<text class="cuIcon-back"></text>
				</view>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @input="searchInput" :value="searchKey" :adjust-position="false" type="text" placeholder="苹果7" confirm-type="search"></input>
					<text class="cuIcon-close close-icon" v-if="search_close" @tap="closeInput"></text>
				</view>
				<view class="action">
					<!--小程序端不显示-->
					<!-- #ifndef MP -->
					<text class="text-red">搜索</text>
					<!-- #endif -->
				</view>
			</view>
			<!--占位的-->
			<view class="zaiui-seat-height"></view>
		</view>
		
		<!--搜索区域-->
		<view class="padding zaiui-search-list-view" v-if="!deleteView">
			<!--搜索记录-->
			<view class="search-list-view">
				<view class="search-bar-view">
					<text class="text-black">历史搜索</text>
					<text class="cuIcon-delete text-gray icon-right" @tap="deleteTap"></text>
				</view>
				<view class="btn-view">
					<button class="cu-btn round">耳机</button>
					<button class="cu-btn round">苹果手机</button>
					<button class="cu-btn round">电动车</button>
				</view>
			</view>
			
			<!--推荐搜索-->
			<view class="search-list-view">
				<view class="search-bar-view">
					<text class="text-black">推荐搜索</text>
				</view>
				<view class="btn-view">
					<button class="cu-btn round">耳机</button>
					<button class="cu-btn round">苹果手机</button>
					<button class="cu-btn round">电动车</button>
					<button class="cu-btn round">笔记本</button>
					<button class="cu-btn round">衣柜</button>
					<button class="cu-btn round">平板电脑</button>
					<button class="cu-btn round">华为手机</button>
					<button class="cu-btn round">小米</button>
					<button class="cu-btn round">三星</button>
				</view>
			</view>
		</view>
		
		<!--处理历史记录-->
		<view class="padding zaiui-search-list-view" v-if="deleteView">
			<!--搜索记录-->
			<view class="search-list-view">
				<view class="search-bar-view">
					<text class="text-black">历史搜索</text>
					<view class="text-sm text-right">
						<text class="text-gray">全部删除</text>
						<text class="text-red" @tap="logTap">完成</text>
					</view>
				</view>
				<view class="btn-view">
					<button class="cu-btn round">
						<text>耳机</text>
						<text class="cuIcon-roundclosefill close-icon"></text>
					</button>
					<button class="cu-btn round">
						<text>苹果手机</text>
						<text class="cuIcon-roundclosefill close-icon"></text>
					</button>
					<button class="cu-btn round">
						<text>电动车</text>
						<text class="cuIcon-roundclosefill close-icon"></text>
					</button>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import _tool from '@/util/tools.js';	//工具函数
	export default {
		data() {
			return {
				search_close: false, searchKey: '', deleteView: false,
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
			BackPage() {
				uni.navigateBack();
			},
			searchInput(event) {
				let value = event.detail.value;
				this.searchKey = value;
				if(value) {
					this.search_close = true;
				} else {
					this.search_close = false;
				}
			},
			closeInput() {
				this.searchKey = '';
				this.search_close = false;
			},
			deleteTap() {
				this.deleteView = true;
			},
			logTap() {
				this.deleteView = false;
			},
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../zaiui/style/app.scss";
	/* #endif */
	@import "../../zaiui/style/search.scss";
</style>