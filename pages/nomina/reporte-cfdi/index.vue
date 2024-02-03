<template>
    <div>
        <ButtonsButtonRoute home="Nómina" route-active="Reporte CFDI's" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha Inicial" />
            <InputsInputDateBase label="Fecha Final" />
            <InputsInputBase label="RFC" placeholder="Ingrese un RFC" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: `Reporte CFDI's` });
    const fields = ref([
        { field: 'client', title: 'Folio' },
        { field: 'client', title: 'Folio fiscal' },
        { field: 'name', title: 'RFC' },
        { field: 'min', title: 'Razón social' },
        { field: 'max', title: 'Fecha de emisíon' },
        { field: 'max', title: 'SubTotal' },
        { field: 'max', title: 'Descuento' },
        { field: 'max', title: 'Total' },
        { field: 'max', title: 'Acciones' },
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
