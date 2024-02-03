<template>
    <div>
        <ButtonsButtonRoute home="Miscelánea" route-active="Reporte general de conceptos" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
            <InputsInputDateBase label="Fecha inicial" />
            <InputsInputDateBase label="Fecha final" />
            <InputsInputBase label="RFC Receptor" placeholder="Ingrese RFC Receptor" />
            <InputsInputBase label="N° Identifacición" type="number" :min="0" placeholder="Ingrese N° Identifacición" />
            <InputsInputBase label="Cod. Prod / Serv" type="number" :min="0" placeholder="Ingrese Cod. Prod / Serv" />
            <InputsInputBase label="Cod. Unidad" placeholder="Ingrese Cod. Unidad" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectVoucher" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="my-2" label="Buscar datos" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Reporte general de conceptos' });
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
    const optionsSelectContext: OptionsSelect[] = [
        {
            value: 'recibidos',
            text: 'Recibidos',
        },
        {
            value: 'emitidos',
            text: 'Emitidos',
        },
    ];
    const optionsSelectVoucher: OptionsSelect[] = [
        {
            value: 'ingreso',
            text: 'Ingreso',
        },
        {
            value: 'egreso',
            text: 'Egreso',
        },
        {
            value: 'traslado',
            text: 'Traslado',
        },
    ];
    const fields = ref([
        { field: 'vendor', title: 'Folio Fiscal' },
        { field: 'name', title: 'RFC Receptor' },
        { field: 'name', title: 'Razón Social' },
        { field: 'name', title: 'Tipo de comprobante' },
        { field: 'cfdi', title: 'Cod. Prod / Serv' },
        { field: 'cfdi', title: 'Cod. Prod / Serv Descripción' },
        { field: 'cfdi', title: 'Cod. Unidad' },
        { field: 'cfdi', title: 'Cod. Unidad Descripción' },
        { field: 'cfdi', title: 'N° Identificación' },
        { field: 'cfdi', title: 'Moneda' },
        { field: 'cfdi', title: 'Tipo de cambio' },
        { field: 'cfdi', title: 'Cantidad' },
        { field: 'cfdi', title: 'Vlr. Unitario' },
        { field: 'cfdi', title: 'Importe' },
        { field: 'cfdi', title: 'Descuento' },
        { field: 'cfdi', title: 'Cancelado' },
        { field: 'cfdi', title: 'Estado' },
        { field: 'cfdi', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
    ];
</script>
