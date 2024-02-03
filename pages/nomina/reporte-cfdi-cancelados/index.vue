<template>
    <div>
        <ButtonsButtonRoute home="Nómina" route-active="Reporte de nómina cancelados" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase class="col-span-1" label="Fecha Inicial" />
            <InputsInputDateBase label="Fecha Final" />
            <InputsInputBase label="RFC" placeholder="Ingrese un RFC" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Reporte de nómina cancelados' });
    const fields = ref([
        { field: 'client', title: 'Fecha de cancelación' },
        { field: 'client', title: 'Fecha de timbre' },
        { field: 'name', title: 'Fecha de emisión' },
        { field: 'min', title: 'Total' },
        { field: 'max', title: 'PAC' },
        { field: '', title: 'Acciones' },
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
