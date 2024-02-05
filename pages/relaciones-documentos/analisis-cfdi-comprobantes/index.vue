<template>
    <div>
        <ButtonsButtonRoute home="Relación entre documentos" route-active="CFDI's comprobantes" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <InputsInputBase label="Folio fiscal" placeholder="Ingrese un folio fiscal" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonSelect label="Método de pago" :options="optionsSelectTypePayment" />
            <ButtonsButtonSelect label="Estado de pago" :options="optionsSelectPayment" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableRelationDocument :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: `Análisis de CFDI vs comprobantes de pagos` });
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
    const optionsSelectTypePayment: OptionsSelect[] = [
        {
            value: 'todos',
            text: 'Todos',
        },
        {
            value: 'ppd',
            text: 'PPD',
        },
        {
            value: 'pue',
            text: 'PUE',
        },
        {
            value: 'pue sin pagos',
            text: 'PUE sin pagos',
        },
        {
            value: 'pue con pagos',
            text: 'PUE con pagos',
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
    const optionsSelectPayment: OptionsSelect[] = [
        {
            value: 'emitidos',
            text: 'Todos',
        },
        {
            value: 'pagado',
            text: 'Pagado',
        },
        {
            value: 'no pagado',
            text: 'No pagado',
        },
        {
            value: 'sobre pagado',
            text: 'Sobre pagado',
        },
    ];
    const fields = ref([
        { field: 'serie', title: 'Serie' },
        { field: 'folio', title: 'Folio' },
        { field: 'tax_folio', title: 'Folio Fiscal' },
        { field: 'rfc', title: 'RFC Receptor' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'date_issue', title: 'Fecha emisión' },
        { field: 'subtotal', title: 'Sub-total' },
        { field: 'total', title: 'Total' },
        { field: 'currency', title: 'Moneda' },
        { field: 'exchange_rate', title: 'Tipo de cambio' },
        { field: 'total_mxn', title: 'Total (MXN)' },
        { field: 'type_receipt', title: 'Tipo de comprobante' },
        { field: 'payment_method', title: 'Metodo de pago' },
        { field: 'retention_isr', title: 'Retención ISR' },
        { field: 'retention_iva', title: 'Retención IVA' },
        { field: 'retention_ieps', title: 'Retención IEPS' },
        { field: 'transfer_iva', title: 'Traslado IVA' },
        { field: 'transfer_ieps', title: 'Traslado IEPS' },
        { field: 'amount_paid_mxn', title: 'Importe pagado (MXN)' },
        { field: 'balance', title: 'Saldo pendiente (MXN)' },
        { field: 'status', title: 'Estado' },
        { field: '', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            date_issue: '01-12-2023',
            subtotal: 1244,
            total: 15156,
            currency: 'MXN',
            exchange_rate: '21',
            total_mxn: 124145,
            type_receipt: 'Ingreso',
            payment_method: 'PUE',
            retention_isr: 12,
            retention_iva: 2,
            retention_ieps: 45,
            transfer_iva: 2,
            transfer_ieps: 1,
            amount_paid_mxn: 78689,
            balance: 0,
            status: true,
        },
        {
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            date_issue: '01-12-2023',
            subtotal: 1244,
            total: 15156,
            currency: 'USD',
            exchange_rate: '21',
            total_mxn: 124145,
            type_receipt: 'Ingreso',
            payment_method: 'PUE',
            retention_isr: 12,
            retention_iva: 2,
            retention_ieps: 45,
            transfer_iva: 2,
            transfer_ieps: 1,
            amount_paid_mxn: 78689,
            balance: 12244,
            status: false,
        },
    ];
</script>
