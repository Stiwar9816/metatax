<template>
    <div>
        <client-only>
            <label :for="props.inputId">{{ props.label }}</label>
            <flat-pickr v-model="dateMonth" class="form-input" :config="basic.monthSelect" :placeholder="props.placeholder" />
        </client-only>
    </div>
</template>

<!-- script -->
<script lang="ts" setup>
    //flatpickr
    import flatpickr from 'flatpickr';
    import flatPickr from 'vue-flatpickr-component';
    import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index.js';
    // Locale
    import { Spanish as SpanishLocale } from 'flatpickr/dist/l10n/es.js';
    // CSS
    import 'flatpickr/dist/plugins/monthSelect/style.css';
    import 'flatpickr/dist/flatpickr.min.css';
    import 'flatpickr/dist/themes/dark.css';

    const dateMonth = ref<string>('');

    flatpickr.setDefaults({
        disableMobile: true,
    });

    const basic = ref({
        monthSelect: {
            plugins: [
                monthSelectPlugin({
                    shorthand: true,
                    dateFormat: 'm-Y',
                    theme: 'dark',
                }),
            ],
            locale: SpanishLocale,
        },
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
