<template>
    <div>
        <ButtonsButtonRoute home="Inconsistencias fiscales" route-active="Relaciones no permitidas en CFDI's de pago" />
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
    useHead({ title: `Relaciones no permitidas en CFDI's de pago` });
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
        { field: 'date_issue', title: 'Fecha de emisión' },
        { field: 'rfc', title: 'RFC Receptor' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'tax_folio_dr', title: 'Folio Fiscal DR' },
        { field: 'serie_dr', title: 'Serie DR' },
        { field: 'folio_dr', title: 'Folio DR' },
        { field: 'payment_method_dr', title: 'Método de pago DR' },
        { field: 'currency_dr', title: 'Moneda DR' },
        { field: 'exchange_rate_dr', title: 'Tipo de cambio DR' },
        { field: 'amount_paid_dr', title: 'Importe pagado DR' },
        { field: '', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            tax_folio: 'sdfs-423sa-134124',
            rfc: 'ASO13357804',
            date_issue: '01-12-2023',
            business_name: 'LOGISTICA ROEL',
            tax_folio_dr: 'sdfs-423sa-134124',
            serie_dr: 'CPI',
            folio_dr: 'sdfs-423sa-134124',
            payment_method_dr: 'PUE',
            currency_dr: 'MXN',
            exchange_rate_dr: 2,
            amount_paid_dr: 44055,
        },
    ];
</script>
