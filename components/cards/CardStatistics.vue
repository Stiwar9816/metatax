<template>
    <div class="panel h-full sm:col-span-2 lg:col-span-1">
        <!-- statistics totals-->
        <div class="my-2 grid place-items-center text-white-dark dark:text-white-light">
            <span class="text-2xl font-bold">Estadísticas totales</span>
        </div>
        <div class="grid gap-4 overflow-hidden text-[#515365] sm:grid-cols-5 grid-cols-2 md:place-items-center my-2">
            <div v-for="(item, key) in labels" :key="key" class="mt-2">
                <span class="text-white-dark dark:text-white-light font-semibold text-lg">{{ item }}</span>
                <div class="text-sm text-[#e7515a] hover:text-[#ad4045] font-semibold">{{ currencyFormatter('MXN', props.items![key]) }} MXN</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        labels: Array as PropType<string[]>,
        items: Array as PropType<number[]>,
    });
</script>
