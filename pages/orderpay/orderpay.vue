<template>
	<view class="plr30">
		<view class="f32 c333 mt40">等待支付，剩余</view>
		<view class="flex flex-space flex-centers bgf b-r5 boxshow mt45">
			<view class="flex flex-box flex-column flex-center h150">
				<image src="../../static/image/pay.png" class="w40 h40 mb5"></image>
				<view class="f24 c333">立即支付</view>
			</view>
			<view class="flex flex-box flex-column flex-center h150">
				<image src="../../static/image/clase.png" class="w40 h40 mb5"></image>
				<view class="f24 c333">取消订单</view>
			</view>
		</view>
		<view class="flex flex-column bgf b-r5 boxshow mt20 ptb20 plr15">
			<view class="f26 c333">订单信息</view>
			<view class="flex flex-space flex-centers mt25">
				<view class="f20 c9">类别</view>
				<view class="f20 c333">口才</view>
			</view>
			<view class="flex flex-space flex-centers mt15">
				<view class="f20 c9">姓名</view>
				<view class="f20 c333">李美丽</view>
			</view>
			<view class="flex flex-space flex-centers mt15">
				<view class="f20 c9">电话</view>
				<view class="f20 c333">15239696969</view>
			</view>
			<view class="flex flex-space flex-centers mt15">
				<view class="f20 c9">下单时间</view>
				<view class="f20 c333">2020-09-08  09：01：38</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
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
