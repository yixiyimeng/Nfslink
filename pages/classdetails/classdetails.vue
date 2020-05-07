<template>
	<view class="view-page">
		<div class="info">
			<view>
				<span class="cu-tag">{{topic.subjectName}}</span>
				<span class="cu-tag">{{topic.teacherName}}老师</span>
			</view>
			<view class="name text-bold">
				主题：{{topic.topicName}}
			</view>
			<view>{{topic.startDatetime||''}}-{{topic.endDatetime||''}}</view>
		</div>
		<div class="modbox">
			<div class="flex justify-between userinfobox align-center">
				<div class="flex-sub">
					<div class="text-bold">班级正确率名次</div>
					<div class="num red">{{detail.classRank||'--'}}</div>
				</div>
				<div class="userinfo">
					<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
					<view class="text-bold">{{userinfo.stuName||'--'}}</view>
				</div>
				<div class="flex-sub">
					<div class="text-bold">累计积分</div>
					<div class="num">{{detail.totalScore||'--'}}</div>
				</div>
			</div>
		</div>
		<div class="modbox">
			<div class="piebox flex justify-center">
				<view>
					<canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3"></canvas>
					<view class="text-bold">本堂课答题正确率</view>
				</view>
				<view>
					<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3"></canvas>
					<view class="text-bold">本堂课班级击败人数</view>
				</view>
			</div>
		</div>
		<div class="modbox">
			<div class="barbox flex justify-center align-center">
				<div class="flex justify-center">
					<view class="progress ">
						<view class="bg-black" :style="[{ height:detail.averageCorrectAccuracy||0}]">
							<text>{{detail.averageCorrectAccuracy||0}}</text>
						</view>
					</view>
					<view class="progress">
						<view class="bg-red" :style="[{ height:detail.bestCorrectAccuracy||0}]">
							<text>{{detail.bestCorrectAccuracy||0}}</text>
						</view>
					</view>
					<view class="progress">
						<view class="bg-blue" :style="[{ height:detail.stuCorrectAccuracy||0}]">
							<text>{{detail.stuCorrectAccuracy||0}}</text>
						</view>
					</view>
				</div>
				<div>
					<view class="flex align-center text-bold">
						<text>{{detail.averageCorrectAccuracy||0}}</text>
						<view class="tag bg-black"></view>
						<view>班级平均正确率</view>
					</view>
					<view class="flex align-center text-bold">
						<text>{{detail.bestCorrectAccuracy||0}}</text>
						<view class="tag bg-red"></view>
						<view>班级最高综合正确率</view>
					</view>
					<view class="flex align-center text-bold">
						<text>{{detail.stuCorrectAccuracy||0}}</text>
						<view class="tag bg-blue"></view>
						<view>我的正确率</view>
					</view>
				</div>
			</div>
		</div>
		<div class="modbox">
			<view class="tablebox">
				<view class="cu-bar bg-white">
					<view class="action text-bold">
						答题详情
					</view>
					<view class="action ft24 ">
						<text>答题数量共 <text class="text-red margin-left-xs margin-right-xs">{{detail.sendQuestionCount||0}}</text> 题</text>
						<text class="margin-left">答对数量 <text class="text-red margin-left-xs margin-right-xs">{{detail.answerTrueQuestionCount||0}}</text>
							题</text>
					</view>
				</view>
				<view class="table">
					<view class="table-hd flex justify-between text-bold">
						<view>题号</view>
						<view class="flex-sub">题目类型</view>
						<view class="flex-sub">学生答题</view>
						<view class="flex-sub">正确答案</view>
					</view>
					<view class="table-bd">
						<view class="table-td flex justify-between" v-for="(item,index) in detail.studentAnalyseDetail.questionList" :key="index">
							<view>{{item.questionId}}</view>
							<view class="flex-sub">{{item.questionName}}</view>
							<view class="flex-sub answer" :class="{'text-red':item.answerResult=='false'}">{{(item.questionName=='判断题'?(item.inputAnswer=='E'?'√':'×'):item.inputAnswer)||'--'}}</view>
							<view class="flex-sub answer">{{((item.questionName=='判断题'||item.questionName=='单选判断')?(item.trueAnswer=='E'?'√':'×'):item.trueAnswer)||'--'}}</view>
						</view>
					</view>
					<view class="noData" v-if="!detail.studentAnalyseDetail||detail.studentAnalyseDetail.questionList.length<=0">
						<image src="/static/noData.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</div>
		<div class="modbox">
			<view class="tablebox">
				<view class="cu-bar bg-white">
					<view class="action text-bold">
						语音题
					</view>
					<view class="action ft24 ">
						<text>答题数量共 <text class="text-red margin-left-xs margin-right-xs">{{voiceRecord.length||0}}</text> 题</text>
					</view>
				</view>
				<view class="table">
					<view class="table-hd flex justify-between text-bold">
						<view>序号</view>
						<view class="flex-sub">题目类型</view>
						<view class="flex-sub">学生答题</view>
						<view class="flex-sub">正确答案</view>
					</view>
					<view class="table-bd">
						<view class="table-td flex justify-between  align-center" v-for="(item,index) in voiceRecord" :key="index">
							<view>{{index+1}}</view>
							<view class="flex-sub">{{item.questionType}}</view>
							<view class="flex-sub" @tap="playVideo(item.voiceFileUrl,index,0)">
								<image src="../../static/icon7.png" mode="widthFix" class="notice" v-if="!(playindex==index&&typeindex==0&&ispalying)"></image>
								<image src="../../static/icon8.png" mode="widthFix" class="notice" v-if="playindex==index&&typeindex==0&&ispalying"></image>
							</view>
							<view class="flex-sub" @tap="playVideo(item.trueAnswer,index,1)">
								<image src="../../static/icon6.png" mode="widthFix" class="notice" v-if='item.trueAnswer&&!(playindex==index&&typeindex==1&&ispalying)'></image>
								<image src="../../static/icon8.png" mode="widthFix" class="notice" v-if="item.trueAnswer&&(playindex==index&&typeindex==1&&ispalying)"></image>
								<text v-if="!item.trueAnswer">--</text>
							</view>
						</view>
					</view>
					<view class="noData" v-if="voiceRecord.length<=0">
						<image src="/static/noData.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</div>
	</view>
