<template>
    <div>
        <ButtonsButtonRoute home="Inconsistencias comerciales" route-active="Formas de pago" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectType" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableRelationDocument :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Inconsistencias de formas de pago' });
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
        {
            value: 'traslado',
            text: 'Traslados',
        },
        {
            value: 'pago',
            text: 'Pagos',
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
        { field: 'way_to_pay', title: 'Forma de pago' },
        { field: 'serie', title: 'Serie' },
        { field: 'folio', title: 'Folio' },
        { field: 'tax_folio', title: 'Folio Fiscal' },
        { field: 'rfc', title: 'RFC Receptor' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'tax_regime', title: 'Regímen fiscal' },
        { field: 'use_cfdi', title: 'Uso CFDI' },
        { field: 'expedition_place', title: 'Lugar de expedición' },
        { field: 'currency', title: 'Moneda' },
        { field: 'date_issue', title: 'Fecha emisión' },
        { field: 'retention_isr', title: 'Retención ISR' },
        { field: 'retention_iva', title: 'Retención IVA' },
        { field: 'retention_ieps', title: 'Retención IEPS' },
        { field: 'total_retention', title: 'Total retenciones' },
        { field: 'transfer_iva', title: 'Traslado IVA' },
        { field: 'transfer_ieps', title: 'Traslado IEPS' },
        { field: 'total_transfer', title: 'Total traslados' },
        { field: 'type_receipt', title: 'Tipo de comprobante' },
        { field: 'payment_method', title: 'Metodo de pago' },
        { field: 'exchange_rate', title: 'Tipo de cambio' },
        { field: 'discount', title: 'Descuento' },
        { field: 'subtotal', title: 'Sub-total' },
        { field: 'total', title: 'Total' },
        { field: '', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            tax_regime: 625,
            use_cfdi: 'G03 - Gastos generales',
            expedition_place: 112344,
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
            way_to_pay: 28,
            payment_method: 'PUE',
            exchange_rate: '21',
            discount: 124,
            subtotal: 1244,
            total: 15156,
        },
        {
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            tax_regime: 625,
            use_cfdi: 'G03 - Gastos generales',
            expedition_place: 1345,
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
            way_to_pay: 4,
            payment_method: 'PUE',
            exchange_rate: '21',
            discount: 124,
            subtotal: 1244,
            total: 15156,
        },
    ];
</script>
