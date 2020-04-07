<template>
	<view class="cu-bar tabbar bg-white zaiui-footer-fixed">
		<view class="cu-bar tabbar bg-white zaiui-footer-fixed">
			<view class="action" :class="TabID == 0?'text-red':'text-black'" @tap="tabTap(0)">
				<view :class="TabID == 0?'cuIcon-homefill':'cuIcon-home'"></view>
				<text>首页</text>
			</view>
			<view class="action" :class="TabID == 1?'text-red':'text-black'" @tap="tabTap(1)">
				<view :class="TabID == 1?'cuIcon-discoverfill':'cuIcon-discover'"></view>
				<text>发现</text>
			</view>
			<view class="action add-action" @tap="tabTap(2)">
				<button class="cu-btn cuIcon-add bg-red shadow"></button>
				<text>卖二手</text>
			</view>
			<view class="action" :class="TabID == 3?'text-red':'text-black'" @tap="tabTap(3)">
				<view :class="TabID == 3?'cuIcon-messagefill':'cuIcon-message'">
					<view class="cu-tag badge" v-if="MsgDot"></view>
				</view>
				<text>消息</text>
			</view>
			<view class="action" :class="TabID == 4?'text-red':'text-black'" @tap="tabTap(4)">
				<view :class="TabID == 4?'cuIcon-peoplefill':'cuIcon-people'"></view>
				<text>我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'footer-tabbar',
		data() {
			return {
				TabID: 0, MsgDot: false,
			};
		},
		props: {
			tabID: {
				type: [String,Number],
				default: 0
			},
			msgDot: {
				type: Boolean,
				default: false
			},
		},
		created() {
			this.TabID = this.tabID;
			this.MsgDot = this.msgDot;
		},
		watch: {
			tabID() {
				if(this.tabID != 2) {
					this.TabID = this.tabID;
				}
			},
			msgDot() {
				this.MsgDot = this.msgDot;
			}
		},
		methods: {
			tabTap(index) {
				if(index != this.TabID) {
					this.$emit('tabTap', index);
				}
			}
		}
	}
</script>

<style>
	
</style>
