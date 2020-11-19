<template>
	<view class="ptb25">
		<view class="flex flex-column boxshow">
			<view class="flex flex-space flex-centers plr70 bgf h100 bdt1 bdc-f1" v-for="(item,i) in datas">
				<view class="flex flex-column">
					<view class="f24 c333">{{item.ClassName}}</view>
					<view class="f20 c9 mt17">{{item.DataTime}}</view>
				</view>
				<view class="f26 c333">-{{item.ClassLength}}课时</view>
			</view>
			<!-- <view class="flex flex-space flex-centers plr70 bgf h100 bdt1 bdc-f1">
				<view class="flex flex-column">
					<view class="f24 c333">绘画</view>
					<view class="f20 c9 mt17">2020-09-06</view>
				</view>
				<view class="f26 c333">-1课时</view>
			</view>
			<view class="flex flex-space flex-centers plr70 bgf h100 bdt1 bdc-f1">
				<view class="flex flex-column">
					<view class="f24 c333">绘画</view>
					<view class="f20 c9 mt17">2020-09-06</view>
				</view>
				<view class="f26 c333">-1课时</view>
			</view>
			<view class="flex flex-space flex-centers plr70 bgf h100 bdt1 bdc-f1">
				<view class="flex flex-column">
					<view class="f24 c333">绘画</view>
					<view class="f20 c9 mt17">2020-09-06</view>
				</view>
				<view class="f26 c333">-1课时</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	let app = getApp()
	export default {
		data() {
			return {
				datas:''
			}
		},
		onShow(options) {
			console.log(options)
			uni.request({
			    url: 'https://jy.cy1999.cn/index/Course/record?stu_id='+String(app.globalData.stu_id), //仅为示例，并非真实接口地址。
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
					
			    }
			});
		},
		methods: {

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
