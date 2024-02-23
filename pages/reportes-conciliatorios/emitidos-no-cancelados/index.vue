<template>
    <div>
        <ButtonsButtonRoute home="Reportes conciliatorios" route-active="Emitidos no cancelados" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectType" />
            <ButtonsButtonSelect label="Imp. retenidos federales" :options="optionsSelectImpRet" />
            <ButtonsButtonSelect label="Imp. traslados federales" :options="optionsSelectImpTras" />
            <ButtonsButtonSelect label="Tipo de factor" :options="optionsSelectFactor" />
            <ButtonsButtonSelectTaxRegimes label="Regímenes fiscales emisor" />
            <ButtonsButtonSelectTaxRegimes label="Regímenes fiscales receptor" />
            <ButtonsButtonSelectComplement label="Complementos" />
            <ButtonsButtonSelect label="Notas" :options="optionsSelectNote" />
            <ButtonsButtonBase class="my-2" type="submit" label="Buscar datos" />
        </div>
        <div class="grid gap-4 md:grid-cols-4 my-4">
            <CardsCardConciliation :icon="IconBarChartSteps" label="Ingresos" :total="4" />
            <CardsCardConciliation :icon="IconBarChartSteps" label="Egresos" :total="6" />
            <CardsCardConciliation :icon="IconBarChartSteps" label="Traslados" :total="0" />
            <CardsCardConciliation :icon="IconBarChartSteps" label="Pagos" :total="3" />
        </div>
        <TablesTableRelationDocument :fields="fields" :items="items" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Emitidos no cancelados' });
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
        { field: 'version', title: 'Versión' },
        { field: 'serie', title: 'Serie' },
        { field: 'folio', title: 'Folio' },
        { field: 'tax_folio', title: 'Folio Fiscal' },
        { field: 'rfc', title: 'RFC Emisor' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'date_issue', title: 'Fecha emisión' },
        { field: 'type_receipt', title: 'Tipo de comprobante' },
        { field: 'retention_isr', title: 'Retención ISR' },
        { field: 'retention_iva', title: 'Retención IVA' },
        { field: 'retention_ieps', title: 'Retención IEPS' },
        { field: 'total_retention', title: 'Total retenciones' },
        { field: 'transfer_iva', title: 'Traslado IVA' },
        { field: 'transfer_ieps', title: 'Traslado IEPS' },
        { field: 'total_transfer', title: 'Total traslados' },
        { field: 'payment_method', title: 'Metodo de pago' },
        { field: 'currency', title: 'Moneda' },
        { field: 'exchange_rate', title: 'Tipo de cambio' },
        { field: 'discount', title: 'Descuento' },
        { field: 'subtotal', title: 'Sub-total' },
        { field: 'total', title: 'Total' },
        { field: '', title: 'Acciones' },
    ]);
    const items = [
        {
            version: '4.0',
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            currency: 'MXN',
            date_issue: '01-12-2023',
            retention_isr: 12,
            retention_iva: 2,
            retention_ieps: 45,
            total_retention: 80,
            transfer_iva: 2,
            transfer_ieps: 1,
            total_transfer: 214245,
            type_receipt: 'Ingreso',
            payment_method: 'PUE',
            exchange_rate: '21',
            discount: 124,
            subtotal: 1244,
            total: 15156,
        },
        {
            version: '4.0',
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            currency: 'USD',
            date_issue: '01-12-2023',
            retention_isr: 12,
            retention_iva: 2,
            retention_ieps: 45,
            total_retention: 80,
            transfer_iva: 2,
            transfer_ieps: 1,
            total_transfer: 214245,
            type_receipt: 'Ingreso',
            payment_method: 'PUE',
            exchange_rate: '21',
            discount: 124,
            subtotal: 1244,
            total: 15156,
        },
    ];
</script>
