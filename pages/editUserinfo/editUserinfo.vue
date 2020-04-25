<template>
	<view class="cu-list menu" :class="{edit:edit}">
		<view class="cu-form-group margin-top arrow">
			<view class="title">头像</view>
			<view class="cu-avatar radius bg-gray"></view>
		</view>
		<view class="cu-form-group arrow cu-item">
			<view class="title">用户名</view>
			<input type="text":value="userinfo.username" :disabled="!edit">
		</view>
		<view class="cu-form-group arrow cu-item">
			<view class="title">昵称</view>
			<input type="text" v-model="userinfo.name" :disabled="!edit">
		</view>
		<view class="cu-form-group arrow cu-item">
			<view class="title">手机号码</view>
			<input type="text" v-model="userinfo.mobile" :disabled="!edit">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				edit: false,
				userinfo:{}
			};
		},
		onLoad() {
			this.userinfo = uni.getStorageSync('userinfo')
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
