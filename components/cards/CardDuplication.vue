<template>
    <div class="panel h-auto overflow-hidden border-0 p-0">
        <div class="h-auto bg-gradient-to-r from-[#364fc0] to-[#100b4b] p-6 font-semibold">
            <div class="flex mb-6">
                <span class="text-white text-2xl">{{ props.titleCard }}</span>
            </div>
            <div class="flex text-base my-2 ml-auto items-center justify-between text-white">
                <p>{{ props.subtitleCard }}</p>
                <span>{{ props.reviewed }}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 md:py-0 mt-4 md:-mt-4 px-4 my-4">
            <CardsCardDuplicationInfo title-card="Sin importar" title-button="Ver listado" :value="props.noMatter" />
            <CardsCardDuplicationInfo title-card="Pendientes por revisión" title-button="Ver listado" :value="props.pendingReview" />
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
        subtitleCard: {
            type: String,
            default: 'Sublabel',
        },
        reviewed: {
            type: Number,
            default: 0,
        },
        noMatter: {
            type: Number,
            default: 0,
        },
        pendingReview: {
            type: Number,
            default: 0,
        },
    });
</script>
