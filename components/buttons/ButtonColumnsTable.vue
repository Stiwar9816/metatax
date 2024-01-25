<template>
    <div class="dropdown">
        <client-only>
            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start'" offsetDistance="0" class="align-middle">
                <button
                    type="button"
                    class="flex items-center rounded-md border border-[#e0e6ed] px-2 py-2 text-sm font-semibold dark:border-[#253b5c] dark:bg-[#1b2e4b] dark:text-white-dark"
                >
                    <span class="ltr:mr-1 rtl:ml-1">{{ props.label }}</span>
                    <IconsIconCaretsDown />
                </button>
                <template #content>
                    <ul class="whitespace-nowrap">
                        <template v-for="(col, i) in props.fields" :key="i">
                            <li>
                                <div class="flex items-center px-4 py-1">
                                    <label class="mb-0 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            class="form-checkbox"
                                            :id="`chk-${i}`"
                                            :value="col.field"
                                            @change="handleCheckboxChange($event, col)"
                                            :checked="!col.hide"
                                        />
                                        <span :for="`chk-${i}`" class="ltr:ml-2 rtl:mr-2">{{ col.title }}</span>
                                    </label>
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
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    // Props
    const props = defineProps({
        label: {
            type: String,
            default: 'Label',
        },
        fields: Object,
    });
    const handleCheckboxChange = (event: Event, col: { hide: boolean }) => {
        col.hide = !(event.target as HTMLInputElement).checked;
    };
</script>
