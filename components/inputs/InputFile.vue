<template>
    <div>
        <label :for="props.inputId">{{ props.label }}</label>
        <input
            :id="props.inputId"
            type="file"
            class="form-input font-nunito file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 file:mr-5 file:text-white file:hover:bg-primary"
            :accept="props.fileAccept"
            :multiple="props.multipleFiles"
            required
        />
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        inputId: String,
        label: {
            type: String,
            default: 'label',
        },
        multipleFiles: Boolean,
        fileAccept: String,
    });
</script>
