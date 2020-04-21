<template>
	<view class="view-page  flex-direction">
		<div class="top bg-white">
			<div class="userinfo flex align-center">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
				<view>
					<view class="name">{{userinfo.stuName}}</view>
					<view>{{userinfo.className}}</view>
					<view class="cu-tag bg-white round">{{userinfo.className}}</view>
				</view>
			</div>
			<div class="rili bg-white">
				<div class="title flex justify-between align-center">
					<span class="arrow" @tap="prevweek"><text class="cuIcon-back"></text></span>
					<span>{{selectTime|filterDay}}</span>
					<span class="arrow" @tap="nextweek"><text class="cuIcon-right"></text></span>
				</div>
				<div class="rili-hd flex">
					<text class="flex-sub">一</text>
					<text class="flex-sub">二</text>
					<text class="flex-sub">三</text>
					<text class="flex-sub">四</text>
					<text class="flex-sub">五</text>
					<text class="flex-sub">六</text>
					<text class="flex-sub">日</text>
				</div>
				<div class="rili-bd flex ">
					<span class="flex-sub" v-for="(day,index) in daylist" :key="index" @tap="checkday(index)"><text :class="{active:day.isCheck,disable:day.isdisable}">{{day.day}}</text></span>
				</div>
			</div>
		</div>
		<div class="flex-sub main">
			<view class="bg-white">
				<view class="cu-bar ">
					<view class="action">
						<text class="cuIcon-titles "></text>
						<text>课程详情</text>
					</view>
				</view>
				<view class="topiclist ">
					<view class="topic-item flex align-center" @tap="showDetails(item)" v-for="(item,index) in topiclist" :key="index">
						<view class="name">{{item.subjectName}}</view>
						<view class="flex-sub">
							<view>
								<text class="cuIcon-title"></text>
								<text>{{item.startDatetime|filterTime}}-{{item.endDatetime|filterTime}} / {{item.teacherName}}老师</text>
							</view>
							<view>
								<text class="cuIcon-title"></text>
								<text>主题：{{item.topicName}}</text>
							</view>

						</view>
						<view>
							<view class="text-red">
								<text class="ft40">{{item.correctPercent|filternum}}</text>
								<text class="ft20">%</text>
							</view>
							<view>正确率</view>
						</view>
					</view>
					<view class="noData" v-if="topiclist.length<=0">
						<image src="/static/noData.png" mode="widthFix"></image>
					</view>
				</view>
				<!-- <view class="more" >查看更多>></view> -->
			</view>
			<view class="bg-white mt15">
				<view class="cu-bar">
					<view class="action">
						<text class="cuIcon-titles "></text>
						<text>进步趋势</text>
					</view>
					<view class="action selectTime">
						<picker mode="date" :value="startdate" start="2015-09-01" end="2020-09-01" @change="startDateChange">
							<view class="picker">
								{{startdate|filterTimeFormat(0)}}
							</view>
						</picker>
						<text>-</text>
						<picker mode="date" :value="enddate" start="2015-09-01" end="2020-09-01" @change="endDateChange">
							<view class="picker">
								{{enddate|filterTimeFormat(1)}}
							</view>
						</picker>
						<image src="/static/icon5.png" mode="widthFix"></image>
					</view>
				</view>
				<!-- <view class="navbar flex justify-center">
					<span class="active">语文</span>
					<span>数学</span>
				</view> -->
				<view class="cu-card">
					<view class="cu-item shadow">
						<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
					</view>
				</view>
			</view>
		</div>
	</view>
</template>

