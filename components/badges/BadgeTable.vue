<template>
    <span :class="getClass(props.value, props.bgTrue, props.bgBad)">
        {{ props.value ? `${props.textTrue}` : `${props.textBad}` }}
    </span>
</template>

<script setup lang="ts">
    const props = defineProps({
        value: Boolean,
        textTrue: {
            type: String,
            default: 'Activo',
        },
        textBad: {
            type: String,
            default: 'Inactivo',
        },
        bgTrue: {
            type: String,
            default: 'bg-success',
        },
        bgBad: {
            type: String,
            default: 'bg-danger',
        },
    });
    const getClass = (value: boolean, bgTrue: string, bgBad: string) => (value ? `badge ${bgTrue}` : `badge ${bgBad}`);
</script>
