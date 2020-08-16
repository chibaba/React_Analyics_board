import React from 'react';

import EChart from './Echart'

export default function Line({ config }) {
    let option = {
        title: {
            text: 'DYNAMIC CHARTS'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: config.data.map(row => row[config.xAxis])
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: config.yAxes.map(key => ({
            type: 'line',
            areaStyle: {},
            data: config.data.map(row => row[key])

        }))



    };

    return <EChart config={option} />

}