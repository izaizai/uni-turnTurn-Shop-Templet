<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">新增地址</block>
			<block slot="right">
				<text class="text-orange">保存</text>
			</block>
		</bar-title>
		
		<!--表单-->
		<view class="cu-form-group margin-top">
			<view class="title">收货人名</view>
			<input placeholder="您的姓名" @input="nameInput"/>
			<text class='cuIcon-roundclosefill text-grey' v-if="nameClose"/>
		</view>
		<view class="cu-form-group">
			<view class="title">手机号码</view>
			<input placeholder="卖家和快递员联系您的方式" @input="phoneInput"/>
			<text class='cuIcon-roundclosefill text-grey' v-if="phoneClose"/>
		</view>
		<view class="cu-form-group">
			<view class="title">所在地区</view>
			<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
				<view class="picker">
					{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">详细地址</view>
			<input placeholder="请输入详细的地址信息" @input="addressInput"/>
			<text class='cuIcon-roundclosefill text-grey' v-if="addressClose"/>
		</view>
		
		<!--小程序端显示-->
		<!-- #ifdef MP -->
		<view class="bg-white wecanui-footer-fixed foot-pb">
			<view class="flex flex-direction">
				<button class="cu-btn bg-red">提交保存</button>
			</view>
		</view>
		<!-- #endif -->
		
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
				multiIndex: [0, 0, 0], nameClose: false, phoneClose: false, addressClose: false,
				multiArray: [['重庆市', '四川省'],['渝中区', '渝北区', '江北区', '南岸区'],['周边', '周边地区']],
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
			nameInput(event) {
				let value = event.detail.value;
				if(value != "") {
					this.nameClose = true;
				} else {
					this.nameClose = false;
				}
			},
			phoneInput(event) {
				let value = event.detail.value;
				if(value != "") {
					this.phoneClose = true;
				} else {
					this.phoneClose = false;
				}
			},
			addressInput(event) {
				let value = event.detail.value;
				if(value != "") {
					this.addressClose = true;
				} else {
					this.addressClose = false;
				}
			},
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			//联动地址，请自行开发，或在插件市场寻找插件替代，此处不做具体功能开发。
			MultiColumnChange(e) {
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0:
						switch (data.multiIndex[0]) {
							case 0:
								data.multiArray[1] = ['渝中区', '渝北区', '江北区', '南岸区'];
								data.multiArray[2] = ['周边', '周边地区'];
								break;
							case 1:
								data.multiArray[1] = ['渝中区', '渝北区', '江北区', '南岸区'];
								data.multiArray[2] = ['周边', '周边地区'];
								break;
						}
						data.multiIndex[1] = 0;
						data.multiIndex[2] = 0;
						break;
					case 1:
						switch (data.multiIndex[0]) {
							case 0:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['周边', '周边地区'];
										break;
									case 1:
										data.multiArray[2] = ['周边', '周边地区'];
										break;
									case 2:
										data.multiArray[2] = ['周边', '周边地区'];
										break;
									case 3:
										data.multiArray[2] = ['周边', '周边地区'];
										break;
									case 4:
										data.multiArray[2] = ['周边', '周边地区'];
										break;
								}
								break;
							case 1:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['周边', '周边地区'];
										break;
									case 1:
										data.multiArray[2] = ['周边', '周边地区'];
										break;
									case 2:
										data.multiArray[2] = ['周边', '周边地区'];
										break;
								}
								break;
						}
						data.multiIndex[2] = 0;
						break;
				}
				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
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
	.wecanui-footer-fixed .flex-direction {
		padding: 18.18rpx;
	}
</style>
