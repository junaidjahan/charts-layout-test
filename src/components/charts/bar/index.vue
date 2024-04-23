<script setup lang="ts">

import { Series } from "@/typings/chart.type.ts"

interface Props {
    series: Array<Series>
}
defineProps<Props>()

const chartOptions = {
    chart: {
        type: 'bar',
        height: 350,
        zoom: {
            enabled: true,
            type: 'y',
            autoScaleXaxis: false,
            zoomedArea: {
                fill: {
                    color: '#90CAF9',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0D47A1',
                    opacity: 0.4,
                    width: 1
                }
            }
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
}

</script>

<template>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>

</template>