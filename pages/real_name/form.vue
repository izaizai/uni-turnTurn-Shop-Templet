<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">实人认证</block>
		</bar-title>
		
		<!--标题-->
		<view class="text-black text-xl zaiui-title-view">为提升交易可靠性，请进行实人认证</view>
		
		<!--内容-->
		<view class="text-gray zaiui-content-view">
			实人认证是由转转合作的第三方提供的一项个人身份
			认证服务,通过与公安网数据校验并使用全球领先的
			人脸识别技术,保障个人身份真实性。转转平台将逐
			步推进全平台实人认证，为用户创造更加安全的交易
			环境。
		</view>
		
		<!--表单-->
		<view class="cu-form-view margin-top-lg">
			<input placeholder="请输入真实姓名"/>
		</view>
		<view class="cu-form-view">
			<input placeholder="请输入18位身份证号"/>
		</view>
		
		<!--按钮-->
		<view class="bg-white zaiui-btn-view zaiui-foot-padding-bottom">
			<view class="flex flex-direction">
				<button class="cu-btn bg-red">开始验证</button>
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
	.zaiui-title-view {
	    position: relative;
	    padding: 18.18rpx;
	}
	.zaiui-content-view {
		position: relative;
		padding: 0 18.18rpx;
	}
	.cu-form-view {
		position: relative;
		margin: 0 27.27rpx;
		padding: 18.18rpx 0;
		border-bottom: 2rpx solid rgba(0,0,0,0.1);
		input {
			
		}
	}
	.cu-form-view.margin-top-lg {
		margin-top: 40rpx;
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
