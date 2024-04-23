<script setup lang="ts">
// @ts-ignore  
import { Series } from "@/types/chart.types"

interface Props {
    series: Array<Series>
}
defineProps<Props>()

const chartOptions = {
    chart: {
        type: 'candlestick',
        height: 350
    },
    title: {
        text: 'CandleStick Chart',
        align: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
}
</script>

<template>
    <apexchart type="candlestick" height="350" :options="chartOptions" :series="series"></apexchart>
</template>