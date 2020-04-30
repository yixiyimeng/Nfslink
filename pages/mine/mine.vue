<template>
	<view class="pageview">
		<image src="/static/topbg.jpg" mode="widthFix" class="topbg"></image>
		<view class="main">
			<!-- 个人信息 -->
			<div class="userinfo flex align-center" @tap="showDetails">
				<view class="cu-avatar round" :style="{backgroundImage: 'url('+avatarUrl+')'}"></view>
				<view class="flex-sub">
					<view class="flex">
						<view class="name">{{userinfo.username}}</view>
						<view class="cu-tag bg-white round">{{userinfo.name}}</view>
					</view>
					<view class="mt10">手机号：{{userinfo.mobile}}</view>

				</view>
				<text class="cuIcon-right"></text>
			</div>
			<!-- 学生信息 -->
			<view class="stuinfo bg-white shadow">
				<view class="stuname"><span>{{stuinfo.stuName}}</span></view>
				<view class="flex align-center">
					<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
					<view class="line"></view>
					<view class="flex-sub">
						<view class="name">班级：{{stuinfo.className}}</view>
						<view class="mt10">性别：{{stuinfo.sex==0?'男':'女'}}</view>

					</view>
				</view>
			</view>
			<view class="cu-list menu">
				<view class="cu-item">
					<view class="content align-center flex">
						<image src="/static/icon9.png" class="png" mode="aspectFit"></image>
						<text>积分</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content align-center flex">
						<image src="/static/icon10.png" class="png" mode="aspectFit"></image>
						<text>设置</text>
					</view>
				</view>
				<view class="cu-item">
					<navigator class="content align-center flex" url="/pages/forgetpwd/forgetpwd" hover-class="none">
						<image src="/static/icon11.png" class="png" mode="aspectFit"></image>
						<text>修改密码</text>
					</navigator>
				</view>
				<view class="cu-item">
					<view class="content align-center flex">
						<image src="/static/icon12.png" class="png" mode="aspectFit"></image>
						<text>关于家校通</text>
					</view>
				</view>
			</view>
			<view class="exitBtn" @click='openActionSheet'>退出登录</view>
			<tui-actionsheet :show="showActionSheet" :tips="tips" :item-list="itemList" :mask-closable="true" :is-cancel="true"
			 @click="itemClick" @cancel="closeActionSheet"></tui-actionsheet>
		</view>
	</view>
</template>

<script>
	import tuiActionsheet from "@/components/actionsheet/actionsheet"
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
				userinfo: {},
				stuinfo: {},
				showActionSheet: false,
				tips: '退出登录会清除您的登录信息，确认退出吗？',
				itemList: [{
					text: "退出登录",
					color: "#e53a37"
				}],
				avatarUrl:''
			};
		},
		components: {
			tuiActionsheet
		},
		onShow() {
			this.init();
		},
		onPullDownRefresh() {
			this.init();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 500);
		},
		methods: {
			init() {
				this.stuinfo = uni.getStorageSync('stuinfo') //关联学生信息
				this.userinfo = uni.getStorageSync('userinfo') //账户信息
				this.avatarUrl=fileUrl+this.userinfo.picUrl;
			},
			openActionSheet() {
				setTimeout(() => {
					this.showActionSheet = true;

				}, 0)
			},
			itemClick: function(e) {
				let index = e.index;
				this.closeActionSheet();
				/* 退出登录 */
				this.logout();

			},
			logout() {
				postajax(api.logout).then((da) => {
					if (da.code == 0) {
						uni.clearStorageSync();
						uni.redirectTo({
							url: '/pages/login/login'
						})

					}
				})
			},
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			showDetails(){
				uni.navigateTo({
					url:'/pages/editUserinfo/editUserinfo'
				})
			}
		}
	}
</script>

<style lang="scss">
	.mt10 {
		margin-top: 10upx;
	}

	.pageview {
		position: relative;

		.topbg {
			position: absolute;
			width: 100%;
		}

		.main {
			position: relative;
			z-index: 999;

			.userinfo {
				color: #fff;
				font-size: 24upx;
				padding: 35upx;

				.cu-avatar {
					border: 5upx solid #fff;
					height: 120upx;
					width: 120upx;
					margin-right: 22upx;
				}

				.name {
					font-size: 36upx;
					margin-right: 10upx;
				}

				.cu-tag {
					color: #333;
					font-size: 24upx;
					line-height: 36upx;
					margin-top: 5upx;
				}

				.cuIcon-right {
					font-size: 40upx;
				}

			}

			.stuinfo {
				margin: 0 37upx;
				overflow: hidden;
				border-radius: 20upx;
				color: #333;
				font-size: 26upx;

				.stuname {
					background: #eaf0fc;
					line-height: 45upx;

					font-size: 28upx;

					span {
						height: 45upx;
						background: #fff;
						padding: 0 25upx;
						display: inline-block;
					}

					&+view {
						padding: 30upx 50upx;

						.cu-avatar {
							border: 5upx solid #fff;
							height: 80upx;
							width: 80upx;
						}

						.line {
							margin: 0 12upx;
							width: 1px;
							height: 46upx;
							background: #ccc;
						}
					}
				}
			}

			.cu-list.menu>.cu-item .content>image {
				width: 1.2em;
				height: 1.2em;
				margin-right: 20upx;
			}

			.menu {
				margin: 10upx 40upx;
				font-size: 34upx;
				color: #333;
				font-weight: blod;


			}
		}

		.exitBtn {
			border-top: 10upx solid #f7f7fc;
			border-bottom: 10upx solid #f7f7fc;
			line-height: 80upx;
			text-align: center;
			color: #333;
			font-size: 34upx;
			font-weight: bold;
		}
	}
</style>
