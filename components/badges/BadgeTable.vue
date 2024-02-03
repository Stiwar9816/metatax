<template>
    <span :class="getClass(props.value, props.bgBad)">
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
        bgBad: {
            type: String,
            default: 'bg-danger',
        },
    });
    const getClass = (value: boolean, bgBad: string) => (value ? 'badge bg-success' : `badge ${bgBad}`);
</script>
