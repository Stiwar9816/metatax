<template>
    <div class="panel h-fit w-auto">
        <div class="mb-4 flex items-center">
            <div class="grid h-10 w-10 place-content-center rounded-full dark:text-white-light">
                <!-- Icon -->
                <component :is="icon" />
                <!-- Icon -->
            </div>
            <div class="ltr:ml-2 rtl:mr-2">
                <h5 class="text-xl md:text-xl font-semibold dark:text-white-light">{{ props.label }}</h5>
            </div>
        </div>
        <div class="my-2 ml-2 text-base md:text-base font-semibold text-[#e95f2b]">
            <span class="ltr:mr-2 rtl:ml-2">{{ currencyFormatter('MXN', props.total) }} MXN</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { currencyFormatter } from '../../utils/currencyFormatter';
    // Props
    const props = defineProps({
        label: {
            type: String,
            default: 'Title button',
        },
        total: {
            type: Number,
            default: 2253972947,
        },
        icon: Object,
    });
</script>
