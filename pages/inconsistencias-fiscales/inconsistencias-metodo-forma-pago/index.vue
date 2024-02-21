<template>
    <div>
        <ButtonsButtonRoute home="Inconsistencias fiscales" route-active="Método y forma de pago" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputBase label="Nombre del reporte" placeholder="Ingrese un nombre para el reporte" />
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectType" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
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
    const fields = ref([
        { field: 'way_to_pay', title: 'Forma de pago' },
        { field: 'payment_method', title: 'Metodo de pago' },
        { field: 'serie', title: 'Serie' },
        { field: 'folio', title: 'Folio' },
        { field: 'tax_folio', title: 'Folio Fiscal' },
        { field: 'rfc', title: 'RFC Receptor' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'type_receipt', title: 'Tipo de comprobante' },
        { field: 'date_issue', title: 'Fecha emisión' },
        { field: 'currency', title: 'Moneda' },
        { field: 'exchange_rate', title: 'Tipo de cambio' },
        { field: 'subtotal', title: 'Sub-total' },
        { field: 'discount', title: 'Descuento' },
        { field: 'total', title: 'Total' },
        { field: '', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            way_to_pay: 28,
            payment_method: 'PUE',
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            type_receipt: 'Ingreso',
            date_issue: '01-12-2023',
            currency: 'MXN',
            exchange_rate: '21',
            subtotal: 1244,
            discount: 124,
            total: 15156,
        },
        {
            way_to_pay: 4,
            payment_method: 'PUE',
            serie: 'MEX',
            folio: 12312415,
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            type_receipt: 'Ingreso',
            date_issue: '01-12-2023',
            currency: 'USD',
            exchange_rate: '21',
            subtotal: 1244,
            discount: 124,
            total: 15156,
        },
    ];
</script>
