<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">手机号换绑</block>
			<block slot="right">
				<text class="text-orange">保存</text>
			</block>
		</bar-title>
		
		<!--提示栏-->
		<view class="text-black text-center margin-top padding">完成短信验证进行换绑手机号</view>
		
		<view class="cu-list menu sm-border margin-top">
			<view class="cu-item">
				<view class="content">当前手机号</view>
				<view class="action">138****8000</view>
			</view>
		</view>
		<view class="cu-form-group solid-top">
			<view class="title">新手机号</view>
			<input value=""/>
		</view>
		<view class="cu-form-group code">
			<view class="title">验证码</view>
			<input value=""/>
			<text class="text-orange text-btn" @tap="checking" v-if="!state">发送验证码</text>
			<text class="text-orange text-btn" v-else>{{currentTime}}s</text>
		</view>
		
		<view class="text-sm text-gray padding-sm">验证码将会发送到您的手机号中~</view>
		
		<view class="bg-white wecanui-footer-fixed foot-pb">
			<view class="flex flex-direction padding-sm">
				<button class="cu-btn bg-red">换绑手机号</button>
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
				state: false,		//是否开启倒计时
				totalTime: 120,		//总时间，单位秒
				recordingTime: 0, 	//记录时间变量
				currentTime: 0, 	//显示时间变量
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
			checking() {
				//把显示时间设为总时间
				this.currentTime = this.totalTime;
				//开始倒计时
				this.state = true;
				//执行倒计时
				this.checkingTime();
			},
			checkingTime(){
				let that = this;
				//判断是否开启
				if(this.state){
					//判断显示时间是否已到0，判断记录时间是否已到总时间
					if(this.currentTime > 0 && this.recordingTime <= this.totalTime){
						//记录时间增加 1
						this.recordingTime = this.recordingTime + 1;
						//显示时间，用总时间 - 记录时间
						this.currentTime = this.totalTime - this.recordingTime;
						//1秒钟后，再次执行本方法
						setTimeout(() => { 	
							//定时器内，this指向外部，找不到vue的方法，所以，需要用that变量。
							that.checkingTime();
						}, 1000)
					}else{
						//时间已完成，还原相关变量
						this.state = false;		//关闭倒计时
						this.recordingTime = 0;	//记录时间为0
						this.currentTime = this.totalTime;	//显示时间为总时间
					}
				}else{
					//倒计时未开启，初始化默认变量
					this.state = false;
					this.recordingTime = 0;
					this.currentTime = this.totalTime;
				}
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
	.cu-form-group {
		position: relative;
		input {
			text-align: right;
			padding-right: 0;
		}
	}
	.cu-form-group.code {
		.text-btn {
			margin-left: 27.27rpx;	
		}
	}
</style>
