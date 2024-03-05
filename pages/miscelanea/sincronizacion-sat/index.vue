<template>
    <div>
        <ButtonsButtonRoute home="Miscelánea" route-active="Sincronización SAT" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <ButtonsButtonSelect class="col-span-1" label="Periodo de busqueda" :options="optionsSelectSearch" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 py-2 gap-4" v-if="data">
            <div v-for="(item, key) in month" :key="key">
                <CardsCardRisk :title-card="item" :data="data[key]" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Sincronización SAT' });
    
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
    const optionsSelectSearch: OptionsSelect[] = [
        {
            value: 2019,
            text: '2019',
        },
        {
            value: 2020,
            text: '2020',
        },
        {
            value: 2021,
            text: '2021',
        },
        {
            value: 2022,
            text: '2022',
        },
        {
            value: 2023,
            text: '2023',
        },
        {
            value: 2024,
            text: '2024',
        },
    ];
    const month: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const data = [
        {
            issuedSat: 3,
            receivedSat: 3,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
        {
            issuedSat: 0,
            receivedSat: 0,
            issuedMt: 0,
            receivedMt: 0,
        },
    ];
</script>
