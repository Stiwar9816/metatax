<template>
    <div>
        <client-only>
            <label :for="props.inputId">{{ props.label }}</label>
            <date-picker v-model:value="value" :id="props.inputId" format="MMM - Y" type="month" :lang="lang" :placeholder="props.placeholder" />
        </client-only>
    </div>
</template>

<script lang="ts" setup>
    import DatePicker from 'vue-datepicker-next';
    // Const
    const value = ref<string>('');
    const Locale = {
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        weekdaysShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        weekdaysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        firstDayOfWeek: 1,
        firstWeekContainsDate: 1,
    };
    const lang = {
        formatLocale: Locale,
        yearFormat: 'YYYY',
        monthFormat: 'MMM',
        monthBeforeYear: true,
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
