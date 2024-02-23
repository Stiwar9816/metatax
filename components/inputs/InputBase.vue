<template>
    <div>
        <label :for="props.inputId">{{ props.label }}</label>
        <input
            :id="props.inputId"
            :type="props.type"
            :min="props.min"
            :placeholder="props.placeholder"
            class="form-input"
            required
        />
    </div>
</template>

<script setup lang="ts">
    // Types
    import type { InputType } from '~/types/index.ts';
    // Props
    const props = defineProps({
        inputId: String,
        label: {
            type: String,
            default: 'label',
        },
        placeholder: {
            type: String,
            default: 'Ingrese un dato',
        },
        min: {
            type: Number,
            default: 0,
        },
        type: {
            type: String as () => InputType,
            default: 'text',
        },
    });
</script>
