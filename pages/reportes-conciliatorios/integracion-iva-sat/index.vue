<template>
    <div>
        <ButtonsButtonRoute home="Reportes conciliatorios" route-active="Integración IVA-SAT" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputBase label="Nombre del reporte" placeholder="Ingrese un nombre para el reporte" />
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonSelect label="Tipo de análisis" :options="optionsSelectType" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Solicitar reporte" />
        </div>
        <TablesTableBase :fields="fields" :items="items" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Integración IVA-SAT' });
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
    const optionsSelectType: OptionsSelect[] = [
        {
            value: 'ingreso',
            text: 'Ingreso',
        },
        {
            value: 'egreso',
            text: 'Egreso',
        },
    ];
    const fields = ref([
        { field: 'report_name', title: 'Nombre del reporte' },
        { field: 'application_date', title: 'Fecha de solicitud' },
        { field: 'date_start', title: 'Fecha inicial' },
        { field: 'date_end', title: 'Fecha final' },
        { field: 'type_receipt', title: 'Tipo de comprobante' },
        { field: 'context', title: 'Contexto' },
        { field: 'isAvailable', title: 'Disponible' },
        { field: 'isStatus', title: 'Estado' },
        { field: '', title: 'Acciones' },
    ]);
    const items = ref([
        {
            report_name: 'Test 2024',
            application_date: '2004-05-28',
            date_start: '2004-05-28',
            date_end: '2004-05-28',
            type_receipt: 'Nómina',
            context: 'Emitido',
            isAvailable: true,
            isStatus: true,
        },
    ]);
</script>
