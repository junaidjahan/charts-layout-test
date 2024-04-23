<script setup lang="ts">
interface Props {
    theme: string | null,
    placeholder: string | null
}

withDefaults(defineProps<Props>(), {
    theme: null,
    placeholder: null

})

const model = defineModel()

defineOptions({
    inheritAttrs: false
})

const themeObj = {
    transparent: 'transparent'
}

</script>

<template>
    <div class="base-input">
        <input v-model="model" v-bind="$attrs" :placeholder="placeholder" :class="[themeObj[theme]]">
    </div>
</template>

<style lang="scss">
.base-input {
    .transparent {
        border: none !important;
        height: 36px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            font-weight: bold;
            font-size: 14px;

        }
    }
}
</style>