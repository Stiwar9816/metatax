<template>
    <div :class="`panel p-8 bg-gradient-to-r from-${props.colorFrom} to-${props.colorTo}`">
        <div class="text-xl font-semibold text-white-light mr-1">{{ props.title }}</div>
        <div class="mt-5 flex items-center">
            <div class="text-3xl font-bold text-white-light mr-3">{{ currencyFormatter('MXN', props.value) }} MXN</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        title: {
            type: String,
            default: 'Title card',
        },
        value: {
            type: Number,
            default: 0,
        },
        colorFrom: {
            type: String,
            default: 'indigo-500',
        },
        colorTo: {
            type: String,
            default: 'indigo-300',
        },
    });
</script>
