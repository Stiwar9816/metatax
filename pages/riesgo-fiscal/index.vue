<template>
    <div>
        <ButtonsButtonRoute home="Riesgo fiscal" route-active="Análisis de riesgo fiscal" />
        <div class="panel grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <ButtonsButtonSelect class="col-span-1" label="Rango de busqueda" :options="optionsSelectView" />
            <ButtonsButtonSelect class="col-span-1" label="Puntos de busqueda" :options="optionsMeasuringPoint" />
        </div>
        <div class="grid gap-4 md:grid md:grid-cols-3">
            <CardsCardBase :icon="IconBarChartSteps" label="Emitidos" />
            <CardsCardBase :icon="IconBarChartSteps" label="Recibidos" :total="603557627" />
            <CardsCardBase :icon="IconBarChartSteps" label="Monto" :total="2857530574" />
        </div>
        <ChartsChartColumn
            v-if="columnChartSeries && columnChartSeries.length > 0"
            :labels="labelsChart"
            :series="columnChartSeries"
            file-name-export="análisis-riesgo-fiscal"
        />
        <TablesTableBaseExport
            v-if="items && items.length > 0"
            :fields="fields"
            :items="items"
            :excel-fields="excelColumns"
            filename-export="análisis_riesgo_fiscal"
        />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Riesgo fiscal' });
    definePageMeta({
        middleware: ['auth'],
    });
    // Icons
    import IconBarChartSteps from '~/components/icons/IconBarChartSteps.vue';
    // Types
    import type { OptionsSelect, DataRiesgo } from '~/../../types/index';
    // Const
    const optionsSelectView: OptionsSelect[] = [
        {
            value: 'all-year',
            text: 'Año en curso',
        },
        {
            value: 'all-year',
            text: 'Todos los años',
        },
        {
            value: 'all-year',
            text: 'Todos los años por mes',
        },
        {
            value: 'all-year',
            text: 'Todos los años desglosado por riesgo',
        },
    ];
    const optionsMeasuringPoint: OptionsSelect[] = [
        {
            value: 'all-year',
            text: '2023-12-21 - Auto Generado',
        },
    ];
    // Charts Data
    const labelsChart = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    const columnChartSeries = ref([
        {
            name: 'Emitidos',
            data: [44, 55, 57, 56, 61, 58, 63],
        },
        {
            name: 'Recibidos',
            data: [76, 85, 101, 98, 87, 105, 91],
        },
    ]);
    const fields = ref([
        { field: 'year', title: 'Año', hide: false },
        { field: 'issued', title: 'Emitidos' },
        { field: 'received', title: 'Recibidos' },
        { field: 'total', title: 'Monto' },
    ]);

    const items: DataRiesgo[] = [
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

    const excelColumns = {
        year: 'Año',
        issued: 'Emitidos',
        received: 'Recibidos',
        total: 'Monto',
    };
</script>
