<template>
	<view class="page_chart">
		<div class="chart-container">
			<ff-canvas id="column" canvas-id="column" :opts="opts" />

		</div>
	</view>
</template>

<script>
	import F2 from "@/static/aibokalv-chart/lib/f2";

	F2.Util.addEventListener = function(source, type, listener) {
		source.addListener(type, listener);
	};

	F2.Util.removeEventListener = function(source, type, listener) {
		source.removeListener(type, listener);
	};

	F2.Util.createEvent = function(event, chart) {
		const type = event.type;
		let x = 0;
		let y = 0;
		const touches = event.touches;
		if (touches && touches.length > 0) {
			x = touches[0].x;
			y = touches[0].y;
		}

		return {
			type,
			chart,
			x,
			y
		};
	};
	let chart = null;
	export default {
		data() {
			return {
				title: "column",
				opts: {
					lazyLoad: true
				}
			};
		},
		onLoad() {},
		mounted() {
			this.$mp.page.selectComponent("#column").init(this.initChart);
		},
		methods: {
			initChart(canvas, width, height) {
				// 使用 F2 绘制图表
				var data = [{
					time: '2016-08-08 00:00:00',
					value: 10,
					type: '预期收益率'
				}, {
					time: '2016-08-08 00:10:00',
					value: 22,
					type: '预期收益率'
				}, {
					time: '2016-08-08 00:30:00',
					value: 16,
					type: '预期收益率'
				}, {
					time: '2016-08-09 00:35:00',
					value: 26,
					type: '预期收益率'
				}, {
					time: '2016-08-09 01:00:00',
					value: 12,
					type: '预期收益率'
				}, {
					time: '2016-08-09 01:20:00',
					value: 26,
					type: '预期收益率'
				}, {
					time: '2016-08-10 01:40:00',
					value: 18,
					type: '预期收益率'
				}, {
					time: '2016-08-10 02:00:00',
					value: 26,
					type: '预期收益率'
				}, {
					time: '2016-08-10 02:20:00',
					value: 12,
					type: '预期收益率'
				}, {
					time: '2016-08-08 00:00:00',
					value: 4,
					type: '实际收益率'
				}, {
					time: '2016-08-08 00:10:00',
					value: 3,
					type: '实际收益率'
				}, {
					time: '2016-08-08 00:30:00',
					value: 6,
					type: '实际收益率'
				}, {
					time: '2016-08-09 00:35:00',
					value: -12,
					type: '实际收益率'
				}, {
					time: '2016-08-09 01:00:00',
					value: 1,
					type: '实际收益率'
				}, {
					time: '2016-08-09 01:20:00',
					value: 9,
					type: '实际收益率'
				}, {
					time: '2016-08-10 01:40:00',
					value: 13,
					type: '实际收益率'
				}, {
					time: '2016-08-10 02:00:00',
					value: -3,
					type: '实际收益率'
				}, {
					time: '2016-08-10 02:20:00',
					value: 11,
					type: '实际收益率'
				}];
				chart = new F2.Chart({
					el: canvas,
					width,
					height
				});

				chart.source(data, {
					time: {
						type: 'timeCat',
						tickCount: 5,
						mask: 'hh:mm',
						range: [0, 1]
					},
					value: {
						tickCount: 3,
						formatter: function formatter(ivalue) {
							return ivalue + '%';
						}
					}

				});
				// chart.scale('time', {
				// 	tickCount: 6
				// });
				chart.tooltip({
					showCrosshairs: true,
					onShow: function onShow(ev) {
						var items = ev.items;
						items[0].name = items[0].title;
					}
				});
				// let maxItem = data[2];
				// console.log(maxItem, maxItem.year, maxItem.age);
				// chart.guide().tag({
				//   position: [maxItem.year, maxItem.age],
				//   content: `${maxItem.age}`,
				//   direct: "tl",
				//   offsetY: 0,
				//   background: {
				//     fill: "#8659AF"
				//   },
				//   pointStyle: {
				//     fill: "#8659AF"
				//   }
				// });
				chart.axis("time", {
					label: function label(text, index, total) {
						var textCfg = {};
						if (index === 0) {
							textCfg.textAlign = "left";
						} else if (index === total - 1) {
							textCfg.textAlign = "right";
						}

						return textCfg;
					}
				});

				chart
					.line({
						connectNulls: true
					}).color('type')
					.position("time*value")
					.shape("smooth");

				chart.point().position('time*value').shape('smooth')
					.style({
						stroke: '#fff',
						lineWidth: 1
					})
				chart.legend({
					position: 'bottom',
					offsetY: -5,
					align:'center'
				});
				chart.render();
				return chart;
			}
		}
	};
</script>

<style lang="less">
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.page_chart {
		width: 100vw;
		height: auto;
		padding: 25upx;

		.chart-container {
			width: 100%;
			height: 500upx;
			//  background-image: linear-gradient(-135deg, #874BFF 0%, #6854EE 43%, #6052F2 63%, #534FFA 100%);
			background: #fff;
			border-radius: 1.0666666666666667vw;
		}

		.nodata {
			text-align: center;
			padding: 50upx;
			color: #333;
		}
	}
</style>
