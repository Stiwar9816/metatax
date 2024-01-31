<template>
    <div class="panel my-4">
        <div class="my-5">
            <client-only>
                <apexchart height="300" :options="columnChart" :series="props.series" class="overflow-hidden rounded-lg bg-white dark:bg-black" />
            </client-only>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    // Props
    const props = defineProps({
        labels: {
            type: Array,
            default: [],
        },
        fileNameExport: String,
        series: Object,
    });
    // Const
    const name = 'es';
    const options = {
        toolbar: {
            exportToSVG: 'Descargar SVG',
            exportToPNG: 'Descargar PNG',
            exportToCSV: 'Descargar CSV',
            menu: 'Menú',
            selection: 'Selección',
            selectionZoom: 'Zoom de selección',
            zoomIn: 'Acercar',
            zoomOut: 'Disminuir el zoom',
            pan: 'Panorámica',
            reset: 'Restablecer zoom',
        },
    };
    const es = {
        name: name,
        options: options,
    };
    const columnChart = computed(() => {
        const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
        const isRtl = store.rtlClass === 'rtl' ? true : false;
        return {
            chart: {
                height: 300,
                type: 'bar',
                locales: [es],
                defaultLocale: 'es',
                zoom: {
                    enabled: true,
                },
                toolbar: {
                    show: true,
                    export: {
                        csv: {
                            filename: props.fileNameExport,
                        },
                        png: {
                            filename: props.fileNameExport,
                        },
                        svg: {
                            filename: props.fileNameExport,
                        },
                    },
                },
            },
            colors: ['#805dca', '#e7515a', '#4361ee', '#805dca', '#e2a03f'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                show: true,
                width: 1.5,
                colors: ['transparent'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60%',
                    endingShape: 'rounded',
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            xaxis: {
                categories: props.labels,
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
                y: {
                    formatter: function (val: any) {
                        return val;
                    },
                },
            },
        };
    });
</script>
