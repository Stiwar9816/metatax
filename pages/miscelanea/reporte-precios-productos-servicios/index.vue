<template>
    <div>
        <ButtonsButtonRoute home="Miscelánea" route-active="Reporte de precios de productos y servicios" />
        <div class="panel grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
            <InputsInputDateMonth class="col-span-1" label="Periodo de busqueda" />
            <ButtonsButtonSelect class="col-span-1" label="Periodo de busqueda" :options="optionsSelectSearch" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Reporte de precios de productos y servicios' });
    
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
    const optionsSelectSearch: OptionsSelect[] = [
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
        { field: 'client', title: 'Cod Producto / Servicio' },
        { field: 'name', title: 'Descripción' },
        { field: 'min', title: 'Min Valor Unit.' },
        { field: 'max', title: 'Max Valor Unit.' },
    ]);
    const itemsTable = [
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            min: 91,
            max: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            min: 91,
            max: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            max: 91,
            min: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            min: 91,
            max: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            min: 91,
            max: 91,
        },
    ];
</script>
