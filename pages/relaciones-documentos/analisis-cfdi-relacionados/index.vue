<template>
    <div>
        <ButtonsButtonRoute home="Relación entre documentos" route-active="CFDI's relacionados" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectType" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: `Análisis de CFDI vs CFDI's relacionados` });
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
    const optionsSelectType: OptionsSelect[] = [
        {
            value: 'todos',
            text: 'Todos',
        },
        {
            value: 'ingresos',
            text: 'Ingresos',
        },
        {
            value: 'egresos',
            text: 'Egresos',
        },
    ];
    const optionsSelectContext: OptionsSelect[] = [
        {
            value: 'emitidos',
            text: 'Emitidos',
        },
        {
            value: 'recibidos',
            text: 'Recibidos',
        },
    ];
    const fields = ref([
        { field: 'vendor', title: 'Serie' },
        { field: 'vendor', title: 'Folio' },
        { field: 'vendor', title: 'Folio Fiscal' },
        { field: 'name', title: 'RFC Receptor' },
        { field: 'name', title: 'Razón Social' },
        { field: 'cfdi', title: 'fecha emisión' },
        { field: 'cfdi', title: 'Sub-total' },
        { field: 'cfdi', title: 'Total' },
        { field: 'cfdi', title: 'Descuento' },
        { field: 'cfdi', title: 'Moneda' },
        { field: 'cfdi', title: 'Tipo de cambio' },
        { field: 'cfdi', title: 'Metodo de pago' },
        { field: '', title: 'Acciones' },
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
