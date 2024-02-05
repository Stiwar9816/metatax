<template>
    <div class="panel h-dvh overflow-hidden border-0 p-0">
        <div class="min-h-[140px] bg-gradient-to-r from-[#364fc0] to-[#100b4b] p-6">
            <div class="grid grid-cols-1 text-white">
                <p class="text-lg mb-2 md:mb-0 md:text-3xl font-bold">{{ props.titleCard }}</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 md:my-4 px-2">
                    <div class="mr-2 md:mx-4">
                        <span :class="badgeClass">{{ badgeText }}</span>
                    </div>
                    <div>
                        <h5 class="text-xs mx-auto text-white-dark dark:text-white-light font-normal">Fecha de solicitud</h5>
                        <span class="font-semibold text-sm text-white-light">{{ props.requestDate }}</span>
                    </div>
                    <div>
                        <h5 class="text-xs mx-auto text-white-dark dark:text-white-light font-normal">Desde</h5>
                        <span class="font-semibold text-sm text-white-light">{{ props.dateStart }}</span>
                    </div>
                    <div>
                        <h5 class="text-xs mx-auto text-white-dark dark:text-white-light font-normal">Hasta</h5>
                        <span class="font-semibold text-sm text-white-light">{{ props.requestDate }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 md:py-0 -mt-10 px-4">
            <CardsCardItemRisk title-card="Comprobantes clientes" :value="props.data.client" />
            <CardsCardItemRisk title-card="Comprobantes proveedores" :value="props.data.vendor" />
        </div>
        <br />
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
        dateStart: {
            type: String,
            default: '2019-01-01',
        },
        data: {
            type: Object,
            default: {
                client: Number,
                vendor: Number,
            },
        },
    });

    const dataMatch = () => {
        const { client, vendor } = props.data;
        return client === vendor;
    };
    const badgeText = dataMatch() ? 'Coinciden' : 'No coinciden';
    const badgeClass = `badge flex justify-center items-center ${
        dataMatch() ? 'bg-success' : 'bg-danger'
    } rounded-md px-2 py-1 text-sm text-white font-semibold`;
</script>
