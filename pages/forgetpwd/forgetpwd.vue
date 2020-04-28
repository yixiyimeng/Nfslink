<template>
	<view class="page-view">
		<view class="step">
			<div class="card shadow bg-white">
				<div class="title">重置密码</div>
				<div class="group">
					<view class="row flex align-center">
						<i class="icon1"></i>
						<input type="text" value="" placeholder="请输入手机号码" class="flex-sub" placeholder-style="color:#ccc"/>
						<view class="getcode">获取验证码</view>
					</view>
					<view class="row flex align-center">
						<i class="icon2"></i>
						<input type="text" value="" placeholder="请输入收到的验证码" class="flex-sub" placeholder-style="color:#ccc"/>
					</view>
				</div>
			</div>
			<view class="stepBtn">下一步</view>
		</view>
		<view class="step">
			<div class="card shadow bg-white">
				<div class="title">重置密码</div>
				<div class="group">
					<view class="row flex align-center">
						<i class="icon3"></i>
						<input type="password" value="" placeholder="请输入新的密码" class="flex-sub" placeholder-style="color:#ccc"/>
					</view>
					<view class="row flex align-center">
						<i class="icon3"></i>
						<input type="password" value="" placeholder="请再次输入密码" class="flex-sub" placeholder-style="color:#ccc"/>
					</view>
				</div>
			</div>
			<view class="stepBtn">重置密码</view>
		</view>
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

