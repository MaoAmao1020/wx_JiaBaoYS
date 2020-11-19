import App from './App';
export default {
	config: {
		home_url: (false? 'https://xxx.com/api/' : 'https://xxxw.com/api/'), //全局
		img_url: 'https://mhyt.egenew.com', //全局
	},
	Api: {
		login: 'user/login', //账号密码登录
	},
	token: '',
	post: function(islogin, type, url, data, success, error, complete, isloading) {
		let that = this;
		url = that.config.home_url + url;
		console.log(islogin, typeof islogin);
		console.log(data);
		if (islogin) {
			if (uni.getStorageSync("userinfo").admin_info) {
				data.token = uni.getStorageSync("userinfo").admin_info.token;
			} else {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
			if (!isloading) {
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
			}
			uni.request({
				url: url,
				data: data,
				method: type,
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					// 'Cache-Control': 'max-age=60',
				},
				success: function(res) {
					uni.hideLoading()
					if (res.data.code == 401) {
						uni.reLaunch({
							url: '/pages/login/login'
						})
					} else {
						typeof success == "function" && success(res.data);
					}
				},
				fail: function(res) {
					typeof error == "function" && error(res.data);
				},
				complete: function(res) {
					typeof complete == "function" && complete(res.data);
				}
			})

		} else {
			uni.showLoading({
				title: '加载中...',
				mask: true
			})
			uni.request({
				url: url,
				data: data,
				method: type,
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: function(res) {
					uni.hideLoading()
					typeof success == "function" && success(res.data);
				},
				fail: function(res) {
					typeof error == "function" && error(res.data);
				},
				complete: function(res) {
					typeof complete == "function" && complete(res.data);
				}
			})
		}
	},
	toHHmmss: date => {
		var s;
		var hours = parseInt((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = parseInt((date % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = parseInt((date % (1000 * 60)) / 1000);
		s = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ?
			('0' + seconds) : seconds);
		return s;
	},
	formatTime: date => {
		const year = date.getFullYear()
		const month = date.getMonth() + 1
		const day = date.getDate()
		const hour = date.getHours()
		const minute = date.getMinutes()
		const second = date.getSeconds()

		return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
	},
	formatDuring: mss => {
		var day = parseInt(mss / 1000 / 60 / 60 / 24);
		var hour = parseInt(mss / 1000 / 60 / 60) - day * 24;
		var minute = parseInt(mss / 1000 / 60) - parseInt(mss / 1000 / 60 / 60) * 60;
		var second = parseInt(mss / 1000) - parseInt(mss / 1000 / 60) * 60;
		return [day, hour, minute, second];
	},
	formatNumber: n => {
		n = n.toString()
		return n[1] ? n : '0' + n
	},
	js_date_time: function(unixtime) {
		var dateTime = new Date(parseInt(unixtime) * 1000)
		var year = dateTime.getFullYear();
		var month = dateTime.getMonth() + 1;
		var day = dateTime.getDate();
		var hour = dateTime.getHours();
		var minute = dateTime.getMinutes();
		var second = dateTime.getSeconds();
		var now = new Date();
		var now_new = Date.parse(now.toDateString()); //typescript转换写法
		var milliseconds = now_new - dateTime;
		month = month < 10 ? '0' + month : month;
		day = day < 10 ? '0' + day : day;
		hour = hour < 10 ? '0' + hour : hour;
		minute = minute < 10 ? '0' + minute : minute;
		second = second < 10 ? '0' + second : second;
		var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
		return timeSpanStr;
	},
	showToast: function(txt) {
		uni.hideLoading();
		uni.showToast({
			title: txt,
			icon: 'none',
			mask: true,
			duration: 2000
		})
	},
}
