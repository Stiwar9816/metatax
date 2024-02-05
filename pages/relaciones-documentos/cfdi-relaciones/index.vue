<template>
    <div>
        <ButtonsButtonRoute home="Relación entre documentos" route-active="CFDI's y sus relaciones" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputBase label="Nombre del reporte" placeholder="Ingrese un nombre para el reporte" />
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectType" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Generar reporte" />
        </div>
        <TablesTableBase :fields="cols" :items="rows" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: `CFDI's y sus relaciones` });
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
            value: 'todos',
            text: 'Todos',
        },
        {
            value: 'ingresos',
            text: 'Ingresos',
        },
        {
            value: 'egresos',
            text: 'Egresos',
        },
    ];
    const cols = ref([
        { field: 'report_name', title: 'Nombre reporte' },
        { field: 'rfc', title: 'RFC' },
        { field: 'application_date', title: 'Fecha de solicitud' },
        { field: 'context', title: 'Contexto' },
        { field: 'type_receipt', title: 'Tipo de comprobante' },
        { field: 'date_start', title: 'Fecha inicial' },
        { field: 'date_end', title: 'Fecha final' },
        { field: 'isAvailable', title: 'Disponible' },
        { field: 'isStatus', title: 'Estado' },
        { field: '', title: 'Acciones' },
    ]);
    const rows = ref([
        {
            report_name: 'Test 2024',
            rfc: '12OLARAX',
            application_date: '2004-05-28',
            context: 'Emitido',
            type_receipt: 'Ingreso',
            date_start: '2004-05-28',
            date_end: '2004-05-28',
            isAvailable: true,
            isStatus: true,
        },
    ]);
</script>
