<template>
    <div>
        <li class="menu nav-item">
            <button
                type="button"
                class="nav-link group w-full"
                :class="{ active: activeDropdown === `${props.label}` }"
                @click="activeDropdown === `${props.label}` ? (activeDropdown = null) : (activeDropdown = `${props.label}`)"
            >
                <div class="flex items-center">
                    <!-- Icon -->
                    <component :is="icon" />
                    <!-- Icon -->
                    <span class="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                        {{ $t(`${props.label}`) }}
                    </span>
                </div>
                <div class="rtl:rotate-180" :class="{ '!rotate-90': activeDropdown === `${props.label}` }">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </button>
            <vue-collapsible :isOpen="activeDropdown === `${props.label}`">
                <ul class="sub-menu text-gray-500">
                    <li v-for="(item, key) in props.links" :key="key">
                        <NuxtLink :to="item.to" @click="toggleMobileMenu">{{ $t(`${item.titleButton}`) }}</NuxtLink>
                    </li>
                    <template v-if="props.subtitle">
                        <li class="menu nav-item">
                            <button
                                type="button"
                                class="w-full before:h-[5px] before:w-[5px] before:rounded before:bg-gray-300 hover:bg-gray-100 ltr:before:mr-2 rtl:before:ml-2 dark:text-[#888ea8] dark:hover:bg-gray-900"
                                @click="subActive === `${props.sublabel}` ? (subActive = null) : (subActive = `${props.sublabel}`)"
                            >
                                {{ $t(`${props.sublabel}`) }}
                                <div class="ltr:ml-auto rtl:mr-auto" :class="{ '-rotate-90 rtl:rotate-90': subActive !== `${props.sublabel}` }">
                                    <IconCaretsDown :fill="true" class="h-4 w-4" />
                                </div>
                            </button>
                            <vue-collapsible :isOpen="subActive === `${props.sublabel}`">
                                <ul :unmount="false" class="sub-menu text-gray-500">
                                    <li @click="toggleMobileMenu" v-for="(subitem, key) in props.sublinks" :key="key">
                                        <NuxtLink :to="subitem.to">{{ $t(`${subitem.titleButton}`) }}</NuxtLink>
                                    </li>
                                </ul>
                            </vue-collapsible>
                        </li>
                    </template>
                </ul>
            </vue-collapsible>
        </li>
    </div>
</template>

<script setup lang="ts">
    import VueCollapsible from 'vue-height-collapsible/vue3';
    // Store
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    // Icons
    import IconCaretsDown from '../icons/IconCaretsDown.vue';
    // Const
    const activeDropdown = ref<string | null>('');
    const subActive = ref<string | null>('');
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
        sublabel: {
            type: String,
            default: 'Title button',
        },
        links: {
            type: Object,
            default: {
                to: String,
                titleButton: String,
            },
        },
        sublinks: {
            type: Object,
            default: {
                to: String,
                titleButton: String,
            },
        },
        icon: Object,
        subtitle: Boolean,
    });
</script>
