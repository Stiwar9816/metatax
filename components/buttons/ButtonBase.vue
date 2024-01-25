<template>
    <button :type="props.type" class="btn btn-primary">{{ props.label }}</button>
</template>

<script setup lang="ts">
    // Types
    import type { TypeButton } from '~/types/index.ts';
    // Props
    const props = defineProps({
        label: {
            type: String,
            default: 'label',
        },
        type: {
            type: String as () => TypeButton,
            default: 'button',
        },
    });
</script>
