<template>
    <div>
        <ButtonsButtonRoute home="Análisis de impuestos" route-active="Impuestos facturados" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputDateMonth label="Periodo" placeholder="Seleccione un periodo" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Obtener montos" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 my-4 gap-4">
            <CardsCardTaxes title="Impuestos locales trasladados" :value="74137" />
            <CardsCardTaxes title="Impuestos locales retenidos" :value="74137" />
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <TablesTableSimple title="Traslados" :fields="fields" :items="itemsTable" />
            <TablesTableSimple title="Retenciones" :fields="fields" :items="itemsTable" />
        </div>
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Impuestos facturados' });
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
        { field: 'year', title: 'Importe' },
        { field: 'issued', title: 'Base' },
        { field: 'received', title: 'Impuesto' },
        { field: 'total', title: 'Tipo factor' },
        { field: 'total', title: 'Tasa o cuota' },
    ]);
    const itemsTable = [
        {
            year: 2018,
            issued: 943203040.42,
            received: 175770476.91,
            total: 1118973517.33,
        },
        {
            year: 2018,
            issued: 943203040.42,
            received: 175770476.91,
            total: 1118973517.33,
        },
        {
            year: 2018,
            issued: 943203040.42,
            received: 175770476.91,
            total: 1118973517.33,
        },
        {
            year: 2018,
            issued: 943203040.42,
            received: 175770476.91,
            total: 1118973517.33,
        },
        {
            year: 2018,
            issued: 943203040.42,
            received: 175770476.91,
            total: 1118973517.33,
        },
        {
            year: 2018,
            issued: 943203040.42,
            received: 175770476.91,
            total: 1118973517.33,
        },
    ];
</script>
