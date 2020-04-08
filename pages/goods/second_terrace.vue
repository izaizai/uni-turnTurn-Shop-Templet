<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor='bg-white'>
			<block slot="content" v-if="barShow">商品详情</block>
			<block slot="content" v-else>
				<text class="text-price text-red text-xxl">3999</text>
			</block>
			<block slot="right">
				<text class="cuIcon-forward"/>
				<text class="cuIcon-more"/>
			</block>
		</bar-title>
		
		<!--Tab栏,由于无法获取元素距离顶部，所以，暂时不启用此功能-->
		<view class="bg-white zaiui-scroll-tab-view" v-if="!barShow">
			<scroll-view scroll-x class="nav z text-center">
				<block v-for="(item,index) in tabListData" :key="index">
					<view class="cu-item" :class="index==TabCur?'text-black select':''" @tap="tabSelect" :data-id="index">
						<view>{{item}}</view>
						<view class="tab-dot bg-red"/>
					</view>
				</block>
			</scroll-view>
		</view>
		
		<!--Tab栏占位-->
		<view class="zaiui-scroll-height-view" v-if="!barShow"/>
		
		<!--商品简介-->
		<view class="bg-white padding zaiui-goods-synopsis-view">
			<view class="user-view">
				<view class="cu-avatar sm round" style="background-image:url(/static/images/avatar/1.jpg);"/>
				<view class="text-black text-name">仔仔</view>
				<view class="cu-tag text-right-view">
					<text>今天寄存在平台</text>
					<text class="cuIcon-right icon-text"/>
				</view>
			</view>
			<view class="margin-tb-lg price-view">
				<text class="text-price text-red">3899</text>
				<view class="cu-tag line-orange sm radius">
					<text class="cuIcon-refresharrow icon-text"/>
					<text>已降12元</text>
				</view>
				<view class="cu-tag line-blue sm radius">7天无理由</view>
				<view class="cu-tag line-blue sm radius">一口价</view>
			</view>
			<view class="text-xl text-black">iPhoneX苹果银色256G其他版本9成新无拆修有发票有配</view>
			<view class="text-sm margin-top-sm zaiui-row-view">
				<text class="cuIcon-refresharrow text-red icon-text"/>
				<text class="text-gray margin-left-xs">比同型号商品便宜712元，值得入手!</text>
			</view>
			
			<!--活动-->
			<view class="margin-top zaiui-hot-view-box">
				<view class="flex flex-wrap">
					<view class="basis-1">
						<text class="text-gray">活动</text>
					</view>
					<view class="basis-8">
						<view class="tag-view-box">
							<text class="cu-tag line-red sm radius">赠品</text>
							<text class="text-sm margin-left-xs">本商品赠送转转专属包装及品胜配件</text>
						</view>
						<view class="tag-view-box">
							<text class="cu-tag line-red sm radius">分期</text>
							<text class="text-sm margin-left-xs">￥455/月 花呗/微信组合支付</text>
						</view>
					</view>
					<view class="basis-1">
						<view class="text-gray text-right icon-view">
							<text class="cuIcon-right icon"/>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--服务-->
		<view class="margin-top padding bg-white zaiui-service-view-box">
			<view class="flex flex-wrap">
				<view class="basis-1">
					<text class="text-gray">服务</text>
				</view>
				<view class="basis-8">
					<view class="tag-view-box">
						<text class="cu-tag bg-white tag-view">
							<text class="cuIcon-roundcheck text-red"/>
							<text class="margin-left-xs">已验机</text>
						</text>
						<text class="cu-tag bg-white tag-view">
							<text class="cuIcon-roundcheck text-red"/>
							<text class="margin-left-xs">24小时内发货</text>
						</text>
						<text class="cu-tag bg-white tag-view">
							<text class="cuIcon-roundcheck text-red"/>
							<text class="margin-left-xs">7天无理由退货</text>
						</text>
						<text class="cu-tag bg-white tag-view">
							<text class="cuIcon-roundcheck text-red"/>
							<text class="margin-left-xs">30天质保</text>
						</text>
						<text class="cu-tag bg-white tag-view">
							<text class="cuIcon-roundcheck text-red"/>
							<text class="margin-left-xs">质检消毒</text>
						</text>
					</view>
				</view>
				<view class="basis-1">
					<view class="text-gray text-right icon-view">
						<text class="cuIcon-right icon"/>
					</view>
				</view>
			</view>
		</view>
		
		<!--商品详情-->
		<view class="margin-top padding bg-white zaiui-details-view-box">
			<view class="text-xl title-view">
				<text class="cuIcon-titles text-red"/>
				<text class="text-black">商品详情</text>
			</view>
			<view class="text-black zaiui-text-content-view">iphoneX,美版256G,原装正品，无拆修，配件齐全，功能正常使用</view>
			<view class="zaiui-img-box">
				<image src="/static/images/home/goods/11.png" mode="widthFix"/>
				<image src="/static/images/home/goods/12.png" mode="widthFix"/>
			</view>
			<view class="zaiui-border-view"/>
			<view class="text-black title-view">买家自荐</view>
			<view class="bg-gray padding radius zaiui-bubble-view">
				<view class="cuIcon-usefullfill usefull-icon"/>
				<view class="text-black text-sm">苹果iPhone Xs Max 256G深空灰色</view>
				<view class="text-orange text-sm margin-top-sm">
					<text class="cuIcon-infofill"/>
					<text class="margin-left-xs">卖家描述仅供参考，实际情况以验机报告为准。</text>
				</view>
			</view>
			<view class="text-right text-gray margin-top text-sm">
				<text>1人想要</text>
				<text class="cuIcon-titles margin-lr-xs"/>
				<text>106次浏览</text>
			</view>
		</view>
		
		<!--关于卖家-->
		<view class="margin-top bg-white zaiui-selll-user-view-box">
			<view class="padding text-xl title-view">
				<text class="cuIcon-titles text-red"/>
				<text class="text-black">关于卖家</text>
			</view>
			<view class="cu-list menu-avatar ">
				<view class="cu-item">
					<view class="cu-avatar round" style="background-image:url(/static/images/avatar/1.jpg);"/>
					<view class="content">
						<view class="text-black">
							<view class="text-cut">仔仔</view>
							<view class="cu-tag radius bg-grey sm">
								<text class="cuIcon-selectionfill"/>
								<text class="margin-left-xs">银牌卖家</text>
							</view>
							<view class="cu-tag radius bg-orange sm just">
								<text class="cuIcon-radiobox"/>
							</view>
							<view class="cu-tag radius bg-blue sm just">
								<text class="cuIcon-myfill"/>
							</view>
						</view>
						<view class="flex">
							<text class="text-sm text-gray">90后 白羊座 女生 </text>
							<text class="cuIcon-titles text-gray margin-lr-xs"/>
							<text class="text-sm text-gray">好评率</text>
							<text class="text-sm text-red">87.50%</text>
						</view>
					</view>
					<view class="action">
						<view class="cuIcon-right text-gray"/>
					</view>
				</view>
			</view>
			<view class="padding zaiui-grid-tab-view">
				<view class="grid text-center col-3 bg-gray">
					<view class="item-view">
						<view class="text-lg">43</view>
						<view class="text-gray text-sm">在售宝贝</view>
					</view>
					<view class="item-view">
						<view class="text-lg">188</view>
						<view class="text-gray text-sm">累计交易</view>
					</view>
					<view class="item-view">
						<view class="text-lg">80%</view>
						<view class="text-gray text-sm">回复率</view>
					</view>
				</view>
			</view>
			<!-- #ifndef MP-TOUTIAO -->
			<view class="zaiui-goods-swiper-view">
				<swiper class="screen-swiper square-dot" indicator-dots circular :autoplay="false">
					<swiper-item v-for="(item,index) in goodsList.length / 4" :key="index">
						<view class="grid col-4">
							<block v-for="(items,indexs) in goodsList" :key="indexs" v-if="setSwiperItem(indexs,index)">
								<view class="goods-item">
									<view class="cu-avatar radius xl" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
									<text class="text-sm text-price-view">￥{{items.price}}</text>
								</view>
							</block>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- #endif -->
		</view>
		
		<!--互动-->
		<view class="margin-top padding bg-white zaiui-interaction-view-box">
			<view class="text-xl title-view">
				<text class="cuIcon-titles text-red"/>
				<text class="text-black">互动</text>
			</view>
			<view class="text-center zaiui-interaction-view">
				<view class="text-gray text-sm">卖家已将商品寄送到平台，互动暂时关闭。</view>
			</view>
			<view class="zaiui-border-view"/>
			<view class="padding-bottom text-black text-lg">大家都想问</view>
			<view class="flex flex-wrap margin-bottom">
				<view class="basis-1">
					<text class="cu-tag bg-grey radius sm">问</text>
				</view>
				<view class="basis-9">
					<view class="margin-bottom-xs text-black">手机是正品吗?有保障吗?</view>
					<view class="text-sm text-gray">转转自营的每部二手手机皆经过质检工程师51项专业质检并出具了详细的配套验机评估报告，且提供7天试用和180天售后质保服务;成色为[全新]的手机，为官方全新原装手机，与官方门店购买的没有任何差别，享受官方质保与转转提供的180天售后质保服务，可以放心选购哦</view>
				</view>
			</view>
			<view class="flex flex-wrap margin-bottom">
				<view class="basis-1">
					<text class="cu-tag bg-grey radius sm">问</text>
				</view>
				<view class="basis-9">
					<view class="margin-bottom-xs text-black">都有哪些渠道版本的手机?</view>
					<view class="text-sm text-gray">版本包括:国行、港澳、国际版(包括美欧日韩等版本)。其中除了零售机还包括:演示机，官换机，官翻机。</view>
				</view>
			</view>
			<view class="zaiui-border-view"/>
			<view class="text-center text-blue">查看更多问答</view>
		</view>
		
		
		<!--相关推荐-->
		<view class="margin-tb zaiui-resemble-goods-box">
			<view class="flex flex-wrap">
				<view class="basis-sm text-right">
					<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix"/>
				</view>
				<view class="basis-xs text-center">
					<text class="text-black text-lg">相关推荐</text>
				</view>
				<view class="basis-sm text-left">
					<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix"/>
				</view>
			</view>
			<view class="margin-top-sm grid col-2">
				<view class="grid-item-box">
					<view class="bg-white item-view">
						<view class="cu-avatar radius lg" style="background-image:url(/static/images/home/goods/1.png);"/>
						<view class="padding-sm zaiui-text-view">
							<view class="text-cut text-black text-sm">99新 苹果 iPhoneX 256G 银色</view>
							<view class="text-sm text-gray text-cut tag-view-box">
								<text>银色</text> <text>256G</text>
								<text>苹果</text> <text>99</text>
							</view>
							<view class="text-price-view">
								<text class="text-price text-lg text-red">2280</text>
								<text class="cu-tag light bg-red sm radius">已验机</text>
							</view>
							<view class="gps-right-view">
								<text class="text-sm text-gray">重庆 渝北区</text>
								<text class="text-sm text-gray text-right">当前在线</text>
							</view>
						</view>
					</view>
				</view>
				<view class="grid-item-box">
					<view class="bg-white item-view">
						<view class="cu-avatar radius lg" style="background-image:url(/static/images/home/goods/4.png);"/>
						<view class="padding-sm zaiui-text-view">
							<view class="text-cut text-black text-sm">99新 苹果 iPhoneX 256G 银色</view>
							<view class="text-sm text-gray text-cut tag-view-box">
								<text>银色</text> <text>256G</text>
								<text>苹果</text> <text>99</text>
							</view>
							<view class="text-price-view">
								<text class="text-price text-lg text-red">2280</text>
								<text class="cu-tag line-blue sm radius">支持验机</text>
							</view>
							<view class="gps-right-view">
								<text class="text-sm text-gray">正品保障 7天无理由</text>
							</view>
						</view>
					</view>
				</view>
				<view class="grid-item-box">
					<view class="bg-white item-view">
						<view class="cu-avatar radius lg" style="background-image:url(/static/images/home/goods/11.png);"/>
						<view class="padding-sm zaiui-text-view">
							<view class="text-cut text-black text-sm">99新 苹果 iPhoneX 256G 银色</view>
							<view class="text-sm text-gray text-cut tag-view-box">
								<text>银色</text> <text>256G</text>
								<text>苹果</text> <text>99</text>
							</view>
							<view class="text-price-view">
								<text class="text-price text-lg text-red">2280</text>
								<text class="cu-tag light bg-red sm radius">已验机</text>
							</view>
							<view class="gps-right-view">
								<text class="text-sm text-gray">重庆 渝北区</text>
								<text class="text-sm text-gray text-right">当前在线</text>
							</view>
						</view>
					</view>
				</view>
				<view class="grid-item-box">
					<view class="bg-white item-view">
						<view class="cu-avatar radius lg" style="background-image:url(/static/images/home/goods/10.png);"/>
						<view class="padding-sm zaiui-text-view">
							<view class="text-cut text-black text-sm">99新 苹果 iPhoneX 256G 银色</view>
							<view class="text-sm text-gray text-cut tag-view-box">
								<text>银色</text> <text>256G</text>
								<text>苹果</text> <text>99</text>
							</view>
							<view class="text-price-view">
								<text class="text-price text-lg text-red">2280</text>
								<text class="cu-tag light bg-red sm radius">已验机</text>
							</view>
							<view class="gps-right-view">
								<text class="text-sm text-gray">重庆 渝北区</text>
								<text class="text-sm text-gray text-right">当前在线</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"/>
		
		<!--底部操作-->
		<view class="bg-white zaiui-footer-fixed zaiui-foot-padding-bottom">
			<view class="cu-bar">
				<view class="flex flex-wrap">
					<view class="basis-xs">
						<view class="text-center">
							<view class="cuIcon-like"/>
							<view class="text-sm">想要</view>
						</view>
					</view>
					<view class="basis-xs">
						<view class="text-center">
							<view class="cuIcon-service"/>
							<view class="text-sm">客服</view>
						</view>
					</view>
					<view class="basis-sm">
						<view class="btn-view">
							<button class="cu-btn bg-orange radius shadow-blur">买前聊一聊</button>
						</view>
					</view>
					<view class="basis-sm">
						<view class="btn-view">
							<button class="cu-btn bg-red radius shadow-blur">马上买</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import _goods_data from '@/static/zaiui/data/goods.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		components: {
			barTitle,
		},
		data() {
			return {
				bannerCur: 0, bannerList: [], bottomModal: false, modalTitle: '', modalType: 'promotion', selectType: '',
				goodsList: [], interaction: true, barShow: true, TabCur: 0, tabListData: ['宝贝','卖家','互动','推荐']
			}
		},
		onLoad() {
			//this.bannerList = _goods_data.bannerListData();
			this.goodsList = _goods_data.goodsList();
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
			serviceTap() {
				this.modalTitle = "服务";
				this.modalType = 'service';
				this.showModal();
			},
			showModal() {
				this.bottomModal = true;
			},
			hideModal(e) {
				this.bottomModal = false;
				this.modalTitle = "";
				this.modalType = '';
			},
			setSwiperItem(indexs,index) {
				let max = (index + 1) * 4;
				let min = max - 4;
				let num = indexs + 1;
				if(num > min && num <= max) {
					return true;
				} else {
					return false;
				}
			},
			tabSelect(e) {
				let index = e.currentTarget.dataset.id;
				this.TabCur = index;
				if(index == 0) {
					uni.pageScrollTo({
					    scrollTop: 300,
					    duration: 200
					});
				}
				if(index == 1) {
					uni.pageScrollTo({
					    scrollTop: 1418,
					    duration: 200
					});
				}
				if(index == 2) {
					uni.pageScrollTo({
					    scrollTop: 1723,
					    duration: 200
					});
				}
				if(index == 3) {
					uni.pageScrollTo({
					    scrollTop: 2413,
					    duration: 200
					});
				}
			}
		},
		onPageScroll(e) {
			this.scrollY = e.scrollTop;
			//console.log(e.scrollTop);
			//由于无法获取元素距离顶部的距离，所以，暂时关闭以下功能。
			/*if (this.scrollY < 270) {
				this.TabCur = 0;
				this.barShow = true;
			}
			if (this.scrollY >= 310 && this.scrollY < 1418) {
				this.TabCur = 0;
				this.barShow = false;
			}
			if (this.scrollY >= 1418 && this.scrollY < 1723) {
				this.TabCur = 1;
			}
			if (this.scrollY >= 1723 && this.scrollY < 2413) {
				this.TabCur = 2;
			}
			if (this.scrollY >= 2413) {
				this.TabCur = 3;
			}*/
		},
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	@import "../../static/zaiui/style/second_terrace.scss";
</style>
