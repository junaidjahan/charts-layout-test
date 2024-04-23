<script setup lang="ts">
import { BaseCard } from "@/components/base";
import type { DynamicChart } from '@/typings/chart.types'
import { LineChart, BarChart, CandleStickChart } from "@/components/charts"

interface Props {
    chartType: string,
    title: string,
    subtitle: string,
    description: string,
    lastRefreshed: string,
    series: DynamicChart
}

defineProps<Props>()

const chartTypes: any = {
    LineChart,
    BarChart,
    CandleStickChart
}

</script>

<template>
    <BaseCard class="chart-card">
        <div class="chart">
            <component :is="chartTypes[chartType]" :series="series" />
        </div>
        <hr>
        <div class="info">
            <h2 class="heading">
                {{ title }}
            </h2>
            <h3 class="subheading">
                {{ subtitle }}
            </h3>
            <div class="date-posted mt-5">
                {{ lastRefreshed }}
            </div>
            <p class="mt-5 description">
                {{ description }}
            </p>
        </div>

    </BaseCard>
</template>

<style lang="scss">
.chart-card {
    .chart {
        min-height: 200px;
        padding: 20px;
    }

    hr {
        border-color: red;
        opacity: 10%;
        border: 0.5px solid;
    }

    .info {
        padding: 20px;

        .heading {
            color: #71717a;
        }

        .subheading {
            color: #71717a
        }

        .date-posted {
            background-color: #fef2f2;
            color: #ef4444;
            border-radius: 20px;
            padding-inline: 10px;
            width: fit-content;
            font-size: 12px;
        }

        .description {
            font-size: 14px;
            color: #27272a;
        }


    }

}
</style>