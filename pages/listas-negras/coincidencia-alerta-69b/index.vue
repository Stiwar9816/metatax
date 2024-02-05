<template>
    <div>
        <ButtonsButtonRoute home="Coincidencias en listas negras" route-active="Coincidencia alerta 69B" />
        <CardsCardBlacklist class="mt-2" title-card="Coincidencias en listas negras 69B" :data="data[0]" />
    </div>
</template>

<script setup lang="ts">
   useHead({ title: 'Coincidencias en listas negras 69B' });
    const data = [
        {
            client: 14525,
            vendor: 143144,
        },
    ];
</script>
