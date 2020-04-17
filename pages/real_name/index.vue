<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">实人认证</block>
		</bar-title>
		
		<!--状态图标-->
		<view class="zaiui-status-image-view">
			<image src="/static/zaiui/img/non_real_name.png" mode="widthFix" v-if="!status" @tap="statusTap"/>
			<image src="/static/zaiui/img/real_name.png" mode="widthFix" v-if="status" @tap="statusTap"/>
		</view>
		
		<!--状态信息-->
		<view class="text-black text-xl text-center margin-bottom-sm" v-if="!status">您尚未实人认证</view>
		
		<view class="text-black text-lg text-center margin-bottom-sm" v-if="status">
			<text class="margin-right">**鸿</text>
			<text>100***********123</text>
		</view>
		<view class="text-black text-xl text-center margin-bottom-sm" v-if="status">您已完成实人认证</view>
		
		<!--文字说明-->
		<view class="text-gray text-center zaiui-content-view" v-if="!status">
			实人认证是由转转合作的第三方提供的一项个人身份认证服务，通过与公安网数据校验并使用全球领先的人脸识别技术，保障个人身份真实性。实人认证后，可提升您在二手交易中的信任值哦。
		</view>
		<view class="text-gray text-center zaiui-content-view" v-if="status">
			实人认证是由转转合作的第三方提供的一项个人身份认证服务，通过与公安网数据校验并使用全球领先的人脸识别技术，保障个人身份真实性。
		</view>
		
		<!--按钮-->
		<view class="zaiui-btn-view" v-if="!status">
			<button class="cu-btn bg-red radius" @tap="btnTap">去认证</button>
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
				status: false,
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
			statusTap() {
				if(this.status) {
					this.status = false;
				} else {
					this.status = true;
				}
			},
			btnTap() {
				uni.navigateTo({
					url: "/pages/real_name/form"
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
	page { background: #FFFFFF; }
	.zaiui-status-image-view {
		position: relative;
		text-align: center;
		margin-top: 90.9rpx;
		margin-bottom: 18.18rpx;
		image {
			width: 472.72rpx;
		}
	}
	.zaiui-content-view {
		position: relative;
		padding: 0 72.72rpx;
	}
	.zaiui-btn-view {
		position: relative;
		text-align: center;
		margin-top: 90.9rpx;
		.cu-btn {
		    padding: 0 45.45rpx;	
		}
	}
</style>
