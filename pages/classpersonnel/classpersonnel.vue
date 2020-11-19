<template>
	<view class="pt15">
		<view class="plr30 ptb15 f24 c7">老师</view>
		<view class="flex flex-row flex-centers plr30 ptb15 bgf">
			<image :src=datas.Teacher.TeacherImg class="w70 h70 b-r50 mr20"></image>
			<view class="f28 c333">{{datas.Teacher.TeacherName}}</view>
		</view>
		<view class="plr30 ptb15 f24 c7">学生</view>
		<view class="flex flex-space flex-centers plr30 ptb15 bgf mt2" v-for="(item,i) in datas.Students">
			<view class="flex flex-row flex-centers">
				<image :src=item.StudentImg class="w70 h70 b-r50 mr20"></image>
				<view class="f28 c333">{{item.SutdentName}}</view>
			</view>
			<view class="f24 c666">剩余{{item.StudentTime}}课时</view>
		</view>
		<!-- <view class="flex flex-space flex-centers plr30 ptb15 bgf mt2">
			<view class="flex flex-row flex-centers">
				<image src="../../static/image/mm.png" class="w70 h70 b-r50 mr20"></image>
				<view class="f28 c333">安*逢</view>
			</view>
			<view class="f24 c666">剩余54课时</view>
		</view>
		<view class="flex flex-space flex-centers plr30 ptb15 bgf mt2">
			<view class="flex flex-row flex-centers">
				<image src="../../static/image/mm.png" class="w70 h70 b-r50 mr20"></image>
				<view class="f28 c333">白*</view>
			</view>
			<view class="f24 c666">剩余1课时</view>
		</view>
		<view class="flex flex-space flex-centers plr30 ptb15 bgf mt2">
			<view class="flex flex-row flex-centers">
				<image src="../../static/image/mm.png" class="w70 h70 b-r50 mr20"></image>
				<view class="f28 c333">北*秋</view>
			</view>
			<view class="f24 c666">剩余26课时</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas:{}
			}
		},
		methods: {

		},
		onLoad(options) {
			console.log(options)
			uni.request({
			    url: 'https://jy.cy1999.cn/index/ban/personnel?ban_id='+String(options.ban_id), //仅为示例，并非真实接口地址。
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
		}
	}
</script>

<style>
	page {
		background: #F8F8F8;
	}
</style>
