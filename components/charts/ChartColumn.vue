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
        series: Object,
    });
    const columnChart = computed(() => {
        const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
        const isRtl = store.rtlClass === 'rtl' ? true : false;
        return {
            chart: {
                height: 300,
                type: 'bar',
                zoom: {
                    enabled: true,
                },
                toolbar: {
                    show: true,
                },
            },
            colors: ['#805dca', '#e7515a'],
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
