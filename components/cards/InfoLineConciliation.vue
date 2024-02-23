<template>
    <div class="my-2 ml-2 text-sm font-semibold">
        <span class="mr-2">{{ props.label }}: </span>
        <span class="mr-2 text-[#e7515a] hover:text-[#ad4045]">{{ currencyFormatter('MXN', props.value) }} MXN</span>
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        label: {
            type: String,
            default: 'Label',
        },
        value: {
            type: Number,
            default: 0,
        },
    });
</script>
