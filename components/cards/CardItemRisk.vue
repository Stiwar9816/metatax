<template>
    <div class="rounded-md bg-white px-4 py-2.5 shadow dark:bg-[#060818]">
        <span class="mb-4 flex items-center justify-between dark:text-white">{{ props.titleCard }}</span>
        <div class="btn w-full border-0 bg-[#ebedf2] py-1 text-base text-white-dark dark:text-white-light shadow-none dark:bg-black">{{ props.value }}</div>
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        titleCard: {
            type: String,
            default: 'label',
        },
        value: {
            type: Number,
            default: 0,
        },
    });
</script>
