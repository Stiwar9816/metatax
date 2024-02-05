<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav class="sidebar fixed top-0 bottom-0 z-50 h-full min-h-screen w-[300px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300">
            <div class="h-full bg-white dark:bg-[#0e1726]">
                <div class="flex items-center justify-between px-4 py-3">
                    <!-- Logo -->
                    <NuxtLink to="/" class="main-logo flex shrink-0 items-center">
                        <img class="ml-[5px] w-8 flex-none" src="/assets/images/logo.svg" alt="" />
                        <span class="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">MetaTax</span>
                    </NuxtLink>
                    <!-- Logo -->
                    <!-- Toogle Sidebar -->
                    <ButtonsTogogleSidebar />
                    <!-- Toogle Sidebar -->
                </div>
                <client-only>
                    <!-- Menu Aside -->
                    <perfect-scrollbar
                        :options="{
                            swipeEasing: true,
                            wheelPropagation: false,
                        }"
                        class="relative h-[calc(100vh-80px)]"
                    >
                        <!-- Menu Links -->
                        <ul class="relative space-y-0.5 p-4 py-0 font-semibold">
                            <ButtonsButtonDropdown :icon="IconBarChart" label="Riesgo fiscal" :links="linkRiesgoFiscal" />
                            <ButtonsButtonDropdown :icon="IconInboxesFill" label="Miscelánea" :links="linkMiscelanea" />
                            <ButtonsButtonDropdown
                                :icon="IconBarChartSteps"
                                label="Reportes conciliatorios"
                                :links="linkReportesConciliatorios"
                                :subtitle="true"
                                sublabel="Posible duplicidad"
                                :sublinks="linkReportesConciliatoriosAdicional"
                            />
                            <ButtonsButtonDropdown :icon="IconPieChartFill" label="Reportes de nómina" :links="linkReporteNomina" />
                            <ButtonsButtonDropdown :icon="IconGraphUp" label="Análisis de impuestos" :links="linkAnalisisImpuestos" />
                            <ButtonsButtonDropdown :icon="IconFileEarmarkTextFill" label="Relaciones entre documentos" :links="linkRelacionDocumentos" />
                            <ButtonsButtonDropdown :icon="IconExclamationOctagonFill" label="Inconsistencias fiscales" :links="linkInconsistenciasFiscales" />
                            <ButtonsButtonDropdown
                                :icon="IconExclamationDiamondFill"
                                label="Inconsistencias comerciales"
                                :links="linkInconsistenciasComerciales"
                            />
                            <ButtonsButtonDropdown :icon="IconListCheck" label="Coincidencias en listas negras" :links="linkCoincidenciasListaNegra" />
                        </ul>
                        <!-- Menu Links -->
                    </perfect-scrollbar>
                    <!-- Menu Aside -->
                </client-only>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    // Types
    import type { Links } from '~/types/links';
    // Store
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    // Icons
    import IconBarChart from '~/components/icons/IconBarChart.vue';
    import IconInboxesFill from '~/components/icons/IconInboxesFill.vue';
    import IconBarChartSteps from '~/components/icons/IconBarChartSteps.vue';
    import IconPieChartFill from '~/components/icons/IconPieChartFill.vue';
    import IconGraphUp from '~/components/icons/IconGraphUp.vue';
    import IconFileEarmarkTextFill from '~/components/icons/IconFileEarmarkTextFill.vue';
    import IconExclamationDiamondFill from '~/components/icons/IconExclamationDiamondFill.vue';
    import IconExclamationOctagonFill from '~/components/icons/IconExclamationOctagonFill.vue';
    import IconListCheck from '~/components/icons/IconListCheck.vue';
    // Links Menu
    const linkRiesgoFiscal: Links[] = [
        {
            to: '/',
            titleButton: 'Análisis de riesgo fiscal',
        },
    ];
    const linkMiscelanea: Links[] = [
        {
            to: '/miscelanea/reporte-general-de-conceptos',
            titleButton: 'Reporte general de conceptos',
        },
        {
            to: '/miscelanea/reporte-precios-productos-servicios',
            titleButton: 'Reporte de precios de productos y servicios',
        },
        {
            to: '/miscelanea/reporte-clientes',
            titleButton: 'Reporte de clientes',
        },
        {
            to: '/miscelanea/reporte-proveedores',
            titleButton: 'Reporte de proveedores',
        },
        {
            to: '/miscelanea/sincronizacion-sat',
            titleButton: 'Sincronización SAT',
        },
        {
            to: '/miscelanea/flujo-efectivo',
            titleButton: 'Flujo de efectivo',
        },
    ];
    const linkReportesConciliatorios: Links[] = [
        {
            to: '',
            titleButton: 'Resumen de la cuenta',
        },
        {
            to: '',
            titleButton: 'Emitidos no cancelados',
        },
        {
            to: '',
            titleButton: 'Recibidos no cancelados',
        },
        {
            to: '',
            titleButton: 'Cancelados',
        },
        {
            to: '',
            titleButton: 'Documentos por fecha de cancelación',
        },
        {
            to: '',
            titleButton: 'Antigüedad de saldos',
        },
        {
            to: '',
            titleButton: 'Integración IVA-SAT',
        },
        {
            to: '',
            titleButton: 'Retenciones emitidas',
        },
        {
            to: '',
            titleButton: 'Retenciones recibidas',
        },
        {
            to: '',
            titleButton: 'Retenciones por fecha de cancelación',
        },
        {
            to: '',
            titleButton: 'Listado deudores/acreedores',
        },
        {
            to: '',
            titleButton: 'Conciliación ERP',
        },
    ];
    const linkReportesConciliatoriosAdicional: Links[] = [
        {
            to: '',
            titleButton: 'Duplicidad por datos generales',
        },
        {
            to: '',
            titleButton: 'Duplicidad por datos del CFDI',
        },
    ];
    const linkReporteNomina: Links[] = [
        {
            to: '/nomina/reporte-cfdi',
            titleButton: "Reportes CFDI's",
        },
        {
            to: '/nomina/reporte-complemento',
            titleButton: 'Reporte de complemento',
        },
        {
            to: '/nomina/reporte-desglose',
            titleButton: 'Reporte de nómina con desglose',
        },
        {
            to: '/nomina/reporte-cfdi-cancelados',
            titleButton: 'Reporte de CFDI cancelados',
        },
        {
            to: '/nomina/reporte-nomina-fecha-cancelacion',
            titleButton: 'Reporte de CFDI por fecha de cancelación',
        },
        {
            to: '/nomina/control-cfdi',
            titleButton: 'Control CFDI por nómina',
        },
    ];
    const linkAnalisisImpuestos: Links[] = [
        {
            to: '/analisis-impuestos/monto-impuestos-facturados',
            titleButton: 'Montos por impuestos facturados',
        },
        {
            to: '/analisis-impuestos/impuestos-cobrados-pagados',
            titleButton: 'Impuestos efectivamente cobrados o pagados',
        },
        {
            to: '/analisis-impuestos/impuestos-nomina',
            titleButton: 'Análisis de impuestos de nómina',
        },
    ];
    const linkRelacionDocumentos: Links[] = [
        {
            to: '/relaciones-documentos/analisis-cfdi-relacionados',
            titleButton: "Análisis de CFDI vs CFDI's relacionados",
        },
        {
            to: '/relaciones-documentos/analisis-cfdi-comprobantes',
            titleButton: 'Análisis de CFDI vs comprobantes de pagos',
        },
        {
            to: '/relaciones-documentos/analisis-comprobantes-cfdi',
            titleButton: 'Análisis de comprobantes de pagos vs CFDI',
        },
        {
            to: '/relaciones-documentos/cfdi-relaciones',
            titleButton: "CFDI's y sus relaciones",
        },
    ];
    const linkInconsistenciasFiscales: Links[] = [
        {
            to: '',
            titleButton: "CFDI's de pago con documento relacionado inexistente",
        },
        {
            to: '',
            titleButton: "Relaciones no permitidas en CFDI's de pago",
        },
        {
            to: '',
            titleButton: 'Facturas canceladas que están en comprobantes de pago',
        },
        {
            to: '',
            titleButton: "CFDI's de pago extemporáneos",
        },
        {
            to: '',
            titleButton: "CFDI's con inconsistencias entre método y forma de pago",
        },
        {
            to: '',
            titleButton: 'Regímnes fiscales',
        },
        {
            to: '',
            titleButton: 'Lugar de expedición',
        },
        {
            to: '',
            titleButton: 'Sustituidos no cancelados',
        },
        {
            to: '',
            titleButton: 'No sustituidos cancelados',
        },
        {
            to: '',
            titleButton: 'Relacionados inexistentes',
        },
    ];
    const linkInconsistenciasComerciales: Links[] = [
        {
            to: '/inconsistencias-comerciales/formas-pago',
            titleButton: 'Formas de pago',
        },
        {
            to: '/inconsistencias-comerciales/usos-cfdi',
            titleButton: "Usos CFDI's",
        },
        {
            to: '/inconsistencias-comerciales/moneda',
            titleButton: 'Moneda',
        },
    ];
    const linkCoincidenciasListaNegra: Links[] = [
        {
            to: '/listas-negras/alerta-69',
            titleButton: 'Alertas lista negra 69',
        },
        {
            to: '/listas-negras/alerta-69b',
            titleButton: 'Alertas lista negra 69B',
        },
        {
            to: '/listas-negras/coincidencia-alerta-69b',
            titleButton: 'Coincidencias lista negra 69B',
        },
    ];

    const subActive: any = ref('');

    onMounted(() => {
        setTimeout(() => {
            const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');

            if (selector) {
                selector.classList.add('active');
                const ul: any = selector.closest('ul.sub-menu');
                if (ul) {
                    let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];

                    if (ele.length) {
                        ele = ele[0];
                        setTimeout(() => {
                            ele.click();
                        });
                    }
                }
            }
        });
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 1024) {
            store.toggleSidebar();
        }
    };
</script>
