<template>
    <div>
        <ButtonsButtonRoute home="Nómina" route-active="Reporte de complemento" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase class="col-span-1" label="Fecha Inicial" />
            <InputsInputDateBase label="Fecha Final" />
            <InputsInputBase label="RFC" placeholder="Ingrese un RFC" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <div class="grid my-4 gap-4">
            <CardsCardStatistics :labels="labels" :items="items" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Reporte de complemento' });
    const fields = ref([
        { field: 'client', title: 'RFC' },
        { field: 'client', title: 'Razón social' },
        { field: 'name', title: 'Fecha de pago' },
        { field: 'min', title: 'Total sueldos' },
        { field: 'max', title: 'Total gravado' },
        { field: 'max', title: 'Total exento' },
        { field: 'max', title: 'Otras deducciones' },
        { field: 'max', title: 'Total impuestos retenidos' },
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
    // Charts Data
    const labels: string[] = ['Sueldos', 'Gravados', 'Exento', 'Otras deducciones', 'Impuestos retenidos'];
    const items = ref([2395834.70, 1983991.87, 411842.83, 176321.06, 246325.01]);
</script>
