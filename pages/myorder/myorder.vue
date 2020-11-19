<template>
	<view>
		<view class="flex flex-space flex-centers">
			<view class="flex flex-column flex-center ptb20 flex-box" @click="tabclick(0)">
				<view :class="['f26',tabindex==0?'c007AC0':'c333']">待付款</view>
				<view :class="['w40 h2 mt10',tabindex==0?'bg007AC0':'bgt']"></view>
			</view>
			<view class="flex flex-column flex-center ptb20 flex-box" @click="tabclick(1)">
				<view :class="['f26',tabindex==1?'c007AC0':'c333']">已付款</view>
				<view :class="['w40 h2 mt10',tabindex==1?'bg007AC0':'bgt']"></view>
			</view>
		</view>
		<view class="flex flex-column plr30" v-if='tabindex==1'>
			<view class="flex flex-space flex-start mb20 boxshow bgf b-r5 plr15 ptb10" v-for="(item,i) in orderdatas2">
				<view class="flex flex-row h107 flex-box">
					<image :src=item.OrderImg class="w107 h107 b-r5 mr15"></image>
					<view class="flex flex-box flex-column flex-space">
						<view class="f24 c333">{{item.OrderName}}</view>
						<view class="flex flex-column">
							<view class="f18 c9">订单时间：{{happenTimeFun(item.OrderTime)}}</view>
							<view class="f18 c9 mt10">订单号：{{item.OrderNo}}</view>
						</view>
					</view>
				</view>
				<view class="f18 cFF4800">￥{{item.OrderPrice}}</view>
			</view>
			<!-- <view class="flex flex-space flex-start mb20 boxshow bgf b-r5 plr15 ptb10" @click="gogogo">
				<view class="flex flex-row h107 flex-box">
					<image src="../../static/image/detail1.png" class="w107 h107 b-r5 mr15"></image>
					<view class="flex flex-box flex-column flex-space">
						<view class="f24 c333">口才</view>
						<view class="flex flex-column">
							<view class="f18 c9">时间：{{happenTimeFun(item.OrderTime)}}</view>
							<view class="f18 c9 mt10">订单号：99999</view>
						</view>
					</view>
				</view>
				<view class="f18 cFF4800">￥1288.88</view>
			</view> -->
		</view>
		<view class="flex flex-column plr30" v-if='tabindex==0'>
			<view class="flex flex-space flex-start mb20 boxshow bgf b-r5 plr15 ptb10" v-for="(item,i) in orderdatas1">
				<view class="flex flex-row h107 flex-box">
					<image :src=item.OrderImg class="w107 h107 b-r5 mr15" @click="ceshi1(item)"></image>
					<view class="flex flex-box flex-column flex-space">
						<view class="flex flex-space flex-centers">
							<view class="f24 c333">{{item.OrderName}}</view>
							<view class="f18 cFF4800">￥{{item.OrderPrice}}</view>
						</view>
						<view class="flex flex-space flex-centers">
							<view class="f18 c9">订单时间：{{happenTimeFun(item.OrderTime)}}</view>
							<view class="f24 c333 plr20 ptb5 bd1 bdc-b4b2b2 b-r50" @click="payOrder(item.OrderId)">付款</view>
							<view class="f24 c333 plr20 ptb5 bd1 bdc-b4b2b2 b-r50" @click="nopay(item.OrderId)">取消</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	let app = getApp()
	export default {
		data() {
			return {
				tabindex:0,
				orderdatas1:'',
				orderdatas2:'',
				myorder_options:'',
			}
		},
		onLoad(options) {
			this.myorder_options = options
		},
		onShow() {
			console.log(this.myorder_options)
			uni.request({
			    url: 'https://jy.cy1999.cn/index/Orders/myorder',//仅为示例，并非真实接口地址。
			    data: {
					stu_id:this.myorder_options.stu_id,
					status:1,
			        text: 'uni.request'
			    },
			    header: {
			        'custom-header': '' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			        // this.text = 'request success';
					this.orderdatas1 = res.data
					// for (var i=0; i <this.orderdatas.){
						
					// }
			    }
			});
			uni.request({
			    url: 'https://jy.cy1999.cn/index/Orders/myorder',//仅为示例，并非真实接口地址。
			    data: {
					stu_id:this.myorder_options.stu_id,
					status:2,
			        text: 'uni.request'
			    },
			    header: {
			        'custom-header': '' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			        // this.text = 'request success';
					this.orderdatas2 = res.data
					// for (var i=0; i <this.orderdatas.){
						
					// }
			    }
			});
		},
		methods: {
			tabclick(i){
				this.tabindex=i
				// console.log(app.globalData)
			},
			gogogo(){
				console.log(this.happenTimeFun(1602465575))
			},
			nopay(id){
				var that = this
				console.log(id)
				uni.request({
					url:'https://jy.cy1999.cn/index/Orders/cancel?order_id='+String(id),
					data: {
					    text: 'uni.request'
					},
					header: {
					    'custom-header': '' //自定义请求头信息
					},
					success: (res) => {
					    console.log(res.data);
						uni.redirectTo({
							url: '../myorder/myorder?stu_id='+String(app.globalData.stu_id)
						});
					}
				})
				
				
			},
			payOrder(id){
				var that = this
				uni.request({
					url:'https://jy.cy1999.cn/index/pay/payfee',
					data:{
						openid:app.globalData.openid,
						order_id:id,
					},
					success: (res) => {
						console.log(res)
						wx.requestPayment({
							appId:res.data.data.appId,
							timeStamp:res.data.data.timeStamp,
							nonceStr:res.data.data.nonceStr,
							package:res.data.data.package,
							paySign:res.data.data.paySign,
							signType: res.data.data.signType,
							success() {
								wx.showToast({
								  title: '付款成功！',
								  icon: 'none',
								  duration: 1500
								})
								
								uni.redirectTo({
									url: '../myorder/myorder?stu_id='+String(app.globalData.openid)
								});
							}
						})
					},
					fail(res) {
						console.log('报错了',res)
					}
				})
				
			},
			
			happenTimeFun(num){//时间戳数据处理
			
			let date = new Date(num*1000);
			//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			        let y = date.getFullYear();
			        let MM = date.getMonth() + 1;
			        MM = MM < 10 ? ('0' + MM) : MM;//月补0
			        let d = date.getDate();
			        d = d < 10 ? ('0' + d) : d;//天补0
			        let h = date.getHours();
			        h = h < 10 ? ('0' + h) : h;//小时补0
			        let m = date.getMinutes();
			        m = m < 10 ? ('0' + m) : m;//分钟补0
			        let s = date.getSeconds();
			        s = s < 10 ? ('0' + s) : s;//秒补0
			        return (y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s);
			},
			
			
		}
	}
</script>

<style>
	page {
		background: #F8F8F8;
	}

	.boxshow {
		box-shadow: 0px 1px 4px 0px #B5B5B5;
	}
</style>
