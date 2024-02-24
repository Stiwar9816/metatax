<template>
    <div>
        <ButtonsButtonRoute home="Reportes conciliatorios" route-active="Duplicidad por datos generales" />
        <div class="panel grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:my-4">
            <InputsInputDateBase label="Fecha inicial" placeholder="Seleccione un periodo" />
            <InputsInputDateBase label="Fecha final" placeholder="Seleccione un periodo" />
            <ButtonsButtonBase class="md:mt-6 my-2" type="submit" label="Mostrar resumen" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <CardsCardDuplication title-card="Emitidos" subtitle-card="Revisados por el cliente" :no-matter="0" :reviewed="0" :pending-review="0" />
            <CardsCardDuplication title-card="Recibidos" subtitle-card="Revisados por el cliente" :no-matter="5" :reviewed="0" :pending-review="5" />
        </div>
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Duplicidad por datos generales' });
    // Const

</script>
