<template>
	<view class="plr30">
		<view class="flex flex-column b-r8 boxshow p30 mt20" v-for="(item,i) in ClassDatas" :key="i">
			<view class="flex flex-row">
				<image :src=item.ClassImg class="w150 h150 mr25"></image>
				<view class="flex flex-box flex-column flex-space h150">
					<view class="f34 c333">{{item.ClassName}}</view>
					<view class="f26 c333">上课时间：{{item.ClassTime}}</view>
				</view>
			</view>
			<view class="flex flex-space flex-centers mt30">
				<view class="f26 c333">班级人员</view>
				<view class="f24 c666">{{item.member.PeopleNumber}}人</view>
			</view>
			<view class="mt20 w-100 flex flex-space flex-centers">
				<view class="flex flex-space flex-centers dis-ib">
					<image :src=j class="w80 h80 b-r50" v-for="(j,k) in item.member.HeadImg" v-if="k<6"></image>
				</view>
			<!-- 	<image src="../../static/image/header.png" class="w80 h80 b-r50"></image>
				<image src="../../static/image/header.png" class="w80 h80 b-r50"></image>
				<image src="../../static/image/header.png" class="w80 h80 b-r50"></image>
				<image src="../../static/image/header.png" class="w80 h80 b-r50"></image> -->
				<image src="../../static/image/more.png" class="w80 h80 b-r50 dis-ib" @click="classpersonnel(item.id)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	let app = getApp();
	export default {
		data() {
			return {
				ClassDatas:[
					{ClassName:'书法一班',
					ClassImg:'../../static/image/detail.png',
					ClassTime:'2020-9-20 10:00',
					ClassNumber:35,
					ClassStudents:[{StudentImg:"../../static/image/header.png"},
					{StudentImg:"../../static/image/header.png"},
					{StudentImg:"../../static/image/header.png"},
					{StudentImg:"../../static/image/header.png"},
					{StudentImg:"../../static/image/header.png"},]}]
			}
		},
		onLoad(options) {
			console.log(options)
			uni.request({
			    url: 'https://jy.cy1999.cn/index/ban/manage?id='+String(options.id), //仅为示例，并非真实接口地址。
			    data: {
			        text: 'uni.request'
			    },
			    header: {
			        'custom-header': '' //自定义请求头信息
			    },
			    success: (res) => {
			        // this.text = 'request success';
					this.ClassDatas = res.data
					
					console.log('班级',res.data);
			    }
			});
		},
		methods: {
			classpersonnel(i){
				uni.navigateTo({
					url:'../classpersonnel/classpersonnel?ban_id='+String(i)
				})
			},
		}
	}
</script>

<style>
	page{
		background: #FFFFFF;
	}
	.boxshow {
		box-shadow: 0px 1px 4px 0px #B5B5B5;
	}
</style>
