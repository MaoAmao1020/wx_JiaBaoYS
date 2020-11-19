<template>
	<view class="ptb25">
		<view class="flex flex-column boxshow">
			<view class="flex flex-space flex-centers plr70 bgf h100 bdt1 bdc-f1" v-for="(item,i) in sharelog_data">
				<view class="flex flex-column">
					<view>
						<view class="f26 c007AC0 dis-ib">
							{{item.shared_name}}
						</view>
						<view class="f26 c333 dis-ib ml10">
							通过扫码付款
						</view>
					</view>
					<view class="f20 c9 mt17">{{item.share_time}}</view>
				</view>
				<view class="f28 cFF4800">+{{item.money}}</view>
			</view>
			<!-- <view class="flex flex-space flex-centers plr70 bgf h100 bdt1 bdc-f1">
				<view class="flex flex-column">
					<view class="f24 c333">张*丽通过扫码付款</view>
					<view class="f20 c9 mt17">2020-09-06</view>
				</view>
				<view class="f26 c333">-600</view>
			</view>
			<view class="flex flex-space flex-centers plr70 bgf h100 bdt1 bdc-f1">
				<view class="flex flex-column">
					<view class="f24 c333">张*丽通过扫码付款</view>
					<view class="f20 c9 mt17">2020-09-06</view>
				</view>
				<view class="f26 cFF4800">+200</view>
			</view>
			<view class="flex flex-space flex-centers plr70 bgf h100 bdt1 bdc-f1">
				<view class="flex flex-column">
					<view class="f24 c333">张*丽通过扫码付款</view>
					<view class="f20 c9 mt17">2020-09-06</view>
				</view>
				<view class="f26 c333">-600</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	let app = getApp()
	export default {
		data() {
			return {
				sharelog_data:'',
			}
		},
		onShow() {
			console.log('请求用openid',app.globalData.openid)
			uni.request({
			    // url: 'http://jy.cy1999.cn/index/share/shareRecord?openid='+String(app.globalData.openid), //仅为示例，并非真实接口地址。
				url: 'http://jy.cy1999.cn/index/share/shareRecord?openid=oXu0t5FhVjna6T_Mu8Rgd29QviBo',
			    data: {
			        text: 'uni.request'
			    },
			    header: {
			        'custom-header': '' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			        // this.text = 'request success';
					this.sharelog_data = res.data
					
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
