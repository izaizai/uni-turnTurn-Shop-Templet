<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor='bg-white' backText='' @rightTap="barEditTap">
			<block slot="content">购物车</block>
			<block slot="right">编辑</block>
		</bar-title>
		
		<view class="bg-white zaiui-cart-list-view">
			<block v-for="(item,index) in goodsList" :key="item.id">
				<view class="padding zaiui-checkbox-title-view">
					<checkbox class='round red sm zaiui-checked checked' :checked="item.checked" />
					<view class="text-black text-lg shop-title">{{item.name}}</view>
				</view>
				<block v-for="(items,indexs) in item.goods" :key="items.id">
					<view class="light goods-list-item-view">
						<checkbox class='round red sm zaiui-checked checked' :checked="items.checked" />
						<view class="cu-avatar radius lg" :style="[{backgroundImage:'url('+ items.img +')'}]"></view>
						<view class="goods-info-view">
							<view class="text-cut text-black">{{items.name}}</view>
							<view class="text-sm text-gray">{{items.rule}}</view>
							<view class="zaiui-tag-view">
								<text class="cu-tag line-red sm radius" v-if="items.tag">{{items.tag}}</text>
							</view>
							<view class="goods-price-view">
								<view class="text-price-view">
									<text class="text-price text-red text-lg">{{items.price}}</text>
									<text class="cu-tag bg-red sm radius" v-if="items.price_tag">{{items.price_tag}}</text>
								</view>
								<view class="step-btn-view">
									<button class="zaiui-btn text-gray">-</button>
									<input class="zaiui-input" type='number' :value="items.num"></input>
									<button class="zaiui-btn">+</button>
								</view>
							</view>
						</view>
					</view>
				</block>
			</block>
		</view>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"></view>
		
		<!--底部操作-->
		<view class="zaiui-footer-fixed">
			<view class="cu-bar bg-white padding-lr">
				<view class="checked-view">
					<checkbox class='round checked red sm zaiui-checked'></checkbox>
					<text class="text-black text-lg text-bold">全选</text>
				</view>
				<view class="price-view">
					<view class="text-black text-bold">合计：￥9999.00</view>
					<view class="text-sm">总额:￥9168.00 优惠:￥0.00</view>
				</view>
				<view class="btn-view">
					<button class="cu-btn radius bg-red">去结算(3)</button>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import barTitle from '@/zaiui/components/basics/bar-title';
	
	import _my_cart_data from '@/zaiui/data/my_cart.js';	//虚拟数据
	import _tool from '@/util/tools.js';	//工具函数
	export default {
		components: {
			barTitle,
		},
		data() {
			return {
				goodsList: [],
			}
		},
		onLoad() {
			this.goodsList = _my_cart_data.goodsListData();
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			barEditTap() {
				console.log('11');
			},
		}
	}
</script>

<style lang="less">
	@import "../../static/colorui/main.css";
	@import "../../static/colorui/icon.css";
	@import "../../zaiui/style/app.less";
	@import "../../zaiui/style/my_cart.less";
</style>
