<template>
	<view class="plr30">
		<view class="flex flex-around mt25 bgf1 boxshow b-r8" v-for="(item,i) in class_fldata" :key="i" @click="gotoclass(item)">
			<image :src=item.banImg class="w110 h110 b-r8"></image>
			<view class=" f30 c000 mt10 h100 pt30" style="text-indent:2em;">
				{{item.cateName}}
			</view> 
			<view class=" f30 c000 mt10 h100 pt30" style="text-indent:2em;">
				班级数量：{{item.courseNUm}}
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
	export default {
		data() {
			return {
				class_fldata :{}
			}
		},
		methods: {
			gotoclass(item){
				console.log('gotoclass')
				uni.navigateTo({
					url:'../class/class?id='+String(item.id)
				})
			}
		},
		onLoad() {
			uni.request({
			    url: 'https://jy.cy1999.cn/index/Ban/bancate', //仅为示例，并非真实接口地址。
			    data: {
			        text: 'uni.request'
			    },
			    header: {
			        'custom-header': '' //自定义请求头信息
			    },
			    success: (res) => {
			        console.log(res.data);
			        // this.text = 'request success';
					this.class_fldata = res.data
					
			    }
			});
		},
	}
</script>

<style>
.boxshow {
		box-shadow: 0px 1px 4px 0px #B5B5B5;
	}
</style>
