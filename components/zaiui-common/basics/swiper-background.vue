<template>
	<view class="zaiui-swiper-background-box" :class="[show?'show':'',welcome?'welcome':'']">
		<block v-for="(item,index) in list_data" :key="index">
			<view class="swiper-background" :style="[{backgroundImage:'url('+ item.background +')'}]"
			:class="index == indexs?'show':''"></view>
		</block>
	</view>
</template>

<script>
	import _tool from '@/static/zaiui/util/tools.js';
	export default {
		name: 'swiper-background',
		props: {
			list_data: {
				type: Array,
				default: () => {
					return []
				}
			},
			indexs: {
				type: Number,
				default: 0
			},
			show: {
				type: Boolean,
				default: false
			},
			welcome: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-swiper-background-box {
		position: absolute;
		height: 348rpx;
		width: 100%;
		top: 0;
		display: none;
		transition: 0s;
		.swiper-background {
			position: absolute;
			height: 100%;
			width: 100%;
			opacity: 0;
			top: 0;
			background-size: cover;
			transition: opacity .25s;
		}
		.swiper-background.show {
			opacity: 1;
			transition: opacity .25s;
		}
	}
	.zaiui-swiper-background-box.show {
		display: block;
		transition: 0s;
	}
	.zaiui-swiper-background-box.welcome {
		top: calc(var(--status-bar-height) + 101rpx);
		transition: top .25s;
	}
</style>
