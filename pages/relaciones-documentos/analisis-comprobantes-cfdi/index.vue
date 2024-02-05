<template>
    <div>
        <ButtonsButtonRoute home="Relación entre documentos" route-active="Comprobantes CFDI" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableRelationDocument :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Análisis de comprobantes de pago vs CFDI' });
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
    const fields = ref([
        { field: 'tax_folio', title: 'Folio Fiscal de pago' },
        { field: 'rfc', title: 'RFC Receptor' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'date_issue', title: 'Fecha emisión CFDI pago' },
        { field: 'date_issue', title: 'Fecha pago' },
        { field: 'currency', title: 'Moneda de pago' },
        { field: 'exchange_rate', title: 'Tipo de cambio pago' },
        { field: 'total', title: 'Total pagado' },
        { field: 'total_mxn', title: 'Total pagado (MXN)' },
        { field: 'operation_number', title: 'Número de operación' },
        { field: '', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            date_issue: '01-12-2023',
            total: 15156,
            currency: 'MXN',
            exchange_rate: '21',
            total_mxn: 124145,
            operation_number: 1244,
        },
        {
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            date_issue: '01-12-2023',
            total: 15156,
            currency: 'USD',
            exchange_rate: '21',
            total_mxn: 124145,
            operation_number: 1244,
        },
    ];
</script>
