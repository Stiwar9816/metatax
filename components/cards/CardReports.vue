<template>
    <div class="panel h-fit w-auto">
        <div class="mb-auto flex items-center">
            <div class="grid h-auto w-8 mr-2 place-content-center rounded-full dark:text-white-light">
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
        icon: Object,
    });
</script>
