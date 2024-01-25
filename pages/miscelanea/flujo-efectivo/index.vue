<template>
    <div>
        <ButtonsButtonRoute home="Miscelánea" route-active="Flujo de efectivo" />
        <form>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
                <InputsInputBase class="col-span-1" type="number" :min="0" label="Monto inicial" placeholder="Monto inicial" />
                <InputsInputDateBase class="col-span-1" label="Periodo" placeholder="Seleccione un periodo" />
                <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
            </div>
        </form>
        <div class="grid my-4 gap-4">
            <CardsCardStatistics :labels="labels" :items="items" />
        </div>
        <TablesTableBaseExport :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Flujo de efectivo' });
    // Const
    const labels: string[] = ['Emitidos', 'Recibidos', 'Nómina', 'Total', 'Saldo final'];
    const items: number[] = [1258.544, 5660, 40, 20, 90];
    const fields = ref([
        { field: 'year', title: 'Año', hide: false },
        { field: 'issued', title: 'Emitidos' },
        { field: 'received', title: 'Recibidos' },
        { field: 'total', title: 'Monto' },
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
