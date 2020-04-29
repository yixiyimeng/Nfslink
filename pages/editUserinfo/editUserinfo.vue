<template>
	<view class="cu-list menu" :class="{edit:edit}">
		<view class="cu-form-group margin-top arrow">
			<view class="title">头像</view>
			<view class="cu-avatar radius bg-gray" @click="clk" :style="{backgroundImage: 'url('+avatarUrl+')',}">
			</view>
		</view>
		<view class="cu-form-group arrow cu-item">
			<view class="title">用户名</view>
			<input type="text" :value="userinfo.username" :disabled="!edit">
		</view>
		<view class="cu-form-group arrow cu-item">
			<view class="title">昵称</view>
			<input type="text" v-model="userinfo.name" :disabled="!edit">
		</view>
		<view class="cu-form-group arrow cu-item">
			<view class="title">手机号码</view>
			<input type="text" v-model="userinfo.mobile" :disabled="!edit">
		</view>
		<avatar @upload="doUpload" @avtinit="doBefore" quality="1" ref="avatar"></avatar>
	</view>
</template>

<script>
	import avatar from "@/components/yq-avatar/yq-avatar.vue";
	export default {
		data() {
			return {
				edit: false,
				avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				userinfo: {},
			}
		},
		components: {
			avatar
		},
		onLoad() {
			this.userinfo = uni.getStorageSync('userinfo')
		},
		methods: {
			doBefore() {

			},
			doUpload(rsp) {
				console.log(rsp);
				this.avatarUrl = rsp.path;
				// this.$set(this.urls, rsp.index, rsp.path);
				return;
				uni.uploadFile({
					url: '', //仅为示例，非真实的接口地址
					filePath: rsp.path,
					name: 'avatar',
					formData: {
						'avatar': rsp.path
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
					},
					complete(res) {
						console.log(res)
					}
				});
			},
			clk() {
				this.$refs.avatar.fChooseImg('', {
					selWidth: '350upx',
					selHeight: '350upx',
					expWidth: '260upx',
					expHeight: '260upx',
					inner: 'true'
				});
			}
		}
	}
</script>

<style lang="scss">
	.cu-form-group input {
		text-align: right;
	}

	.menu.edit .cu-form-group input {
		text-align: left;
	}

	.cu-form-group .title {
		min-width: calc(4em + 15px);
		font-weight: bold;
		font-size: 34upx;
	}
</style>
