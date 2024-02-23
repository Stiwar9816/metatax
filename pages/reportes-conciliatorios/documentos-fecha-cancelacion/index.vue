<template>
    <div>
        <ButtonsButtonRoute home="Reportes conciliatorios" route-active="Documentos por fecha de cancelación" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <ButtonsButtonSelect label="Año" :options="optionsSelectYear" />
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectType" />
            <ButtonsButtonSelect label="Notas" :options="optionsSelectNote" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <div class="grid gap-4 md:grid-cols-4 my-4">
            <CardsCardReports :icon="IconBarChartSteps" label="Ingresos" :total="4" />
            <CardsCardReports :icon="IconBarChartSteps" label="Egresos" :total="6" />
            <CardsCardReports :icon="IconBarChartSteps" label="Traslados" :total="0" />
            <CardsCardReports :icon="IconBarChartSteps" label="Pagos" :total="3" />
        </div>
        <TablesTableRelationDocument :fields="fields" :items="items" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Documentos por fecha de cancelación' });
    // Icons
    import IconBarChartSteps from '~/components/icons/IconBarChartSteps.vue';
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
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
    const optionsSelectType: OptionsSelect[] = [
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
        {
            value: 'pago',
            text: 'Pago',
        },
    ];
    const optionsSelectNote: OptionsSelect[] = [
        {
            value: 'con notas',
            text: 'Con notas',
        },
        {
            value: 'sin notas',
            text: 'Sin notas',
        },
    ];
    const optionsSelectYear: OptionsSelect[] = [
        {
            value: 2024,
            text: '2024',
        },
        {
            value: 2023,
            text: '2023',
        },
        {
            value: 2022,
            text: '2022',
        },
        {
            value: 2021,
            text: '2021',
        },
    ];
    const fields = ref([
        { field: 'tax_folio', title: 'Folio fiscal' },
        { field: 'rfc', title: 'RFC' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'date_issue', title: 'Fecha de emisión' },
        { field: 'termination_date', title: 'Fecha de cancelación' },
        { field: 'stamp_date', title: 'Fecha de timbre' },
        { field: 'pac', title: 'PAC' },
        { field: 'type_receipt', title: 'Tipo de comprobante' },
        { field: 'total', title: 'Total' },
        { field: '', title: 'Acciones' },
    ]);
    const items = [
        {
            tax_folio: 'ASO13357804',
            rfc: 'ASO13357804',
            business_name: 'Servicios logisticos',
            date_issue: '24-05-2023',
            termination_date: '24-05-2023',
            stamp_date: '24-05-2023',
            pac: 'ERE0248492',
            type_receipt: 'Recibidos',
            total: 21453,
        },
    ];
</script>
