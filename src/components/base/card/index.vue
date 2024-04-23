<script setup lang="ts">
</script>

<template>
    <div class="shadow-smooth base-card">
        <slot />
    </div>
</template>

<style lang="scss">
.base-card {
    background-color: white;
    border-radius: 4px;
    -webkit-box-shadow: -1px 4px 39px 6px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: -1px 4px 39px 6px rgba(0, 0, 0, 0.11);
    box-shadow: -1px 4px 39px 6px rgba(0, 0, 0, 0.11);
}
</style>