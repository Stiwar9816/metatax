<template>
    <div>
        <ButtonsButtonRoute home="Análisis de impuestos" route-active="Impuestos de nómina" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputDateMonth label="Periodo" placeholder="Seleccione un periodo" />
            <ButtonsButtonSelect label="Tipo de emisión" :options="optionsSelectIssue" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Obtener montos" />
        </div>
        <div class="grid grid-cols-1 gap-4 my-6 lg:grid-cols-2">
            <TablesTableSimple title="Honorarios asimilados" :fields="fields" :items="itemsTable" />
            <TablesTableSimple title="Honorarios exceptos asimilados" :fields="fields" :items="itemsTable" />
        </div>
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Impuestos de nómina' });
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
    const optionsSelectIssue: OptionsSelect[] = [
        {
            value: 'fecha de emision',
            text: 'Fecha de emisión',
        },
        {
            value: 'fecha de pago',
            text: 'Fecha de pago',
        },
    ];
    const fields = ref([
        { field: 'year', title: 'Retenciones ISR por salarios' },
        { field: 'issued', title: 'Base de remuneración' },
        { field: 'received', title: 'Cuota obrera del seguro social' },
        { field: 'total', title: 'Aportaciones a retiro' },
        { field: 'total', title: 'Subsidio pagado' },
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
