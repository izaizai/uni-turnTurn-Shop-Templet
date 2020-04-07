<template>
	<view class="cu-bar bg-white zaiui-welcome-tip" :class="Show?'show':''">
		<view class="text-center text-black text-lg">
			<text class="cuIcon-emoji"></text>
			<text class="margin-left-xs">{{Content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'welcome-tip',
		data() {
			return {
				Content: "", Show: false, C_s: 5000,
			};
		},
		props: {
			content: {
				type: String,
				default: ""
			},
			show: {
				type: Boolean,
				default: false
			},
			c_s: {
				type: Number,
				default: 5000
			}
		},
		created() {
			this.Content = this.content;
			this.Show = this.show;
			this.C_s = this.c_s;
			this.iniTime();
		},
		watch: {
			content() {
				this.Content = this.content;
				if(!this.content) {
					this.Show = false;
				}
				this.iniTime();
			},
			show() {
				this.Show = this.show;
				this.iniTime();
			},
			c_s() {
				this.C_s = this.c_s;
				this.iniTime();
			}
		},
		methods: {
			iniTime() {
				if(this.Show && this.C_s > 0) {
					setTimeout(() => {
						this.Show = false;
						this.CloseEvent();
					}, this.C_s);
				}
			},
			CloseEvent() {
				this.$emit('closeFinish', this.Show);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-welcome-tip {
		position: relative;
		width: 100%;
		z-index: 9;
		padding-top: var(--status-bar-height);
		top: calc((var(--status-bar-height) + 101rpx) - (var(--status-bar-height) + 101rpx) - (var(--status-bar-height) + 101rpx));
		min-height: calc(var(--status-bar-height) + 101rpx);
		transition: top .25s;
		.text-center {
			position: relative;
			width: 100%;
		}
	}
	.zaiui-welcome-tip.show {
		top: 0;
		min-height: calc(var(--status-bar-height) + 101rpx);
		transition: top .25s;
	}
</style>
