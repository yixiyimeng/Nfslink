<template>
	<view class="view-page">
		<image src="/static/login.png" mode="widthFix"></image>
		<navigator url="/pages/login/login" class="btn">登录</navigator>
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
	.view-page {
		padding-top: 230upx;
	}

	.view-page image {
		width: 427upx;
		display: block;
		margin: 0 auto;
	}

	.view-page .btn {
		color: #fff;
		background: #4944ff;
		width: 300upx;
		line-height: 80upx;
		display: block;
		text-align: center;
		margin: 40upx auto 0;
		border-radius: 100upx;
		font-size:40upx;
	}
</style>
