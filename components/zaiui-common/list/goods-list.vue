<template>
	<view class="margin-bottom zaiui-goods-list-box" :class="show?'show':''">
		<view class="flex flex-wrap ">
			<view class="basis-df padding-sm padding-right-xs ">
				<block v-for="(item,index) in list_data" :key="index" v-if="index%2==0">
					<view class="bg-white margin-bottom-sm list-radius" v-if="!item.type" @tap="listTap(item,index)">
						<view class="goods-img">
							<image :src="item.img" mode="widthFix" lazy-load/>
							<text class="cuIcon-videofill text-white pay-view" v-if="item.pay"/>
							<view class="text-right service-view" v-if="item.service.length > 0">
								<block v-for="(items,indexs) in item.service" :key="indexs">
									<text class="cu-tag bg-blue radius sm">{{items}}</text>
								</block>
							</view>
							<view class="mold-view" v-if="item.mold.length > 0">
								<block v-for="(items,indexs) in item.mold" :key="indexs">
									<text class="cu-tag radius sm" :class="['bg-' + items.bg]">{{items.title}}</text>
								</block>
							</view>
						</view>
						<view class="padding-xs">
							<view class="text-cut-2 text-black">{{item.title}}</view>
							<view class="margin-top-xs">
								<view class="flex">
									<view class="flex-sub">
										<text class="text-price text-red text-xl text-left">{{item.price}}</text>
									</view>
									<view class="flex-sub text-right" v-if="item.servicePlus">
										<text class="cu-tag light bg-red radius sm ">{{item.servicePlus}}</text>
									</view>
								</view>
							</view>
							<view class="margin-top-sm margin-bottom-xs text-gray user-info-box">
								<view class="flex">
									<view class="flex-sub">
										<view class="flex flex-wrap user-info">
											<view class="basis-xs">
												<image class="cu-avatar sm round img" :src="item.avatar" lazy-load mode="widthFix"/>
											</view>
											<view class="basis-xl text-cut line-height">
												<text class="text-sm margin-left-xs">{{item.username}}</text>
											</view>
											<image class="v-icon" src="/static/zaiui/img/v.png" lazy-load mode="widthFix" v-if="item.v"/>
										</view>
									</view>
									<view class="flex-sub text-right text-time">
										<text class="text-sm">{{item.time}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					
					<view class="bg-white margin-bottom-sm list-radius padding-sm recommend-list-box" v-if="item.type=='recommend'">
						<view class="flex flex-wrap">
							<view class="basis-xs text-right">
								<image class="img-aat" src="/static/zaiui/img/aat.png" lazy-load mode="widthFix"/>
							</view>
							<view class="basis-lg text-center">
								<text class="text-black text-bold">您可能感兴趣</text>
							</view>
							<view class="basis-xs text-left">
								<image class="img-aat" src="/static/zaiui/img/aat.png" lazy-load mode="widthFix"/>
							</view>
						</view>
						<view class="grid col-2 text-center margin-top-sm">
							<block v-for="(items,indexs) in item.list" :key="indexs" v-if="item.list.length < 5">
								<view class="padding-xs" @tap="listTap(items,indexs)">
									<view class="img-goods" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
									<view class="text-black text-sm margin-top-xs">{{items.title}}</view>
								</view>
							</block>
						</view>
					</view>
				</block>
			</view>
			<view class="basis-df padding-sm padding-left-xs">
				<block v-for="(item,index) in list_data" :key="index" v-if="index%2!=0">
					<view class="bg-white margin-bottom-sm list-radius" v-if="!item.type"  @tap="listTap(item,index)">
						<view class="goods-img">
							<image :src="item.img" mode="widthFix" lazy-load/>
							<text class="cuIcon-videofill text-white pay-view" v-if="item.pay"/>
							<view class="text-right service-view" v-if="item.service.length > 0">
								<block v-for="(items,indexs) in item.service" :key="indexs">
									<text class="cu-tag bg-blue radius sm">{{items}}</text>
								</block>
							</view>
							<view class="mold-view" v-if="item.mold.length > 0">
								<block v-for="(items,indexs) in item.mold" :key="indexs">
									<text class="cu-tag radius sm" :class="['bg-' + items.bg]">{{items.title}}</text>
								</block>
							</view>
						</view>
						<view class="padding-xs">
							<view class="text-cut-2 text-black">{{item.title}}</view>
							<view class="margin-top-xs">
								<view class="flex">
									<view class="flex-sub">
										<text class="text-price text-red text-xl text-left">{{item.price}}</text>
									</view>
									<view class="flex-sub text-right" v-if="item.servicePlus">
										<text class="cu-tag light bg-red radius sm ">{{item.servicePlus}}</text>
									</view>
								</view>
							</view>
							<view class="margin-top-sm margin-bottom-xs text-gray user-info-box">
								<view class="flex">
									<view class="flex-sub">
										<view class="flex flex-wrap user-info">
											<view class="basis-xs">
												<image class="cu-avatar sm round img" :src="item.avatar" lazy-load mode="widthFix"/>
											</view>
											<view class="basis-xl text-cut line-height">
												<text class="text-sm margin-left-xs">{{item.username}}</text>
											</view>
											<image class="v-icon" src="/static/zaiui/img/v.png" lazy-load mode="widthFix" v-if="item.v"/>
										</view>
									</view>
									<view class="flex-sub text-right text-time">
										<text class="text-sm">{{item.time}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="bg-white margin-bottom-sm list-radius padding-sm recommend-list-box" v-if="item.type=='recommend'">
						<view class="flex flex-wrap">
							<view class="basis-xs text-right">
								<image class="img-aat" src="/static/zaiui/img/aat.png" lazy-load mode="widthFix"/>
							</view>
							<view class="basis-lg text-center">
								<text class="text-black text-bold">您可能感兴趣</text>
							</view>
							<view class="basis-xs text-left">
								<image class="img-aat" src="/static/zaiui/img/aat.png" lazy-load mode="widthFix"/>
							</view>
						</view>
						<view class="grid col-2 text-center margin-top-sm">
							<block v-for="(items,indexs) in item.list" :key="indexs" v-if="item.list.length < 5">
								<view class="padding-xs" @tap="listTap(items,indexs)">
									<view class="img-goods" :style="[{backgroundImage:'url('+ items.img +')'}]"/>
									<view class="text-black text-sm margin-top-xs">{{items.title}}</view>
								</view>
							</block>
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'goods-list',
		props: {
			list_data: {
				type: Array,
				default: () => {
					return []
				}
			},
			show: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			listTap(data,index) {
				this.$emit('listTap', {
					data,
					index
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-goods-list-box {
		position: relative;
		width: 100%;
		display: none;
		.list-radius {
			border-radius: 19rpx;
		}
		.goods-img {
			position: relative;
			width: 100%;
			image {
				width: 100%;
				border-radius: 19rpx 19rpx 0 0;
			}
			.pay-view {
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				font-size: 46rpx;
			}
			.service-view {
				position: absolute;
				width: 100%;
				bottom: 7.5rpx;
				right: 10rpx;
			}
			.mold-view {
				position: absolute;
				width: 100%;
				bottom: 7.5rpx;
				left: 10rpx;
			}
		}
		.text-time {
			line-height: 47rpx;
		}
		.recommend-list-box {
			.img-aat {
				width: 55rpx;
				margin-top: 10rpx;
			}
			.img-goods {
				font-variant: small-caps;
				margin: 0;
				padding: 0;
				display: inline-flex;
				text-align: center;
				-webkit-box-pack: center;
				justify-content: center;
				-webkit-box-align: center;
				align-items: center;
				white-space: nowrap;
				position: relative;
				width: 137rpx;
				height: 137rpx;
				background-size: cover;
				background-position: center;
				vertical-align: middle;
				border-radius: 12%;
			}
		}
	}
	.zaiui-goods-list-box.show {
		display: block;
	}
</style>
