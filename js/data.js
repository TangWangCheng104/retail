/**
 * Created by Administrator on 2017/4/27.
 */
$(function () {
    //window.ontouchstart = function(e) { e.preventDefault(); };
    $(".js_daysChangeItem").click(function (e) {
        var index = $(this).index();
        $(".js_mainChart").hide();
        $(".js_mainChart").eq(index).show();
        $(".js_daysChangeItem").removeClass("active");
        $(".js_daysChangeItem").eq(index).addClass("active");
        e.preventDefault();
    });
    $(".js_pieChart_menu").click(function (e) {
        var index = $(this).index();
        $(".js_pieChart_item").hide();
        $(".js_pieChart_item").eq(index).show();
        $(".js_pieChart_menu").removeClass("active");
        $(".js_pieChart_menu").eq(index).addClass("active");
        $(".js_list_item").hide();
        $(".js_pieChart_item").eq(index).find(".js_list_item").show();
        e.preventDefault();
    });

});

//双折线图初始化方法
function chart_line(obj) {
    var myChart = echarts.init(document.getElementById(obj.id));
    var option = {
        color: ['#ffca83', '#ff7d7d'],
        title: {
//            text: '金额(万)',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 12,
                color: colors[0]
            },
            left: '6%'
        },
        backgroundColor: '#4bc6e8',
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [obj.name01, obj.name02],
            textStyle: {
                fontSize: 12,
                color: colors[0]
            }
        },
        grid: {	//设置图标上面和下面的距离
            bottom: 40,
            y: 45
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            data: obj.dataX
        },
        yAxis: {
            type: 'value',
            splitNumber: 3,
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            splitLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            name: obj.nameY,
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                name: obj.name01,
                type: 'line',
                data: obj.dataY1,
                markPoint: {
                    data: [
                        {
                            name: obj.name01,
                            value: '{value}',
                            xAxis: obj.dataX.length - 1,
                            yAxis: obj.dataY1[obj.dataY1.length - 1]
                        }
                    ]
                }
            },
            {
                name: obj.name02,
                type: 'line',
                data: obj.dataY2,
                markPoint: {
                    data: [
                        {
                            name: obj.name02,
                            value: '{value}',
                            xAxis: obj.dataX.length - 1,
                            yAxis: obj.dataY2[obj.dataY2.length - 1]
                        }
                    ]
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//单折线图初始化方法
function chart_line01(obj) {
    var colors = ['#999999', '#fff'];
    var myChart = echarts.init(document.getElementById(obj.id));
    var option = {
        color: ['#fd7d7a', '#999999'],
        title: {
//            text: '金额(万)',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 12,
                color: colors[0]
            },
            left: '6%'
        },
        backgroundColor: colors[1],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [obj.name],
            textStyle: {
                fontSize: 12,
                color: colors[0]
            },
            show: false
        },
        grid: {	//设置图标上面和下面的距离
            bottom: 40,
            y: 45
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            data: obj.dataX
        },
        yAxis: {
            type: 'value',
            splitNumber: 3,
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            splitLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            name: obj.nameY,
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            //{
            //    name: obj.name01,
            //    type: 'line',
            //    data: obj.dataY1,
            //    markPoint: {
            //        data: [
            //            {name: obj.name01, value: '{value}', xAxis: obj.dataX.length-1, yAxis: obj.dataY1[obj.dataY1.length-1]}
            //        ]
            //    }
            //},
            {
                name: obj.name,
                type: 'line',
                data: obj.dataY,
                markPoint: {
                    data: [
                        {
                            name: obj.name,
                            value: '{value}',
                            xAxis: obj.dataX.length - 1,
                            yAxis: obj.dataY[obj.dataY.length - 1]
                        }
                    ]
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//饼状图初始化方法
function pieChart(obj) {
    var myChart = echarts.init(document.getElementById(obj.id));
    var option = {
        title: [{
            text: obj.totalName,
            left: '49%',
            top: '55%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#999',
                fontWeight: 'normal',
                fontSize: 12
            }
        }, {
            text: obj.totalValue,
            left: '49%',
            top: '45%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#202428',
                fontWeight: 'bold',
                fontSize: 20
            }
        }],
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
            formatter: "{b}({d}%)"
            //formatter: "{a} <br/>{b}:  <br/>{c}({d}%)"
        },
        legend: {

            orient: 'vertical',
            x: 'right',
            itemWidth: 14,
            itemHeight: 14,
            align: 'left',
            textStyle: {
                color: '#fff'
            },
            show: false
        },
        series: [

            {
                name: '交易数据',
                type: 'pie',
                radius: ['50%', '68%'],
                color: ['#ea2a80', '#5a90ca', '#9849e2', '#d59a1c', '#468894', '#c238ac', '#f36930', '#58a3c0', '#62c058', '#62c058', '#2351e6'],
                label: {
                    normal: {
                        formatter: function (obj) {
                            return obj.percent.toFixed(1) + '%'
                        },
                        textStyle: {
                            fontSize: 12
                        }
                    }
                },
                data: obj.data
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//仪表盘初始化方法
var color = ['#4bc6e8', '#ff7d7d', '#f2f7ff', '#fff1f1'];
var opacity = [1, 0];
function chart_instrument(obj) {
    var isNewChart = (obj.chart == null || obj.chart == undefined || obj.chart == "undefined");
    console.log("obj.chart :" + obj.chart + "  ; isNewChart :" + isNewChart);
    var myChart02 = (obj.chart == undefined ? echarts.init(document.getElementById(obj.id)) : obj.chart);
    //画布的宽高
    var W = parseInt($("#" + obj.id).css("width"));
    var H = parseInt($("#" + obj.id).css("height"));
    //仪表盘的半径
    var r = ((W > H ? H : W) * 0.67) / 2;
    //仪表盘最小值和最大值
    //var Vmin = Vmi;//0
    //var Vmax = Vma; //520

    //var Vx = 80;
    //0度对应数值
    var V0 = (obj.Vmax - obj.Vmin) / 260 * 40; //D260=260
    //180度对应数值
    var V180 = (obj.Vmax - obj.Vmin) / 260 * 180 + V0;
    //斜线长度
    //var l = 5;
    if (obj.Vx < 0) {
        var Ax = 0, Ay = 0, Bx = 0, By = 0;
    } else {
        if (obj.Vx > V0 && obj.Vx <= ((V180 - V0) / 2 + V0)) {
            //Vx值相对仪表圆心的角度
            var aa = Math.abs(obj.Vx - V0) / (V180 - V0) * Math.PI;
            var Ax = W / 2 - r * Math.cos(aa);
            var Ay = H / 2 - r * Math.sin(aa);
            var Bx = W / 2 - (r - obj.l) * Math.cos(aa);
            var By = H / 2 - (r - obj.l) * Math.sin(aa);
        } else if (obj.Vx <= V0 && obj.Vx >= obj.Vmin) {
            //Vx值相对仪表圆心的角度
            var aa = Math.abs(obj.Vx - V0) / (V180 - V0) * Math.PI;
            var Ax = W / 2 - r * Math.cos(aa);
            var Ay = H / 2 + r * Math.sin(aa);
            var Bx = W / 2 - (r - obj.l) * Math.cos(aa);
            var By = H / 2 + (r - obj.l) * Math.sin(aa);
        } else if (obj.Vx > ((V180 - V0) / 2 + V0) && obj.Vx < V180) {
            //Vx值相对仪表圆心的角度
            var aa = (Math.abs(V180 - obj.Vx) / (V180 - V0) * Math.PI);
            var Ax = W / 2 + r * Math.cos(aa);
            var Ay = H / 2 - r * Math.sin(aa);
            var Bx = W / 2 + (r - obj.l) * Math.cos(aa);
            var By = H / 2 - (r - obj.l) * Math.sin(aa);
        } else if (obj.Vx >= V180) {
            //Vx值相对仪表圆心的角度
            var aa = Math.abs(obj.Vx - V180) / (V180 - V0) * Math.PI;
            var Ax = W / 2 + r * Math.cos(aa);
            var Ay = H / 2 + r * Math.sin(aa);
            var Bx = W / 2 + (r - obj.l) * Math.cos(aa);
            var By = H / 2 + (r - obj.l) * Math.sin(aa);
        }
    }
    // 指定图表的配置项和数据
    var option02 = {
        tooltip: {
            show: false,
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {

                type: 'gauge',
                z: 3,
                min: 0,
                max: 260,
                splitNumber: 5,
                startAngle: 359.99,
                endAngle: 0,
                radius: '25%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 50,
                        color: [[1, color[obj.i + 2]]]
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 0        // 属性length控制线长
                },
                splitLine: {           // 分隔线
                    length: 0         // 属性length控制线长
                },
                axisLabel: {
                    show: false
                },

                itemStyle: {
                    normal: {
                        color: "#D4237A"
                    }
                },
                title: {
                    show: false
                },
                detail: {
                    show: false
                },
                data: []
            },
            {
                name: '速度',
                type: 'gauge',
                z: 3,
                min: obj.Vmin,
                max: obj.Vmax,
                splitNumber: 4,
                startAngle: 220,
                endAngle: -40,
                radius: '60%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 2,
                        color: [[1, color[obj.i]]]
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 8,        // 属性length控制线长
                    splitNumber: 2,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 2,
                        color: color[obj.i]
                    }
                },
                splitLine: {           // 分隔线
                    length: 12,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 2,
                        color: color[obj.i]
                    }
                },
                markLine: {
                    data: [
                        [
                            {
                                x: Ax,
                                y: Ay,
                                symbol: "rect",
                                length: 10,
                                symbolSize: [3, 12],
                                lineStyle: {
                                    normal: {
                                        type: "solid",
                                        width: 0,
                                        opacity: opacity[obj.i]
                                    }
                                }
                            },
                            {
                                x: Bx,
                                y: By,
                                symbol: "rect",
                                length: 10,
                                symbolSize: [3, 12],
                                lineStyle: {
                                    normal: {
                                        type: "solid",
                                        width: 0,
                                        opacity: opacity[obj.i]
                                    }
                                }
                            }
                        ]
                    ]
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    length: "70%",
                    width: 6
                },
                itemStyle: {
                    normal: {
                        color: "#ff7d7d"
                    }
                },
                title: {
                    show: false
                },
                "detail": {
                    "formatter": obj.title,
                    "offsetCenter": [0, "65%"],
                    height: 50,
                    "textStyle": {
                        "fontSize": 12,
                        "color": "#222",
                        'line-height': 20

                    },
                    show: false
                },
                data: [{value: obj.value, name: ''}]
            }
        ]
    };

    //使用刚指定的配置项和数据显示图表。
    myChart02.setOption(option02, !isNewChart);

    return myChart02;
}
