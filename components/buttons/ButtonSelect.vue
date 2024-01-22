<template>
    <div>
        <select class="form-select text-white-dark">
            <option selected>{{ props.labelSelect }}</option>
            <template v-for="(option, key) in props.options" :key="key">
                <option :value="option.value">
                    {{ option.text }}
                </option>
            </template>
        </select>
    </div>
</template>

<script setup lang="ts">
    import type { OptionsSelect } from '~/types/index.ts';
    // Props
    const props = defineProps({
        label: {
            type: String,
            default: 'Exportar',
        },
        labelSelect: {
            type: String,
            default: 'Escoge una opción',
        },
        selectId: {
            type: String,
            default: 'default',
        },
        options: {
            type: Array as () => OptionsSelect[],
            default: () => [
                {
                    value: String,
                    text: String,
                },
            ],
        },
    });
</script>
