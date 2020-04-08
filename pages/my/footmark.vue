<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack @rightTap="rightTap">
			<block slot="content">我的足迹</block>
			<block slot="right" v-if="goods_checked">完成</block>
			<block slot="right" v-else>编辑</block>
		</bar-title>
		
		<!--足迹的tab-->
		<view class="bg-white zaiui-nav-view">
			<scroll-view scroll-x class="nav z" scroll-with-animation :scroll-left="headTab.scrollLeft">
				<block v-for="(item,index) in headTab.list" :key="index">
					<view class="cu-item" :class="index==headTab.TabCur?'select':''" @tap="tabSelect" :data-id="index">
						<view :class="index==headTab.TabCur?'text-black':''">{{item}}</view>
						<view class="tab-dot bg-red"/>
					</view>
				</block>
			</scroll-view>
		</view>
		
		<checkbox-group class="block" @change="checkboxChange">
			<!--商品列表-->
			<view class="bg-white zaiui-goods-list-view" :class="goods_checked?'checked':''">
				<view class="zaiui-checkbox-view">
					<checkbox class='round red zaiui-checked' :class="checkbox_list[0].checked?'checked':''"
					:checked="checkbox_list[0].checked?true:false" :value="checkbox_list[0].id + ''"/>
					<view class="text-black">今天</view>
				</view>
				<view class="zaiui-goods-list-box">
					<checkbox class='round red zaiui-checked' :class="checkbox_list[1].checked?'checked':''"
					:checked="checkbox_list[1].checked?true:false" :value="checkbox_list[1].id + ''"/>
					<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ goods_img +')'}]"/>
					<view class="goods-info-view">
						<view class="text-cut-2 text-black">商品名称 99新 苹果 iPhoneX</view>
						<view class="goods-info-tools">
							<text class="text-price text-red text-lg">2999.00</text>
							<text class="cu-tag radius line-red sm">找相似</text>
						</view>
					</view>
				</view>
				<view class="zaiui-goods-list-box">
					<checkbox class='round red zaiui-checked' :class="checkbox_list[2].checked?'checked':''"
					:checked="checkbox_list[2].checked?true:false" :value="checkbox_list[2].id + ''"/>
					<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ goods_img +')'}]"/>
					<view class="goods-info-view">
						<view class="text-cut-2 text-black">商品名称 99新 苹果 iPhoneX 256G 银色 测试换行内容的 测试一下效果的</view>
						<view class="goods-info-tools">
							<text class="text-price text-red text-lg">2999.00</text>
							<text class="cu-tag radius line-red sm">找相似</text>
						</view>
					</view>
				</view>
			</view>
			
			<!--商品列表-->
			<view class="bg-white zaiui-goods-list-view" :class="goods_checked?'checked':''"> 
				<view class="zaiui-checkbox-view">
					<checkbox class='round red zaiui-checked' :class="checkbox_list[3].checked?'checked':''"
					:checked="checkbox_list[3].checked?true:false" :value="checkbox_list[3].id + ''"/>
					<view class="text-black">2020-04-01</view>
				</view>
				<view class="zaiui-goods-list-box zaiui-lower-shelf">
					<checkbox class='round red zaiui-checked' :class="checkbox_list[4].checked?'checked':''"
					:checked="checkbox_list[4].checked?true:false" :value="checkbox_list[4].id + ''"/>
					<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ goods_img_a +')'}]"/>
					<view class="img-lower-box">已下架</view>
					<view class="goods-info-view">
						<view class="text-cut-2 text-black">商品名称 99新 苹果 iPhoneX</view>
						<view class="goods-info-tools">
							<text class="text-price text-red text-lg">2999.00</text>
							<text class="cu-tag radius line-red sm">找相似</text>
						</view>
					</view>
				</view>
				<view class="zaiui-goods-list-box zaiui-lower-shelf">
					<checkbox class='round red zaiui-checked' :class="checkbox_list[5].checked?'checked':''"
					:checked="checkbox_list[5].checked?true:false" :value="checkbox_list[5].id + ''"/>
					<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ goods_img_a +')'}]"/>
					<view class="img-lower-box">已下架</view>
					<view class="goods-info-view">
						<view class="text-cut-2 text-black">商品名称 99新 苹果 iPhoneX 256G 银色 测试换行内容的 测试一下效果的</view>
						<view class="goods-info-tools">
							<text class="text-price text-red text-lg">2999.00</text>
							<text class="cu-tag radius line-red sm">找相似</text>
						</view>
					</view>
				</view>
			</view>
		</checkbox-group>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height" v-if="goods_checked"/>
		
		<!--底部操作-->
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom" v-if="goods_checked">
			<view class="cu-bar padding-lr">
				<view class="checked-view" @tap="tapChecked"> 
					<checkbox class='round red sm zaiui-checked' :class="checkbox_all?'checked':''" :checked="checkbox_all"/>
					<text class="text-black text-lg">全选</text>
				</view>
				<view class="btn-view">
					<button class="cu-btn radius bg-red">删除(3)</button>
				</view>
			</view>
		</view>
		
		<!--小程序端显示-->
		<!-- #ifdef MP -->
			<!--编辑-->
			<view class="zaiui-add-btn-view-box" @tap="rightTap">
				<button class="cu-btn cuIcon-check bg-red" v-if="goods_checked"/>
				<button class="cu-btn cuIcon-write bg-red" v-else/>
			</view>
		<!-- #endif -->
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
				headTab: {TabCur: 0, scrollLeft: 0, list: []},
				goods_img: '/static/images/home/goods/1.png',
				goods_img_a: '/static/images/home/goods/2.png',
				checkbox_list: [], checkbox_all: false, goods_checked: false,
			}
		},
		onLoad() {
			this.checkbox_list = [
				{id: 1,checked: true}, {id: 2,checked: false}, {id: 3,checked: false},
				{id: 4,checked: false}, {id: 5,checked: false}, {id: 6,checked: false}
			];
			this.headTab.list = ['全部', '手机', '图书', '电脑办公', '游戏交易', '办公用品', '家电', '数码', '教育', '测试', '测试1'];
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			//tab菜单被点击
			tabSelect(e) {
				let index = e.currentTarget.dataset.id;
				this.headTab.TabCur = index;
				this.headTab.scrollLeft = (index - 1) * 60;
				
				//滚动到顶部
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 100
				});
			},
			//编辑
			rightTap() {
				if (this.goods_checked) {
					this.goods_checked = false;
				} else {
					this.goods_checked = true;
				}
			},
			//选择
			checkboxChange(e) {
				let items = this.checkbox_list, values = e.detail.value;
				for (let i = 0; i < items.length; i++) {
					//店铺处理
					let result = values.includes(items[i].id + '');
					if (result) {
						items[i].checked = true;
					} else {
						items[i].checked = false;
					}
				}
			},
			tapChecked() {
				if (this.checkbox_all) {
					this.checkbox_all = false;
				} else {
					this.checkbox_all = true;
				}
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
	@import "../../static/zaiui/style/footmark.scss";
</style>
