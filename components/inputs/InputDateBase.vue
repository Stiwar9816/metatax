<template>
    <div>
        <client-only>
            <label :for="props.inputId">{{ props.label }}</label>
            <flat-pickr :id="props.inputId" v-model="date" class="form-input" :config="configs.basic" :placeholder="props.placeholder" />
        </client-only>
    </div>
</template>

<script setup lang="ts">
    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    // Locale
    import { Spanish as SpanishLocale } from 'flatpickr/dist/l10n/es.js';
    // CSS
    import 'flatpickr/dist/flatpickr.min.css';
    import 'flatpickr/dist/themes/dark.css';
    // Const
    const date = ref<string>('');
    const configs = {
        basic: {
            shorthand: true,
            dateFormat: 'd - m - Y',
            locale: SpanishLocale,
            theme: 'dark',
        },
    };
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
