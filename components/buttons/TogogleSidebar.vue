<template>
    <div>
        <a
            href="javascript:;"
            class="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 hover:text-primary rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
            @click="store.toggleSidebar()"
        >
            <svg class="m-auto h-5 w-5" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    opacity="0.5"
                    d="M16.9998 19L10.9998 12L16.9998 5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </a>
    </div>
</template>

<script setup lang="ts">
    // Store
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
</script>
