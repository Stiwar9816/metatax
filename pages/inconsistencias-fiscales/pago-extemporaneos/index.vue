<template>
    <div>
        <ButtonsButtonRoute home="Inconsistencias fiscales" route-active="Método y forma de pago" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateMonth label="Periodo" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="my-2 md:mt-6" type="submit" label="Buscar datos" />
        </div>
        <TablesTableRelationDocument :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Método y forma de pago' });
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
        { field: 'tax_folio_payment_voucher', title: 'Folio Fiscal del comprobante de pago' },
        { field: 'rfc', title: 'RFC Receptor' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'date_issue', title: 'Fecha emisión' },
        { field: 'type_receipt', title: 'Tipo de comprobante' },
        { field: 'date_payment', title: 'Fecha de pago' },
        { field: 'exchange_rate', title: 'Tipo de cambio' },
        { field: 'currency', title: 'Moneda' },
        { field: 'total', title: 'Monto pagado' },
        { field: 'number_documents', title: 'Cantidad de documentos' },
        { field: '', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            tax_folio_payment_voucher: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            date_issue: '01-12-2023',
            type_receipt: 'Emitidos',
            date_payment: '01-12-2023',
            exchange_rate: '21',
            currency: 'MXN',
            total: 15156,
            number_documents: 3,
        },
    ];
</script>
