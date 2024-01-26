<template>
    <span :class="getClass(props.value)">
        {{ props.value ? 'Activo' : 'Inactivo' }}
    </span>
</template>

<script setup lang="ts">
    const props = defineProps({
        value: Boolean,
    });
    const getClass = (value: boolean) => (value ? 'badge bg-success' : 'badge bg-danger');
</script>
