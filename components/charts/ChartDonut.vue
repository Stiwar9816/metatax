<template>
    <div class="panel my-4">
        <apexchart height="300" :options="donutChart" :series="props.series" class="bg-white dark:bg-black rounded-lg overflow-hidden" />
    </div>
</template>

<script setup lang="ts">
    import apexchart from 'vue3-apexcharts';
    // Props
    const props = defineProps({
        labels: Array as PropType<string[]>,
        colors: Array as PropType<string[]>,
        series: Array as PropType<number[]>,
        fileNameExport: String,
        titleChart: String,
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
    const donutChart = computed(() => {
        return {
            chart: {
                height: 300,
                type: 'donut',
                locales: [es],
                defaultLocale: 'es',
                zoom: {
                    enabled: false,
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
            dataLabels: {
                enabled: true,
            },
            stroke: {
                show: false,
            },
            labels: props.labels,
            colors: ['#4361ee', '#805dca', '#e2a03f', '#804b5a', '#e7515a'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                },
            ],
            legend: {
                position: 'bottom',
            },
            title: {
                text: props.titleChart,
            },
            noData: {
                text: 'No se encontraron datos',
            },
        };
    });
</script>
