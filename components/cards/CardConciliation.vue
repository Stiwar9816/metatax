<template>
    <div class="panel h-fit w-auto">
        <div class="mb-4 flex items-center">
            <div class="grid h-10 w-10 place-content-center rounded-full dark:text-white-light">
                <!-- Icon -->
                <component :is="props.icon" />
                <!-- Icon -->
            </div>
            <div class="my-2 font-semibold">
                <h5 class="text-xl dark:text-white-light">
                    {{ props.label }}:
                    <span class="mx-2 text-lg text-[#e7515a] hover:text-[#ad4045]"> {{ props.total }}</span>
                </h5>
            </div>
        </div>
        <!-- Botón Mostrar/Ocultar -->
        <ButtonsButtonBase
            v-if="$props.label !== 'Pagos' && $props.label !== 'Traslados'"
            @click="toggleInfoVisibility"
            :label="showInfo ? 'Ocultar importe' : 'Calcular importe'"
        />
        <!-- Botón Mostrar/Ocultar -->

        <!-- Info Card -->
        <div class="mt-3" v-show="showInfo">
            <div v-if="$props.label === 'Ingresos' || $props.label === 'Egresos'">
                <CardsInfoLineConciliation label="Retenciónes" :value="props.retention" />
                <CardsInfoLineConciliation label="Traslados" :value="props.transfers" />
                <CardsInfoLineConciliation label="Sub-Total" :value="props.subtotal" />
                <CardsInfoLineConciliation label="Total" :value="props.total" />
            </div>
        </div>
        <!-- Info Card -->
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        label: {
            type: String,
            default: 'Title button',
        },
        total: {
            type: Number,
            default: 0,
        },
        subtotal: {
            type: Number,
            default: 0,
        },
        transfers: {
            type: Number,
            default: 0,
        },
        retention: {
            type: Number,
            default: 0,
        },
        icon: Object,
    });

    const showInfo = ref(false);

    function toggleInfoVisibility() {
        showInfo.value = !showInfo.value;
    }
</script>
