<template>
    <div>
        <ButtonsButtonRoute home="Análisis de impuestos" route-active="Impuestos cobrados o pagados" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputBase label="Nombre del análisis" placeholder="Ingrese un nombre para el análisis" />
            <InputsInputDateMonth label="Periodo" placeholder="Seleccione un periodo" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Generar análisis" />
        </div>
        <TablesTableBase :fields="cols" :items="rows" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Impuestos cobrados o pagados' });
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
        { field: 'firstName', title: 'Nombre análisis' },
        { field: 'dob', title: 'Fecha de solicitud' },
        { field: 'company', title: 'Contexto' },
        { field: 'dob', title: 'Periodo solicitado' },
        { field: 'isAvailable', title: 'Disponible' },
        { field: 'isStatus', title: 'Estado' },
        { field: '', title: 'Acciones' },
    ]);
    const rows = ref([
        {
            firstName: 'Caroline Jensen',
            email: 'carolinejensen@zidant.com',
            company: 'POLARAX',
            dob: '2004-05-28',
            isAvailable: true,
            isStatus: true,
        },
    ]);
</script>
