<template>
    <div>
        <ButtonsButtonRoute home="Inconsistencias fiscales" route-active="No sustituidos cancelados" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <InputsInputBase label="Nombre reporte" placeholder="Ingrese un nombre para el reporte" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Solicitar reporte" />
        </div>
        <TablesTableBase :fields="cols" :items="rows" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'No sustituidos cancelados' });
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
    const cols = ref([
        { field: 'report_name', title: 'Nombre reporte' },
        { field: 'application_date', title: 'Fecha de solicitud' },
        { field: 'context', title: 'Contexto' },
        { field: 'date_start', title: 'Fecha inicial' },
        { field: 'date_end', title: 'Fecha final' },
        { field: 'isAvailable', title: 'Disponible' },
        { field: 'isStatus', title: 'Estado' },
        { field: '', title: 'Acciones' },
    ]);
    const rows = ref([
        {
            report_name: 'Test 2024',
            application_date: '2004-05-28',
            context: 'Emitido',
            date_start: '2004-05-28',
            date_end: '2004-05-28',
            isAvailable: true,
            isStatus: true,
        },
    ]);
</script>
