<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">
				<text class="margin-right-xs">仔仔</text>
				<text class="cu-tag bg-blue sm radius">
					<text class="cuIcon-male"/>
				</text>
			</block>
			<block slot="right">
				<text class="cuIcon-more"/>
			</block>
		</bar-title>
		
		<!--商品信息-->
		<view class="bg-white zaiui-goods-details-box pay_status">
			<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ goods_img +')'}]"/>
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
							<text class="cuIcon-more"/>
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
					<view class="h-line"/>
					<view class="h-line"/>
				</view>
			</view>
		</view>
		
		<!--聊天框-->
		<view class="zaiui-chat-scroll-view" :class="chatShow?'tools':''" @tap="setToolsHidden">
			<scroll-view scroll-into-view="news15" scroll-y class="scroll-view" @scroll="chatScroll" :scroll-top="scroll_top">
				<!--时间-->
				<view id="news1" class="news-view-item time">
					<text class="text-sm text-gray">14:52</text>
				</view>
				
				<!--对方-->
				<view id="news2" class="news-view-item left">
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/1.jpg);"/>
					<view class="news-content">
						<view class="bg-white text-black content">您好</view>
					</view>
				</view>
				
				<!--提示-->
				<view id="news3" class="news-view-item notice">
					<view class="bg-white notice-content-view">
						<view class="cu-avatar round" style="background-image:url(/static/images/news/abb.png);"/>
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
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/2.jpg);"/>
				</view>
				
				<!--对方-->
				<view id="news5" class="news-view-item left">
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/1.jpg);"/>
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
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/2.jpg);"/>
				</view>
				
				<!--时间-->
				<view id="news7" class="news-view-item time">
					<text class="text-sm text-gray">15:52</text>
				</view>
				
				<!--订单状态-->
				<view id="news8" class="news-view-item order">
					<view class="bg-white order-content-view">
						<view class="cu-avatar radius" :style="[{backgroundImage:'url('+ goods_img +')'}]"/>
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
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/1.jpg);"/>
					<view class="news-content">
						<view class="cu-avatar img-content" :style="[{backgroundImage:'url('+ goods_img +')'}]"/>
					</view>
				</view>
				
				<!--我-->
				<view id="news11" class="news-view-item right">
					<view class="news-content">
						<view class="cu-avatar img-content" :style="[{backgroundImage:'url('+ goods_img +')'}]">
							<text class="text-sm text-blue status">未读</text>
						</view>
					</view>
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/2.jpg);"/>
				</view>
				
				<!--对方-->
				<view id="news12" class="news-view-item left">
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/1.jpg);"/>
					<view class="news-content">
						<view class="bg-white text-black content">
							<text class="cuIcon-sound sound-icon"/>
							<text class="margin-left-sm text-gray s-text">33”</text>
						</view>
					</view>
				</view>
				
				<!--我-->
				<view id="news13" class="news-view-item right">
					<view class="news-content">
						<view class="bg-blue content">
							<text class="text-sm text-gray status">已读</text>
							<text class="cuIcon-sound sound-icon"/>
							<text class="margin-left-sm s-text">33”</text>
						</view>
					</view>
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/2.jpg);"/>
				</view>
				
				<!--对方-->
				<view id="news14" class="news-view-item left">
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/1.jpg);"/>
					<view class="news-content">
						<view class="bg-white text-black content">
							<text>测试</text>
							<image class="emoji" src="/static/images/emoji_1/1.png" mode="widthFix"/>
							<text>表情的</text>
						</view>
					</view>
				</view>
				
				<!--我-->
				<view id="news15" class="news-view-item right">
					<view class="news-content">
						<view class="bg-blue content">
							<text class="text-sm text-gray status">已读</text>
							<text>测试</text>
							<image class="emoji" src="/static/images/emoji/1.png" mode="widthFix"/>
							<text>表情的</text>
						</view>
					</view>
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/2.jpg);"/>
				</view>
				
			</scroll-view>
		</view>
		
		<!--底部区域-->
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom">
			<!--操作区域-->
			<view class="cu-bar input zaiui-foot-bar-input-tools">
				<view class="action">
					<text class="cuIcon-rounddown text-gray" @tap="speedyTap"/>
				</view>
				<input class="input-radius" placeholder="输入聊天内容"/>
				<view class="action">
					<text class="cuIcon-emoji text-gray" @tap="emojiTap"/>
				</view>
				<view class="action">
					<text class="cuIcon-roundaddfill text-red" @tap="toolsTap"/>
				</view>
			</view>
			
			<!--快捷输入-->
			<view class="zaiui-speedy-view" :class="speedyShow?'show':''">
				<view class="key-bar text-center">走平台，支持平台验机吗？</view>
				<view class="key-bar text-center">能便宜一点吗？</view>
				<view class="key-bar text-center">是否包邮？</view>
				<view class="key-bar text-center">机器有发票吗？</view>
				<view class="key-bar text-center">机器配件都在吗？</view>
				<view class="key-bar text-center">能发个视频或图片吗？</view>
			</view>
			
			<!--表情栏-->
			<view class="zaiui-emoji-view" :class="emojiShow?'show':''">
				<view class="emoji-scroll-view-box">
					<swiper class="emoji-swiper" :current="emoji_swiper" indicator-dots @change="emoji_change">
						<swiper-item>
							<view class="cu-list grid no-border">
								<block v-for="(item,index) in emojiNum" :key="index" v-if="index < 20">
									<image class="emoji" :src="getEmojiUrl(index)" mode="widthFix" @tap="emojiSelectTap('[表情' + index + ']')"/>
								</block>
								<image class="del_btn" src="/static/zaiui/img/aa2.png" mode="widthFix" @tap="emojiDelTap"/>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="cu-list grid no-border">
								<block v-for="(item,index) in emojiNum" :key="index" v-if="index >= 20 && index < 40">
									<image class="emoji" :src="getEmojiUrl(index)" mode="widthFix" @tap="emojiSelectTap('[表情' + index + ']')"/>
								</block>
								<image class="del_btn" src="/static/zaiui/img/aa2.png" mode="widthFix" @tap="emojiDelTap"/>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<!--选择表情类型栏-->
				<scroll-view class="emoji-tools-scroll-view" scroll-x>
					<view id="emoji_tools1" class="emoji-tools-item" :class="emojiUrl=='emoji'?'select':''" @tap="emoji_tools_tap('emoji')">
						<image class="emoji" src="/static/images/emoji/1.png" mode="widthFix"/>
					</view>
					<view id="emoji_tools2" class="emoji-tools-item" :class="emojiUrl=='emoji_1'?'select':''" @tap="emoji_tools_tap('emoji_1')">
						<image class="emoji" src="/static/images/emoji_1/1.png" mode="widthFix"/>
					</view>
				</scroll-view>
			</view>
			
			<!--更多工具-->
			<view class="zaiui-tools-view" :class="toolsShow?'show':''">
				<view class="cu-list grid col-4 no-border">
					<view class="cu-item">
						<view class="img-view">
							<image class="img" src="/static/images/news/az2.png" mode="widthFix"/>
						</view>
						<text>拍照</text>
					</view>
					<view class="cu-item">
						<view class="img-view">
							<image class="img" src="/static/images/news/ayy.png" mode="widthFix"/>
						</view>
						<text>相册</text>
					</view>
					<view class="cu-item">
						<view class="img-view">
							<image class="img" src="/static/images/news/azf.png" mode="widthFix"/>
						</view>
						<text>语音通话</text>
					</view>
					<view class="cu-item">
						<view class="img-view">
							<image class="img" src="/static/images/news/aze.png" mode="widthFix"/>
						</view>
						<text>视频</text>
					</view>
					<view class="cu-item">
						<view class="img-view">
							<image class="img" src="/static/images/news/az4.png" mode="widthFix"/>
						</view>
						<text>位置</text>
					</view>
					<view class="cu-item">
						<view class="img-view">
							<image class="img" src="/static/images/news/az3.png" mode="widthFix"/>
						</view>
						<text>宝贝</text>
					</view>
					<view class="cu-item">
						<view class="img-view">
							<image class="img" src="/static/images/news/azg.png" mode="widthFix"/>
						</view>
						<text>联系卡</text>
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
				goods_img: '/static/images/home/goods/10.png', scroll_top: 0, tipShow: false, chatShow: false, speedyShow: false,
				scrollHeight: 0, emojiShow: false, emojiNum: 40, emojiUrl: "emoji", toolsShow: false, emoji_swiper: 0,
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
			getEmojiUrl(index) {
				//更多表情图片包下载：https://download.csdn.net/download/qq_31763107/12304958
				let num = index + 1;
				let url = "/static/images/" + this.emojiUrl + "/" + num + ".png";
				return url;
			},
			tipShowTap() {
				if(this.tipShow) {
					this.tipShow = false;
				} else {
					this.tipShow = true;
				}
			},
			chatScroll(event) {
				this.scrollHeight = event.detail.scrollHeight;
			},
			speedyTap() {
				if(this.speedyShow) {
					this.speedyShow = false;
					this.setChatShow(false);
				} else {
					this.setViewHidden();
					this.speedyShow = true;
					this.setChatShow(true);
				}
			},
			emojiSelectTap(name) {
				console.log(name);
			},
			emojiDelTap() {
				console.log('点击了删除');
			},
			emojiTap() {
				if(this.emojiShow) {
					this.emojiShow = false;
					this.setChatShow(false);
				} else {
					this.setViewHidden();
					this.emojiShow = true;
					this.setChatShow(true);
				}
			},
			toolsTap() {
				if(this.toolsShow) {
					this.toolsShow = false;
					this.setChatShow(false);
				} else {
					this.setViewHidden();
					this.toolsShow = true;
					this.setChatShow(true);
				}
			},
			setViewHidden() {
				this.speedyShow = false;
				this.emojiShow = false;
				this.toolsShow = false;
			},
			setChatShow(status){
				this.chatShow = status;
				this.scroll_top = this.scrollHeight;
			},
			setToolsHidden() {
				this.setViewHidden();
				this.setChatShow(false);
			},
			emoji_tools_tap(type) {
				this.emojiUrl = type;
				this.emoji_swiper = 0;
			},
			emoji_change(event) {
				this.emoji_swiper = event.detail.current;
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
	@import "../../static/zaiui/style/chat.scss";
</style>
