<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">订单详情</block>
		</bar-title>
		
		<!--步骤条区域-->
		<view class="bg-white padding solid-top" v-if="basics != 4">
			<!--步骤条-->
			<view class="cu-steps">
				<block v-for="(item,index) in basicsList" :key="index">
					<view class="cu-item" :class="index>basics?'':'select'">
						<view class="icon-view" v-if="index>basics">
							<text class="text-red" :class="'cuIcon-' + item.cuIcon"></text>
						</view>
						<view class="bg-red icon-view" v-else>
							<text :class="'cuIcon-' + item.cuIcon"></text>
						</view>
						<view class="text-sm text-black" v-if="index>basics">{{item.name}}</view>
						<view class="text-sm text-black" v-else>{{item.name_s}}</view>
					</view>
				</block>
			</view>
			
			<!--提示-->
			<view class="text-sm text-center margin-top" v-if="basics == 0">
				<view class="text-black">拍下成功，待买家支付。</view>
				<view class="text-black">
					<text class="text-red">14分</text>
					<text>后未支付，订单将自动关闭。</text>
				</view>
			</view>
			<view class="text-sm text-center margin-top" v-if="basics == 1">
				<view class="text-black">支付成功，待卖家发货.</view>
			</view>
			<view class="text-sm text-center margin-top" v-if="basics == 2">
				<view class="text-black">已发货，正在等待验机中.</view>
			</view>
			<view class="text-sm text-center margin-top" v-if="basics == 3">
				<view class="text-black">已验机，快递正在路上，务必在收到商品后再确认收货。</view>
				<view class="text-black">
					<text class="text-red">9天23小时57分</text>
					<text>后将自动确认收货</text>
				</view>
			</view>
		</view>
		
		<!--状态图标-->
		<view class="bg-white padding solid-top text-center zaiui-status-img-view" v-if="basics == 4 && !cancel">
			<view class="are-img-view" @tap="cancel = true">
				<image class="are-img" src="/static/zaiui/img/are.png" mode="widthFix"/>
			</view>
			<view class="text-sm text-black">交易成功，待发表评价</view>
		</view>
		
		<!--状态图标-->
		<view class="bg-white padding solid-top text-center zaiui-status-img-view" v-if="basics == 4 && cancel">
			<view class="are-img-view" @tap="cancel = false">
				<image class="are-img" src="/static/zaiui/img/arg.png" mode="widthFix"/>
			</view>
			<view class="text-sm text-black">订单已取消</view>
		</view>
		
		<!--广告区域-->
		<view class="bg-white zaiui-card-box" v-if="basics == 0">
			<view class="zaiui-card-view zaiui-goods-ad-view">
				<view class="cu-avatar radius lg" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
				<view class="goods-info-view">
					<text class="cu-tag bg-gradual-pink">现在卖最值钱</text>
					<view class="text-black">手机即刻变现</view>
					<view class="text-sm">
						<text>比回收平均多卖</text>
						<text class="text-red text-xl">42%</text>
					</view>
				</view>
				<view class="goods-btn-view">
					<button class="cu-btn bg-red radius sm">立即卖钱</button>
				</view>
			</view>
		</view>
		
		<!--物流信息-->
		<view class="bg-white zaiui-card-box" v-if="basics != 0">
			<view class="zaiui-card-view zaiui-address-view">
				<view class="text-lg text-bold text-black">物流信息</view>
				<view class="solid-line"></view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="bg-grey icon-view">
							<text class="cuIcon-locationfill"/>
						</view>
						<view class="content">
							<view class="text-black">
								<text>收货人：</text>
								<text>仔仔</text>
								<text class="margin-left">13800138000</text>
							</view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">重庆市渝北区XXXXXXXX</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--商品信息-->
		<view class="bg-white zaiui-card-box">
			<view class="zaiui-card-view zaiui-shop-view">
				<view class="shop-info-view">
					<view class="cu-avatar round sm" :style="[{backgroundImage:'url('+ avatar +')'}]"/>
					<view class="text-black text-bold text-lg title-view">仔仔科技运营部</view>
				</view>
				<view class="goods-list-view">
					<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
					<view class="goods-info-view">
						<view class="text-black text-cut name">苹果X 苹果X256G无锁99新 有现货 </view>
						<view class="text-gray text-sm text-cut introduce">测试介绍内容的</view>
						<view class="text-cut tag-view">
							<text class="cu-tag sm line-blue radius">支持验机</text>
							<text class="cu-tag sm line-blue radius">专业质检</text>
						</view>
						<view class="text-price text-red text-lg">2199.00</view>
					</view>
				</view>
				<view class="zaiui-foot-view">
					<view class="left-view">
						<image class="af5-img" src="/static/zaiui/img/af5.png" mode="widthFix"/>
						<text class="text-black">支持验机</text>
					</view>
					<text class="text-black text-right">￥ 39.00</text>
				</view>
			</view>
		</view>
		
		<!--商品金额-->
		<view class="bg-white zaiui-card-box">
			<view class="zaiui-card-view zaiui-price-view">
				<view class="text-black title-view">
					<view class="title">商品总额</view>
					<view class="text-right">
						<text class="text-price">2199.00</text>
					</view>
				</view>
				<view class="text-black title-view">
					<view class="title">运费</view>
					<view class="text-right">
						<text class="margin-right-xs">+</text>
						<text class="text-price">0.00</text>
					</view>
				</view>
				<view class="text-black title-view">
					<view class="title">特色服务费</view>
					<view class="text-right">
						<text class="margin-right-xs">+</text>
						<text class="text-price">39.00</text>
					</view>
				</view>
				<view class="text-black text-bold title-right-view">
					<text class="margin-right-xs">应付款：</text>
					<text class="text-price">39.00</text>
				</view>
				
				<view class="solid-line"></view>
				
				<view class="text-center text-black">联系客服</view>
			</view>
		</view>
		
		<!--订单信息-->
		<view class="bg-white zaiui-card-box">
			<view class="zaiui-card-view zaiui-order-view">
				<view class="text-lg text-bold text-black">订单信息</view>
				<view class="solid-line"></view>
				<view class="text-black title-view">
					<view class="title">订单编号</view>
					<view class="text-right">
						<text class="margin-right-xs">1245604894725075385</text>
						<button class="cu-btn sm line-black">复制</button>
					</view>
				</view>
				<view class="text-black title-view">
					<view class="title">支付方式</view>
					<view class="text-right">
						<text>收银台(未支付)</text>
					</view>
				</view>
				<view class="text-black title-view">
					<view class="title">下单时间</view>
					<view class="text-right">
						<text>2020-04-02 14:52:03</text>
					</view>
				</view>
				<view class="text-black title-view" v-if="basics > 0">
					<view class="title">支付时间</view>
					<view class="text-right">
						<text>2020-04-02 14:52:03</text>
					</view>
				</view>
				<view class="text-black title-view" v-if="basics > 1">
					<view class="title">发货时间</view>
					<view class="text-right">
						<text>2020-04-02 14:52:03</text>
					</view>
				</view>
				<view class="text-black title-view" v-if="basics > 2">
					<view class="title">验机时间</view>
					<view class="text-right">
						<text>2020-04-02 14:52:03</text>
					</view>
				</view>
				<view class="text-black title-view" v-if="basics > 3">
					<view class="title">完成时间</view>
					<view class="text-right">
						<text>2020-04-02 14:52:03</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white zaiui-card-hight-box"/>
		
		<!--为您推荐-->
		<view class="zaiui-title-view">
			<view class="flex flex-wrap">
				<view class="basis-sm text-right">
					<image class="img-anc" src="/static/zaiui/img/anc.png" mode="widthFix"/>
				</view>
				<view class="basis-xs text-center">
					<text class="text-black text-lg">为您推荐</text>
				</view>
				<view class="basis-sm text-left">
					<image class="img-anc" src="/static/zaiui/img/anc.png" mode="widthFix"/>
				</view>
			</view>
		</view>
		
		<!--推荐列表-->
		<view class="zaiui-recommend-goods-list-view">
			<view class="flex flex-wrap">
				<view class="basis-df padding-sm padding-right-xs">
					<view class="bg-white margin-bottom-sm list-itme">
						<view class="cu-avatar" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
						<view class="goods-info-view">
							<view class="text-cut text-black">苹果X 苹果X256G无锁99新 有现货</view>
							<view class="text-price text-red text-lg">2199</view>
							<view class="foot-box">
								<view class="text-gray text-sm address">重庆 渝北</view>
								<text class="cu-tag line-red sm radius">找相似</text>
							</view>
						</view>
					</view>	
				</view>
				<view class="basis-df padding-sm padding-right-xs">
					<view class="bg-white margin-bottom-sm list-itme">
						<view class="cu-avatar" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
						<view class="goods-info-view">
							<view class="text-cut text-black">苹果X 苹果X256G无锁99新 有现货</view>
							<view class="text-price text-red text-lg">2199</view>
							<view class="foot-box">
								<view class="text-gray text-sm address">重庆 渝北</view>
								<text class="cu-tag line-red sm radius">找相似</text>
							</view>
						</view>
					</view>	
				</view>
				<view class="basis-df padding-sm padding-right-xs">
					<view class="bg-white margin-bottom-sm list-itme">
						<view class="cu-avatar" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
						<view class="goods-info-view">
							<view class="text-cut text-black">苹果X 苹果X256G无锁99新 有现货</view>
							<view class="text-price text-red text-lg">2199</view>
							<view class="foot-box">
								<view class="text-gray text-sm address">重庆 渝北</view>
								<text class="cu-tag line-red sm radius">找相似</text>
							</view>
						</view>
					</view>	
				</view>
				<view class="basis-df padding-sm padding-right-xs">
					<view class="bg-white margin-bottom-sm list-itme">
						<view class="cu-avatar" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
						<view class="goods-info-view">
							<view class="text-cut text-black">苹果X 苹果X256G无锁99新 有现货</view>
							<view class="text-price text-red text-lg">2199</view>
							<view class="foot-box">
								<view class="text-gray text-sm address">重庆 渝北</view>
								<text class="cu-tag line-red sm radius">找相似</text>
							</view>
						</view>
					</view>	
				</view>
			</view>
		</view>
		
		<!--底部-->
		<view class="foot-hight-view"/>
		
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom" v-if="basics == 0">
			<button class="cu-btn bg-orange sm" @tap="nextTap">测试下一步</button>
			<button class="cu-btn line-black radius">取消订单</button>
			<button class="cu-btn bg-red">确认支付</button>
		</view>
		
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom" v-if="basics == 1">
			<button class="cu-btn bg-orange sm" @tap="nextTap">测试下一步</button>
			<button class="cu-btn line-black radius">申请退款</button>
			<button class="cu-btn bg-red">提醒发货</button>
		</view>
		
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom" v-if="basics == 2">
			<button class="cu-btn bg-orange sm" @tap="nextTap">测试下一步</button>
			<button class="cu-btn line-black radius">申请退款</button>
		</view>
		
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom" v-if="basics == 3">
			<button class="cu-btn bg-orange sm" @tap="nextTap">测试下一步</button>
			<button class="cu-btn line-black radius">申请退款</button>
			<button class="cu-btn bg-red" @tap="confirmReceipt">确认收货</button>
		</view>
		
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom" v-if="basics == 4">
			<button class="cu-btn bg-orange sm" @tap="nextTap">测试第一步</button>
			<button class="cu-btn line-black radius" @tap="appraiseTap">发表评价</button>
			<button class="cu-btn bg-red">查看钱款去向</button>
		</view>
		
		<!--弹出框-->
		<view class="cu-modal bottom-modal" :class="bottomModal?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white solid-bottom">
					<view class="text-black text-center title">手机安全验证</view>
					<text class="text-gray cuIcon-close close" @tap="closeModalTap"></text>
				</view>
				<view class="bg-white modal-view">
					<view class="content">
						<view class="tel-btn-view">
							<view class="text-black tel-view">验证码已发至：138****8000</view>
							<button class="cu-btn sm" @tap="getCodeKey" v-if="btnKey">获取</button>
							<button class="cu-btn sm" v-else>56s</button>
						</view>
						<view class="text-sm text-black margin-tb">
							<text>确认收货后，交易将结束。您之前付款到平台的</text>
							<text class="text-red">￥1.00</text>
							<text>，将会打给卖家。</text>
						</view>
						<view class="text-sm text-gray margin-bottom">
							提醒:确认收货后钱款将脱离平台,届时平台无法保障您的钱款安全,请务必谨慎点击确认收货，谨防诈骗。
						</view>
						<view class="code-view">
							<text class="code" v-if="!codeKey[0]"> — </text>
							<text class="code" v-else> {{codeKey[0]}} </text>
							
							<text class="code" v-if="!codeKey[1]"> — </text>
							<text class="code" v-else> {{codeKey[1]}} </text>
							
							<text class="code" v-if="!codeKey[2]"> — </text>
							<text class="code" v-else> {{codeKey[2]}} </text>
							
							<text class="code" v-if="!codeKey[3]"> — </text>
							<text class="code" v-else> {{codeKey[3]}} </text>
						</view>
					</view>
					
					<!--数字键盘-->
					<view class="num-lock-view">
						<view class="cu-list grid col-3 solid-top">
							<block v-for="(item,index) in 9" :key="index">
								<view class="cu-item" @tap="codeKeyTap(item)">
									<text class="text-black num">{{item}}</text>
								</view>
							</block>
							<view class="cu-item">
								<text class="text-black num"></text>
							</view>
							<view class="cu-item" @tap="codeKeyTap(0)">
								<text class="text-black num">0</text>
							</view>
							<view class="cu-item" @tap="codeKeyDelTap">
								<text class="cuIcon-close close"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
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
				basics: 0, bg_img: '/static/images/home/goods/1.png', avatar: '/static/images/avatar/1.jpg', cancel: false,
				basicsList: [
					{cuIcon: 'cartfill',name: '未拍下', name_s: '已拍下'}, {cuIcon: 'card',name: '待付款', name_s: '已拍下'},
					{cuIcon: 'deliver_fill',name: '待发货', name_s: '已发货'}, {cuIcon: 'formfill',name: '待验机', name_s: '已验机'},
					{cuIcon: 'presentfill',name: '待收货', name_s: '已收货'}
				], bottomModal: false, codeKey: [], btnKey: true,
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
			nextTap() {
				this.basics = this.basics == this.basicsList.length - 1 ? 0 : this.basics + 1;
			},
			confirmReceipt() {
				uni.showModal({
				    title: '收货提醒',
				    content: '请务必确认已收到商品后再确认收货，让您提前确认收货的都是骗子、不走平台交易的都是骗子、让您私下打款的都是骗子',
					confirmText: '确认收货',
					confirmColor: '#0081ff',
					class: 'zaiui-modal',
				    success: res => {
				        if (res.confirm) {
							this.bottomModal = true;
				        }
				    }
				});
			},
			closeModalTap () {
				this.bottomModal = false;
			},
			codeKeyTap (index) {
				if(this.codeKey.length < 4) {
					this.codeKey.push(index);
				}
			},
			codeKeyDelTap() {
				this.codeKey.pop();
			},
			getCodeKey() {
				this.btnKey = false;
			},
			appraiseTap() {
				uni.navigateTo({
					url: "/pages/order/appraise"
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
	@import "../../static/zaiui/style/order-details.scss";
</style>
