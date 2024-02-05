<template>
    <div>
        <ButtonsButtonRoute home="Coincidencias en listas negras" route-active="Alerta 69B" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <InputsInputBase label="Razón social" placeholder="Ingrese un nombre" />
            <ButtonsButtonSelect label="Origen de comprobante" :options="optionsSelectType" />
            <ButtonsButtonSelect label="Estado" :options="optionsSelectStatus" />
            <ButtonsButtonSelect label="Estado en lista negra" :options="optionsSelectStatusList" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
        <TablesTableBlackist :fields="fields" :items="itemsTable" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Alertas en lista negra 69B' });
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
    const optionsSelectType: OptionsSelect[] = [
        {
            value: 'todos',
            text: 'Todos',
        },
        {
            value: 'retenciones',
            text: 'Retenciones',
        },
        {
            value: 'rfc propio',
            text: 'RFC propio',
        },
        {
            value: 'emitidos',
            text: 'Emitidos',
        },
        {
            value: 'recibidos',
            text: 'Recibidos',
        },
    ];
    const optionsSelectStatus: OptionsSelect[] = [
        {
            value: 'todos',
            text: 'Todos',
        },
        {
            value: 'leída',
            text: 'Leída',
        },
        {
            value: 'no leída',
            text: 'No leída',
        },
    ];
    const optionsSelectStatusList: OptionsSelect[] = [
        {
            value: 'todos',
            text: 'Todos',
        },
        {
            value: 'vigente',
            text: 'Vigente',
        },
        {
            value: 'eliminado',
            text: 'Eliminado',
        },
    ];
    const fields = ref([
        { field: 'rfc', title: 'RFC' },
        { field: 'business_name', title: 'Razón Social' },
        { field: 'origin', title: 'Origen' },
        { field: 'read', title: 'Leído' },
        { field: 'status', title: 'Estado' },
        { field: '', title: 'Acciones' },
    ]);
    const itemsTable = [
        {
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            origin: 'Emitido',
            read: false,
            status: true,
        },
        {
            rfc: 'ASO13357804',
            business_name: 'DHL EXPRESS MEXICO',
            origin: 'Emitido',
            read: false,
            status: false,
        },
    ];
</script>
