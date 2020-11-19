<template>
	<view class="plr40 ptb30">
		<view class="flex flex-row flex-centers">
			<open-data type="userAvatarUrl" class="w135 h135 b-r-50 mr35"></open-data>
			<!-- <image src="../../static/image/head.png" class="w135 h135 b-r50 mr35"></image> -->
			<view class="flex flex-column flex-box">
				<open-data type="userNickName" class="f42 c333"></open-data>
				<view v-if="datas.Mynumber">手机号：{{datas.Mynumber}}</view>
			</view>
		</view>
		<view class="flex flex-space flex-centers mt30 pore w-100 h74">
			<image src="../../static/image/myicon.png" class="w-100 h-100 poab t0 l0 z-1"></image>
			<view class="flex flex-centers flex-space flex-box pore z-2 plr60">
				<view class="f36 c652C00 fb">助学券</view>
				<view class="f24 c652C00 fb">当前助学券累计</view>
				<view class="flex flex-row flex-centers">
					<view class="f28 ce6d09f">{{myconpon_data}}</view>
					<image src="../../static/image/to.png" class="w10 h20 ml10"></image>
				</view>
			</view>
		</view>
		<view class="mt30 flex flex-space flex-centers" @click="myclass">
			<view class="flex flex-row flex-centers">
				<image src="../../static/image/time.png" class="w35 h35 mr15"></image>
				<view class="f30 c333">我的课程</view>
			</view>
			<image src="../../static/image/right.png" class="w16 h26"></image>
		</view>
		<view class="flex flex-row flex-centers mt20">
			<view class="flex flex-column w215 h150 pore mr15" v-for="(item,i) in datas.Myclass">
				<image src="../../static/image/class0.png" class="w-100 h-100 poab t0 l0 z-1"></image>
				<view class="pore z-20 flex flex-space flex-centers mt20 plr15">
					<view class="f22 cf">{{item.ClassName}}</view>
					<button open-type="share" class="w60 h25 b-r50 flex flex-center bd1 bdc-f f18 cf bgt">分享</button>
				</view>
				<view class="pore z-20 flex flex-space flex-centers mb15 plr15 flex-box flex-end-align">
					<view class="f16 cf">剩余{{item.ClassLength}}学时</view>
					<view class="w65 h30 b-r50 flex flex-center bd1 bdc-f f20 cf bgt">上课</view>
				</view>
			</view>
		</view>
		<view class="flex flex-space flex-centers mt45" @click="myorder">
			<view class="flex flex-row flex-centers">
				<image src="../../static/image/order.png" class="w35 h35 mr15"></image>
				
				<view class="f30 c333">我的订单</view>
			</view>
			<image src="../../static/image/right.png" class="w16 h26"></image>
		</view>
		
		<view class="flex flex-space flex-centers mt45" @click="sharelog">
			<view class="flex flex-row flex-centers">
				<image src="../../static/image/log.png" class="w35 h35 mr15"></image>
				<view class="f30 c333">分享记录</view>
			</view>
			<image src="../../static/image/right.png" class="w16 h26"></image>
		</view>
		
		<view class="flex flex-space flex-centers mt45" @click="classlog">
			<view class="flex flex-row flex-centers">
				<image src="../../static/image/myclass.png" class="w35 h35 mr15"></image>
				<view class="f30 c333">上课记录</view>
			</view>
			<image src="../../static/image/right.png" class="w16 h26"></image>
		</view>
		<view class="conta_tc" v-if="tcpd">
			<view class="w-80 h500 conta text-center" >
				<view class="flex flex-row flex-centers">
					
					<open-data type="userAvatarUrl" class="w135 h135 b-r-50 mr35"></open-data>
					<!-- <image src="../../static/image/head.png" class="w135 h135 b-r50 mr35"></image> -->
					<view class="flex flex-column flex-box">
						<open-data type="userNickName" class="f42 c333"></open-data>
					</view>
				</view>
				<view class="w-100 h100 mt70 f40">
					申请获取以下权限
				</view>
				<view class="w-100 h100 c687180">
					获取您的公开信息(昵称、头像等)
				</view>
				<button type="primary"@click="authoed"open-type="getUserInfo" class="w-80 text-center mlauto mrauto b-r20">授权数据</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	let app = getApp();
	import APP from '../../App.vue'

	export default {
		data() {
			return {
				datas:'',
				tcpd:false,
				myconpon_data:'0',
			}
		},
		onShow() {
			this.myconpon_data = app.globalData.conpon_data
		},
		onLoad() {
			var that = this;
			wx.getSetting({
			  success(res) {
				console.log('getsetting',res)
			    if (res.authSetting['scope.userInfo']) {
					console.log('授权1')
						wx.getUserInfo({
						  success: function(res) {
							  // var that = this;
							  app.globalData.userInfo = res.userInfo;
							  var sq_data = {EncryptedData:res.encryptedData,Iv:res.iv,code:app.globalData.code}
							  console.log('用户授权',res)
							  console.log('app.globalData',app.globalData)
							  wx.login({
								success(res) {
									app.globalData.code = res.code
									uni.request({
									    url: 'https://jy.cy1999.cn/index/index/dologin', //仅为示例，并非真实接口地址。
									    data: {
									        code:sq_data.code,
											encryptedData:sq_data.EncryptedData,
											iv:sq_data.Iv
									    },
										header:{
											'content-type':'application/x-www-form-urlencoded',
										},
									    success: (res) => {
									        console.log('用户授权后请求用户信息',res.data);
											//用户授权成功后执行操作
											var scdd = res.data
											app.globalData.stu_id = res.data.data.stu_id
											app.globalData.openid = res.data.data.openid
											app.globalData.conpon_data = res.data.data.balance
											that.myconpon_data = res.data.data.balance
											//差一个用户的优惠券数据
											console.log('授权后拿到openid',scdd)
											console.log(app.globalData)
											console.log('myconpon_data',that.myconpon_data)
											uni.request({
											    url: 'https://jy.cy1999.cn/index/ban/member?stu_id='+app.globalData.stu_id,
											    data: {
											        text: 'uni.request'
											    },
											    header: {
											        'custom-header': '' //自定义请求头信息
											    },
											    success: (res) => {
											        console.log('我的信息',res.data);
											        // this.text = 'request success';
													that.datas = res.data
													console.log(that.datas)
											    },
											});
									    }
									});
								}
							})
							
							
						  }
						})
			    }else{
					console.log('没授权')
					that.tcpd = true
				}
			  }
			})
			
		},
		methods: {
			authoed(){
				this.tcpd = false
				
				
				uni.switchTab({
					url:'../index/index'
				})
			},
			sharelog(){
				console.log('点了分享',app.globalData)
					uni.navigateTo({
						url:'../sharelog/sharelog'
					})
				
			},
			myorder(){
				console.log('点了我的订单',app.globalData)
					uni.navigateTo({
						url:'../myorder/myorder?stu_id='+String(app.globalData.stu_id)
					})
			},
			classlog(){
					uni.navigateTo({
						url:'../classlog/classlog'
					})
			},
			myclass(){
					uni.navigateTo({
						url:'../myclass/myclass'
					})
				
			},
			getstu(){
			}
			
			
		}
	}
</script>

<style>
	page {
		background: #F8F8F8;
		height: 100%;
	}

	button {
		padding: 0;
		margin: 0;
	}
	.conta_tc{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height:100%;
		background-color: rgba(0,0,0,0.6);
		z-index: 999;
	}
	.conta{
		width: 100%;
		height: 600rpx;
		position: fixed;
		top: 300rpx;
		left: 0;
		z-index: 99;
		border-radius: 30rpx;
		background-color: #F1F1F1;
		border: 1rpx solid #9A9A9A;
	}
</style>
