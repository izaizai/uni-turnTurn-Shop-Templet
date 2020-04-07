<template>
	<view class="margin-bottom zaiui-live-list-box" :class="show?'show':''">
		<view class="flex flex-wrap">
			<view class="basis-df padding-sm padding-right-xs">
				<block v-for="(item,index) in list_data" :key="index" v-if="index%2==0">
					<view class="margin-bottom-sm img-itme" @tap="listTap(item,index)">
						<!--背景图-->
						<image class="cover-img" :src="item.cover_img" lazy-load mode="widthFix"/>
						
						<!--观看人数-->
						<view class="cu-capsule round live-tag" v-if="item.tag">
							<view class='cu-tag bg-red sm'>
								<text class='cuIcon-all'/>
							</view>
							<view class="cu-tag sm">{{item.tag}}</view>
						</view>
						
						<!--鉴别中-->
						<view class="cu-capsule round live-tag-title" v-if="item.tag_title.length > 0">
							<view class='cu-tag bg-red sm'>
								<text class='cuIcon-all'/>
								<text>{{item.tag_title[0]}}</text>
							</view>
							<view class="cu-tag sm">{{item.tag_title[1]}}</view>
						</view>
						
						<!--预约中-->
						<view class='cu-tag sm bg-red round live-time-tag' v-if="item.tag_time">
							<text class='cuIcon-timefill'/>
							<text class="margin-left-xs">{{item.tag_time}}</text>
						</view>
						
						<!--红包-->
						<view class='cu-tag bg-red sm radius live-red-tag' v-if="item.tag_red">{{item.tag_red}}</view>
						
						<!--特惠-->
						<view class='cu-tag bg-gradual-red sm radius live-red-tag' v-if="item.tag_red_bg">{{item.tag_red_bg}}</view>
						
						<!--标题-->
						<view class="text-cut live-title" v-if="item.title">{{item.title}}</view>
						
						<!--主播信息-->
						<view class="live-user-info-box" v-if="item.name">
							<view class="user-box">
								<!--头像-->
								<image :src="item.avatar" mode="aspectFill" lazy-load class="cu-avatar sm round" v-if="item.avatar"/>
								<!--名称-->
								<view class="text-cut text-sm user-name">{{item.name}}</view>
								<!--点赞-->
								<view class="text-sm text-right live-appreciate" v-if="item.appreciate">
									<text class="cuIcon-appreciate"/>
									<text class="margin-left-xs">{{item.appreciate}}</text>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
			<view class="basis-df padding-sm padding-left-xs">
				<block v-for="(item,index) in list_data" :key="index" v-if="index%2!=0">
					<view class="margin-bottom-sm img-itme" @tap="listTap(item,index)">
						<!--背景图-->
						<image class="cover-img" :src="item.cover_img" lazy-load mode="widthFix"/>
						
						<!--观看人数-->
						<view class="cu-capsule round live-tag" v-if="item.tag">
							<view class='cu-tag bg-red sm'>
								<text class='cuIcon-all'/>
							</view>
							<view class="cu-tag sm">{{item.tag}}</view>
						</view>
						
						<!--鉴别中-->
						<view class="cu-capsule round live-tag-title" v-if="item.tag_title.length > 0">
							<view class='cu-tag bg-red sm'>
								<text class='cuIcon-all'/>
								<text>{{item.tag_title[0]}}</text>
							</view>
							<view class="cu-tag sm">{{item.tag_title[1]}}</view>
						</view>
						
						<!--预约中-->
						<view class='cu-tag bg-red sm round live-time-tag' v-if="item.tag_time">
							<text class='cuIcon-timefill'/>
							<text class="margin-left-xs">{{item.tag_time}}</text>
						</view>
						
						<!--红包-->
						<view class='cu-tag bg-red sm radius live-red-tag' v-if="item.tag_red">{{item.tag_red}}</view>
						
						<!--特惠-->
						<view class='cu-tag bg-gradual-red sm radius live-red-tag' v-if="item.tag_red_bg">{{item.tag_red_bg}}</view>
						
						<!--标题-->
						<view class="text-cut live-title" v-if="item.title">{{item.title}}</view>
						
						<!--主播信息-->
						<view class="live-user-info-box" v-if="item.name">
							<view class="user-box">
								<!--头像-->
								<image :src="item.avatar" mode="aspectFill" lazy-load class="cu-avatar sm round" v-if="item.avatar"/>
								<!--名称-->
								<view class="text-cut text-sm user-name">{{item.name}}</view>
								<!--点赞-->
								<view class="text-sm text-right live-appreciate" v-if="item.appreciate">
									<text class="cuIcon-appreciate"/>
									<text class="margin-left-xs">{{item.appreciate}}</text>
								</view>
							</view>
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
		name: 'live-list',
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
	.zaiui-live-list-box {
		position: relative;
		width: 100%;
		display: none;
		.img-itme {
			position: relative;
			width: 100%;
			.cover-img {
				width: 100%;
				border-radius: 3%;
			}
			.live-tag,.live-tag-title,.live-time-tag {
				position: absolute;
				top: 18.18rpx;
				left: 18.18rpx;
			}
			.cu-capsule.round.live-tag-title .cu-tag, .cu-capsule.round.live-tag .cu-tag {
				&:last-child {
				    background-color: rgba(14, 14, 14, 0.6);
					color: #FFFFFF;
				}
			}
			.live-time-tag {
				background: rgba(14, 14, 14, 0.6);
			}
			.live-red-tag {
				position: absolute;
				bottom: 123.63rpx;
			    left: 18.18rpx;
			}
			.live-title {
			    position: absolute;
			    bottom: 72.72rpx;
			    left: 0;
			    width: 100%;
			    padding: 0 18.18rpx;
			    color: #FFFFFF;
			}
			.live-user-info-box {
			    position: absolute;
			    bottom: 18.18rpx;
			    left: 0;
			    width: 100%;
			    color: #FFFFFF;
				.user-box {
					position: relative;
					width: 100%;
					.cu-avatar {
						margin-left: 18.18rpx;
						width: 43.63rpx;
						height: 43.63rpx;
					}
					.user-name {
					    position: absolute;
					    top: 3.63rpx;
					    width: 145.45rpx;
					    left: 72.72rpx;
					}
					.live-appreciate {
						position: absolute;
						top: 3.63rpx;
						right: 18.18rpx;
					}
				}
			}
		}
	}
	.zaiui-live-list-box.show {
		display: block;
	}
</style>
