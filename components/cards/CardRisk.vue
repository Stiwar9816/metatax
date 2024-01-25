<template>
    <div class="panel h-full overflow-hidden border-0 p-0">
        <div class="min-h-[140px] bg-gradient-to-r from-[#364fc0] to-[#100b4b] p-6">
            <div class="flex items-center justify-between text-white">
                <p class="text-2xl font-bold capitalize">{{ props.titleCard }}</p>
                <div class="grid gap-1">
                    <h5 class="text-xs ltr:ml-auto rtl:mr-auto text-white-dark dark:text-white-light font-normal">Fecha de solicitud</h5>
                    <span class="font-semibold text-sm text-white-light">{{ props.requestDate }}</span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-3 -mt-10 px-4">
            <CardsCardItemRisk title-card="Emitidos SAT" :value="props.data.issuedSat" />
            <CardsCardItemRisk title-card="Recibidos SAT" :value="props.data.receivedSat" />
            <CardsCardItemRisk title-card="Emitidos MetaTax" :value="props.data.issuedMt" />
            <CardsCardItemRisk title-card="Recibidos MetaTax" :value="props.data.receivedMt" />
        </div>
        <div class="grid grid-cols-2 gap-4 p-4">
            <span :class="badgeClass">{{ badgeText }}</span>
            <span class="badge flex justify-center items-center bg-dark rounded-md px-2 py-1 text-sm text-white font-semibold">{{ props.deadline }}</span>
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
                issuedSat: Number,
                receivedSat: Number,
                issuedMt: Number,
                receivedMt: Number,
            },
        },
    });

    const dataMatch = () => {
        const { issuedSat, receivedSat, issuedMt, receivedMt } = props.data;
        return issuedSat === receivedSat && issuedMt === receivedMt;
    };
    const badgeText = dataMatch() ? 'Coinciden' : 'No coinciden';
    const badgeClass = `badge flex justify-center items-center ${
        dataMatch() ? 'bg-success' : 'bg-danger'
    } rounded-md px-2 py-1 text-sm text-white font-semibold`;
</script>
