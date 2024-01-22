<template>
    <div>
        <li class="menu nav-item">
            <NuxtLink :to="props.to" class="nav-link group" @click="toggleMobileMenu">
                <div class="flex items-center">
                    <!-- Icon -->
                    <component :is="props.icon" />
                    <!-- Icon -->
                    <span class="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t(`${props.label}`) }}</span>
                </div>
            </NuxtLink>
        </li>
    </div>
</template>

<script setup lang="ts">
    // Store
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    // Const
    const toggleMobileMenu = () => {
        if (window.innerWidth < 1024) {
            store.toggleSidebar();
        }
    };
    // Props
    const props = defineProps({
        label: {
            type: String,
            default: 'Title button',
        },
        to: {
            type: String,
            default: '#',
        },
        icon: Object,
    });
</script>
