import React, { useState, useEffect, useRef } from 'react'

import echarts from 'echarts'

export default function Echart({ config, resize }) {
    const chart = useRef(null)

    const [chartElement, setChartElement] = useState(chart)

    useEffect(() => {
        console.log(chartElement.current)
        if (resize) {
            chartElement.resize()
        }
        if (!chartElement.current) {
            chartElement.setOption(config)
        }
        else {
            // console.log(resize chart)
            setChartElement(echarts.init(chart.current))
        }

    }, [config, chartElement, resize])
    return (
        <div ref={chart} style={{ height: '100%', width: '100%' }} />
    )
}