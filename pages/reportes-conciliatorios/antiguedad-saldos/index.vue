<template>
    <div>
        <ButtonsButtonRoute home="Reportes conciliatorios" route-active="Antigüedad de saldos" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputBase label="Nombre del reporte" placeholder="Ingrese un nombre para el reporte" />
            <InputsInputBase label="RFC" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Año" :options="optionsSelectYear" />
            <ButtonsButtonSelect label="Intervalo" :options="optionsSelectInterval" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Solicitar reporte" />
        </div>
        <TablesTableBase :fields="fields" :items="items" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Antigüedad de saldos' });
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
    const optionsSelectContext: OptionsSelect[] = [
        {
            value: 'emitidos',
            text: 'Emitidos',
        },
        {
            value: 'recibidos',
            text: 'Recibidos',
        },
    ];
    const optionsSelectInterval: OptionsSelect[] = [
        {
            value: '30 dias',
            text: '30 Días',
        },
        {
            value: 'mayor de 30 hasta 60 dias',
            text: 'Mayor de 30 hasta 60 días',
        },
        {
            value: 'mayor de 30 hasta 60 dias',
            text: 'Mayor de 30 hasta 60 días',
        },
        {
            value: 'mayor de 60 hasta 90 dias',
            text: 'Mayor de 60 hasta 90 días',
        },
        {
            value: 'mayor de 90 dias',
            text: 'Mayor de 90 días',
        },
    ];
    const optionsSelectYear: OptionsSelect[] = [
        {
            value: 2024,
            text: '2024',
        },
        {
            value: 2023,
            text: '2023',
        },
        {
            value: 2022,
            text: '2022',
        },
        {
            value: 2021,
            text: '2021',
        },
    ];
    const fields = ref([
        { field: 'report_name', title: 'Nombre del reporte' },
        { field: 'application_date', title: 'Fecha de solicitud' },
        { field: 'rfc', title: 'RFC' },
        { field: 'context', title: 'Contexto' },
        { field: 'interval', title: 'Intervalo' },
        { field: 'year', title: 'Año' },
        { field: 'isAvailable', title: 'Disponible' },
        { field: 'isStatus', title: 'Estado' },
        { field: '', title: 'Acciones' },
    ]);
    const items = ref([
        {
            report_name: 'Test 2024',
            application_date: '2004-05-28',
            rfc: '12OLARAX',
            context: 'Emitido',
            interval: 'Mayor de 30 hasta 60 días',
            year: 2024,
            isAvailable: true,
            isStatus: true,
        },
    ]);
</script>
