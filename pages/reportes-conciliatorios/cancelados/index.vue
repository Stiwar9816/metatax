<template>
    <div>
        <ButtonsButtonRoute home="Reportes conciliatorios" route-active="Cancelados" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC" placeholder="Ingrese un RFC" />
            <InputsInputBase label="Serial" placeholder="Ingrese un RFC" />
            <InputsInputBase label="Folio" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectType" />
            <ButtonsButtonSelect label="Tipo de factor" :options="optionsSelectFactor" />
            <ButtonsButtonSelect label="Notas" :options="optionsSelectNote" />
            <ButtonsButtonBase class="my-2" type="submit" label="Buscar datos" />
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
    useHead({ title: 'Cancelados' });
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
    const optionsSelectImpRet: OptionsSelect[] = [
        {
            value: 'isr',
            text: 'ISR',
        },
        {
            value: 'iva',
            text: 'IVA',
        },
        {
            value: 'ieps',
            text: 'IEPS',
        },
    ];
    const optionsSelectImpTras: OptionsSelect[] = [
        {
            value: 'iva',
            text: 'IVA',
        },
        {
            value: 'ieps',
            text: 'IEPS',
        },
    ];
    const optionsSelectFactor: OptionsSelect[] = [
        {
            value: 'tasa',
            text: 'Tasa',
        },
        {
            value: 'cuota',
            text: 'Cuota',
        },
        {
            value: 'exento',
            text: 'Exento',
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
