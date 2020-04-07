<template>
	<view class="zaiui-video-h5-view-box">
		<!--封面-->
		<view class="video-cover-view" v-show="coverShow?true:false">
			<view class="bg-img bg-mask flex align-center text-center video-cover" :style="[{backgroundImage:'url('+ isCover +')'}]">
				<view class="text-white video-play-view">
					<text class="cuIcon-playfill play"></text>
				</view>
			</view>
			<!--点击事件,此view里不能放任何组件，只能放文字，否则会报错，原因未知。-->
			<view class="video-click" @click="video_view.onClick" :data-index='isNum' :data-src='isSrc'></view>
		</view>
		
		<!--视频组件框-->
		<view class="zaiui-video-h5-box" :id="['video_h5_' + isNum]"></view>
	</view>
</template>

<script>
	//在APP端创建H5的视频播放器组件，用此方案，可调整视频组件的层级问题。
	//如需扩展其它类型的组件，可按照此方案，自行扩展。
	export default {
		name: 'video-render',
		data() {
			return {
				coverShow: true,
			}
		},
		props: {
			isSrc: {
				type: String,
				default: ''
			},
			isNum: {
				type: Number,
				default: 1
			},
			isCover: {
				type: String,
				default: ''
			}
		},
		methods: {
			closeCoverClick() {
				//关闭封面
				this.coverShow = false;
			}
		}
	}
</script>

<script module="video_view" lang="renderjs">
	export default {
		methods: {
			onClick(event,ownerInstance) {
				let data = event.target.dataset;
				// 调用 service 层的方法
				ownerInstance.callMethod('closeCoverClick');
				this.initVideo(data.src,data.index);
			},
			initVideo(isSrc,isNum) {
				//更多video属性：https://www.w3school.com.cn/jsref/dom_obj_video.asp
				let src = isSrc.replace(/\"/g, "");
				const VIDEO = document.createElement("video");
				VIDEO.setAttribute("width", "100%");
				VIDEO.setAttribute("height", "200");
				VIDEO.setAttribute("autoplay", "autoplay");	//自动播放
				VIDEO.setAttribute("controls", "controls");	//控制条
				VIDEO.setAttribute("src", src);
				const view = document.getElementById("video_h5_" + isNum);
				view.appendChild(VIDEO);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-video-h5-view-box {
		position: relative;
		width: 100%;
		.video-cover-view {
			position: relative;
			width: 100%;
			height: 195px;
			.video-cover {
				height: 195px;
				text-align: center;
			}
			.bg-mask {
			    background-color: #ffffff;
			}
			.video-play-view {
				width: 100%;
				.play {
					font-size: 63.63rpx;
				}
			}
			.video-click {
			    position: absolute;
			    left: 0;
			    bottom: 0;
			    top: 0;
			    right: 0;
				pointer-events: all;
				z-index: 2;
			}
		}
		.zaiui-video-h5-box {
			position: relative;
			width: 100%;
			height: 100%;
		}
	}
</style>
