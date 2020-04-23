<template>
  <view class="page_chart">
    <div class="chart-container">
      <ff-canvas id="column"
                 canvas-id="column"
                 :opts="opts" />

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
      var data = [
        {
          year: 2000,
          age: 27.2
        },
        {
          year: 2001,
          age: null
        },
        {
          year: 2002,
          age: 27.8
        },
        {
          year: 2003,
          age: 28
        },
        {
          year: 2004,
          age: 28.2
        },
        {
          year: 2005,
          age: 28.4
        },
        {
          year: 2006,
          age: 28.8
        },
        {
          year: 2007,
          age: 28.8
        },
        {
          year: 2008,
          age: 28.8
        },
        {
          year: 2009,
          age: 28.8
        },
        {
          year: 2010,
          age: 28.9
        },
        {
          year: 2011,
          age: 29
        },
        {
          year: 2012,
          age: 29.3
        },
        {
          year: 2013,
          age: 29.4
        },
        {
          year: 2014,
          age: 29.5
        },
        {
          year: 2015,
          age: 29.7
        },
        {
          year: 2016,
          age: 30
        },
        {
          year: 2017,
          age: 30.12
        }
      ];
      chart = new F2.Chart({
        el: canvas,
        width,
        height
      });

      chart.source(data, {
        date: {
          type: "timeCat",
          range: [0, 1],
          tickCount: 5
        }
      });
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
      chart.axis("year", {
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
      // chart
      //   .area()
      //   .position("year*age")
      //   .shape("smooth")
      //   .color("l(0) 0:#F2C587 0.5:#ED7973 1:#8659AF");
      chart
        .line({
			connectNulls:true
		})
        .position("year*age")
        .shape("smooth")
        .color("l(0) 0:#F2C587 0.5:#ED7973 1:#8659AF");

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