<style lang="scss">
	page,
	.page-view {
		height: 100%;
		width: 100%;
		background: #81a3e2;
	}
	.step{
		padding-top: 300upx;
	}
	.card{
		border-radius: 10upx;
		padding: 35upx 50upx 60upx;
		margin: 0 60upx;
		.title{
			text-align: center;
			color: #666;
			font-size: 34upx;
		}
		.group{
			margin-top: 60upx;
			.row{
				line-height: 50upx;
				&+.row{
					margin-top: 40upx;
				}
				i{
					display: block;
					width: 40upx;
					height: 40upx;
					margin-right: 25upx;
					background: no-repeat center center;
					background-size: contain;
					&.icon1{
						background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAApCAYAAAArpDnNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRkYwNkQxQTg5MDExMUVBQjEyMEQ4NDY0NzA2NTdFNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRkYwNkQxQjg5MDExMUVBQjEyMEQ4NDY0NzA2NTdFNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBGRjA2RDE4ODkwMTExRUFCMTIwRDg0NjQ3MDY1N0U0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBGRjA2RDE5ODkwMTExRUFCMTIwRDg0NjQ3MDY1N0U0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+swLf7gAAAQxJREFUeNpi/P//P0O8zwcmBgYGdSBmZ6Au+AnENxduEfjHGOf9XgHI2QTEugy0AZeB2A/kk+k0tIQBavZ0kEWWDLQHlkwMdAIsWMSqoMFJCYgC4qmELPoOTCUfKLEFmIq/oYvRLehGLRq1aNSiUYtGLRq1aNSiUYvIbW5xAlsxAhSay0WMRW1QPHLi6AEU08yiT0DsBmzFKoIwiA0Vo7pFVUALdsM4UHYVLSw6Bm1Xs4Mwshi1LdKEJX8oRhYjKx/hAh1An5wEBtldqM+UQWK0sEgWiK8ALTgA5TsAMQcpFh0HYg8i1XOQoBYZHAfFUSa050wrADI7kxFpnEEDiMWobMkrIL4BGmcACDAAt2hD+3w+mfkAAAAASUVORK5CYII=');
					}
					&.icon2{
						background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRjI1NUZCRDg5MDExMUVBOTRENEExRkNBMURERjUyRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRjI1NUZCRTg5MDExMUVBOTRENEExRkNBMURERjUyRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGMjU1RkJCODkwMTExRUE5NEQ0QTFGQ0ExRERGNTJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGMjU1RkJDODkwMTExRUE5NEQ0QTFGQ0ExRERGNTJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+poSmwgAAAvFJREFUeNrMmFuITVEYx8/ZhsYlTfGEB9fCg5QiiZnkQWZyykQxRCFG7i9mHkS586BMTZJbkyiXko67MCdKhjIlMQ+ihsl1NMegYc7x+6Zvazuds/fa27n46tc6e5+11/rvdfm+b69wMpkMBbG7FV8GUxyAGfAKauGhnzbKoiU9pRVQwESKJlgGI2Em3FchRX7bs3x2PgB2qIDhKX9L57v1v+l+2i0y7HwMxVJYDYM8qssoxeAa7JPHA4ugYxnmObAIpgaYtdlKK9yCm9AIb1IrhmVh0qFMy3yYAqNhEgwJ5cbewRN4AEdZnK22iCPcWBnKv32ACeE75e3F/OgMulOyYBul45ICCuhZEtJ5caiwNtAKFd6s/0FEXtbCZRgHKwol4jRE4Dkcg5Z8izgMS6Bbr6fBiDT1fuRKxH5YAwm9nqVuu3cQEbc1IG12NOhlW2EL2ImKTMcV6Juhftwriu7CtzdTNuPaO8TXe9TfAIcc11XQ4DHtXfJn2KXCXEcWJAtrfYZ6MkrLUwRUwymDdfdZKsTd3owRqHEIqdPsyWk/YSEcd9yTZ+oNp69FRHyCdpdKexCy1iFkryYrYt9hHpx11ldM7Bu8tGg0aZCg1iFklUOIvKmIqYCoHYj07Wt87KIYbXXb83XR4IF6hFQ5hNTq7hHrpQuw2udWvu50Vudlvxq4+AaEVKbc7wMXYLFPAQl7Gi19q48UJw1jzRmE2Lumn8aGSACHdpV+3/7JMTWxHUrxAvobNCA74pI6slEBvWopImJ/xQ5uSBa83bABcb+V/yDghn4WpA1gB+FejiNrF2zKGEVlu1AsgLYcitgGz1xDOULa1F135EBAVCOsdz6BkEcqJJ5FAU0a0BLGSQ1CGjUPeJ8FAY+hPNPoWh7nB+LOJ2sjQU28cal+bQXLMRHyWj+IJSj98tH5V1inAa7T9evHz0kNDm28nkFEPLbgCdipX+SeJzXhIMdFiBmrsaIMhmnHT/UI4Jzb0KcT8VuAAQAim9jOo/a9ZwAAAABJRU5ErkJggg==');
					}
					&.icon3{
						background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAmCAYAAADTGStiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUQ4MTg4Mzg5MDQxMUVBOThGMENFM0E0MDBBRDYwQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNUQ4MTg4NDg5MDQxMUVBOThGMENFM0E0MDBBRDYwQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RDgxODgxODkwNDExRUE5OEYwQ0UzQTQwMEFENjBBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1RDgxODgyODkwNDExRUE5OEYwQ0UzQTQwMEFENjBBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c9LmtAAAAkxJREFUeNrUmEsoRFEYx+/cmTAiIjUJSaRsSCJR8s6OskBWSiyURylqUl6xZSHJwkJYSRZTwmSHGgukSJkkCwtF5JXX/+jQ6XTn3nvuzNybr/6d+a7vfr977nl9l00SNMfKUj6aEigdskF+aPe9qcUnksemE0biWqEhKDNA2Dk0Bi3iIT6DBgMah2YZqtPZmU2oGfBbw2BAY9BsQ4WCI3IIlQF+HyhA1kgwpwA9hnqgcqpe6ISLyaX3ivcYva2gvWWNjPE4P4aIJR1wQ8NcfCVivYr5VR6qm/OnkGRUKZA+yAgeIIG7rw/y6n7VSBCBppq5dEd7pGVuGvtrVcgVLTLG2ZCT8T3o1aMWlcZ4mEuRgZZfIHAi5/sFZvQF5yeJgJ18ZwTAb5wfKwK2c/69APiB819FwI+C610t9ll1HWP2ZaFphDKgVKiWiTuDNqAv5lo8k5jtFVkNOYxP7juFLqE1TED/HxjQfjQTCq841EbGvxfwGRugDXBWJXOthozHgGS+DRJwngXgYgKOsAAcJRu46QZqg1x09ndz+7O+EsrArCRHHXv+TmOC7qDdU9jxdC92LVvgoL+HwxGaeSmIXUbLtlT+5gsnWC0+PpzgLoynXaFwIHlawgkuJSWQQs09CxWFE0ysk9ZWbLXSLoVwzCSVszqN3QyM7CCyZJH9O3Ay89tlJIHDIHgYE+yKViSjZoILoKNgX/WTBUP8RsD7FoAPZPoVb7ZNyvQzsgN6MQFIvkj6wFxn6+oUNPX0nyqOEAM/oGtaV/98W30LMABPdZKYoBVtTwAAAABJRU5ErkJggg==');
					}
				}
				input{
					border-bottom: 1px solid #f7f7fc;
					font-size: 30upx;
				}
				.getcode{
					color: #fff;
					background: #4b6aef;
					border-radius: 6upx;
					width: 140upx;
					line-height: 50upx;
					text-align: center;
					font-size: 20upx;
				}
			}
			
		}
	}
	.stepBtn{
		font-size: 40upx;
		color: #fff;
		line-height: 80upx;
		text-align: center;
		width: 540upx;
		margin: 60upx auto 0;
		background: #4b6aef;
		border-radius: 100upx;
	}
</style>
