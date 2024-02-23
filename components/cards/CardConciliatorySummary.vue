<template>
    <div class="panel h-full overflow-hidden border-0 p-0">
        <div class="min-h-[140px] bg-gradient-to-r from-[#364fc0] to-[#100b4b] p-6">
            <div class="flex items-center justify-between text-white">
                <p class="text-2xl font-bold capitalize">{{ props.titleCard }}</p>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-3 -mt-10 px-4 mb-6">
            <CardsCardItemRisk title-card="CFDI Emitidos vigentes" :value="props.data.currentIssuedCfdi" />
            <CardsCardItemRisk title-card="CFDI Recibidos canceladas" :value="props.data.currentCanceledCfdi" />
            <CardsCardItemRisk title-card="Retenciones Emitidas vigentes" :value="props.data.currentCfdiReceived" />
            <CardsCardItemRisk title-card="Retenciones Recibidas canceladas" :value="props.data.cfdiReceivedCanceled" />
            <CardsCardItemRisk title-card="Nómina vigentes" :value="props.data.payrollCanceled" />
            <CardsCardItemRisk title-card="Nómina canceladas" :value="props.data.currentPayroll" />
        </div>
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        titleCard: {
            type: String,
            default: 'label',
        },
        requestDate: {
            type: String,
            default: '2024-01-25',
        },
        deadline: {
            type: String,
            default: '2024-01-25',
        },
        data: {
            type: Object,
            default: {
                currentIssuedCfdi: Number,
                currentCanceledCfdi: Number,
                currentCfdiReceived: Number,
                cfdiReceivedCanceled: Number,
                payrollCanceled: Number,
                currentPayroll: Number,
            },
        },
    });
</script>
