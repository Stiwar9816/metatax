<template>
    <span :class="getClass(props.value!, props.bgTrue, props.bgBad)">
        {{ currencyFormatter('MXN', props.value!) }}
    </span>
</template>

<script setup lang="ts">
    const props = defineProps({
        value: Number,
        bgTrue: {
            type: String,
            default: 'bg-success',
        },
        bgBad: {
            type: String,
            default: 'bg-danger',
        },
    });

    const getClass = (value: number, bgTrue: string, bgBad: string) => {
        return value === 0 ? `badge ${bgTrue}` : `badge ${bgBad}`;
    };
</script>
