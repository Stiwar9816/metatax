<template>
    <div>
        <client-only>
            <label :for="props.inputId">{{ props.label }}</label>
            <flat-pickr :id="props.inputId" v-model="monthSelect" class="form-input" :config="configs.monthSelect" :placeholder="props.placeholder" />
        </client-only>
    </div>
</template>

<script setup lang="ts">
    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index.js';
    import 'flatpickr/dist/flatpickr.min.css';
    import 'flatpickr/dist/plugins/monthSelect/style.css';
    import { Spanish as SpanishLocale } from 'flatpickr/dist/l10n/es.js';
    // Const
    const monthSelect = ref<string>('');
    const configs = {
        monthSelect: {
            plugins: [
                new (monthSelectPlugin as any)({
                    shorthand: true,
                    dateFormat: 'M - Y',
                }),
            ],
            locale: SpanishLocale,
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
