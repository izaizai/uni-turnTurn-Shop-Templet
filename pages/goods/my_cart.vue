<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor='bg-white' @rightTap="barEditTap">
			<block slot="content">购物车</block>
			<block slot="right">
				<text v-if="goods_checked">完成</text>
				<text v-else>编辑</text>
			</block>
		</bar-title>
		
		<view class="bg-white zaiui-cart-list-view">
			<checkbox-group class="block" @change="CheckboxChange">
				<block v-for="(item,index) in goodsList" :key="item.id">
					<view class="padding zaiui-checkbox-title-view">
						<checkbox class='round red sm zaiui-checked' :class="item.checked?'checked':''"
						 :checked="item.checked?true:false" :value="item.id + ''"/>
						<view class="text-black text-lg shop-title">{{item.name}}</view>
					</view>
					<block v-for="(items,indexs) in item.goods" :key="items.id">
						<view class="light goods-list-item-view">
							<checkbox class='round red sm zaiui-checked' :class="items.checked?'checked':''" 
							:checked="items.checked?true:false" :value="items.id + ''"/>
							<view class="cu-avatar radius lg" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
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
			</checkbox-group>
		</view>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"/>
		
		<!--底部操作-->
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom">
			<view class="cu-bar padding-lr">
				<view class="checked-view" @tap="tapChecked"> 
					<checkbox class='round red sm zaiui-checked' :class="checkAll?'checked':''" :checked="checkAll"></checkbox>
					<text class="text-black text-lg text-bold">全选</text>
				</view>
				<view class="price-view">
					<view class="text-black text-bold">合计：￥9999.00</view>
					<view class="text-sm">总额:￥9168.00 优惠:￥0.00</view>
				</view>
				<view class="btn-view">
					<button class="cu-btn radius bg-red" @tap="tapBtn">去结算(3)</button>
				</view>
			</view>
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
	
	import _my_cart_data from '@/static/zaiui/data/my_cart.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		components: {
			barTitle,
		},
		data() {
			return {
				goodsList: [], checkAll: true, goods_checked: false,
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
			CheckboxChange(e) {
				let items = this.goodsList, values = e.detail.value;
				for (let i = 0; i < items.length; i++) {
					//店铺处理
					let result = values.includes(items[i].id + '');
					if (result) {
						items[i].checked = true;
					} else {
						items[i].checked = false;
					}
					//商品处理
					let goods = items[i].goods;
					for (let x = 0; x < goods.length; x++) {
						let result = values.includes(goods[x].id + '');
						if (result) {
							goods[x].checked = true;
						} else {
							goods[x].checked = false;
						}
					}
				}
			},
			tapChecked() {
				if (this.checkAll) {
					this.checkAll = false;
				} else {
					this.checkAll = true;
				}
			},
			barEditTap() {
				if (this.goods_checked) {
					this.goods_checked = false;
				} else {
					this.goods_checked = true;
				}
			},
			tapBtn() {
				uni.navigateTo({
					url: '/pages/goods/settlement'
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
	@import "../../static/zaiui/style/my_cart.scss";
</style>
