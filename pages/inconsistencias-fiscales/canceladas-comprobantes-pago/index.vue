<template>
    <div>
        <ButtonsButtonRoute home="Inconsistencias fiscales" route-active="Facturas canceladas en comprobantes de pago" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Facturas canceladas en comprobantes de pago' });
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
        { field: 'tax_folio', title: 'Folio Fiscal' },
        { field: 'tax_folio_payment_voucher', title: 'Folio Fiscal del comprobante de pago' },
        { field: 'rfc', title: 'RFC Receptor' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'date_issue', title: 'Fecha de emisión' },
        { field: '', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            tax_folio: 'sdfs-423sa-134124',
            tax_folio_payment_voucher: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            date_issue: '01-12-2023',
        },
    ];
</script>
