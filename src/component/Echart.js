import React, { useState, useEffect, useRef } from 'react'

import echart from 'echarts'

export default ({ option, resize }) => {
    let chart = useRef(null)

    let [chartEl, setChartEl] = useState(chart)
}