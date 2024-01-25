<!-- basic -->
<template>
    <div>
        <client-only>
            <label :for="props.inputId">{{ props.label }}</label>
            <flat-pickr v-model="date" class="form-input" :config="basic" :placeholder="props.placeholder"></flat-pickr>
        </client-only>
    </div>
</template>

<!-- script -->
<script lang="ts" setup>
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import { Spanish as SpanishLocale } from 'flatpickr/dist/l10n/es.js';
    import 'flatpickr/dist/flatpickr.css';

    const date = ref('');

    const basic: any = ref({
        dateFormat: 'd-m-Y',
        shorthand: true,
        locale: SpanishLocale,
    });
    // Props
    const props = defineProps({
        inputId: String,
        label: {
            type: String,
            default: 'label input',
        },
        placeholder: {
            type: String,
            default: 'Seleccione una fecha',
        },
    });
</script>
