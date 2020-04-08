//工具函数库，仔仔编写。

let _tool = {
	//获取字符串的真实长度（字节长度）
	strLeng(str) {
		if(str) {
			let len = str.length, truelen = 0;
			for(let x = 0; x < len; x++) {
				if(str.charCodeAt(x) > 128){
					truelen += 2;
				}else{
					truelen += 1;
				}
			}
			return truelen;
		} else {
			return 0;
		}
	},
	//计算页数
	getPageNum(total,row) {
		let num = Number(total) / Number(row);
		//是否为整数
		if(num%1 !== 0) {
			let b = num.toString();	//转字符串
			let a = parseInt(b.substring(0,b.indexOf('.')));	//取小数点前
			let s = b.replace(/\d+\.(\d*)/, '$1');	//取小数点后
			if(s > 0) {
				num = a + 1;
			}
		}
		return num;
	},
	//设置手机通知栏字体颜色
	setBarColor(black = false) {
		if(black) {
			uni.setNavigationBarColor({
			    frontColor: '#000000',
			    backgroundColor: '#FAFAFA'
			});
		} else {
			uni.setNavigationBarColor({
			    frontColor: '#ffffff',
			    backgroundColor: '#FAFAFA'
			});
		}
	},
	zaiui_log(v) {
		console.error("仅供学习交流，如作它用所承受的法律责任一概与作者无关!");
		console.warn("如果您运行的时候，出现了报错，请自行解决,我使用的HBX版本号：" + v);
		console.info("QQ交流群：707134214");
	}
};

export default _tool;