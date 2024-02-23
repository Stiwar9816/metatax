<template>
    <div>
        <ButtonsButtonRoute home="Reportes conciliatorios" route-active="Deudores/Acreedores" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="Serie" placeholder="Ingrese una serie" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableRelationDocument :fields="fields" :items="items" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Deudores/Acreedores' });
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
    const fields = ref([
        { field: 'rfc', title: 'RFC' },
        { field: 'business_name', title: 'Razón social' },
        { field: 'amount_mxn', title: 'Importe (MXN)' },
        { field: '', title: 'Acciones' },
    ]);
    const items = ref([
        {
            rfc: '12OLARAX',
            business_name: 'DHL EXPRESS MEXICO',
            amount_mxn: 123415,
        },
    ]);
</script>
