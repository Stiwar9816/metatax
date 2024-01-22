<template>
    <div class="dropdown shrink-0">
        <client-only>
            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start'" offsetDistance="8">
                <button
                    type="button"
                    class="block rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                >
                    <img :src="currentFlag" alt="flag" class="h-5 w-5 rounded-full object-cover" />
                </button>
                <template #content="{ close }">
                    <ul class="grid w-[140px] grid-cols-1 gap-2 !px-2 font-semibold text-dark dark:text-white-dark dark:text-white-light/90" @click="close()">
                        <template v-for="item in store.languageList" :key="item.code">
                            <li>
                                <button
                                    type="button"
                                    class="w-full hover:text-primary"
                                    :class="{ 'bg-primary/10 text-primary': store.locale === item?.code }"
                                    @click="changeLanguage(item)"
                                >
                                    <img class="h-5 w-5 rounded-full object-cover" :src="`/assets/images/flags/${item.code.toUpperCase()}.svg`" alt="" />
                                    <span class="ltr:ml-3 rtl:mr-3">{{ item.name }}</span>
                                </button>
                            </li>
                        </template>
                    </ul>
                </template>
            </Popper>
        </client-only>
    </div>
</template>

<script setup lang="ts">
    // App Settings
    import appSetting from '@/app-setting';
    // Store
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    // Types
    import type { Language } from '../../types/locale';
    // I18n
    const { setLocale } = useI18n();
    // multi language
    const changeLanguage = (item: Language) => {
        appSetting.toggleLanguage(item, setLocale);
    };
    const currentFlag = computed((): string => {
        return `/assets/images/flags/${store.locale?.toUpperCase()}.svg`;
    });
</script>
