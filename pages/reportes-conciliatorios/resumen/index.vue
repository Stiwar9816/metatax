<template>
    <div>
        <ButtonsButtonRoute home="Miscelánea" route-active="Resumen de cuenta" />
        <div class="grid grid-cols-1 md:grid-cols-3 py-2 gap-4" v-if="data">
            <div v-for="(item, key) in year" :key="key">
                <CardsCardConciliatorySummary :title-card="item" :data="data[key]" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const year: string[] = ['2019', '2020', '2021', '2022', '2023', '2024'];
    const data = [
        {
            currentIssuedCfdi: 5,
            currentCanceledCfdi: 5,
            currentCfdiReceived: 5,
            cfdiReceivedCanceled: 5,
            payrollCanceled: 5,
            currentPayroll: 5,
        },
        {
            currentIssuedCfdi: 5,
            currentCanceledCfdi: 5,
            currentCfdiReceived: 5,
            cfdiReceivedCanceled: 5,
            payrollCanceled: 5,
            currentPayroll: 5,
        },
        {
            currentIssuedCfdi: 5,
            currentCanceledCfdi: 5,
            currentCfdiReceived: 5,
            cfdiReceivedCanceled: 5,
            payrollCanceled: 5,
            currentPayroll: 5,
        },
        {
            currentIssuedCfdi: 5,
            currentCanceledCfdi: 5,
            currentCfdiReceived: 5,
            cfdiReceivedCanceled: 5,
            payrollCanceled: 5,
            currentPayroll: 5,
        },
        {
            currentIssuedCfdi: 5,
            currentCanceledCfdi: 5,
            currentCfdiReceived: 5,
            cfdiReceivedCanceled: 5,
            payrollCanceled: 5,
            currentPayroll: 5,
        },
        {
            currentIssuedCfdi: 5,
            currentCanceledCfdi: 5,
            currentCfdiReceived: 5,
            cfdiReceivedCanceled: 5,
            payrollCanceled: 5,
            currentPayroll: 5,
        },
    ];
</script>
