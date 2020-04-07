let _sort_grid = {
	sortGridData() {
		return [{
			title: '手机保卖',
			img: '/static/images/home/goods/1.png'
		},{
			title: '数码保卖',
			img: '/static/images/home/goods/2.png'
		},{
			title: '欢乐送',
			img: '/static/images/home/goods/3.png'
		},{
			title: '美妆鉴别',
			img: '/static/images/home/goods/4.png'
		},{
			title: '采货节',
			img: '/static/images/home/goods/5.png'
		},{
			title: '测试的',
			img: '/static/images/home/goods/6.png'
		},{
			title: '测试的1',
			img: '/static/images/home/goods/7.png'
		},{
			title: '测试的2',
			img: '/static/images/home/goods/8.png'
		}];
	},
	navListData() {
		return ['全部','待付款','待发货','待收货','待评价','退款','售后'];
	},
	orderListData() {
		return [{
			img: '/static/images/avatar/1.jpg',
			name: '仔仔的店铺',
			status: '交易成功',
			price: "2238.00",
			num: 12,
			type: 1,
			goods_list: [{
				img: '/static/images/home/goods/1.png',
				name: '百度网盘云盘租号在线极速发货 测试个测试的',
				introduce: '测试副标题的内容',
				tag: ['支持验机','专业质检'],
				price: "1.00",
			},{
				img: '/static/images/home/goods/2.png',
				name: '苹果x iPhoneX256G无锁99新有 测试个测试的',
				introduce: '',
				tag: [],
				price: "2237.00",
			}]
		},{
			img: '/static/images/avatar/2.jpg',
			name: '仔仔科技运营部',
			status: '交易关闭',
			price: "2199.00",
			num: 1,
			type: 0,
			goods_list: [{
				img: '/static/images/home/goods/3.png',
				name: '商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题',
				introduce: '',
				tag: ['支持验机','专业质检'],
				price: "2199.00",
			}]
		}];
	},
};

export default _sort_grid;
