<template>
	<view class="cu-list menu" :class="{edit:edit}">
		<view class="cu-form-group margin-top cu-item" :class="{arrow:edit}">
			<view class="title">头像</view>
			<view class="cu-avatar radius bg-gray" @click="clk" :style="{backgroundImage: 'url('+avatarUrl+')'}">
			</view>
		</view>
		<!-- <view class="cu-form-group  cu-item">
			<view class="title">用户名</view>
			<input type="text" :value="userinfo.username" :disabled="!edit">
		</view> -->
		<view class="cu-form-group  cu-item">
			<view class="title">昵称</view>
			<input type="text" v-model="userinfo.name" :disabled="!edit">
		</view>
		<view class="cu-form-group  cu-item">
			<view class="title">手机号码</view>
			<input type="text" v-model="userinfo.mobile" :disabled="!edit">
		</view>
		<view class="btn" :class="{applyBtn:edit}" @tap="handle">{{edit?'提交':'编辑'}}</view>
		<avatar @upload="doUpload" @avtinit="doBefore" quality="1" ref="avatar"></avatar>
	</view>
</template>

<script>
	import avatar from "@/components/yq-avatar/yq-avatar.vue";
	import {
		api,
		postajax
	} from '@/utils/api.js'

	import {
		fileUrl
	} from '@/utils/index.js'
	export default {
		data() {
			return {
				edit: false,
				avatarUrl: '',
				userinfo: {},
			}
		},
		components: {
			avatar
		},
		onLoad() {
			this.userinfo = uni.getStorageSync('userinfo');
			console.log(this.userinfo.picUrl)
			this.avatarUrl = fileUrl + this.userinfo.picUrl
		},
		methods: {
			doBefore() {

			},
			doUpload(rsp) {
				this.avatarUrl = rsp.path;
				this.uploadImg();

			},
			clk() {
				if (this.edit) {
					this.$refs.avatar.fChooseImg('', {
						selWidth: '350upx',
						selHeight: '350upx',
						expWidth: '260upx',
						expHeight: '260upx',
						inner: 'true'
					});
				}
			},
			handle() {
				if (this.edit) {
					/* 提交数据 */
					postajax(api.updatePeronal, this.userinfo).then(da => {
						if (da.code == 0) {
							uni.showToast({
								title: '修改个人信息成功'
							});
							this.edit = !this.edit;
							uni.setStorageSync('userinfo', this.userinfo);
						}
					})
				} else {
					this.edit = !this.edit
				}
			},
			uploadImg() {
				let that = this;
				if (this.edit) {
					wx.getFileSystemManager().readFile({
						filePath: this.avatarUrl,
						encoding: 'base64',
						success: res => {
							// callBack(res.data);
							postajax(api.uploadImg, {
								file: 'data:image/png;base64,' + res.data,
								fileName: new Date().getTime() + 'avatar.png'
							}).then(da => {
								if (da.code == 0) {
									uni.showToast({
										title: '修改个人头像成功'
									})

									that.edit = !that.edit;
									that.userinfo['picUrl'] = da.picUrl;
									uni.setStorageSync('userinfo', that.userinfo);
								}
							})
						},
						fail: err => {
							console.log(err);
						}
					})

				}
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

	.btn {
		background: #efefef;
		color: #333;
		width: 300upx;
		line-height: 80upx;
		display: block;
		text-align: center;
		margin: 40upx auto 0;
		border-radius: 100upx;
		font-size: 40upx;

		&.applyBtn {
			color: #fff;
			background: #4944ff;
		}
	}

	.cu-form-group+.cu-form-group {
		border-top: none;
	}
</style>
