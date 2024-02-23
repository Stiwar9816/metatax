<template>
    <div>
        <ButtonsButtonRoute home="Reportes conciliatorios" route-active="Conciliaciones ERP" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputBase label="Nombre de la conciliación" placeholder="Ingrese un nombre para la conciliación" />
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonSelect label="Tipo de análisis" :options="optionsSelectType" />
            <InputsInputFile file-accept=".csv" :multiple-files="false" label="Seleccione un archivo .csv" />
            <ButtonsButtonBase class="my-2" type="submit" label="Generar conciciliación" />
        </div>
        <TablesTableBase :fields="fields" :items="items" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Conciliaciones ERP' });
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
            value: 'cfdi',
            text: 'CFDI',
        },
        {
            value: 'retenciones',
            text: 'Retenciones',
        },
        {
            value: 'nomina',
            text: 'Nómina',
        },
    ];
    const fields = ref([
        { field: 'report_name', title: 'Nombre de la conciliación' },
        { field: 'name_file', title: 'Nombre del archivo' },
        { field: 'application_date', title: 'Fecha de solicitud' },
        { field: 'date_start', title: 'Fecha inicial' },
        { field: 'date_end', title: 'Fecha final' },
        { field: 'type_receipt', title: 'Tipo de análisis' },
        { field: 'context', title: 'Contexto' },
        { field: 'isAvailable', title: 'Disponible' },
        { field: 'isStatus', title: 'Estado' },
        { field: '', title: 'Acciones' },
    ]);
    const items = ref([
        {
            report_name: 'Test 2024',
            name_file: '12OLARAX.csv',
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
