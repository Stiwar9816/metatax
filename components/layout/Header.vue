<template>
    <header class="z-40" :class="{ dark: store.semidark && store.menu === 'horizontal' }">
        <div class="shadow-sm">
            <div class="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-[#0e1726]">
                <div :class="{ 'ltr:mr-2 rtl:ml-2': store.rtlClass === 'rtl' }" class="horizontal-logo flex items-center justify-between lg:hidden">
                    <!-- Logo -->
                    <NuxtLink to="/" class="main-logo flex shrink-0 items-center">
                        <img class="inline w-8 ltr:-ml-1 rtl:-mr-1" src="/assets/images/logo.svg" alt="" />
                        <span
                            class="hidden align-middle text-2xl font-semibold transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline"
                            >MetaTax</span
                        >
                    </NuxtLink>
                    <!-- Logo -->
                    <!-- Toogle Sidebar -->
                    <a
                        class="collapse-icon cursor-pointer flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
                        @click="store.toggleSidebar()"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7L4 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M20 17L4 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </a>
                    <!-- Toogle Sidebar -->
                </div>

                <div
                    class="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] sm:flex-1 ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2"
                >
                    <!-- Button Search -->
                    <div class="sm:ml-4 sm:ltr:mr-auto sm:rtl:ml-auto">
                        <form
                            class="absolute inset-x-0 top-1/2 z-10 mx-4 hidden -translate-y-1/2 sm:relative sm:top-0 sm:mx-0 sm:block sm:translate-y-0"
                            :class="{ '!block': search }"
                            @submit.prevent="search = false"
                        >
                            <div class="relative">
                                <input
                                    type="text"
                                    class="peer form-input bg-gray-100 placeholder:tracking-widest ltr:pl-9 ltr:pr-9 rtl:pr-9 rtl:pl-9 sm:bg-transparent ltr:sm:pr-4 rtl:sm:pl-4"
                                    placeholder="Buscar..."
                                />
                                <button type="button" class="absolute inset-0 h-9 w-9 appearance-none peer-focus:text-primary ltr:right-auto rtl:left-auto">
                                    <svg class="mx-auto" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" stroke-width="1.5" opacity="0.5" />
                                        <path d="M18.5 18.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="absolute top-1/2 block -translate-y-1/2 hover:opacity-80 ltr:right-2 rtl:left-2 sm:hidden"
                                    @click="search = false"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                                        <path
                                            d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>

                        <button
                            type="button"
                            class="search_btn rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 sm:hidden"
                            @click="search = !search"
                        >
                            <svg
                                class="mx-auto h-4.5 w-4.5 dark:text-[#d0d2d6]"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" stroke-width="1.5" opacity="0.5" />
                                <path d="M18.5 18.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <!-- Button Search -->
                    <!-- Button Theme -->
                    <ButtonsButtonTheme />
                    <!-- Button Theme -->
                    <!-- Button Languague -->
                    <!-- <ButtonsButtonLanguage /> -->
                    <!-- Button Languague -->
                    <!-- Notification -->
                    <ButtonsButtonNotification />
                    <!-- Notification -->
                    <!-- User Menu -->
                    <ButtonsButtonUserMenu :menu-links="menuLinks" @open-modal="openModal" />
                    <ModalsChangeFiel
                        v-model:modal-show-cer="isModalOpenFiel"
                        :modal-title="modalTitle"
                        @update:modalShowCer="(value: boolean) => updateModalState('fiel', value)"
                    />
                    <ModalsChangePassword
                        v-model:modal-show="isModalOpenPassword"
                        :modal-title="modalTitle"
                        @update:modalShow="(value: boolean) => updateModalState('password', value)"
                    />
                    <!-- User Menu -->
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
    // Router
    import { useRoute } from 'vue-router';
    const route = useRoute();
    // Store
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    // Types
    import type { MenuLinks } from '../../types/links';
    // Icons
    import IconPersonFillGear from '../icons/IconPersonFillGear.vue';
    import IconSearch from '../icons/IconSearch.vue';
    import IconFileEarmarkArrowUpfill from '../icons/IconFileEarmarkArrowUpfill.vue';
    import IconKeyFill from '../icons/IconKeyFill.vue';
    // Const
    const search = ref<boolean>(false);
    const menuLinks: MenuLinks[] = [
        {
            to: '/administracion-usuarios',
            icon: IconPersonFillGear,
            label: 'Administración de usuarios',
        },
        {
            icon: IconFileEarmarkArrowUpfill,
            label: 'Actualizar FIEL',
        },
        {
            icon: IconSearch,
            label: 'Parámetros de auditoria',
        },
        {
            icon: IconKeyFill,
            label: 'Cambiar contraseña',
        },
    ];
    // Data
    const isModalOpenFiel = ref<boolean>(false);
    const isModalOpenPassword = ref<boolean>(false);
    const modalTitle = ref<string>('');

    // Method to open modal
    const openModal = (title: string) => {
        switch (title) {
            case 'Actualizar FIEL':
                // Abre el modal correspondiente para 'Actualizar FIEL'
                modalTitle.value = title;
                isModalOpenFiel.value = true;
                break;
            case 'Cambiar contraseña':
                // Abre el modal correspondiente para 'Cambiar contraseña'
                modalTitle.value = title;
                isModalOpenPassword.value = true;
                break;
            // Agrega más casos según sea necesario
            default:
                // Por defecto, no hace nada o puedes manejar un caso genérico
                break;
        }
    };

    const updateModalState = (modalType: string, value: boolean) => {
        switch (modalType) {
            case 'fiel':
                isModalOpenFiel.value = value;
                break;
            case 'password':
                isModalOpenPassword.value = value;
                break;
            default:
                // Por defecto, no hace nada o puedes manejar un caso genérico
                break;
        }
    };
    onMounted(() => {
        setActiveDropdown();
    });

    watch(route, (to, from) => {
        setActiveDropdown();
    });

    const setActiveDropdown = () => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    };
</script>
