<template>
	<view class="plr30">
		<view class="flex flex-column mt25" @click="detail(item)" v-for="(item,i) in Classes" :key="i">
			<image :src=item.ClassImg class="w-100 h350 b-r8"></image>
			<view class="flex-hiddenss f30 c000 mt10" style="text-indent:2em;">
				{{item.introduction}}
				<!-- 介绍一下这个第一个课程 -->
			</view>
		</view>
		<!-- <view class="flex flex-column mt25" @click="detail">
			<image src="../../static/image/index2.png" class="w-100 h300 b-r8"></image>
			<view class="flex-hiddenss f28 c000 mt10">介绍下一这个课程</view>
		</view>
		<view class="flex flex-column mt25" @click="detail">
			<image src="../../static/image/index3.png" class="w-100 h300 b-r8"></image>
			<view class="flex-hiddenss f28 c000 mt10">介绍下一这个课程</view>
		</view> -->
	</view>

</template>

<script>
	let app = getApp();
	export default {
		data() {
			return {
				Classes:[],
				
			}
		},
		
		onShow() {
			wx.checkSession({
			  success () {
			    //session_key 未过期，并且在本生命周期一直有效
			  },
			  fail () {
			    // session_key 已经失效，需要重新执行登录流程
			    wx.login({
			      success (res) {
			        if (res.code) {
			          // 发起网络请求
			          // wx.request({
			          //   url: 'https://test.com/onLogin',
			          //   data: {
			          //     code: res.code
			          //   }
			          // })
			    	  console.log(res.code)
			        } else {
			          console.log('登录失败！' + res.errMsg)
			        }
			      }
			    }) //重新登录
			  }
			})
			
			wx.login({
			  success (res) {
			    if (res.code) {
			      //发起网络请求
			      // wx.request({
			      //   url: 'https://test.com/onLogin',
			      //   data: {
			      //     code: res.code
			      //   }
			      // })
				  console.log('用户登陆：')
				  console.log(res)
				  
				  app.globalData.code=res.code
				  console.log(app.globalData)
				  
			    } else {
			      console.log('登录失败！' + res.errMsg)
			    }
			  }
			})
			// wx.authorize({
			// 	scope:'scope.userInfo',
			// 	success(){
			// 		//用户同意授权的回调函数
			// 		wx.getUserInfo({
			// 		  success: function(res) {
			// 			var that = this;
			// 		    app.globalData.userInfo = res.userInfo;
			// 			var sq_data = {EncryptedData:res.encryptedData,Iv:res.iv,code:app.globalData.code}
			// 			console.log('用户授权',res)
			// 			console.log('app.globalData',app.globalData)
			// 			uni.request({
			// 			    url: 'https://jy.cy1999.cn/index/index/dologin', //仅为示例，并非真实接口地址。
			// 			    data: {
			// 			        code:sq_data.code,
			// 					encryptedData:sq_data.EncryptedData,
			// 					iv:sq_data.Iv
			// 			    },
			// 			    header: {
			// 			        'custom-header': '' //自定义请求头信息
			// 			    },
			// 			    success: (res) => {
			// 			        console.log('用户授权后请求用户信息',res.data);
			// 			        // this.text = 'request success';
			// 					// this.Classes = res.data
								
			// 			    }
			// 			});
			// 		  }
			// 		})
			// 	}
			// })
		},
		onLoad() {
			uni.request({
			    url: 'https://jy.cy1999.cn/index/Course/index', //仅为示例，并非真实接口地址。
			    data: {
			        text: 'uni.request'
			    },
			    header: {
			        'custom-header': '' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			        // this.text = 'request success';
					this.Classes = res.data
					
			    }
			});
		},
		
		methods: {
			detail(item){
				console.log(item),
				uni.navigateTo({
					url:'../detail/detail?id='+String(item.id)
				})
			},
		}
	}
</script>

<style>
	

</style>
