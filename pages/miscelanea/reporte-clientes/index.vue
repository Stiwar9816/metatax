<template>
    <div>
        <ButtonsButtonRoute home="Miscelánea" route-active="Reporte de clientes" />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            <InputsInputDateMonth class="col-span-1" label="Periodo de busqueda" />
            <ButtonsButtonBase class="mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Reporte de clientes' });
    const fields = ref([
        { field: 'client', title: 'Cliente' },
        { field: 'name', title: 'Nombre' },
        { field: 'cfdi', title: `N° de CFDI's` },
    ]);
    const itemsTable = [
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            client: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
    ];
</script>
