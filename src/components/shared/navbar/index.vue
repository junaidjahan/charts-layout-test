<script setup lang="ts">
import { BaseInput } from "@/components/base"

const model = defineModel()
</script>

<template>
    <nav>
        <div class="mt-4 app-nav">
            <div class="flex justify-content-between w-100">
                <h3>
                    Chart layout
                </h3>
                <BaseInput v-model="model" theme="transparent" placeholder="Search..." />
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.app-nav {
    h3 {
        font-weight: 500;
    }
}
</style>