<script>
	import dayjs from '@/utils/dayjs.min.js'
	import {
		api,
		postajax
	} from '@/utils/api.js'
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaLineA = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: '',
				startdate: null,
				enddate: null,
				daylist: [],
				nowYear: '',
				nowMonth: '',
				nowWeek: '',
				vNowDate: dayjs(),
				selectTime: '',
				today: dayjs(),
				topiclist: [],
				userinfo: {}
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(500);
			this.init();
		},
		onPullDownRefresh() {
			this.init();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		watch: {
			selectTime(newval, oldval) {
				if (newval != oldval) {
					if (this.userinfo && this.userinfo.stuCode) {
						this.gettopiclist();
						this.advanceProgress();
					}
				}
			}
		},
		methods: {
			init() {
				this.getdaylist(this.vNowDate);
				this.selectTime = dayjs().format('YYYY-MM-DD')
				this.getUserinfo();
			},
			prevweek() {
				var vNowDate = this.vNowDate.subtract(7, "day")
				this.getdaylist(vNowDate)
				this.getDatePullList()
			},
			nextweek() {
				var vNowDate = this.vNowDate.add(7, "day")
				this.getdaylist(vNowDate);
				this.getDatePullList()
			},
			getdaylist(dayjs) {
				var vNowDate = dayjs;
				if (vNowDate.day() == 0) {
					vNowDate = vNowDate.subtract(7, "day")
				}
				this.vNowDate = vNowDate;
				this.daylist = [];
				for (var i = 1; i <= 7; i++) {
					var item = {
						allday: vNowDate.day(i).format('YYYY-MM-DD'),
						day: vNowDate.day(i).format('D'),
						isCheck: false
					}
					item.isdisable = true;
					if (vNowDate.day(i).isSame(vNowDate)) {
						this.selectTime = vNowDate.format('YYYY-MM-DD')
						item.isCheck = true;
					}
					this.daylist.push(item)
				}
				this.startdate = this.daylist[0].allday;
				/* 结束时间，比较最后一天和今天 */
				if (vNowDate.day(7).isBefore(this.today)) {
					this.enddate = this.daylist[6].allday;
				} else {
					this.enddate = this.today.format('YYYY-MM-DD')
				}

				this.nowYear = this.vNowDate.year();
				this.nowMonth = this.vNowDate.month() + 1;
				this.nowWeek = Math.ceil((this.vNowDate.date() + 6 - (this.vNowDate.day() == 0 ? 7 : this.vNowDate.day())) / 7);
			},
			getDatePullList() {
				postajax(api.getDatePullList, {
					"stuCode": this.userinfo.stuCode,
					"queryStartTime": this.startdate + ' 00:00:00',
					"queryEndTime": this.daylist[this.daylist.length - 1].allday + ' 23:59:59'
				}).then(da => {
					{
						if (da.code == 0 && da.data && da.data.length > 0) {
							this.daylist.forEach(item => {
								var index = da.data.findIndex(subitem => subitem.title == item.allday)
								if (index > -1) {
									item.isdisable = false;
								}
							})
						}
					}
				})
			},
			gettopiclist() {
				/* 查询主题列表 */
				postajax(api.gettopiclist, {
					"stuCode": this.userinfo.stuCode,
					"queryDate": this.selectTime
				}).then(da => {
					{
						if (da.code == 0 && da.data) {
							this.topiclist = da.data;
						}
					}
				})
			},
			advanceProgress() {
				/* 进步趋势 */
				postajax(api.advanceProgress, {
					"queryStartDate": this.startdate + ' 00:00:00',
					"queryEndDate": this.enddate + ' 23:59:59',
					"classCode": this.userinfo.classCode,
					"stuCode": this.userinfo.stuCode
				}).then(da => {
					{
						console.log(da)
						if (da.code == 0 && da.data) {
							// this.topiclist = da.data;
							var trendTimeLineList = da.data.trendTimeLineList;
							var categories = [];
							var studentJoinAccuracy = [];
							var studentCorrectAccuracy = [];
							if (trendTimeLineList && trendTimeLineList.length > 0)
								for (var i = 0; i < trendTimeLineList.length; i++) {
									categories.push(trendTimeLineList[i].date)
									studentJoinAccuracy.push(parseFloat(trendTimeLineList[i].studentCorrectAccuracy.replace(/%/, '')))
									studentCorrectAccuracy.push(parseFloat(trendTimeLineList[i].studentJoinAccuracy.replace(/%/, '')))
								}
							var series = [{
								data: studentCorrectAccuracy,
								name: '综合正确率进步趋势'
							}, {
								data: studentJoinAccuracy,
								name: '参与率进步趋势'
							}]

							this.getServerData(categories, series);
						}
					}
				})
			},
			checkday(index) {
				/* 先判断是否可以点击 */
				if (!this.daylist[index].isdisable) {
					this.daylist.forEach((item, subindex) => {
						if (index == subindex) {
							item.isCheck = true;
							this.selectTime = item.allday;
						} else {
							item.isCheck = false
						}
					})
				}
			},
			getUserinfo() {
				postajax(api.getuserinfo).then(da => {
					{
						console.log(da)
						if (da.code == 0 && da.data && da.data.length > 0) {
							this.userinfo = da.data[0];
							uni.setStorageSync('userinfo', da.data[0]);
							this.gettopiclist();
							this.advanceProgress();
							this.getDatePullList();
						}
					}
				})
			},
			getServerData(categories, series) {
				let LineA = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				LineA.categories = categories;
				LineA.series = series;
				_self.showLineA("canvasLineA", LineA);

			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding: [15, 20, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					dataLabel: true,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8,
						boundaryGap: 'justify'
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						format: (val) => {
							return val.toFixed(0) + '%'
						},
						type: 'value',
						max: 100,
						min: 0


					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'curve'
						}
					}
				});

			},
			touchLineA(e) {
				canvaLineA.touchLegend(e);
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			startDateChange(e) {
				this.startdate = e.detail.value;
				/* 更新进步趋势 */
				if (this.startdate && this.enddate) {
					this.advanceProgress()
				}
			},
			endDateChange(e) {
				this.enddate = e.detail.value;
				/* 更新进步趋势 */
				if (this.startdate && this.enddate) {
					this.advanceProgress()
				}
			},
			showDetails(obj) {
				console.log(obj)
				uni.navigateTo({
					url: '/pages/classdetails/classdetails?info=' + encodeURIComponent(JSON.stringify(obj))
				})
			}
		},
		filters: {
			filternum(value) {
				let s = value || 0;
				console.log(value)
				if (value && value.length > 0) {

					s = value.slice(0, value.length - 1)
				}
				return s
			},
			filterTime(value) {
				let s = value || '';
				console.log(value)
				if (value && value.length > 0) {

					s = value.slice(10, value.length)
				}
				return s
			},
			filterTimeFormat(value, type) {
				let s = value || (type == 0 ? '请选择开始时间' : '请选择结束时间');
				if (value && value.length > 0) {
					s = value.replace(/-/g, '.')
				}
				return s
			},
			filterDay(value) {
				let s = value || '';
				if (value && value.length > 0) {
					s = value.split('-')
					if (s.length == 3) {
						return s[0] + '年' + s[1] + '月' + s[2] + '日'
					}
					return s
				}
				return s
			}
		}
	}
