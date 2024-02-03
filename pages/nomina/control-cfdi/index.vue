<template>
    <div>
        <ButtonsButtonRoute home="Nómina" route-active="Reporte de nómina con desglose" />
        <div class="panel grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:my-4">
            <InputsInputDateBase class="col-span-1" label="Fecha Inicial" />
            <InputsInputDateBase label="Fecha Final" />
            <InputsInputBase label="RFC" placeholder="Ingrese un RFC" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Generar reporte" />
        </div>
        <TablesTableBase :fields="cols" :items="rows" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Control de CFDi de nómina' });
    const cols = ref([
        { field: 'firstName', title: 'Nombre reporte' },
        { field: 'dob', title: 'Fecha de solicitud' },
        { field: 'company', title: 'RFC' },
        { field: 'dob', title: 'Año' },
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
            isStatus: false,
        },
    ]);
</script>
