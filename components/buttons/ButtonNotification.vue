<template>
    <div class="dropdown shrink-0">
        <client-only>
            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start'" offsetDistance="8">
                <button
                    type="button"
                    class="relative block rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                        />
                        <path
                            d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                        <path d="M12 6V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                    <!-- <span class="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
                        <span
                            class="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"
                        ></span>
                        <span class="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
                    </span> -->
                </button>
                <template #content="{ close }">
                    <ul class="w-[300px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px]">
                        <li>
                            <div class="flex items-center justify-between px-4 py-2 font-semibold">
                                <h4 class="text-lg">Notificaciones</h4>
                                <!-- <template v-if="notifications.length">
                                    <span class="badge bg-primary/80" v-text="notifications.length + 'New'"></span>
                                </template> -->
                            </div>
                        </li>
                        <template v-for="notification in notifications" :key="notification.id">
                            <li class="dark:text-white-light/90">
                                <div class="group flex items-center px-4 py-2">
                                    <div class="grid place-content-center rounded">
                                        <div class="relative h-12 w-12">
                                            <img class="h-12 w-12 rounded-full object-cover" :src="`/assets/images/${notification.profile}`" alt="" />
                                            <!-- <span class="absolute right-[6px] bottom-0 block h-2 w-2 rounded-full bg-success"></span> -->
                                        </div>
                                    </div>
                                    <div class="flex flex-auto ltr:pl-3 rtl:pr-3">
                                        <div class="ltr:pr-3 rtl:pl-3">
                                            <h6 v-html="notification.message"></h6>
                                            <span class="block text-xs font-normal dark:text-gray-500" v-text="notification.time"></span>
                                        </div>
                                        <button
                                            type="button"
                                            class="text-neutral-300 opacity-0 hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto"
                                            @click="removeNotification(notification.id)"
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
                                </div>
                            </li>
                        </template>
                        <!-- <template v-if="notifications.length">
                            <li>
                                <div class="p-4">
                                    <button class="btn btn-primary btn-small block w-full" @click="close()">Read All Notifications</button>
                                </div>
                            </li>
                        </template> -->
                        <template v-if="!notifications.length">
                            <li>
                                <div class="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent">
                                    <div class="mx-auto mb-4 rounded-full text-primary ring-4 ring-primary/30">
                                        <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                opacity="0.5"
                                                d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M10 4.25C10.4142 4.25 10.75 4.58579 10.75 5V11C10.75 11.4142 10.4142 11.75 10 11.75C9.58579 11.75 9.25 11.4142 9.25 11V5C9.25 4.58579 9.58579 4.25 10 4.25Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    No hay datos disponibles.
                                </div>
                            </li>
                        </template>
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
    // Const
    const notifications = ref([
        {
            id: 1,
            profile: 'user-profile.jpeg',
            message: '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
            time: '45 min ago',
        },
        {
            id: 2,
            profile: 'profile-34.jpeg',
            message: '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
            time: '9h Ago',
        },
        {
            id: 3,
            profile: 'profile-16.jpeg',
            message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
            time: '9h Ago',
        },
    ]);

    const removeNotification = (value: number) => {
        notifications.value = notifications.value.filter((d) => d.id !== value);
    };
</script>
