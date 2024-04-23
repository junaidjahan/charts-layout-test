<script setup lang="ts">
import { Navbar } from "@/components/shared"
import ChartCard from "./chart-card/index.vue"
</script>

<template>
  <div class="main-container">
    <Navbar />
    <section>
      <div class="grid">
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />

      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  margin-inline: 50px;
  padding: 20px;

  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, minmax(0, 1fr)); // For mobile screens

    @media (min-width: 768px) {
      // For tablets
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      // For 14-inch screens
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1920px) {
      // For 1080p screens
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }


}
</style>
