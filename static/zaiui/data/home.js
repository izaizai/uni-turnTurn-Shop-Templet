//首页虚拟数据库，仔仔编写。

let _home_data = {
	tab() {
		return ['首页','服装鞋帽','交通工具','家电','家居家具','珠宝配饰','美妆个护','运动户外','母婴用品','玩具乐器','手机','数码','电脑办公'];
	},
	swiper() {
		return [
			{
				swiper: '/static/images/home/swiper/swiper-1.png',
				background: '/static/images/home/swiper/swiper-background-1.png',
			},
			{
				swiper: '/static/images/home/swiper/swiper-2.png',
				background: '/static/images/home/swiper/swiper-background-2.png',
			},
			{
				swiper: '/static/images/home/swiper/swiper-3.png',
				background: '/static/images/home/swiper/swiper-background-3.png',
			}
		];
	},
	nav() {
		return [{
			id: 1,
			name: '手机',
			color: 'orange',
			badge: '必看',
			img: '/static/images/home/grid-icon/1.png',
		},{
			id: 2,
			name: '平板',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/2.png',
		},{
			id: 3,
			name: '电脑',
			color: 'orange',
			badge: '热卖',
			img: '/static/images/home/grid-icon/3.png',
		},{
			id: 4,
			name: '数码',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/4.png',
		},{
			id: 5,
			name: '家电',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/5.png',
		},{
			id: 6,
			name: '新人红包',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/6.png',
		},{
			id: 7,
			name: '手机直播',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/7.png',
		},{
			id: 8,
			name: '自营图书',
			color: 'red',
			badge: '必看',
			img: '/static/images/home/grid-icon/8.png',
		},{
			id: 9,
			name: '游戏',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/9.png',
		},{
			id: 10,
			name: '二手车',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/10.png',
		},{
			id: 11,
			name: '文玩玉翠',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/11.png',
		},{
			id: 12,
			name: '免费领',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/12.png',
		},{
			id: 13,
			name: '借钱',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/13.png',
		},{
			id: 14,
			name: '拍卖',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/14.png',
		},{
			id: 15,
			name: '分期商城',
			color: '',
			badge: '',
			img: '/static/images/home/grid-icon/15.png',
		}];
	},
	live() {
		return [
			{
				id: 1,
				name: '图文鉴别',
				text: '验过的更放心',
				img: '/static/images/home/sundry/3.png',
			},
			{
				id: 2,
				name: '免费鉴别',
				text: '专家24h在线',
				img: '/static/images/home/sundry/4.png',
			},
			{
				id: 3,
				name: '连麦鉴别',
				text: '2114人正在看',
				img: '/static/images/home/sundry/5.png',
			}
		];
	},
	earn() {
		return [
			{
				text: 'xxx赚了560元',
				img: '/static/images/avatar/1.jpg',
			},
			{
				text: 'xxx赚了3元',
				img: '/static/images/avatar/2.jpg',
			},
			{
				text: 'xx赚了20元',
				img: '/static/images/avatar/3.jpg',
			},
			{
				text: 'xxx赚了98元',
				img: '/static/images/avatar/4.jpg',
			},
			{
				text: 'xx赚了0.1元',
				img: '/static/images/avatar/5.jpg',
			}
		];
	},
	sellQuickly() {
		return [
			{
				id: 1,
				title: '手机保卖',
				text: '99%卖出',
				img: '/static/images/home/sundry/6.png',
			},
			{
				id: 2,
				title: '拍卖报名',
				text: '24小时高价卖',
				img: '/static/images/home/sundry/7.png',
			},
			{
				id: 3,
				title: '扫码读书',
				text: '好书高价卖',
				img: '/static/images/home/sundry/8.png',
			}
		];
	},
	activity() {
		return [
			{
				id: 1,
				title: '转转社区',
				text: '发现有趣',
				img: '/static/images/home/sundry/11.png',
			},
			{
				id: 2,
				title: '手机直播',
				text: '直降400元',
				img: '/static/images/home/sundry/10.png',
			},
			{
				id: 3,
				title: '新人专享',
				text: '',
				img: '/static/images/home/sundry/12.png',
			},
			{
				id: 4,
				title: '爆款大促',
				text: '',
				img: '/static/images/home/sundry/13.png',
			},
			{
				id: 5,
				title: '5元3本',
				text: '',
				img: '/static/images/home/sundry/14.png',
			},
			{
				id: 6,
				title: '全新拍卖',
				text: '',
				img: '/static/images/home/sundry/15.png',
			}
		];
	},
	goodsTab() {
		return [
			{
				title: '看推荐',
				tag: '',
			},
			{
				title: '逛附近',
				tag: '',
			},
			{
				title: '直播',
				tag: '秒杀中',
			},{
				title: '实惠好货',
				tag: '',
			},{
				title: '短视频',
				tag: '',
			}
		];
	},
	goodsList() {
		return [
			{
				v: false,
				pay: true,
				type: '',	//空为正常数据，recommend 为推荐感兴趣的，可以此扩展。
				mold: [],
				service: ['支持验机','专业质检'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '1个小时前来过',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/1.png',
				avatar: '/static/images/avatar/1.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{bg:'red',title: '自营'}],
				service: [],
				price: '5049',
				servicePlus: '支持验机',
				username: '正品保障',
				time: '7天无理由',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/2.png',
				avatar: '/static/images/avatar/2.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [{bg:'blue',title: '寄卖'}],
				service: [],
				price: '2980',
				servicePlus: '已验机',
				username: '仔仔',
				time: '当前在线',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/3.png',
				avatar: '/static/images/avatar/3.jpg'
			},
			{
				v: false,
				pay: true,
				type: '',
				mold: [],
				service: ['支持验机','专业质检'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '1个小时前来过',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/4.png',
				avatar: '/static/images/avatar/4.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{bg:'red',title: '自营'}],
				service: [],
				price: '5049',
				servicePlus: '支持验机',
				username: '正品保障',
				time: '7天无理由',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/5.png',
				avatar: '/static/images/avatar/5.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [],
				service: [],
				price: '2980',
				servicePlus: '已验机',
				username: '仔仔',
				time: '当前在线',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/6.png',
				avatar: '/static/images/avatar/6.jpg'
			},
			{
				v: false,
				pay: true,
				type: '',
				mold: [],
				service: ['支持验机','专业质检'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '1个小时前来过',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/7.png',
				avatar: '/static/images/avatar/7.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{bg:'red',title: '自营'}],
				service: [],
				price: '5049',
				servicePlus: '支持验机',
				username: '正品保障',
				time: '7天无理由',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/8.png',
				avatar: '/static/images/avatar/8.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [],
				service: [],
				price: '2980',
				servicePlus: '已验机',
				username: '仔仔',
				time: '当前在线',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/9.png',
				avatar: '/static/images/avatar/1.jpg'
			},
			{
				v: false,
				pay: true,
				type: '',
				mold: [],
				service: ['支持验机','专业质检'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '1个小时前来过',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/10.png',
				avatar: '/static/images/avatar/2.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{bg:'red',title: '自营'}],
				service: [],
				price: '5049',
				servicePlus: '支持验机',
				username: '正品保障',
				time: '7天无理由',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/11.png',
				avatar: '/static/images/avatar/3.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [],
				service: [],
				price: '2980',
				servicePlus: '已验机',
				username: '仔仔',
				time: '当前在线',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/12.png',
				avatar: '/static/images/avatar/4.jpg'
			},
			{
				v: false,
				pay: true,
				type: '',
				mold: [],
				service: ['支持验机','专业质检'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '1个小时前来过',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/13.png',
				avatar: '/static/images/avatar/5.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{bg:'red',title: '自营'}],
				service: [],
				price: '5049',
				servicePlus: '支持验机',
				username: '正品保障',
				time: '7天无理由',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/14.png',
				avatar: '/static/images/avatar/6.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [],
				service: [],
				price: '2980',
				servicePlus: '已验机',
				username: '仔仔',
				time: '当前在线',
				title: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				img: '/static/images/home/goods/15.png',
				avatar: '/static/images/avatar/7.jpg'
			}
		];
	},
	recommend() {
		return {
			type: 'recommend',
			list: [
				{
					title: '商品标题',
					img: '/static/images/home/goods/16.png',
				},
				{
					title: '商品标题',
					img: '/static/images/home/goods/15.png',
				},
				{
					title: '商品标题',
					img: '/static/images/home/goods/14.png',
				},{
					title: '商品标题',
					img: '/static/images/home/goods/13.png',
				}
			]
		};
	},
	liveData() {
		//	tag、tag_title、tag_time 三个参数中，选一个即可。
		//	tag_red、tag_red_bg 两个参数中，选一个即可。
		//	多个填写的话，会显示错位，如有需要，可自行修改。
		return [
			{
				tag: '630万人',
				tag_title: [],
				tag_time: '',
				tag_red: '抢100元红包',
				tag_red_bg: '',
				title: '莫山山的直播',
				name: '大河国莫山山',
				appreciate: '7.5万',
				avatar: '/static/images/avatar/1.jpg',
				cover_img: '/static/images/home/live/1.jpg',
			},
			{
				tag: '',
				tag_title: [],
				tag_time: '',
				tag_red: '',
				tag_red_bg: '',
				title: '',
				name: '',
				appreciate: '',
				avatar: '',
				cover_img: '/static/images/home/live/2.jpg',
			},
			{
				tag: '630万人',
				tag_title: [],
				tag_time: '',
				tag_red: '',
				tag_red_bg: '特惠秒杀 00:07:05',
				title: 'XXXX的直播',
				name: 'XXXX',
				appreciate: '100万+',
				avatar: '/static/images/avatar/2.jpg',
				cover_img: '/static/images/home/live/3.jpg',
			},
			{
				tag: '',
				tag_title: ['鉴别中','演戏'],
				tag_time: '',
				tag_red: '',
				tag_red_bg: '',
				title: '刘诗诗的直播',
				name: '刘诗诗',
				appreciate: '98.8万',
				avatar: '/static/images/avatar/3.jpg',
				cover_img: '/static/images/home/live/4.jpg',
			},
			{
				tag: '',
				tag_title: [],
				tag_time: '预约中 - 02/28 22:00',
				tag_red: '',
				tag_red_bg: '',
				title: '某某某的直播',
				name: '某某某',
				appreciate: '2345',
				avatar: '/static/images/avatar/4.jpg',
				cover_img: '/static/images/home/live/5.jpg',
			},
			{
				tag: '',
				tag_title: [],
				tag_time: '鉴别预约中 - 唱歌',
				tag_red: '',
				tag_red_bg: '',
				title: '某某的直播',
				name: '某某-某某',
				appreciate: '9812',
				avatar: '/static/images/avatar/5.jpg',
				cover_img: '/static/images/home/live/6.jpg',
			},
			{
				tag: '630万人',
				tag_title: [],
				tag_time: '',
				tag_red: '抢100元红包',
				tag_red_bg: '',
				title: '莫山山的直播',
				name: '大河国莫山山',
				appreciate: '7.5万',
				avatar: '/static/images/avatar/6.jpg',
				cover_img: '/static/images/home/live/7.jpg',
			},
			{
				tag: '630万人',
				tag_title: [],
				tag_time: '',
				tag_red: '',
				tag_red_bg: '特惠秒杀 00:07:05',
				title: 'XXXX的直播',
				name: 'XXXX',
				appreciate: '100万+',
				avatar: '/static/images/avatar/7.jpg',
				cover_img: '/static/images/home/live/8.jpg',
			},
			{
				tag: '',
				tag_title: ['鉴别中','演戏'],
				tag_time: '',
				tag_red: '',
				tag_red_bg: '',
				title: '刘诗诗的直播',
				name: '刘诗诗',
				appreciate: '98.8万',
				avatar: '/static/images/avatar/8.jpg',
				cover_img: '/static/images/home/live/9.jpg',
			},
			{
				tag: '',
				tag_title: [],
				tag_time: '预约中 - 02/28 22:00',
				tag_red: '',
				tag_red_bg: '',
				title: '某某某的直播',
				name: '某某某',
				appreciate: '2345',
				avatar: '/static/images/avatar/1.jpg',
				cover_img: '/static/images/home/live/10.jpg',
			}
		];
	},
	videoData() {
		return [
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/1.jpg',
				cover_img: '/static/images/home/video/1.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/2.jpg',
				cover_img: '/static/images/home/video/2.gif',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/3.jpg',
				cover_img: '/static/images/home/video/3.gif',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/4.jpg',
				cover_img: '/static/images/home/video/4.gif',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/5.jpg',
				cover_img: '/static/images/home/video/5.gif',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/6.jpg',
				cover_img: '/static/images/home/video/6.gif',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/7.jpg',
				cover_img: '/static/images/home/video/7.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/8.jpg',
				cover_img: '/static/images/home/video/8.gif',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/1.jpg',
				cover_img: '/static/images/home/video/9.gif',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: '/static/images/avatar/2.jpg',
				cover_img: '/static/images/home/video/10.gif',
			}
		];
	},
	gridSortData() {
		return [{
			id: 1,
			name: '手机',
			img: '/static/images/home/grid-icon/16.png',
		},{
			id: 2,
			name: '平板',
			img: '/static/images/home/grid-icon/17.png',
		},{
			id: 3,
			name: '电脑',
			img: '/static/images/home/grid-icon/18.png',
		},{
			id: 4,
			name: '数码',
			img: '/static/images/home/grid-icon/19.png',
		},{
			id: 5,
			name: '家电',
			img: '/static/images/home/grid-icon/20.png',
		},{
			id: 6,
			name: '新人红包',
			img: '/static/images/home/grid-icon/21.png',
		},{
			id: 7,
			name: '手机直播',
			img: '/static/images/home/grid-icon/22.png',
		},{
			id: 8,
			name: '自营图书',
			img: '/static/images/home/grid-icon/23.png',
		},{
			id: 9,
			name: '游戏',
			img: '/static/images/home/grid-icon/24.png',
		}];
	}
};

export default _home_data;