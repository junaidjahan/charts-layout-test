<script setup lang="ts">
// @ts-ignore  
import type { Series } from '@/types/chart.types'

interface Props {
    series: Array<Series>
}
defineProps<Props>()

const chartOptions = {
    chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            autoSelected: 'zoom'
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
    },
    title: {
        text: 'Stock Price Movement',
        align: 'left'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        },
    },
    yaxis: {
        // labels: {
        //     formatter: function (val) {
        //         return (val / 1000000).toFixed(0);
        //     },
        // },
        title: {
            text: 'Price'
        },
    },
    xaxis: {
        type: 'datetime',
    },
    // tooltip: {
    //     shared: false,
    //     y: {
    //         formatter: function (val) {
    //             return (val / 1000000).toFixed(0)
    //         }
    //     }
    // }
}
</script>
<template>
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>