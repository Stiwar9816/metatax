<template>
    <div>
        <ButtonsButtonRoute home="Miscelánea" route-active="Reporte de proveedores" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
            <InputsInputDateMonth class="col-span-1" label="Periodo de busqueda" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Reporte de proveedores' });
    definePageMeta({
        middleware: ['auth'],
    });
    const fields = ref([
        { field: 'vendor', title: 'Proveedor' },
        { field: 'name', title: 'Nombre' },
        { field: 'cfdi', title: `N° de CFDI's` },
    ]);
    const itemsTable = [
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
        {
            vendor: 'ASO13357804',
            name: 'Servicios logisticos',
            cfdi: 91,
        },
    ];
</script>
