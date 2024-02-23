<template>
    <div>
        <label :for="props.inputId">{{ props.label }}</label>
        <select :id="props.inputId" class="form-select text-white-dark">
            <option selected>{{ props.labelSelect }}</option>
            <template v-for="(option, key) in options" :key="key">
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
        inputId: String,
        label: {
            type: String,
            default: 'Label',
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

    const options: OptionsSelect[] = [
        {
            value: 'todos',
            text: 'Todos',
        },
        {
            value: '',
            text: '601 - General de ley personas morales',
        },
        {
            value: '',
            text: '603 - Personas morales con fines no lucrativos',
        },
        {
            value: '',
            text: '605 - Sueldos y salarios e ingresos asimilados a salarios',
        },
        {
            value: '',
            text: '606 - Arrendamiento',
        },
        {
            value: '',
            text: '607 - Régimen de enajenación o adquisición de bienes',
        },
        {
            value: '',
            text: '608 - Demás ingresos',
        },
        {
            value: '',
            text: '609 - Consolidación',
        },
        {
            value: '',
            text: '610 - Residentes en el extranjero sin establecimiento permanente en méxico',
        },
        {
            value: '',
            text: '611 - Ingresos por dividendos (socios y accionistas)',
        },
        {
            value: '',
            text: '612 - Personas físicas con actividades empresariales y profesionales',
        },
        {
            value: '',
            text: '614 - Ingresos por intereses',
        },
        {
            value: '',
            text: '615 - Ingresos recibidos por premios',
        },
        {
            value: '',
            text: '616 - Sin obligaciones fiscales',
        },
        {
            value: '',
            text: '620 - Sociedades cooperativas de producción que optan diferir sus ingresos',
        },
        {
            value: '',
            text: '621 - Incorporación fiscal',
        },
        {
            value: '',
            text: '622 - Actividades agrícolas, ganaderas, silvícolas y pesqueras',
        },
        {
            value: '',
            text: '623 - Opcional para grupos de sociedades',
        },
        {
            value: '',
            text: '624 - Coordinados',
        },
        {
            value: '',
            text: '625 - Actividades empresariales con ingresos a través de plataformas tecnológicas',
        },
        {
            value: '',
            text: '626 - Régimen simplificado de confianza',
        },
        {
            value: '',
            text: '628 - Hidrocarburos',
        },
        {
            value: '',
            text: '629 - Régimenes fiscales preferentes y de empresas multinacionales',
        },
        {
            value: '',
            text: '630 - Enajenación de acciones en bolsa de valores',
        },
    ];
</script>
