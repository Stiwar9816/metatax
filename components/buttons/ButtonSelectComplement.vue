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
            text: 'Acreditamiento IEPS',
        },
        {
            value: '',
            text: 'Aerolíneas',
        },
        {
            value: '',
            text: 'Certificado de destrucción',
        },
        {
            value: '',
            text: 'Comercio exterior',
        },
        {
            value: '',
            text: 'Complemento carta porte',
        },
        {
            value: '',
            text: 'Compra y ventas de divisas ',
        },
        {
            value: '',
            text: 'Consumo de combustibles',
        },
        {
            value: '',
            text: 'Donatarias',
        },
        {
            value: '',
            text: 'Esatdo de cuenta de combustibles de monederos electrónicos',
        },
        {
            value: '',
            text: 'Complemento de hidrocarburos',
        },
        {
            value: '',
            text: 'INE',
        },
        {
            value: '',
            text: 'Instituciones educativas privadas',
        },
        {
            value: '',
            text: 'Leyendas fiscales',
        },
        {
            value: '',
            text: 'Notarios públicos',
        },
        {
            value: '',
            text: 'Pago en especie',
        },
        {
            value: '',
            text: 'Persona física integrante de coordinado',
        },
        {
            value: '',
            text: 'Renocación y sustitución de vehículos',
        },
        {
            value: '',
            text: 'Sector de ventas al detalle (Detallista)',
        },
        {
            value: '',
            text: 'Servicios parciales de construcción',
        },
        {
            value: '',
            text: 'SPEI de tercero a tercero',
        },
        {
            value: '',
            text: 'Terceros',
        },
        {
            value: '',
            text: 'Turista, pasajero, extranjero',
        },
        {
            value: '',
            text: 'Vales de despensa',
        },
        {
            value: '',
            text: 'Vehículo usado',
        },
        {
            value: '',
            text: 'Venta de vehículos',
        },
    ];
</script>
