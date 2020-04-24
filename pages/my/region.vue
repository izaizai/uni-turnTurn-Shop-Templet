<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">地区</block>
		</bar-title>
		
		<view class="padding">当前位置</view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-location text-red"/>
					<text class="text-black">重庆</text>
				</view>
			</view>
		</view>
		
		<!--列表-->
		<scroll-view scroll-y class="indexes" :scroll-into-view="'indexes-'+ listCurID" :style="[{height:'calc(100vh - '+ CustomBar + 'px - 50px)'}]"
		 :scroll-with-animation="true" :enable-back-to-top="true">
			<block v-for="(item,index) in list" :key="index">
				<view :class="'indexItem-' + item.name" :id="'indexes-' + item.name" :data-index="item.name">
					<view class="padding">{{item.name}}</view>
					
					<!--列表内容-->
					<view class="cu-list menu">
						<view class="cu-item" v-for="(items,sub) in 2" :key="sub">
							<view class="content">
								<text class="text-black">{{item.name}} {{list[sub].name}}</text>
							</view>
						</view>
					</view>
					
				</view>
			</block>
		</scroll-view>
		
		<!--快捷字母-->
		<view class="indexBar" :style="[{height:'calc(100vh - ' + CustomBar + 'px - 50px)'}]">
			<view class="indexBar-box" @touchstart="tStart" @touchend="tEnd" @touchmove.stop="tMove">
				<view class="indexBar-item" v-for="(item,index) in list" :key="index" :id="index" @touchstart="getCur" @touchend="setCur"> {{item.name}}</view>
			</view>
		</view>
		
		<!--选择显示-->
		<view v-show="!hidden" class="indexToast">
			{{listCur}}
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
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				hidden: true,
				listCurID: '',
				list: [],
				listCur: '',
			}
		},
		onLoad() {
			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
			}
			this.list = list;
			this.listCur = list[0];
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
			uni.createSelectorQuery().select('.indexBar-box').boundingClientRect(res => {
				this.boxTop = res.top
			}).exec();
			uni.createSelectorQuery().select('.indexes').boundingClientRect(res => {
				this.barTop = res.top
			}).exec()
		},
		methods: {
			//获取文字信息
			getCur(e) {
				this.hidden = false;
				this.listCur = this.list[e.target.id].name;
			},
			setCur(e) {
				this.hidden = true;
				this.listCur = this.listCur
			},
			//滑动选择Item
			tMove(e) {
				let y = e.touches[0].clientY,
					offsettop = this.boxTop,
					that = this;
				//判断选择区域,只有在选择区才会生效
				if (y > offsettop) {
					let num = parseInt((y - offsettop) / 20);
					this.listCur = that.list[num].name
				};
			},
			
			//触发全部开始选择
			tStart() {
				this.hidden = false
			},
			
			//触发结束选择
			tEnd() {
				this.hidden = true;
				this.listCurID = this.listCur
			},
			indexSelect(e) {
				let barHeight = this.barHeight;
				let list = this.list;
				let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
				for (let i = 0; i < list.length; i++) {
					if (scrollY < i + 1) {
						this.listCur = list[i].name;
						this.movableY = i * 20
						return false
					}
				}
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
	.indexes {
		position: relative;
	}
	.indexBar {
		position: fixed;
		right: 0px;
		bottom: 16%;
		padding: 20upx 20upx 20upx 60upx;
		display: flex;
		align-items: center;
	}
	
	.indexBar .indexBar-box {
		width: 40upx;
		height: auto;
		background: #fff;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);
		border-radius: 10upx;
	}
	
	.indexBar-item {
		flex: 1;
		width: 40upx;
		height: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24upx;
		color: #888;
	}
	
	movable-view.indexBar-item {
		width: 40upx;
		height: 40upx;
		z-index: 9;
		position: relative;
	}
	
	movable-view.indexBar-item::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 10upx;
		height: 20upx;
		width: 4upx;
		background-color: #f37b1d;
	}
	
	.indexToast {
		position: fixed;
		top: 0;
		right: 80upx;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		width: 100upx;
		height: 100upx;
		border-radius: 10upx;
		margin: auto;
		color: #fff;
		line-height: 100upx;
		text-align: center;
		font-size: 48upx;
	}
</style>
