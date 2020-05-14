<template>
	<view class="view-page">
		<image src="/static/login.png" mode="widthFix"></image>
		<navigator url="/pages/login/login" class="btn">登录</navigator>
		<view class="tip">该应用仅面向合作机构的特定用户开放</view>
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

	.tip {
		color: #999;
		text-align: center;
		position: absolute;
		bottom: 20upx;
		left: 0;
		width: 100%;
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
		font-size: 40upx;
	}
</style>
