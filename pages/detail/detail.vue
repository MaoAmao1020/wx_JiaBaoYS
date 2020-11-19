<template>
	<view class="plr30 pt20 pb130">
		<view class="b-r5 bgf ptb20 plr15 flex flex-row flex-centers boxshow">
			<image :src=datas.course_logo class="w200 h145 b-r5 mr15"></image>
			<view class="flex flex-column flex-box flex-space h145">
				<view class="f28 c333">{{datas.name}}</view>
				<view class="flex flex-column">
					<view class="f22 c666">共{{datas.course_time}}课时</view>
					<view class="flex flex-row flex-centers">
						<view class="f22 c333">价格：</view>
						<view class="f22 cFF4800">￥{{datas.course_price}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="b-r5 bgf p15 flex flex-column boxshow mt15">
			<view class="flex flex-row flex-centers">
				<view class="f26 c333">课程介绍</view>
				<view class="w4 h20 bg007AC0 mlr8"></view>
				<view class="f24 c9">Course introduction</view>
			</view>
			<view class="flex flex-column plr30 ">
				<view class="mt20 f22 c333 t-dt2 lh30" id="class_d">
					<!-- <rich-text nodes="{{datas.course_details}}"></rich-text> -->
					<view  class="class_details" v-html=datas.course_details></view>
				</view>
				<!-- <view class="flex flex-space flex-centers mt25" >
					<image :src=item class="w129 h130" v-for="(item,index) in datas.course_img" :key='index' @click="previewImage(item)"></image>
				</view> -->
			</view>
		</view>
		<view class="b-r5 bgf p15 pb30 flex flex-column boxshow mt15">
			<view class="flex flex-row flex-centers">
				<view class="f26 c333">老师介绍</view>
				<view class="w4 h20 bg007AC0 mlr8"></view>
				<view class="f24 c9">Teacher introduction</view>
			</view>
			<view class="flex flex-row plr30 mt30" v-for="(item,i) in datas.Teacher_details">
				<image :src=item.Teacher_img class="w200 h280 mr15"></image>
				<view class="flex flex-column flex-box">
					<view class="f24 c333">姓名：{{item.Teacher_name}}</view>
					<view class="f24 c333 mt20">职位：{{item.Teacher_work}}</view>
					<view class="mt20 f22 c333 t-dt2 lh30">{{item.Teacher_details}}</view>
				</view>
			</view>
		</view>
		
		<view class="pofd l0 b0 w-100 bgf h110">
			<view class="flex flex-end flex-centers h110 plr30">
				<view class="w-100 p10">
					<view class="share_button f28 cFF4800 b-r50 bd1 bdc-FF4800" @click="shareto">分享给好友</view>
				</view>
				<view class="f28 cFF4800 w160 h65 b-r50 bd1 bdc-FF4800 flex flex-center" @click="BuyClass">立即购买</view>
			</view>
		</view>
		<view class="tc_tm" @click="tc_tm" v-if="sharetc_data"></view>
		<view class="share_tc" v-if="sharetc_data">
			<view class="text-center w-100 mt30 pr40 ml20 mb20 c626979 fb">分享到</view>
			<view class="share_tc2">
				<button open-type="share" style="width: 40%;height: 150rpx;text-align: center;margin-left: 50rpx;background-color: rgba(230,230,230,0.6);">
					<image src="../../static/image/share_1.png" class="w60 h60 c3EBC01">
					<view class="f30" style="margin-top: -30rpx;">分享给好友</view>
				</button>
				<view  style="width: 40%;height: 150rpx;text-align: center;margin-right: 50rpx; background-color: rgba(230,230,230,0.6);" @click="shareto_img">
					<image src="../../static/image/share_2.png" class="w60 h60 c3EBC01">
					<view class="mt45 f28"style="margin-top: -10rpx; padding-top: 22rpx;">保存二维码分享</view>
				</view>
				
			</view>
		</view>
		
		<!-- <view class="zan-dialog {{ stu_detail_tc==2 ? 'zan-dialog--show' : '' }}">
		  <view class="zan-dialog__mask" />
			  <view class="zan-dialog__container">
				<view class="tc_title">填写学生信息</view>
				<form>
					<view style="margin: 35rpx 0" class="flex flex-center h50">
						<view class="f40">姓名</view>
						<input class="weui-input" name="name" placeholder="  填写真实姓名" v-model="formDatas.stu_name"/>
					</view>
					<view style="margin: 35rpx 0" class="flex flex-center h50">
						<view class="f40 pr80">性别</view>
						
						<radio-group>
						    <label style="margin: 0 30rpx;" name="sex" value=1 ><radio value="1" @click="changesex(0)"/>男</label>
							<label style="margin: 0 40rpx;" name="sex" value=2 ><radio value="2" @click="changesex(1)"/>女</label>
					    </radio-group>
					</view>
					<view style="margin: 35rpx 0" class="flex flex-center h50">
						<view class="f40">电话</view>
						<input class="weui-input" name="tel" placeholder="  填写真实手机号码" v-model="formDatas.stel"/>
					</view>
					<view style="margin: 35rpx 0" class="flex flex-center h50">
						<view class="f40">年龄</view>
						<input class="weui-input" name="age" placeholder="  填写真实年龄"  v-model="formDatas.age" />
					</view>
					<view style="margin: 35rpx 0" class="flex flex-center h50">
						<view class="f40">课程</view>
						<input class="weui-input" name="class" placeholder="  {{datas.name}} " disabled="true"/>
					</view>
					<view class="btn-area">
						<button style="margin: 30rpx 0" type="primary" formType="submit" @click="formSubmit(formDatas)">确定</button>
					    <button style="margin: 30rpx 0;border: 1rpx solid #B3B3B3;" formType="reset" @click="Nobuy(options_id)">取消</button>
					</view>
				</form>
			  </view>
		</view> -->
		<view class="conta_tc" v-if="tcpd">
			<view class="w-80 h500 conta text-center pt20 plr20" >
				<view class="flex flex-row flex-centers">
					<open-data type="userAvatarUrl" class="w135 h135 b-r-50 mr35"></open-data>
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
	export default {
		data() {
			return {
				formDatas:{
					stu_name:'',
					sex:'',
					age:'',
					// class:'',
					stel:'',
					course_id:'',
					openid:'',
					share_id:'',
				},
				datas:{},
				stu_detail_tc:false,
				student_name:'',
				student_sex:'',
				student_age:'',
				options_id:'',
				tcpd:false,
				sharetc_data:false
						
			}
		},
		onLoad(options){
			console.log(options)
			this.options_id = options.id
			app.globalData.course_id = options.id
			uni.request({
			    url: 'https://jy.cy1999.cn/index/Course/detail?id='+String(options.id), //仅为示例，并非真实接口地址。
			    data: {
			        text: 'uni.request'
			    },
			    header: {
			        'custom-header': '' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			        // this.text = 'request success';
					this.datas = res.data
					// 获取用户信息
					// this.formDatas.class=res.data.name
					this.formDatas.course_id = options.id
					
			    }
			});
			
			if (options.share_id){
				app.globalData.sharefor_id = options.share_id
				// this.tcpd = true
				console.log('有参数传过来');
			}
			
		},
		onShow() {
			var that = this
			
			wx.getSetting({
				success:function(res) {
						if(res.authSetting['scope.userInfo']){
							wx.getUserInfo({
							  success: function(res) {
									app.globalData.userInfo = res.userInfo;
									  var sq_data = {EncryptedData:res.encryptedData,Iv:res.iv,code:app.globalData.code}
									  console.log('用户授权',res)
									  console.log('app.globalData',app.globalData)
									// var that = this;
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
													'content-type':'application/application/x-www-form-urlencoded',
												},
											    success: (res) => {
											        console.log('用户授权后请求用户信息',res.data);
											        // this.text = 'request success';
													// this.Classes = res.data
													//用户授权成功后执行下单等操作
													var scdd = res.data
													if (res.data.data.is_fill == 2){
														app.globalData.stu_id = res.data.data.stu_id
														app.globalData.openid = res.data.data.openid
														that.formDatas.openid = res.data.data.openid
														
														console.log('app.globalData',app.globalData);
													}else if(res.data.data.is_fill == 1){
														// that.stu_detail = res.data.data.is_fill
														app.globalData.stu_id = res.data.data.stu_id
														app.globalData.openid = res.data.data.openid
														that.formDatas.openid = res.data.data.openid
														console.log('app.globalData',app.globalData);
														}
													}
													
													
											    })
											}
											
										})	
									
								},
								fail(res) {
								  that.tcpd= true
									console.log('这都有问题',res)
								}
							})
						}else{
							that.tcpd = true
						}
					}
			})
			
		},
		methods: {
			onShareAppMessage: function () {
			    return {
			      title: "佳宝艺术",
			      path:"/pages/detail/detail?share_id="+app.globalData.stu_id+"&id="+this.options_id,
			    }
			 
			},
			tc_tm(){
				this.sharetc_data = false
			},
			shareto(){
				this.sharetc_data =true
			},
			authoed(){
				this.tcpd = false
			},
			changesex(e){
				this.formDatas.sex = e
			},
			shareto_img(){
				var that = this;
				console.log('保存二维码')
				var lujing = 'pages/detail/detail'
				console.log('openid ='+app.globalData.openid+'&'+'path='+lujing+'&detail_id='+that.options_id)
				wx.getSetting({
					success(res) {
						if(res.authSetting['scope.writePhotosAlbum']){
							console.log('保存了啊',that.options_id)
							uni.request({
								header: {
									'content-type': 'application/x-www-form-urlencoded',
								}, 
								url:'https://jy.cy1999.cn/index/share/qrcode',
								method:'POST',
								data:{
									openid:app.globalData.openid,
									path:lujing,
									detail_id:that.options_id,
								},
								success(res) {
									console.log(res)
									var DownUrl= res.data.imgCode
									wx.downloadFile({
									    url: DownUrl, //下载资源的地址网络
									    success(res) {
										   console.log('下载的图片不对',res)
										   // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
												// if (res.statusCode === 200) {
												// 	wx.playVoice({
												// 		filePath: res.dara.imgCode
												// 	})
												// }
										   // 保存图片到本地
											wx.saveImageToPhotosAlbum({
												filePath: res.tempFilePath,
												success (res) {
												 console.log('保存到本地',res);
													wx.showModal({
														title: '下载成功',
														content: '图片已保存至您的手机',
													})
												},
												fail(res) {
													console.log('下载不成功',res)
												}
											})
										},
										fail(res) {
											console.log('临时地址不对',res)
										}
									})
								},
								fail(res) {
									console.log('请求图片失败',res)
								}
							})
						}else{
							wx.authorize({
								scope:"scope.writePhotosAlbum",
								success() {
									console.log('保存了')
									uni.request({
										header: {
											'content-type': 'application/x-www-form-urlencoded',
										}, 
										url:'http://jy.cy1999.cn/index/share/qrcode',
										method:'POST',
										data:{
											openid:app.globalData.openid,
											path:lujing,
											detail_id:that.options_id,
										},
										success(res) {
											
											var DownUrl= res.data.imgCode
											wx.downloadFile({
											  url: DownUrl, //下载资源的地址网络
											  success: function (res) {
											   //console.log(res)
											  
											   // 保存图片到本地
											   wx.saveImageToPhotosAlbum({
											    filePath: res.tempFilePath,
											    success:
											     function (data) {
											      //console.log(data);
											      wx.showModal({
											       title: '下载成功',
											       content: '图片已保存至您的手机',
											      })
											     },
											   })
											  }
											 })
										}
									})
								}
							})
						}
					}
				})
			},
			formSubmit(formDatas) {
				var that = this
				formDatas.share_id = app.globalData.share_id
			    console.log('form发生了submit事件，携带数据为：',formDatas)
				uni.request({
					url:'https://jy.cy1999.cn/index/orders/news',
					method:'POST',
					header:{
						'content-type':'application/json',
						},
					data:formDatas,
					// dataType:'json',
					success(res) {
						console.log('信息填写返回的是',res)
						if(res.data.code !== 200){
							wx.showToast({
							  title: '信息填写格式错误！',
							  icon: 'none',
							  duration: 1500
							})
						}else{
							that.stu_detail_tc = false
							wx.showToast({
							  title: '信息填写成功！！', // 标题
							  icon: 'success',  // 图标类型，默认success
							  duration: 1500  // 提示窗停留时间，默认1500ms
							})
							console.log(res)
						}
					},
					fail(res) {
						console.log('这是fail',res)
					}
				})
				
			},
			Nobuy(options_id) {
				uni.redirectTo({
					url: '../detail/detail?id='+String(options_id)
				});
			},
			BuyClass(){
				var that = this;
				
					wx.getSetting({
						success:function(res) {
							if(res.authSetting['scope.userInfo']){
								wx.getUserInfo({
								  success: function(res) {
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
														'content-type':'application/application/x-www-form-urlencoded',
													},
												    success: (res) => {
												        console.log('用户授权后请求用户信息',res.data);
														//用户授权成功后执行下单等操作
														var scdd = res.data
														if (res.data.data.is_fill == 2){
															app.globalData.stu_id = res.data.data.stu_id
															app.globalData.openid = res.data.data.openid
															that.formDatas.openid = res.data.data.openid
															that.stu_detail_tc = 2
															
														}else if(res.data.data.is_fill == 1){
															// that.stu_detail = res.data.data.is_fill
															app.globalData.stu_id = res.data.data.stu_id
															app.globalData.openid = res.data.data.openid
															that.formDatas.openid = res.data.data.openid
															console.log('用户下单最后',app.globalData)
															console.log(that.stu_detail)
																console.log('判断之后的res',res)
																uni.request({
																	url:'https://jy.cy1999.cn/index/Orders/buynow',
																	data: {
																		stu_id:res.data.data.stu_id,
																		course_id:that.formDatas.course_id,
																		share_openid:app.globalData.share_id
																		// user_openid:res.data.data.openid
																	},
																	header:{
																		'custom-header': '' //自定义请求头信息
																	},
																	success:(res)=> {
																		console.log('用户下单啦')
																		console.log(res)
																		wx.showModal({
																		  title: '下单成功!',
																		  content: '请前往我的订单页面付款',
																		  showCancel:true,
																		  confirmText:'立刻付款',
																		  cancelText:'等会再去',
																		  success (res) {
																		    if (res.confirm) {
																		      console.log('用户点击确定')
																			  uni.navigateTo({
																			  	url:'../myorder/myorder?stu_id='+String(app.globalData.stu_id)
																			  })
																		    } else if (res.cancel) {
																		      console.log('用户点击取消')
																		    }
																		  }
																		})
																		
																	}
																})
															}
															
														}
														
												    })
												}
											})	
										
									},
									fail(res) {
									  that.tcpd= true
										console.log('这都有问题',res)
									}
								})
							}else{
								console.log('用户没授权')
								that.tcpd = true
							}
						}
					})
						
			}
		}
	}
