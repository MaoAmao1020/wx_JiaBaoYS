<template>
	<view class="pt30 pl40 pr25">
		<view class="mr20 mt20" v-for="(item,i) in myclass_datas">
			<view class="w-100 h150 cardcolor pl10 pr20">
				<!-- <image src="../../static/image/class0.png" class="w-100 h-100 poab t0 l0 z-1"></image> -->
				<view class=" flex flex-space flex-centers pt20 plr15 ">
					<view class="f26 cf">{{item.className}}</view>
				</view>
				<view class="flex flex-space flex-centers mb15 plr15 flex-box flex-end-align mt30">
					<view class="f20 cf">剩余{{item.class_long}}学时</view>
					<view class="w90 h45 b-r50 flex flex-center bd1 bdc-f f24 cf bgt">上课</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	let app = getApp();
	export default {
		data() {
			return {
				ceshi:'1111',
				myclass_datas:'',
			}
		},
		onLoad() {
		},
		onShow() {
			uni.request({
			    url: 'https://jy.cy1999.cn/index/course/mycourse?stu_id=4',//仅为示例，并非真实接口地址。
			  //   data: {
					// stu_id:app.globalData.stu_id,
			  //       text: 'uni.request'
			  //   },
			    header: {
			        'custom-header': '' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			        // this.text = 'request success';
					this.myclass_datas = res.data
					// for (var i=0; i <this.orderdatas.){
						
					// }
			    }
			});
		},
		methods: {
			onShareAppMessage: function (res) {
				var myshare_id = app.globalData.sharefor_id
				console.log('点了分享',res)
			    if (res.from === 'button') {
			      // 来自页面内转发按钮
			      console.log(res.target)
			    }
			    return {
			      title: '佳宝艺术',
			      path: '/pages/my/my?id=123'
			    }
			  }
		}
	}
</script>

<style>
	page{
		background: #F8F8F8;
	}
	button {
		padding: 0;
		margin: 0;
	}
	.cardcolor{
		height: 150rpx;
		border-radius: 20rpx;
		/* background-color: #007AC0; */
		margin-top: 20rpx;
		background-image: linear-gradient(to bottom right, #007AC0, #E2E3E8);
	}
</style>