</template>
<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import {
		api,
		postajax
	} from '@/utils/api.js'
	import {
		fileUrl
	} from '@/utils/index.js'
	var _self;
	var canvaArcbar1;

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				pixelRatio: 1,
				topic: {},
				detail: {},
				voiceRecord: [],
				innerAudioContext: null,
				userinfo: {},
				typeindex: 0,
				playindex: 0,
				ispalying: false
			}
		},
		onLoad(option) {
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
			this.cWidth3 = uni.upx2px(250); //这里要与样式的宽高对应
			this.cHeight3 = uni.upx2px(250); //这里要与样式的宽高对应
			this.arcbarWidth = uni.upx2px(34);
			this.cWidth = uni.upx2px(700); //这里要与样式的宽高对应
			this.cHeight = uni.upx2px(500); //这里要与样式的宽高对应
			this.userinfo = uni.getStorageSync('stuinfo')
			/* 获取主题信息 */
			this.topic = JSON.parse(decodeURIComponent(option.info));
			console.log(this.topic)
			this.init();
			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.onPlay(() => {
				this.ispalying = true
				console.log('开始播放');
			});
			this.innerAudioContext.onEnded(() => {
				this.innerAudioContext.src = '';
				this.typeindex = 0;
				this.playindex = 0;
				this.ispalying = false;
				console.log('开始结束');
			})
		},
		onPullDownRefresh() {
			this.init();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			init() {
				this.getstudentAnalyseDetail();
				this.getvoiceRecord();
			},
			getstudentAnalyseDetail() {

				postajax(api.studentAnalyseDetail, {
					"topicCode": this.topic.topicCode,
					"stuCode": this.userinfo.stuCode
				}).then(da => {
					{
						console.log(da)
						if (da.code == 0) {
							this.detail = da.data;
							this.getServerData();
						}
					}
				})
			},
			getServerData() {
				let Arcbar2 = {
					series: []
				};
				let Arcbar3 = {
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Arcbar2.series = [{
					name: '正确率',
					"data": this.detail.stuCorrectAccuracy ? this.detail.stuCorrectAccuracy.slice(0, this.detail.stuCorrectAccuracy.length -
						1) / 100 : 0,
					"color": "#81a3e2"
				}];
				Arcbar3.series = [{
					name: '击败人数比',
					"data": this.detail.defeatStuCount ? this.detail.defeatStuCount.slice(0, this.detail.defeatStuCount.length -1) /100 : 0,
					"color": "#99c2cc"
				}];
				_self.showArcbar2("canvasArcbar2", Arcbar2);
				_self.showArcbar3("canvasArcbar3", Arcbar3);

			},

			showArcbar2(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: (chartData.series[0].data * 10000/100).toFixed(2) + '%',
						color: '#e24545',
						fontSize: 16 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 12 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'circle',
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
							backgroundColor: '#e28193',
							startAngle: 1.25
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
			showArcbar3(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: (chartData.series[0].data* 10000/100).toFixed(2) + '%',
						color: chartData.series[0].color,
						fontSize: 16 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#333',
						fontSize: 12 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'circle', //整圆类型进度条图
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
							backgroundColor: '#e281b6',
							startAngle: 1.25,
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
			getvoiceRecord() {
				postajax(api.getvoiceRecord, {
					"topicCode": this.topic.topicCode,
					"stuCode": this.userinfo.stuCode
				}).then(da => {
					if (da.code == 0) {
						this.voiceRecord = da.data
					}
				})
			},
			playVideo(url, index, type) {
				this.innerAudioContext.autoplay = true;
				this.innerAudioContext.src = type == 1 ? url : (fileUrl + url);
				this.typeindex = type;
				this.playindex = index;
				console.log(this.innerAudioContext.src)
				if (this.innerAudioContext.src) {
					this.innerAudioContext.play();
				}
				console.log('播放')

			}
		},

	}
</script>


<style scoped lang="scss">
	.ft24 {
		font-size: 24upx;
	}

	.view-page {
		position: relative;
		// height: 100%;
		// overflow: hidden;
		padding-bottom: 40upx;
		background: #f7f7fc;

		.info {
			font-size: 24upx;
			color: #333;
			padding: 20upx 60upx;

			.cu-tag {
				color: #fff;
				background: #e281b6;
				border-radius: 8upx;
				height: 40upx;
				font-size: 20upx;

				&+.cu-tag {
					color: #81a3e2;
					background: #e9f1ff;
					border: 1px solid #81a3e2;
				}
			}

			.name {
				margin: 6upx 0;
				font-size: 30upx;
			}
		}

		.modbox {
			margin: 0 35upx;
			background: #fff;
			overflow: hidden;
			border-radius: 20upx;
			box-shadow: 0 0 8upx rgba($color: #000, $alpha: .1);

			&+.modbox {
				margin-top: 10upx;
			}
		}

		.userinfobox {
			padding: 20upx 50upx;
			text-align: center;
			font-size: 28upx;
			color: #666;

			.userinfo {
				margin: 0 50upx;
				color: #333;

				.cu-avatar {
					height: 84upx;
					width: 84upx;
					margin-bottom: 15upx;
				}
			}

			.num {
				font-size: 48upx;
				color: #4984d9;
				margin-top: 10upx;

				&.red {
					color: #e24545;
				}
			}
		}

		.piebox {
			padding: 60upx 0;
			text-align: center;
			font-size: 28upx;
		}
	}

	.charts3 {
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
		margin: 0 30upx;
	}

	.progress {
		width: 60upx;
		height: 200upx;
		background: #f4f4fe;
		display: flex;
		align-items: flex-end;
		margin: 0 4upx;

		&>view {
			width: 100%;
			position: relative;

			&>text {
				font-size: 18upx;
				position: absolute;
				top: -30upx;

				// transform-origin: 50% 100%;
				// -moz-transform: rotate(-90deg);
				// -webkit-transform: rotate(-90deg);
				// display: block;
				// position: absolute;
				// left: -10upx;
				// top: 10upx;
				// filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3)
			}
		}
	}

	.barbox {
		padding: 40upx 0;

		.bg-red {
			background: #e4816a;
			color: #e4816a;
		}

		.bg-blue {
			background: #81a3e2;
			color: #81a3e2;
		}

		.bg-black {
			background: #706775;
			color: #706775;
		}

		&>div+div {
			margin-left: 30upx;
			color: #706775;
			font-size: 28upx;

			.flex+.flex {
				margin-top: 16upx;
			}

			.tag {
				height: 28upx;
				width: 28upx;
				border-radius: 4upx;
				margin: 0 20upx;
			}
		}


	}

	.table {
		color: #333;
		text-align: center;
		font-size: 22upx;
		margin: 0 15upx;

	}

	.table-hd {
		font-size: 28upx;
		border-top: 1px solid #eee;
		padding: 20upx 0;

		&>view:first-child {
			width: 80upx;
		}
	}

	.table-bd {
		text-align: center;

		.table-td {
			border-top: 1px solid #eee;
			padding: 15upx 0;
			height: 70upx;
			font-size: 26upx;

		}

		.table-td .answer {
			color: #81a3e2;
		}

		.table-td>view:first-child {
			width: 80upx;
		}

		.notice {
			width: 34upx;

		}
	}

	.text-red {
		color: #e24545 !important;
	}
</style>
