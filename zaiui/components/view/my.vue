<template>
	<view class="zaiui-my-box" :class="show?'show':''">
		<view class="bg-gradual-red zaiui-head-box">
			<!--标题栏-->
			<!--小程序端不显示-->
			<!-- #ifndef MP -->
			<bar-title :isBack="false" :fixed="false">
				<block slot="right">
					<text class="cuIcon-camera"></text>
					<text class="cuIcon-settings"></text>
				</block>
			</bar-title>
			<!-- #endif -->
			
			<!--用户信息-->
			<view class="zaiui-user-info-box">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<!-- #ifndef MP-TOUTIAO -->
						<view class="cu-avatar round lg" style="background-image:url(../../static/images/avatar/1.jpg);"/>
						<!-- #endif -->
						
						<!-- #ifdef MP-TOUTIAO -->
						<view class="cu-avatar round lg" style="background-image:url(static/images/avatar/1.jpg);"/>
						<!-- #endif -->
						<view class="content text-xl">
							<view class="text-white">凯尔</view>
							<view class="text-white-bg text-sm">
								<text class="text-border-x">关注 2</text>
								<text>粉丝 9</text>
							</view>
						</view>
					</view>
				</view>	
			</view>
			
			<!--用户数据-->
			<view class="zaiui-user-info-num-box">
				<view class="cu-list grid col-4 no-border">
					<view class="cu-item" @tap="cartTap">
						<view class="text-xl">0</view>
						<text class="text-sm">购物车</text>
					</view>
					<view class="cu-item" @tap="footmarkTap">
						<view class="text-xl">4</view>
						<text class="text-sm">足迹</text>
					</view>
					<view class="cu-item">
						<view class="text-xl">0</view>
						<text class="text-sm">红包</text>
					</view>
					<view class="cu-item">
						<view class="text-xl">0</view>
						<text class="text-sm">账单</text>
					</view>
				</view>
			</view>
			
			<!--用户提示-->
			<view class="text-sm zaiui-user-info-tip-box">
				<view class="text-cut">偷偷告诉你，实名认证后宝贝更易卖出哦~</view>
				<text class="cuIcon-right icon"></text>
			</view>	
		</view>
		
		
		<view class="zaiui-view-content">
			<!--用户数据-->
			<view class="padding-xs bg-white zaiui-user-info-order-box">
				<view class="text-black text-lg text-bold padding-sm">我的交易</view>
				<view class="cu-list grid col-4 no-border">
					<view class="cu-item">
						<view class="text-xxl text-black">0</view>
						<text class="text-sm">我发布的</text>
					</view>
					<view class="cu-item">
						<view class="text-xxl text-black">1</view>
						<text class="text-sm">我卖出的</text>
					</view>
					<view class="cu-item">
						<view class="text-xxl text-black">2</view>
						<text class="text-sm">我买到的</text>
					</view>
					<view class="cu-item">
						<view class="text-xxl text-black">3</view>
						<text class="text-sm">我收藏的</text>
					</view>
				</view>
			</view>
			
			<!--天天有钱-->
			<view class="padding-xs bg-white margin-top zaiui-user-info-money-box">
				<view class="text-black text-lg text-bold padding-sm">天天有钱</view>
				<view class="grid col-2 money-col">
					<view class="money-item">
						<view class="money-item-view">
							<!-- #ifndef MP-TOUTIAO -->
							<view class="cu-avatar lg" style="background-image:url(../../static/images/my/1.png);"/>
							<!-- #endif -->
							
							<!-- #ifdef MP-TOUTIAO -->
							<view class="cu-avatar lg" style="background-image:url(static/images/my/1.png);"/>
							<!-- #endif -->
							<view class="money-content">
								<view class="text-black text-cut">边逛边赚钱</view>
								<view class="text-gray text-sm text-cut">最高提现20元</view>
							</view>
						</view>
					</view>
					<view class="money-item">
						<view class="money-item-view">
							<!-- #ifndef MP-TOUTIAO -->
							<view class="cu-avatar lg" style="background-image:url(../../static/images/my/2.png);"/>
							<!-- #endif -->
							
							<!-- #ifdef MP-TOUTIAO -->
							<view class="cu-avatar lg" style="background-image:url(static/images/my/2.png);"/>
							<!-- #endif -->
							<view class="money-content">
								<view class="text-black text-cut">发条借钱</view>
								<view class="text-gray text-sm text-cut">最高额度50000</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!--推荐工具-->
			<view class="padding-xs bg-white margin-top zaiui-user-info-tools-box">
				<view class="padding-sm tools-view">
					<view class="text-black text-bold text-lg tools-title">推荐工具</view>
					<view class="text-gray text-sm tools-right">
						<text>更多</text>
						<text class="cuIcon-right"></text>
					</view>
				</view>
				
				<view class="zaiui-tools-list-box">
					<view class="cu-list grid col-4 no-border">
						<view class="cu-item" v-for="(item,index) in toolsList" :key="index" v-if="index < 12">
							<view class="text-black" :class="['cuIcon-' + item.icon]"></view>
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	import barTitle from '@/zaiui/components/basics/bar-title';
	
	import _my_data from '@/zaiui/data/my.js';	//虚拟数据
	import _tool from '@/util/tools.js';	//工具函数
	export default {
		name: 'my',
		components: { 
			barTitle
		},
		data() {
			return {
				toolsList: [],
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
			this.toolsList = _my_data.toolsListData();
		},
		mounted() {
			_tool.setBarColor(false);
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
			//购物车
			cartTap() {
				uni.navigateTo({
					url: "/pages/goods/my_cart"
				});
			},
			//足迹
			footmarkTap() {
				uni.navigateTo({
					url: "/pages/my/footmark"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../zaiui/style/my.scss";
	
</style>