</script>

<style scoped lang="scss">
	.view-page {
		.mt15 {
			margin-top: 15upx;
		}

		position: relative;
		// height: 100%;
		// overflow: auto;
		background: #f7f7fc;

		.userinfo {
			background: #81a3e2;
			padding: 40upx 36upx 18upx;
			color: #fff;
			font-size: 24upx;

			.cu-avatar {
				border: 5upx solid #fff;
				height: 120upx;
				width: 120upx;
				margin-right: 15upx;
			}

			.name {
				font-size: 30upx;
			}

			.cu-tag {
				color: #333;
				font-size: 20upx;
				height: 30upx;
				margin-top: 5upx;
			}
		}

		.rili {
			text-align: center;

			.title {
				color: #333;
				font-size: 30upx;
				line-height: 60upx;
				padding: 0 20upx;

				.arrow {
					color: #999;
					font-size: 40upx;
					padding: 0 10upx;
				}
			}

			.rili-hd {
				background: #ececf2;
				line-height: 50upx;
				color: #333;
				font-size: 24upx;
			}

			.rili-bd {
				text {
					height: 60upx;
					width: 60upx;
					line-height: 60upx;
					border-radius: 100%;
					display: block;
					color: #333;
					margin: 24upx auto;
					background: #d1d1e9;

					&.disable {
						background: #ececf2;
					}

					&.active {
						background: #81a3e2;
						color: #fff;
					}
				}
			}
		}

		.main {
			// overflow: auto;
			// height: 100px;
			margin-top: 16upx;
			-webkit-overflow-scrolling: touch;

			.cu-bar .cuIcon-titles {
				color: #81a3e2;
			}

			.topiclist {
				padding: 0 15px;

				.topic-item {
					padding: 30upx 0;
					border-top: 1px solid #f7f7fc;
					font-size: 22upx;
					color: #333;

					&:last-child {
						border-bottom: 1px solid #f7f7fc;

					}

					.name {
						color: #fff;
						font-size: 24upx;
						background: #e281b6;
						border-radius: 100%;
						height: 70upx;
						width: 70upx;
						text-align: center;
						line-height: 70upx;
						margin-right: 15upx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					.text-red {}

					.ft40 {
						font-size: 40upx;
						line-height: 30upx;
					}

					.ft20 {
						font-size: 20upx;
					}
				}
			}

			.more {
				color: #333;
				font-size: 18upx;
				text-align: center;
				line-height: 60upx;
			}

			.navbar {
				padding: 25upx 0 0;
				font-size: 20upx;
				color: #333;

				span {
					padding: 0 16upx;
					line-height: 36upx;
					margin: 0 10upx;
					display: inline-block;
					border-radius: 50upx;

					&.active {
						color: #fff;
						background: #81a3e2;
					}
				}
			}

			.shadow {
				box-shadow: 0 0 8upx rgba(0, 0, 0, 0.2);
			}

			.selectTime {
				border: 1px solid #f2f2f4;
				border-radius: 10upx;
				line-height: 44upx;
				color: #666;
				font-size: 20upx;
				padding: 0 10upx 0 20upx;

				image {
					width: 25upx;
					margin-left: 20upx;
				}
			}
		}

		.charts {
			width: 750upx;
			height: 500upx;
			background-color: #FFFFFF;
			position: relative;
		}
	}
</style>
