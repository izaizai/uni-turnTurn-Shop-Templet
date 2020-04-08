<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor='bg-white'>
			<block slot="content">确认订单</block>
		</bar-title>
		
		<!--收货地址-->
		<view class="margin-tb-sm zaiui-view-box">
			<view class="bg-white zaiui-card address-view">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="bg-grey icon-view">
							<text class="cuIcon-locationfill"/>
						</view>
						<view class="content">
							<view class="text-black">
								<text>仔仔</text>
								<text class="margin-left">13800138000</text>
							</view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">重庆市渝北区XXXXXXXX</view>
							</view>
						</view>
						<view class="action">
							<text class="text-gray cuIcon-right"/>
						</view>
					</view>
				</view>
				<view class="address-line"/>
			</view>
		</view>
		
		<!--商品信息-->
		<view class="margin-tb-sm zaiui-view-box">
			<view class="bg-white zaiui-card goods-view">
				<view class="margin-bottom-sm title-view">
					<view class="cu-avatar sm round" style="background-image:url(/static/images/avatar/1.jpg)"/>
					<view class="title-box">
						<text class="text-black margin-right-xs">仔仔自营</text>
						<text class="bg-red cu-tag sm radius">自营</text>
					</view>
				</view>
				
				<view class="goods-info-view-box solid-bottom">
					<view class="cu-avatar radius lg" :style="[{backgroundImage:'url('+ goods_img +')'}]"/>
					<view class="goods-info-view">
						<view class="text-cut text-black">商品名称 99新 苹果 iPhoneX 256G 银色</view>
						<view class="text-sm text-gray">比加入时降￥50元</view>
						<view class="zaiui-tag-view">
							<text class="cu-tag line-blue sm radius">移动5G</text>
							<text class="cu-tag line-blue sm radius">联通5G</text>
							<text class="cu-tag line-blue sm radius">电信5G</text>
						</view>
						<view class="goods-price-view">
							<text class="text-price text-red text-lg">2999.00</text>
						</view>
					</view>
				</view>
				<view class="margin-tb text-sm text-gray">赠品</view>
				<view class="text-black zaiui-gift-list">
					<view class="text-cut title">机身清洁 + 180天质保,机身清洁 + 180天质保</view>
					<text class="text-right">￥ 0</text>
				</view>
				<view class="text-black zaiui-gift-list">
					<view class="text-cut title">品胜充电器 + 数据线</view>
					<text class="text-right">￥ 0</text>
				</view>
				
				<view class="margin-top-lg checked-view">
					<checkbox class='round red sm zaiui-checked checked'/>
					<view class="text-black-view">
						<text class="text-black">平台服务保障（推荐选购）</text>
						<text class="text-gray cuIcon-question"/>
					</view>
				</view>
				
				<view class="margin-top-sm flex zaiui-service-view">
					<view class="flex-sub bg-page padding-sm margin-xs radius">
						<view class="text-black text-cut">碎屏保障服务180天</view>
						<view class="text-gray text-sm text-cut">免费更换一次原厂品质屏</view>
						<view class="text-black">
							<text class="margin-right-xs">￥ 95.00</text>
							<text class="cu-tag line-red sm radius">限时5折</text>
						</view>
						<view class="zaiui-corner-mark"/>
						<text class="cuIcon-check check-icon"/>
					</view>
					<view class="flex-sub bg-page padding-sm margin-xs radius">
						<view class="text-black text-cut">意外保障服务90天</view>
						<view class="text-gray text-sm text-cut">意外硬件损坏免费维修</view>
						<view class="text-black">
							<text class="margin-right-xs">￥ 65.00</text>
							<text class="cu-tag line-red sm radius">限时5折</text>
						</view>
						<view class="zaiui-corner-mark check"/>
						<text class="cuIcon-check check-icon check"/>
					</view>
				</view>
			</view>
		</view>
		
		<!--支付方式-->
		<view class="margin-tb-sm zaiui-view-box">
			<view class="bg-white zaiui-card pay-view">
				<view class="text-lg text-black title-view">
					<text class="text-left">支付方式</text>
					<text class="text-right">在线支付</text>
				</view>
				<view class="tag-view-box">
					<text class="cu-tag line-green sm radius">微信支付</text>
					<text class="cu-tag line-blue sm radius">支付宝支付</text>
					<text class="cu-tag line-blue sm radius">花呗分期</text>
					<text class="cu-tag line-pink sm radius">乐卡分期</text>
					<text class="cu-tag line-pink sm radius">发条分期</text>
					<text class="cu-tag line-red sm radius">京东支付</text>
					<text class="cu-tag line-orange sm radius">组合支付</text>
				</view>
				<view class="cu-list menu">
					<view class="cu-item">
						<view class="content">
							<text class="text-black">配送方式</text>
						</view>
						<view class="action">
							<text class="text-black">快递 ￥0.00</text>
						</view>
					</view>
					<view class="cu-item arrow">
						<view class="content">
							<text class="text-black">促销优惠</text>
						</view>
						<view class="action">
							<text class="cu-tag bg-red sm radius">秒杀</text>
							<text class="text-gray">已优惠180</text>
						</view>
					</view>
					<view class="cu-item arrow">
						<view class="content">
							<text class="text-black">红包</text>
						</view>
						<view class="action">
							<text class="text-gray">暂无可用红包</text>
						</view>
					</view>
				</view>	
			</view>
		</view>
		
		<!--商品价格计算-->
		<view class="margin-tb-sm zaiui-view-box">
			<view class="bg-white zaiui-card zaiui-price-view">
				
				<view class="text-black item-view">
					<view class="text-cut title">商品总额</view>
					<text class="text-red text-price text-right">9348.00</text>
				</view>
				<view class="text-black item-view">
					<view class="text-cut title">
						<text class="margin-right-xs">运费</text>
						<text class="cuIcon-question icon"/>
					</view>
					<text class="text-right">+ ￥0.00</text>
				</view>
				<view class="text-black item-view">
					<view class="text-cut title">促销优惠</view>
					<text class="text-right">- ￥180.00</text>
				</view>
			</view>
		</view>
		
		<!--服务协议-->
		<view class="margin-tb agreement-checked-view">
			<checkbox class='round red sm zaiui-checked checked'/>
			<view class="text-black-view">
				<text class="text-black">我已阅读并同意</text>
				<text class="text-blue">《平台优品放心买用户服务协议》</text>
			</view>
		</view>
		
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"/>
		
		<!--底部操作-->
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom">
			<view class="cu-bar padding-lr">
				<view class="text-black text-bold price-view">
					<text>合计：￥9999.00</text>
				</view>
				<view class="btn-view">
					<button class="cu-btn radius bg-red" @tap="payTap">确认下单</button>
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
			barTitle,
		},
		data() {
			return {
				goodsList: [], checkAll: true, goods_img: '/static/images/home/goods/1.png',
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
			payTap() {
				uni.navigateTo({
					url: "/pages/goods/pay"
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
	@import "../../static/zaiui/style/settlement.scss";
</style>
