<template>
	<view class="zaiui-my-box" :class="show?'show':''">
		<view class="bg-gradual-red zaiui-head-box">
			<!--标题栏-->
			<!--小程序端不显示-->
			<!-- #ifndef MP -->
			<bar-title :isBack="false" :fixed="false">
				<block slot="right">
					<text class="cuIcon-camera"/>
					<text class="cuIcon-settings" @tap="setupTap"/>
				</block>
			</bar-title>
			<!-- #endif -->
			
			<!--用户信息-->
			<view class="zaiui-user-info-box">
				<!--未登陆-->
				<view class="login-user-view" v-if="login">
					<view class="login-user-avatar-view">
						<view class="cu-avatar round lg" style="background-image:url(/static/images/avatar/1.jpg);"/>
					</view>
					<button class="cu-btn sm radius" @tap="loginUrlTap">立即登录</button>
				</view>
				
				<!--已登陆-->
				<view class="cu-list menu-avatar" v-else>
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(/static/images/avatar/1.jpg);"/>
						<view class="content text-xl">
							<view class="text-white">
								<text class="margin-right">仔仔</text>
								<text class="text-sm" @tap="loginTap">切换未登陆页面</text>
							</view>
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
						<view class="text-xl" v-if="login">-</view>
						<view class="text-xl" v-else>0</view>
						<text class="text-sm">购物车</text>
					</view>
					<view class="cu-item" @tap="footmarkTap">
						<view class="text-xl" v-if="login">-</view>
						<view class="text-xl" v-else>4</view>
						<text class="text-sm">足迹</text>
					</view>
					<view class="cu-item" @tap="sponsoredTap">
						<view class="text-xl" v-if="login">-</view>
						<view class="text-xl" v-else>0</view>
						<text class="text-sm">红包</text>
					</view>
					<view class="cu-item">
						<view class="text-xl" v-if="login">-</view>
						<view class="text-xl" v-else>0</view>
						<text class="text-sm">账单</text>
					</view>
				</view>
			</view>
			
			<!--用户提示-->
			<view class="text-sm zaiui-user-info-tip-box" v-if="!login" @tap="realNameTap">
				<view class="text-cut">偷偷告诉你，实名认证后宝贝更易卖出哦~</view>
				<text class="cuIcon-right icon"/>
			</view>	
		</view>
		
		
		<view class="zaiui-view-content">
			<!--用户数据-->
			<view class="padding-xs bg-white zaiui-user-info-order-box">
				<view class="text-black text-lg text-bold padding-sm">我的交易</view>
				<view class="cu-list grid col-4 no-border">
					<view class="cu-item">
						<view class="text-xxl text-red" v-if="login">
							<text class="cuIcon-presentfill"></text>
						</view>
						<view class="text-xxl text-black" v-else>0</view>
						<text class="text-sm">我发布的</text>
					</view>
					<view class="cu-item">
						<view class="text-xxl text-red" v-if="login">
							<text class="cuIcon-sponsorfill"></text>
						</view>
						<view class="text-xxl text-black" v-else>1</view>
						<text class="text-sm">我卖出的</text>
					</view>
					<view class="cu-item" @tap="order_list_tap">
						<view class="text-xxl text-red" v-if="login">
							<text class="cuIcon-cartfill"></text>
						</view>
						<view class="text-xxl text-black" v-else>2</view>
						<text class="text-sm">我买到的</text>
					</view>
					<view class="cu-item">
						<view class="text-xxl text-red" v-if="login">
							<text class="cuIcon-favorfill"></text>
						</view>
						<view class="text-xxl text-black" v-else>3</view>
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
							<view class="cu-avatar lg" style="background-image:url(/static/images/my/1.png);"/>
							<view class="money-content">
								<view class="text-black text-cut">边逛边赚钱</view>
								<view class="text-gray text-sm text-cut">最高提现20元</view>
							</view>
						</view>
					</view>
					<view class="money-item">
						<view class="money-item-view">
							<view class="cu-avatar lg" style="background-image:url(/static/images/my/2.png);"/>
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
						<text class="cuIcon-right"/>
					</view>
				</view>
				
				<view class="zaiui-tools-list-box">
					<view class="cu-list grid col-4 no-border">
						<block v-for="(item,index) in toolsList" :key="index">
							<view class="cu-item" v-if="index < 12" @tap="gridTap(item)">
								<view class="text-black" :class="['cuIcon-' + item.icon]"/>
								<text>{{item.name}}</text>
							</view>
						</block>
					</view>
				</view>
				
			</view>
			
		</view>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	
	import _my_data from '@/static/zaiui/data/my.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		name: 'my',
		components: { 
			barTitle
		},
		data() {
			return {
				toolsList: [], login: false,
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
			},
			//我买到的
			order_list_tap() {
				uni.navigateTo({
					url: "/pages/order/list"
				});
			},
			loginUrlTap() {
				uni.navigateTo({
					url: "/pages/my/login"
				});
			},
			loginTap() {
				if(this.login) {
					this.login = false;
				} else {
					this.login = true;
				}
			},
			realNameTap() {
				uni.navigateTo({
					url: "/pages/real_name/index"
				});
			},
			setupTap() {
				uni.navigateTo({
					url: "/pages/my/set-up"
				});
			},
			gridTap(item) {
				if(item.name == '设置') {
					this.setupTap();
				}
			},
			sponsoredTap() {
				uni.navigateTo({
					url: "/pages/my/sponsored"
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-my-box {
		width: 100%;
		display: none;
		.zaiui-head-box {
			padding-top: 0;
			padding-bottom: 72.72rpx;
			.zaiui-user-info-box {
				/* #ifdef MP */
				padding-top: calc(var(--status-bar-height) + 50rpx);
				/* #endif */
				.login-user-view {
					position: relative;
					text-align: center;
					.login-user-avatar-view {
						position: relative;
						margin-bottom: 18.18rpx;
					}
				}
				.cu-list.menu-avatar>.cu-item {
					background-color: inherit;
					.content {
						width: calc(100% - 94.54rpx - 59.99rpx - 20rpx);
						.text-white-bg {
							color: #e8e8e8;
							.text-border-x {
								margin-right: 25.45rpx;
							    position: relative;
								&:after {
									position: absolute;
									background: #dddddd;
								    top: 5.45rpx;
								    width: 1.81rpx;
									right: -12.72rpx;
								    height: 16.36rpx;
								    content: " ";
								}
							}
						}
					}
					&:after {
						width: 0;
						height: 0;
						border-bottom: 0;
					}
				}
				.cu-list.menu-avatar>.cu-item .content>view:first-child {
					font-size: 34.54rpx;
				}
			}
			.zaiui-user-info-num-box {
				.cu-list.grid.no-border {
					padding: 0;
				}
				.cu-list.grid.no-border>.cu-item {
				    padding-top: 27.27rpx;
				    padding-bottom: 9.09rpx;
				}
				.cu-list.grid {
					background-color: inherit;
				}
				.cu-list.grid>.cu-item text {
					color: #e8e8e8;
					font-size: 20rpx;
					line-height: 27.27rpx;
				}
			}
			.zaiui-user-info-tip-box {
				position: relative;
				margin: 18.18rpx 27.27rpx;
				border-radius: 9.09rpx;
				padding: 18.18rpx 27.27rpx;
				background: #ea8d8d;
				background-image: linear-gradient(45deg, #f7615f, #f553b3);
				.text-cut {
					padding-right: 45.45rpx;
				}
				.icon {
					position: absolute;
					right: 27.27rpx;
					top: 23.63rpx;
				}
			}
		}
		.zaiui-view-content {
			padding: 0 27.27rpx 54.54rpx;
			margin-top: -63.63rpx;
			.zaiui-user-info-order-box {
				border-radius: 18.18rpx;
				.cu-list.grid.no-border {
				    padding: 0;
				}
				.cu-list.grid.no-border>.cu-item {
				    padding-bottom: 9.09rpx;
				}
			}
			.cu-list.grid>.cu-item text {
			    color: inherit;
			}
			.zaiui-user-info-money-box {
				border-radius: 18.18rpx;
				.money-col {
					padding: 0 9.09rpx 9.09rpx;
					.money-item {
						position: relative;
						padding: 9.09rpx;
						.money-item-view {
							border: 1.81rpx solid #f3f2f3;
							border-radius: 18.18rpx;
							position: relative;
							padding: 9.09rpx;
							.cu-avatar {
								position: absolute;
								left: 9.09rpx;
							}
							.money-content {
								position: relative;
							    margin-left: 109.09rpx;
							    margin-bottom: 27.27rpx;
							    top: 12.72rpx;
							}
						}
					}
				}
			}
			.zaiui-user-info-tools-box {
				border-radius: 18.18rpx;
				.tools-view {
					position: relative;
					.tools-title {
						padding-right: 81.81rpx;	
					}
					.tools-right {
						position: absolute;
					    right: 9.09rpx;
					    bottom: 23.63rpx;	
					}
				}
				
			}
		}
	}
	.zaiui-my-box.show {
		display: block;
	}
</style>
