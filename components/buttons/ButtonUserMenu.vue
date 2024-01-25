<template>
    <div class="dropdown shrink-0">
        <client-only>
            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start'" offsetDistance="8" class="!block">
                <button type="button" class="group relative block">
                    <span class="flex justify-center items-center w-8 h-8 text-center rounded-full object-cover bg-primary text-base text-dark-light/80">
                        MT
                    </span>
                </button>
                <template #content="{ close }">
                    <ul class="w-[250px] !py-0 font-semibold dark:text-white-dark dark:text-white-light/90">
                        <li>
                            <div class="flex items-center px-4 py-4">
                                <div class="flex-none">
                                    <span
                                        class="flex justify-center items-center w-8 h-8 text-center rounded-full object-cover bg-primary text-base text-dark-light/80"
                                    >
                                        MT
                                    </span>
                                </div>
                                <div class="ltr:pl-4 rtl:pr-4 -mb-3">
                                    <p class="text-sm mb-1 dark:text-dark-light/60">{{ $t(`${props.nameProfile}`) }}</p>
                                    <span class="text-black/60  dark:text-dark-light/80">
                                        {{ $t(`${props.rfc}`) }}
                                    </span>
                                </div>
                            </div>
                        </li>
                        <template v-if="menuLinks && Object.keys(menuLinks).length > 0">
                            <li v-for="(item, key) in menuLinks" :key="key" class="py-1">
                                <NuxtLink @click="handleItemClick(item)" :to="item.to" class="dark:hover:text-white cursor-pointer">
                                    <component :is="item.icon" class="mr-2 w-4.5 h-4.5 shrink-0" />
                                    {{ item.label }}
                                </NuxtLink>
                            </li>
                        </template>

                        <li class="border-t border-white-light dark:border-white-light/10">
                            <NuxtLink to="" class="!py-3 capitalize text-danger cursor-pointer" @click="close()">
                                <!-- Icon -->
                                <svg
                                    class="h-4.5 w-4.5 rotate-90 ltr:mr-2 rtl:ml-2 shrink-0"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.5"
                                        d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <!-- Icon -->
                                Cerrar sesión
                            </NuxtLink>
                        </li>
                    </ul>
                </template>
            </Popper>
        </client-only>
    </div>
</template>

<script setup lang="ts">
    // Store
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    // Types
    import type { MenuLinks } from '../../types/links';
    // Props
    const props = defineProps({
        menuLinks: {
            type: Object as () => MenuLinks[],
            default: {
                to: String,
                icon: Object,
                label: String,
            },
        },
        nameProfile: {
            type: String,
            default: 'AIRMAR TRANSPORTES INTERNACIONALES SA DE CV',
        },
        rfc: {
            type: String,
            default: 'ATI9307029F8',
        },
    });
    // Emits
    const emit = defineEmits();
    const handleItemClick = (item: any) => {
        emit('open-modal', item.label);
    };
</script>
