<template>
    <div class="panel h-full w-full">
        <div class="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
            <h5 class="text-lg font-semibold dark:text-white-light">{{ props.title }}</h5>
        </div>

        <div class="datatable">
            <vue3-datatable
                :rows="props.items"
                :columns="props.fields"
                :totalRows="props.items?.length"
                :search="search"
                :sortable="props.sortable"
                skin="whitespace-nowrap bh-table-hover"
                paginationInfo="Mostrando {0} a {1} de {2} registros"
                noDataContent="No hay datos"
                :firstArrow="firtsArrow"
                :lastArrow="lastArrow"
                :previousArrow="previousArrow"
                :nextArrow="nextArrow"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    // Const
    const search = ref<string>('');
    const firtsArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180">
                            <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
    const lastArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180">
                            <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
    const previousArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180">
                            <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>`;
    const nextArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180">
                            <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>`;
    // Props
    const props = defineProps({
        items: Object,
        fields: Object,
        sortable: {
            type: Boolean,
            default: true,
        },
        title: String,
    });
</script>
