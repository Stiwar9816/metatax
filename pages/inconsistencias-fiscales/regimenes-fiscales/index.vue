<template>
    <div>
        <ButtonsButtonRoute home="Inconsistencias fiscales" route-active="Régimen fiscal" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <InputsInputBase label="RFC receptor" placeholder="Ingrese un RFC" />
            <ButtonsButtonSelect label="Tipo de comprobante" :options="optionsSelectType" />
            <ButtonsButtonSelect label="Contexto" :options="optionsSelectContext" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Buscar datos" />
        </div>
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Régimen fiscal' });
    // Types
    import type { OptionsSelect } from '~/../../types/index';
    // Const
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
</script>
