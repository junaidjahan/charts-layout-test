<script setup lang="ts">
import { BaseCard } from "@/components/base"
</script>

<template>
    <BaseCard class="chart-card">
        <div class="chart">
            This is for chart
        </div>
        <hr>
        <div class="info">
            <h2 class="heading">
                Hello
            </h2>
            <h3 class="subheading">
                World
            </h3>
            <div class="date-posted mt-5">
                Hello
            </div>
            <p class="mt-5 description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam accusamus quidem vero asperiores eos
                ratione expedita hic veritatis illum beatae aliquid a, similique itaque voluptate est rem doloremque
                reiciendis laudantium!
                Vel velit esse officia a dolor aspernatur. Quos aliquid perferendis soluta suscipit, amet ipsa totam
                rerum iusto, debitis repudiandae nihil odit maiores quidem hic velit? Aperiam repudiandae eligendi
                libero culpa.
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