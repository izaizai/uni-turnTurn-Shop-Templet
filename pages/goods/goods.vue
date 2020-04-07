<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor='bg-white'>
			<block slot="content">商品详情</block>
			<block slot="right">
				<text class="cuIcon-forward"/>
				<text class="cuIcon-more"/>
			</block>
		</bar-title>
		
		<!--提示-->
		<view class="bg-grey text-sm text-center padding-tb-xs text-white">真机实拍部分为真机样张，您购买的机型大致符合图中成色效果</view>
		
		<!--轮播图-->
		<view class="zaiui-banner-swiper-box">
			<swiper class="screen-swiper" circular autoplay @change="bannerSwiper">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<image :src="item.url" mode="aspectFill"/>
				</swiper-item>
			</swiper>
			<!--页码-->
			<text class="cu-tag bg-grey round sm zaiui-page">{{bannerCur + 1}} / {{bannerList.length}}</text>
		</view>
		
		<!--限时秒杀-->
		<view class="zaiui-limited-seckill-box">
			<text class="text-price text-xxl">2999</text>
			<view class="text-xs zaiui-cost-price-num price-4">
				<view class="text-through">原价￥6999</view>
				<view>剩余79件</view>
			</view>
			<view class="text-right zaiui-time-right">
				<view>自营限时秒杀</view>
				<view class="text-xs">距结束剩余10时07分50秒</view>
			</view>
		</view>
		
		<!--标题-->
		<view class="bg-white zaiui-view-box zaiui-title-view-box">
			<view class="title-view">
				<text class="cu-tag bg-red radius sm">自营</text>
				<text class="text-black text-lg text-bold">99新苹果iPhoneX 64G深空灰色国行</text>
			</view>
			<view class="light bg-red radius margin-top-sm zaiui-title-tip-box">
				<view class="text-cut">
					<text class="margin-right-sm">官方自营</text>
					<text class="text-sm">官方自营正品保障新品体验售后无忧</text>
				</view>
				<text class="cuIcon-right icon"/>
			</view>
		</view>
		
		<!--服务-->
		<view class="margin-top bg-white zaiui-view-box zaiui-service-view-box" @tap="serviceTap">
			<view class="flex flex-wrap text-sm">
				<view class="basis-1">
					<text class="text-gray">服务</text>
				</view>
				<view class="basis-7">
					<view>
						<text class="tag-view">
							<text class="cuIcon-title text-red"/>
							<text>已验机</text>
						</text>
						
						<text class="tag-view">
							<text class="cuIcon-title text-red"/>
							<text>7天无理由</text>
						</text>
						
						<text class="tag-view">
							<text class="cuIcon-title text-red"/>
							<text>180天质保</text>
						</text>
					</view>
					<view class="margin-top-xs">
						<text class="tag-view">
							<text class="cuIcon-title text-red"/>
							<text>顺丰包邮</text>
						</text>
						
						<text class="tag-view">
							<text class="cuIcon-title text-red"/>
							<text>半年电池免费换新</text>
						</text>
					</view>
				</view>
				<view class="basis-2">
					<view class="text-gray text-right icon-view">
						<text class="cuIcon-right icon"/>
					</view>
				</view>
			</view>
		</view>
		
		<!--促销-->
		<view class="margin-top bg-white zaiui-view-box zaiui-promotion-view-box">
			<view class="flex flex-wrap text-sm" @tap="promotionTap">
				<view class="basis-1">
					<text class="text-gray">促销</text>
				</view>
				<view class="basis-7">
					<view>
						<text class="cu-tag line-orange sm radius">赠品</text>
						<text class="text-view">品胜充电器套装</text>
					</view>
					<view class="margin-top-xs">
						<text class="cu-tag line-orange sm radius">分期</text>
						<text class="text-view">￥318元/月花呗/京东/微信组合支付</text>
					</view>
				</view>
				<view class="basis-2">
					<view class="text-gray text-right icon-view">
						<text class="cuIcon-right icon"/>
					</view>
				</view>
			</view>
		</view>
		
		<!--选择-->
		<view class="margin-top bg-white zaiui-view-box zaiui-select-view-box">
			<view class="flex flex-wrap text-sm">
				<view class="basis-1">
					<text class="text-gray">发货</text>
				</view>
				<view class="basis-9">
					<text class="text-sm">16:00前下单，当日发货，顺丰包邮(部分地区除外)</text>
				</view>
			</view>
			
			<view class="zaiui-border-view"/>
			
			<view class="flex flex-wrap text-sm" @tap="selectTap">
				<view class="basis-1">
					<text class="text-gray">已选</text>
				</view>
				<view class="basis-8">
					<text class="text-sm">99新深空灰色64G国行三网通</text>
				</view>
				<view class="basis-1">
					<view class="text-gray text-right">
						<text class="cuIcon-right icon"/>
					</view>
				</view>
			</view>
		</view>
		
		<!--评论-->
		<view class="margin-top bg-white zaiui-comment-view-box">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="text-black text-lg">评价（3699）</text>
				</view>
				<view class="action">
					<view class="text-sm">
						<text class="margin-right-xs">好评率</text>
						<text class="text-black text-lg">97%</text>
						<text class="cuIcon-right icon margin-left-xs"/>
					</view>
				</view>
			</view>
			<view class="zaiui-border-view"/>
			<view class="zaiui-view-box">
				<view class="flex flex-wrap text-sm">
					<view class="basis-1">
						<view class="cu-avatar sm round" style="background-image:url(/static/images/avatar/1.jpg)"/>
					</view>
					<view class="basis-9 text-sm">
						<view>仔仔</view>
						<view class="margin-top-xs">X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢</view>
						<view class="text-gray margin-top-sm">iPhone X 64G深空灰色</view>
					</view>
				</view>
			</view>
			<view class="zaiui-border-view"/>
			<view class="zaiui-view-box">
				<view class="flex flex-wrap text-sm">
					<view class="basis-1">
						<view class="cu-avatar sm round" style="background-image:url(/static/images/avatar/2.jpg)"/>
					</view>
					<view class="basis-9 text-sm">
						<view>仔仔</view>
						<view class="margin-top-xs">X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢</view>
						<view class="text-gray margin-top-sm">iPhone X 64G深空灰色</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--杂项信息-->
		<view class="margin-top bg-white zaiui-view-box zaiui-goods-info-view-box">
			<view class="zaiui-shop-view">
				<view class="cu-avatar lg round" style="background-image:url(/static/images/avatar/1.jpg)"/>
				<view class="text-view">
					<view class="margin-bottom-xs">仔仔店铺</view>
					<view class="text-sm text-cut">仔仔店铺，正品保障，售后无忧</view>
				</view>
				<button class="cu-btn radius sm line-red">全部商品</button>
			</view>
			<view class="zaiui-border-view"/>
			<view class="live-tag-view">
				<view class="text-view">
					<text class="cu-tag bg-red radius sm">
						<text class="cuIcon-title"/>
						<text>直播中</text>
					</text>
					<text class="margin-left-xs text-cut">官方直播自营商品在线答疑</text>
				</view>
				<view class="text-sm text-red text-right-view">
					<text class="margin-right-xs">看直播</text>
					<text class="cuIcon-right"/>
				</view>
			</view>
			<view class="zaiui-border-view"/>
			<view class="zaiui-recommend-list-box">
				<view class="text-sm">官方推荐</view>
				<!--滑动列表-->
				<view class="recommend-scroll-box">
					<scroll-view class="recommend-scroll" scroll-x>
						<block v-for="(items,indexs) in goodsList" :key="indexs">
							<view :id="['scroll' + (indexs + 1 )]" class="recommend-scroll-item">
								<view class="cu-avatar xl radius" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
								<view class="text-cut-2 text-sm text-black margin-tb-sm">{{items.title}}</view>
								<view class="text-red text-price margin-tb-sm text-lg">{{items.price}}</view>
							</view>
						</block>
					</scroll-view>
				</view>
			</view>
			
		</view>
		
		<!--图片详情-->
		<view class="margin-top zaiui-goods-details-box">
			<image src="/static/images/home/goods/goods-1.png" mode="widthFix"/>
			<image src="/static/images/home/goods/goods-2.png" mode="widthFix"/>
		</view>
		
		<!--常见问题-->
		<view class="margin-top bg-white margin-bottom zaiui-view-box zaiui-goods-help-view-box">
			<view class="text-black text-lg margin-bottom-sm">常见问题</view>
			<view class="flex flex-wrap margin-bottom">
				<view class="basis-1">
					<text class="cu-tag bg-grey radius sm">问</text>
				</view>
				<view class="basis-9">
					<view class="margin-bottom-xs text-black">手机是正品吗?有保障吗?</view>
					<view class="text-sm">转转自营的每部二手手机皆经过质检工程师51项专业质检并出具了详细的配套验机评估报告，且提供7天试用和180天售后质保服务;成色为[全新]的手机，为官方全新原装手机，与官方门店购买的没有任何差别，享受官方质保与转转提供的180天售后质保服务，可以放心选购哦</view>
				</view>
			</view>
			<view class="flex flex-wrap margin-bottom">
				<view class="basis-1">
					<text class="cu-tag bg-grey radius sm">问</text>
				</view>
				<view class="basis-9">
					<view class="margin-bottom-xs text-black">都有哪些渠道版本的手机?</view>
					<view class="text-sm">版本包括:国行、港澳、国际版(包括美欧日韩等版本)。其中除了零售机还包括:演示机，官换机，官翻机。</view>
				</view>
			</view>
			<view class="zaiui-border-view"/>
			<view class="text-center text-blue">查看更多问题</view>
		</view>
		
		<!--相似推荐-->
		<view class="margin-top zaiui-view-box zaiui-recommend-list-view-box">
			<view class="flex flex-wrap">
				<view class="basis-sm text-right">
					<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix"/>
				</view>
				<view class="basis-xs text-center">
					<text class="text-black text-lg">相似推荐</text>
				</view>
				<view class="basis-sm text-left">
					<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix"/>
				</view>
			</view>
			
			<view class="margin-bottom zaiui-goods-list-box">
				<view class="grid col-2">
					<block v-for="(items,indexs) in goodsList" :key="indexs">
						<view class="list-itme">
							<view class="bg-white list-radius">
								<view class="goods-img">
									<view class="cu-avatar" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
									<view class="mold-view" v-if="items.mold">
										<text class="cu-tag radius sm bg-red">自营</text>
									</view> 
								</view>
								<view class="view-goods-info">
									<view class="text-cut-2 text-black text-sm margin-bottom-sm">{{items.title}}</view>
									<view class="text-price text-red text-lg">{{items.price}}</view>
								</view>
							</view>
						</view>
					</block>
				</view>
			</view>
		</view>
		
		<!--占位底部距离-->
		<view class="cu-tabbar-height"/>
		
		<!--底部操作-->
		<view class="zaiui-footer-fixed">
			<view class="cu-bar bg-white tabbar border shop">
				<button class="action">
					<view class="cuIcon-service"/>
					<view>客服</view>
				</button>
				<view class="action" @tap="myCartTap">
					<view class="cuIcon-cart">
						<view class="cu-tag badge">9</view>
					</view>
					<text>购物车</text>
				</view>
				<view class="btn-group">
					<button class="cu-btn bg-orange radius shadow-blur" @tap="selectTap('add')">加入购物车</button>
					<button class="cu-btn bg-red radius shadow-blur" @tap="selectTap('sell')">立即购买</button>
				</view>
			</view>
		</view>
		
		<!--弹出框-->
		<view class="cu-modal bottom-modal zaiui-bottom-modal-box" :class="bottomModal?'show':''">
			<view class="cu-dialog bg-white">
				<!--标题-->
				<view class="text-black text-center margin-tb text-lg zaiui-title-bar">
					<text>{{modalTitle}}</text>
					<text class="cuIcon-close close-icon" @tap="hideModal"></text>
				</view>
				
				<!--内容区域-->
				<view class="zaiui-modal-content">
					
					<!--服务区域-->
					<view class="zaiui-view-box service" v-if="modalType=='service'">
						<view class="text-view">
							<text class="cuIcon-title text-red"/>
							<text class="text-cut text-black">已验机</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">转转&富士康联合制定验机标准，对设备进行专业质检</view>
						</view>
						<view class="text-view">
							<text class="cuIcon-title text-red"/>
							<text class="text-cut text-black">7天无理由</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">自收到商品7天内，不喜欢可以申请退货，并自付邮费寄回</view>
						</view>
						<view class="text-view">
							<text class="cuIcon-title text-red"/>
							<text class="text-cut text-black">180天质保</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">自订单确认收货起180天,提供免费质保</view>
						</view>
						<view class="text-view">
							<text class="cuIcon-title text-red"/>
							<text class="text-cut text-black">顺丰包邮</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">16:00前下单，今日发货，顺丰包邮(偏远地区邮政包邮)</view>
						</view>
						<view class="text-view">
							<text class="cuIcon-title text-red"/>
							<text class="text-cut text-black">半年电池免费换新</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">自订单确认收货起半年，如果电池电量低于60%，可申请免费更换原厂品质电池</view>
						</view>
					</view>
					
					<!--促销区域-->
					<view class="zaiui-view-box promotion" v-if="modalType=='promotion'">
						<view class="text-view">
							<text class="cu-tag line-orange radius sm">赠品</text>
							<text class="margin-left-xs text-cut text-black">品胜充电器套装</text>
						</view>
						
						<view class="text-sm text-list-view">
							<view class="text-cut">充电头+数据线</view>
							<text class="text-right-view">价值￥99</text>
						</view>
						
						<view class="text-view">
							<text class="cu-tag line-orange radius sm">分期</text>
							<text class="margin-left-xs text-cut text-black">￥318元/月花呗/京东/微信组合支付</text>
						</view>
					</view>
					
					<!--选择规格-->
					<view class="zaiui-view-box select" v-if="modalType=='select'">
						<!--商品信息-->
						<view class="cu-list menu-avatar">
							<view class="cu-item">
								<view class="cu-avatar radius lg" style="background-image:url(/static/images/home/goods/1.png);"/>
								<view class="content">
									<view class="text-price-view">
										<text class="text-price text-red margin-right-xs">2699</text>
										<text class="text-sm text-gray text-through">￥6999</text>
										<text class="cu-tag bg-gradual-red radius sm">
											<text class="cuIcon-hotfill"/>
											<text>秒杀中</text>
										</text>
									</view>
									<view class="text-black text-sm flex">
										<view class="text-cut">已选: 99新深空灰色64G国行三网通</view>
									</view>
								</view>
							</view>
						</view>
						
						<!--规格数据-->
						<view class="zaiui-select-btn-list-boox">
							<view class="select-item">
								<view class="text-black">成色</view>
								<view class="select-btn">
									<button class="cu-btn">95新</button>
									<button class="cu-btn">9成新</button>
									<button class="cu-btn light bg-red">99新</button>
								</view>
							</view>
							
							<view class="select-item">
								<view class="text-black">颜色</view>
								<view class="select-btn">
									<button class="cu-btn light bg-red">深空灰色</button>
									<button class="cu-btn" disabled>银色</button>
								</view>
							</view>
							
							<view class="select-item">
								<view class="text-black">容量</view>
								<view class="select-btn">
									<button class="cu-btn" disabled>256G</button>
									<button class="cu-btn light bg-red">64G</button>
								</view>
							</view>
							
							<view class="select-item">
								<view class="text-black">版本</view>
								<view class="select-btn">
									<button class="cu-btn">港澳版移动4G/联通4G</button>
									<button class="cu-btn">其他版本移动4G/联通4G</button>
									<button class="cu-btn">其他版本三网通</button>
									<button class="cu-btn light bg-red">国行三网通</button>
								</view>
							</view>
							
						</view>
						
					</view>
					
					<!--公共按钮-->
					<view class="zaiui-footer-fixed">
						<view class="flex flex-direction">
							<button class="cu-btn bg-red lg">确定</button>
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
				goodsList: [],
			}
		},
		onLoad() {
			this.bannerList = _goods_data.bannerListData();
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
			bannerSwiper(e) {
				this.bannerCur = e.detail.current;
			},
			serviceTap() {
				this.modalTitle = "服务";
				this.modalType = 'service';
				this.showModal();
			},
			promotionTap() {
				this.modalTitle = "促销优惠";
				this.modalType = 'promotion';
				this.showModal();
			},
			selectTap(type) {
				this.selectType = type;
				this.modalTitle = "选择规格";
				this.modalType = 'select';
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
			myCartTap(){
				uni.navigateTo({
					url: '/pages/goods/my_cart'
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
	@import "../../static/zaiui/style/goods.scss";
</style>