</script>

<style>
	page {
		background: #F8F8F8;
	}
	/* button::after {
	  border: none;
	}
	button {
	  font-size: 28rpx;
	  background-color: #fff;
	  border: none;
	  padding: 0;
	  margin: 0;
	  line-height: 1;
	} */
	.class_details >>> .details_img{
		margin-top:30rpx;
		margin-bottom: 30rpx;
		width: 100%;
		margin-left: -40rpx;
	}
	.class_details{
		width: 100%;
		line-height: 40rpx;
		overflow: hidden;
	}
	.weui-input{
		border: #6E7689 1rpx solid;
		height: 60rpx;
		margin-left: 40rpx;
		border-radius: 10rpx;
	}
	.stu_sex{
		padding-left: -30rpx;
	}
	.tc_title{
		width: 50;
		height: 30rpx;
		text-align: center;
		margin-top: 40rpx;
		font-size: 40rpx;
	}
	.boxshow {
		box-shadow: 0px 1px 4px 0px #B5B5B5;
	}
	
	.zan-dialog__mask {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  z-index: 10;
	  background: rgba(0, 0, 0, 0);
	  display: none;
	}
	
	.zan-dialog__container {
	  position: fixed;
	  bottom: 290rpx;
	  width: 650rpx;//弹窗布局宽
	  height: 800rpx;//弹窗布局高，与下面弹出距离transform有关
	  margin-left: 25rpx;
	  background: #f8f8f8;
	  transform: translateY(300%);//弹框弹出距离，与弹框布局高度有关，如300%表示弹起距离为3倍弹窗高度
	  transition: all 0.4s ease;
	  z-index: 12;
	  border-radius: 20rpx;
	  box-shadow: 0px 3px 3px 2px gainsboro;//弹框的悬浮阴影效果，如不需要可注释该行
	}
	
	.zan-dialog--show .zan-dialog__container {
	  transform: translateY(0);
	}
	
	.zan-dialog--show .zan-dialog__mask {
	  display: block;
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
	.conta_tc{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height:100%;
		background-color: rgba(0,0,0,0.6);
		z-index: 999;
	}
	.share_button{
		width: 35%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		margin-left: 60%;
		/* color: #FFFFFF;
		background-color: #02a9f0;
		font-size: 24rpx;
		border-radius: 15rpx;
		border: 1rpx solid #676767;
		box-shadow:4rpx 4rpx 5rpx 3rpx #c2c2c2; */ 
	}
	.tc_tm{
		width: 100%;
		height: 80%;
		/* background-color: #111111; */
		position: fixed;
		top: 0;
		left: 0;
		z-index: 600;
	}
	.share_tc{
		width: 100%;
		height: 20%;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 600;
		background-color: rgba(211,211,211,0.6);
		padding-bottom: 30rpx;
		border-radius: 20rpx;
		/* box-shadow: 0rpx -25rpx rgba(220,220,220,0.8); */
	}
	.share_tc2{
		display: flex;
		flex-direction: row;
		padding-top: 30rpx;
		border-top: 1rpx solid rgba(0,0,0,0.8);
	}
</style>
