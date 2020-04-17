<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">交易评价</block>
		</bar-title>
		
		<!--提示栏-->
		<view class="bg-red light text-sm zaiui-tip-view">
			<view class="text-cut content">对方做出评价前，不会看到您的评价内容哦~</view>
			<text class="cuIcon-close icon"/>
		</view>
		
		<!--商品信息-->
		<view class="bg-white padding-sm zaiui-goods-info-view margin-bottom">
			<view class="cu-avatar round lg" :style="[{backgroundImage:'url('+ bg_img +')'}]"/>
			<view class="goods-info-view">
				<view class="text-cut text-black text-lg">仔仔科技运营部</view>
				<view class="text-cut text-gray">本次交易物品 其它CDK</view>
			</view>
		</view>
		
		<!--信息-->
		<view class="bg-white zaiui-content-view">
			<!--评分-->
			<view class="zaiui-score-view">
				<view class="item-score">
					<view class="text-cut text-view">再次与TA交易</view>
					<view class="score-img-view">
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a1.png')"/>
							<view class="text-gray text-center title">不愿意</view>
						</view>
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a2.png')"/>
							<view class="text-gray text-center title">一般</view>
						</view>
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a3s.png')"/>
							<view class="text-gray text-center title">愿意</view>
						</view>
					</view>
				</view>
				
				<view class="item-score">
					<view class="text-cut text-view">沟通愉快程度</view>
					<view class="score-img-view">
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a1.png')"/>
							<view class="text-gray text-center title">不开心</view>
						</view>
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a2s.png')"/>
							<view class="text-gray text-center title">一般</view>
						</view>
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a3.png')"/>
							<view class="text-gray text-center title">开心</view>
						</view>
					</view>
				</view>
				
				<view class="item-score">
					<view class="text-cut text-view">实物与描述一致度</view>
					<view class="score-img-view">
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a1s.png')"/>
							<view class="text-gray text-center title">不一致</view>
						</view>
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a2.png')"/>
							<view class="text-gray text-center title">一般</view>
						</view>
						<view class="img-view">
							<view class="cu-avatar sm" style="background-image:url('/static/zaiui/img/a3.png')"/>
							<view class="text-gray text-center title">一致</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<!--评价内容-->
			<view class="cu-form-group solid-top">
				<textarea placeholder="随手评价,造福你我他"/>
			</view>
			<view class="zaiui-img-view">
				<view class="img-grid-view">
					<view class="grid col-5">
						<block v-for="(item,index) in imgList" :key="index">
							<view class="bg-img" @tap="ViewImage" :data-url="imgList[index]">
								<image class="image" :src="imgList[index]" mode="aspectFill"></image>
								<view class="cu-tag sm bg-red" @tap.stop="DelImg" :data-index="index">
									<text class='cuIcon-close'></text>
								</view>
							</view>
						</block>
						<view class="add-view" @tap="ChooseImage">
							<text class='cuIcon-add'></text>
						</view>
					</view>	
				</view>
			</view>
		</view>
		
		<!--按钮-->
		<view class="bg-white zaiui-btn-view zaiui-foot-padding-bottom">
			<view class="flex flex-direction">
				<button class="cu-btn bg-red">提交评价</button>
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
				bg_img: '/static/images/home/goods/1.png', imgList: [],
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
			ChooseImage() {
				uni.chooseImage({
					count: 4,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		}
	}
</script>


<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	.zaiui-goods-info-view {
		position: relative;
		.cu-avatar {
			position: absolute;
		}
		.goods-info-view {
			position: relative;
			padding-left: 112.72rpx;
			height: 94.54rpx;
			line-height: 1.7;
		}
	}
	.zaiui-score-view {
		position: relative;
		padding: 25.45rpx 27.27rpx 0;
		.item-score {
			position: relative;
			height: 118.18rpx;
			.text-view {
			    position: relative;
			    padding-right: 290.9rpx;
				top: 18.18rpx;
			}
			.score-img-view {
				position: absolute;
				display: flex;
				right: 0;
				top: 0;
				.img-view {
					position: relative;
					text-align: center;
					width: 72.72rpx;
					.title {
						margin-top: 5.45rpx;
						font-size: 20rpx;	
					}
				}
				.img-view + .img-view {
					margin-left: 18.18rpx;
				}
			}
		}
	}
	.zaiui-img-view {
		position: relative;
		padding: 0 29.09rpx;
		.img-grid-view {
			position: relative;
			padding-right: 72.72rpx;
			padding-bottom: 18.18rpx;
			.grid.col-5 {
				.bg-img {
					position: relative;
					border-radius: 3.63rpx;
					margin-bottom: 27.27rpx;
					margin-right: 27.27rpx;
					height: 72.72rpx;
					width: 72.72rpx;
					.image {
						border-radius: 3.63rpx;	
						height: 72.72rpx;
					    width: 72.72rpx;
					}
					.cu-tag {
						position: absolute;
						border-radius: 3.63rpx;
						padding: 0 1.81rpx;
						height: auto;
						right: 0;
						top: 0;
						text {
							position: relative;
						    top: 1.81rpx;
						}
					}
				}
				.add-view {
					border: 2rpx solid #efeeee;
					margin-bottom: 27.27rpx;
					border-radius: 3.63rpx;
					line-height: 72.72rpx;
					text-align: center;
					height: 72.72rpx;
					width: 72.72rpx;
					text {
					    position: relative;
					    font-size: 54.54rpx;
					    color: #e4e3e3;	
					}
				}
			}
		}
	}
	.zaiui-btn-view {
	    position: fixed;
	    width: 100%;
		bottom: 0;
		.flex {
			padding: 18.18rpx;	
		}
	}
</style>
