<template>
	<view class="view-page">
		<view class="topbg">
			<image src="/static/top.png" mode="widthFix"></image>
		</view>
		<view class="group">
			<view class="row flex align-center" :class="{ active: focus == 1 }">
				<i class="user"></i>
				<input type="text" class="flex-sub" @focus="focustxt(1)" @blur="blurtxt" placeholder="请输入学校预留手机号" v-model.lazy="username" />
			</view>
			<view class="row flex align-center" :class="{ active: focus == 2 }">
				<i class="pwd"></i>
				<input type="password" class="flex-sub" @focus="focustxt(2)" @blur="blurtxt" placeholder="请输入密码" v-model.lazy="password" />
				<navigator class="link" url="/pages/forgetpwd/forgetpwd">忘记密码</navigator>
			</view>
			<view class="loginBtn" @tap="login">登录</view>
		</view>
	</view>
</template>

<script>
	import {
		api,
		postajax
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				focus: 0,
				username: '',
				password: ''

			};
		},
		onLoad() {
			let loginParam = uni.getStorageSync('loginParam')
			this.username = loginParam.username;
			this.password = loginParam.password
		},
		methods: {
			focustxt(type) {
				this.focus = type;
			},
			blurtxt() {
				this.focus = 0;
			},
			login() {
				if (this.password&&this.password.trim() && this.username&&this.username.trim()) {
					var param = {
						username: this.username,
						password: this.password,
						clientType:'miniProgram'
					}
					uni.clearStorageSync();
					postajax(api.login, param).then((da) => {
						console.log(da)
						if (da.code == 0) {
							uni.setStorageSync('loginParam', param)
							uni.setStorageSync('userinfo', da.data)
							uni.switchTab({
								url: '/pages/index/index'
							})

						}
					})
				} else {
					uni.showToast({
						title: '请输入正确的用户名和密码',
						icon: 'none'
					})
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.view-page {
		position: relative;
		height: 100%;

		.topbg {
			image {
				display: block;
				width: 100%;
			}
		}

		.group {
			margin: 220upx auto 0;
			width: 542upx;

			.row {
				border-radius: 100upx;
				height: 80upx;
				background: #fff;
				border: 1px solid #eee;
				padding: 0 40upx;


				&.row {
					margin-top: 20upx;
				}

				i {
					display: block;
					width: 40upx;
					height: 40upx;
					margin-right: 25upx;

					&.user {
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnCAYAAACFSPFPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MUFCMEI4NzdFNjAxMUVBQTM5MDhBMTYxQzI2MThFNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MUFCMEI4ODdFNjAxMUVBQTM5MDhBMTYxQzI2MThFNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxQUIwQjg1N0U2MDExRUFBMzkwOEExNjFDMjYxOEU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxQUIwQjg2N0U2MDExRUFBMzkwOEExNjFDMjYxOEU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Wd78swAAAltJREFUeNrMmM1LVGEUh9+5GboosQzBhFwkEoiRiywrgqAUo4UUVISrEAwiUNzkH1AuCqpFVLQIclERRYJMhC5KXIQgCQ3YIoIWBaVEuTC/cnqOHEGm1Ln3PXrnBw8zDMzluee+H+e9iXQ67TJz4sVPt0ISUA9n4QDshA0wDR/gNXT3NhUNu5BJhJSpg9tQk8W1k3AJqU/ZygQhxNtgMEsRyXEY4cYarWXa4UZIeclm6EGo3krmIFx30bMRHiNU6isjg/VOhIpkZgt0+co0QLWzSTPVKfOROePsItP/pI/MfmebOh+ZcmOZHT4y+cYy+T4y341lxnxkUsYyKR+Zl8YySR+Zh/DbSGQUBnxkxuGakUwnO/i87950BYY8RR4g0mOxUc5IiwPvI4qIxAXLFkKm5CF4FELij1b1FFWZyeYPeSEuPgHn4B5c1tbzfzcjA/4ZXEViNEwJ8yKU/Y2yFfZpDyzXmdIeeAiJySjPM0wPvEsb8EoogoJVrv0LvulCN4jgD9/KbIKL0AIVHrNpjht8xedNpPqjVEaOIregxHgVFqlWpD6vKoOINEF3tRprFbnb0wj1LSujIk9kOrq1zyw0IZRcbp3pWieRxVPDUwpQ9U9l+PGwTtn1zjuopUJzgYokdLDGETmhnl/6mI7CHhdfOqQgizLNLt7IQrp3aWXizrGA8hTzZXsOyOyWypS53EhpYHCot0phoJ1cLmQi0B4klQMy3YF27PLq4znMxyDxVXpkPO5nbpTyUucIVOmhf5s2UgvP1GN8TepwmNId+wt8hLcwgsiCxF8BBgAz+alXG2bP9QAAAABJRU5ErkJggg==) no-repeat center center;
						background-size: contain;
					}

					&.pwd {
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAnCAYAAACBvSFyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNEM4QUExODdFNjAxMUVBQjRDREZDQzRFMjEyNzhEQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNEM4QUExOTdFNjAxMUVBQjRDREZDQzRFMjEyNzhEQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI0QzhBQTE2N0U2MDExRUFCNENERkNDNEUyMTI3OERBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI0QzhBQTE3N0U2MDExRUFCNENERkNDNEUyMTI3OERBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xJBqIAAAAaxJREFUeNrsmEsrRFEcwM1j4xWSaRqvGoqVhQXNQomSmJiVvS9AWfAFRFYWfAfLISzGjiwkISmfAHk047UYTdP4HZ0pjXPvnEvmTjn/+nXuPffMnd95/TtdTy6Xq3AS0c2nDooB6IUmqIZXuINj2Idbq9/vxOq/1fk1/9hLMQUzECnSXPQqAauwp/N+r4ZAmOIQNjQERHhgVIpsQeOvJBDokUMcqfhZTMARtNg18tsIBGRvrHpyBWfwItv0QbuiXSfsQj+kHUkQKxBU1B/ALJwrpmEY1qGr4JkY0TlYUs6fanfIUbgBX8EjsdCikLGRb4ATCBfU30OI3ZHVXRODCgER80UERKQsehyQI6K9MJst6i81F+SFRX2bE4k6i0ST1ZTI2Gxf53miFGEk/oWEvxwkapw0/syYZMgQ10NfehCDSUX7ac33dsOCon4NTuW1OIMk2PZvnvF4aoSbOFS5sByuRXYW07HskkA+My96dQ4dfxxBIVFbDlvUZ5KVkTASRsJIFI+0kTBromwlki47JL3yu8G7SwIP4jtI/rTdys0YVJZQ4Bm2OW0/fggwANbQXS/INB1wAAAAAElFTkSuQmCC) no-repeat center center;
						background-size: contain;
					}
				}

				input {
					background: none;
					border: none;
					line-height: 80upx;
				}

				.link {
					color: #4944ff;
					font-size: 24upx;
				}

				&.active {
					border-color: #4944ff;

					i.user {
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnCAYAAACFSPFPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMTU4MDdFOTdFNjAxMUVBQjI0M0RGNjlERkU2RENDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMTU4MDdFQTdFNjAxMUVBQjI0M0RGNjlERkU2RENDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkExNTgwN0U3N0U2MDExRUFCMjQzREY2OURGRTZEQ0NBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkExNTgwN0U4N0U2MDExRUFCMjQzREY2OURGRTZEQ0NBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zTZV9QAAAm1JREFUeNrMmM1LVFEYh++cJmxRoSWBBbUwJBDDFmlqFEIfGC1CoVy0CAkMJDDa1B+QLgrShRi0CHKREQWCTEQtKlqEIAoO1CKCFgVpRLZQM3V8XnmDi81wP86ZGX/wcIaLzjzz3nPPec8kMpmMFyVnu34lGE5BOzRCJWyCP/ARXsMQjOd6j9GB0qzXE1FkEGlgGIBDIf48BVfhc1gZE0Gkm+FdSBHJGZiElrCfYUKKXGO4G0Vesw1G9LbayyDSxHDHi5/NMAwVVjI6WQdjVGR9yqDXtjKnocZzk4uwx0bmgucu8vi32sgc8dymwUZmn2OZvTYyJY5lSmxkph3LzNjIpB3LpG1knjuWSdnIPIR5RyIf4G1sGXbXHwy3HcnchBXbjfIWjFmKPNAN026jpDqLsk3BVEwRkbjirIVASB7Jo/AogsSyVrUNFsP8QyJG23mc4Yb2KNm+jEz4p9CjkzY/badPSIYdUK89cBIWtAeW+TUXUOms15MRBA5oA14F8m5bcmysl/T1LHzXhU7a1Z9Bn5EMENjK0AWXYb/F07QEL6APXkWeM4jIUaQfdjlehUWqk1v1JVAGCWmC7mk18hWZdOcReplTRkUe6+OY7/yFcwilcq0zvQUS+XdqeEIBqv+rDBePMbzxCp8JqKNCS8Z3JOn3ihM5oXb4b9MJqPWKl+tSEOM70xQzspAe9lem2DlpKM9OXuzeADIHTdCRs4CpMA4O9a6y3YRtfAqQ30Z7kPQGkBkyrHwr+tPHs6DuPU/5Jj0yHvfXb5Tyo04zVOuhv1wbqbV7ajG/5nQ6LOiO/RU+wXuYRGRNYlWAAQAnnqoYSiKvsgAAAABJRU5ErkJggg==);
					}

					i.pwd {
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAnCAYAAACBvSFyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQ0NCREREQTdFNjAxMUVBQTlDMEFGRjFCRUE0MUUyOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0NCREREQjdFNjAxMUVBQTlDMEFGRjFCRUE0MUUyOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNDQ0JEREQ4N0U2MDExRUFBOUMwQUZGMUJFQTQxRTI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNDQ0JEREQ5N0U2MDExRUFBOUMwQUZGMUJFQTQxRTI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4WE+xwAAAZ5JREFUeNpi/P//PwM68Mn+wIAHKAOxLRAbAbEoEHMD8WcgfgnEp4D44JapAs8ZSAAsRKpjAuIwIM4DYksCav8DPbETSPcDHbOLGMMZiQgJJSBeQoTl2MAmIE4COuYtIR/iA3rQICbHASDgB8QngJ6SIdcRYkAMClZhHPLXgXgZEM8A4tVA/BCHOhUg3gp0CAc5aaITiCWwiB8C4nwgvoAetUDsDMRTgFgdS4gWAXEbKWkCFArPgJgZTQqU0HyA+DcexwsC8RloWkIGr4BYCpg+/hIbHQ5YHAACZQQcAALvcfhYDBoiRKcJaRziV4hMkJdwiMuR4gh+HOJ/iXQErtBiJCeL0gWMOmJEOIJlMDiCh2QXA0tIKSDlhOQDAxzqE4g0VwOHuBPQLgEoG9QG2QksQb8weme9dwNy1gMx1wAkh6eg0hkUHe0D5ABYydzChKeqpheQADmCdzBkUebRwmrUEaOOGHXEqCMIgx+jjhhNE4PWEe8G2A3vmKDjBj8HyAGvQeMg4PEJYAtYFsjxAmJOOjrgIxBvBra23wAEGAA0x1wTauzKDAAAAABJRU5ErkJggg==);
					}
				}
			}

			.loginBtn {
				color: #fff;
				background: #4944ff;
				line-height: 80upx;
				text-align: center;
				margin: 50upx auto 0;
				border-radius: 100upx;
				font-size: 40upx;
			}
		}
	}
</style>
