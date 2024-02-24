<template>
    <div class="rounded-md bg-white px-4 py-2 shadow dark:bg-[#060818]">
        <span class="mb-4 flex items-center justify-between dark:text-white">{{ props.titleCard }}</span>
        <div class="btn w-full border-0 bg-[#ebedf2] py-1 text-base text-[#515365] shadow-none dark:bg-black dark:text-[#bfc9d4]">{{ props.value }}</div>
        <button type="button" :class="{ 'btn btn-warning': props.value > 0, 'btn btn-primary': props.value <= 0 }" class="btn btn-primary my-4 w-full">
            {{ props.titleButton }}
        </button>
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        titleCard: {
            type: String,
            default: 'label',
        },
        titleButton: {
            type: String,
            default: 'label button',
        },
        value: {
            type: Number,
            default: 0,
        },
    });
</script>
