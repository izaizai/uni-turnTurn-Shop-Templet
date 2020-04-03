<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack backText=' '>
			<block slot="content">
				<text class="margin-right-xs">仔仔</text>
				<text class="cu-tag bg-blue sm radius">
					<text class="cuIcon-male"></text>
				</text>
			</block>
			<!--小程序端不显示-->
			<!-- #ifndef MP -->
			<block slot="right">
				<text class="cuIcon-more"></text>
			</block>
			<!-- #endif -->
		</bar-title>
		
		<!--商品信息-->
		<view class="bg-white zaiui-goods-details-box pay_status">
			<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ getttImgUrl(goods_img) +')'}]"></view>
			<view class="goods-info-view">
				<view class="title-view">
					<view class="text-cut text-black">商品名称 99新 苹果 iPhoneX 256G 银色</view>
					<text class="text-right text-gray text-sm">交易成功</text>
				</view>
				<view class="price-tools-view">
					<text class="text-price text-red text-lg">2999.00</text>
					<view class="zaiui-tag-view">
						<text class="cu-tag bg-red radius sm">马上买</text>
						<text class="cu-tag line-black radius sm">钱款去向</text>
						<text class="cu-tag line-black radius sm">
							<text class="cuIcon-more"></text>
						</text>
					</view>
				</view>
			</view>
			
			<!--提示-->
			<view class="zaiui-goods-tip-view" :class="tipShow?'show':''">
				<text class="text-black cuIcon-notification icon"/>
				<view class="text-sm content">
					<text class="text-black">平台绝对不会收取实名认证等任何费用。让你加微信支付或者点链接、扫二维码的都是骗子！</text>
					<text class="text-blue">查看骗术></text>
				</view>
			</view>
			
			<!--按钮-->
			<view class="zaiui-goods-info-btn-view" @tap="tipShowTap">
				<view class="h-line-view">
					<view class="h-line"></view>
					<view class="h-line"></view>
				</view>
			</view>
		</view>
		
		<!--聊天框-->
		<view class="zaiui-chat-scroll-view">
			<scroll-view scroll-into-view="news13" scroll-y class="scroll-view">
				<!--时间-->
				<view id="news1" class="news-view-item time">
					<text class="text-sm text-gray">14:52</text>
				</view>
				
				<!--对方-->
				<view id="news2" class="news-view-item left">
					<!-- #ifndef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(../../static/images/avatar/1.jpg);"/>
					<!-- #endif -->
					
					<!-- #ifdef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(static/images/avatar/1.jpg);"/>
					<!-- #endif -->
					<view class="news-content">
						<view class="bg-white text-black content">您好</view>
					</view>
				</view>
				
				<!--提示-->
				<view id="news3" class="news-view-item notice">
					<view class="bg-white notice-content-view">
						<!-- #ifndef MP-TOUTIAO -->
						<view class="cu-avatar round" style="background-image:url(../../static/images/news/abb.png);"/>
						<!-- #endif -->
						
						<!-- #ifdef MP-TOUTIAO -->
						<view class="cu-avatar round" style="background-image:url(static/images/news/abb.png);"/>
						<!-- #endif -->
						<view class="notice-content">
							<view class="text-black">温馨提示</view>
							<view class="text-gray text-sm introduce">请礼貌用语友好沟通，如遇骚扰等不文明行为，可以将对方屏蔽并投诉。</view>
						</view>
					</view>
				</view>
				
				<!--我-->
				<view id="news4" class="news-view-item right">
					<view class="news-content">
						<view class="bg-blue content">
							<text class="text-sm text-gray status">已读</text>
							<text>稍等一下下</text>
						</view>
					</view>
					<!-- #ifndef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(../../static/images/avatar/2.jpg);"/>
					<!-- #endif -->
					
					<!-- #ifdef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(static/images/avatar/2.jpg);"/>
					<!-- #endif -->
				</view>
				
				<!--对方-->
				<view id="news5" class="news-view-item left">
					<!-- #ifndef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(../../static/images/avatar/1.jpg);"/>
					<!-- #endif -->
					
					<!-- #ifdef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(static/images/avatar/1.jpg);"/>
					<!-- #endif -->
					<view class="news-content">
						<view class="bg-white text-black content">测试多行内容，测试多行内容，测试多行内容，测试多行内容，测试多行内容，测试多行内容</view>
					</view>
				</view>
				
				<!--我-->
				<view id="news6" class="news-view-item right">
					<view class="news-content">
						<view class="bg-blue content">
							<text class="text-sm text-blue status">未读</text>
							<text>测试多行内容，测试多行内容，测试多行内容，测试多行内容，测试多行内容，测试多行内容</text>
						</view>
					</view>
					<!-- #ifndef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(../../static/images/avatar/2.jpg);"/>
					<!-- #endif -->
					
					<!-- #ifdef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(static/images/avatar/2.jpg);"/>
					<!-- #endif -->
				</view>
				
				<!--时间-->
				<view id="news7" class="news-view-item time">
					<text class="text-sm text-gray">15:52</text>
				</view>
				
				<!--订单状态-->
				<view id="news8" class="news-view-item order">
					<view class="bg-white order-content-view">
						<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ getttImgUrl(goods_img) +')'}]"/>
						<view class="order-content">
							<view class="title-view">
								<view class="text-black">卖家已发货</view>
								<text class="text-right text-blue text-sm">查看订单</text>
							</view>
							<view class="text-gray text-sm introduce">卖家已发货</view>
						</view>
					</view>
				</view>
				
				<!--小提示-->
				<view id="news9" class="news-view-item tip">
					<text class="text-sm text-gray">长按图片、文字或视频，支持撤回消息哦~</text>
				</view>
				
				<!--对方-->
				<view id="news10" class="news-view-item left">
					<!-- #ifndef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(../../static/images/avatar/1.jpg);"/>
					<!-- #endif -->
					
					<!-- #ifdef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(static/images/avatar/1.jpg);"/>
					<!-- #endif -->
					<view class="news-content">
						<view class="cu-avatar img-content" :style="[{backgroundImage:'url('+ getttImgUrl(goods_img) +')'}]"/>
					</view>
				</view>
				
				<!--我-->
				<view id="news11" class="news-view-item right">
					<view class="news-content">
						<view class="cu-avatar img-content" :style="[{backgroundImage:'url('+ getttImgUrl(goods_img) +')'}]">
							<text class="text-sm text-blue status">未读</text>
						</view>
					</view>
					<!-- #ifndef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(../../static/images/avatar/2.jpg);"/>
					<!-- #endif -->
					
					<!-- #ifdef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(static/images/avatar/2.jpg);"/>
					<!-- #endif -->
				</view>
				
				<!--对方-->
				<view id="news12" class="news-view-item left">
					<!-- #ifndef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(../../static/images/avatar/1.jpg);"/>
					<!-- #endif -->
					
					<!-- #ifdef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(static/images/avatar/1.jpg);"/>
					<!-- #endif -->
					<view class="news-content">
						<view class="bg-white text-black content">
							<text class="cuIcon-sound sound-icon"></text>
							<text class="margin-left-sm text-gray s-text">33”</text>
						</view>
					</view>
				</view>
				
				<!--我-->
				<view id="news13" class="news-view-item right">
					<view class="news-content">
						<view class="bg-blue content">
							<text class="text-sm text-gray status">已读</text>
							<text class="cuIcon-sound sound-icon"></text>
							<text class="margin-left-sm s-text">33”</text>
						</view>
					</view>
					<!-- #ifndef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(../../static/images/avatar/2.jpg);"/>
					<!-- #endif -->
					
					<!-- #ifdef MP-TOUTIAO -->
					<view class="cu-avatar round" style="background-image:url(static/images/avatar/2.jpg);"/>
					<!-- #endif -->
				</view>
				
			</scroll-view>
		</view>
		
		<!--操作区域-->
		<view class="cu-bar foot input zaiui-foot-bar-input-tools">
			<view class="action">
				<text class="cuIcon-rounddown text-gray"></text>
			</view>
			<input class="input-radius" placeholder="输入聊天内容"></input>
			<view class="action">
				<text class="cuIcon-emoji text-gray"></text>
			</view>
			<view class="action">
				<text class="cuIcon-roundaddfill text-red"></text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import barTitle from '@/zaiui/components/basics/bar-title';
	import _tool from '@/util/tools.js';	//工具函数
	export default {
		components: {
			barTitle
		},
		data() {
			return {
				goods_img: '../../static/images/home/goods/10.png', tipShow: false,
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
			getttImgUrl(url) {
				return _tool.getttImgUrl(url);
			},
			tipShowTap() {
				if(this.tipShow) {
					this.tipShow = false;
				} else {
					this.tipShow = true;
				}
			}
		}
	}
	
</script>


<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../zaiui/style/app.scss";
	/* #endif */
	@import "../../zaiui/style/chat.scss";
</style>
