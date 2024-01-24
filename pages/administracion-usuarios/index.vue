<template>
    <div>
        <ButtonsButtonRoute home="Configuración" route-active="Administración de usuarios" />
        <TablesTableAdminUser :fields="fields" :items="items" />
    </div>
</template>

<script setup lang="ts">
    useHead({ title: 'Administración de usuarios' });
    // Types
    import type { DataAdminUser } from '~/types/index.ts';
    // Const
    const fields = ref([
        { field: 'username', title: 'Usuario' },
        { field: 'fullname', title: 'Nombre completo' },
        { field: 'email', title: 'Correo electrónico' },
        { field: 'isAdmin', title: 'Administrador' },
        { field: 'isBilling', title: 'Facturación' },
        { field: 'isPayroll', title: 'Nómina' },
        { field: 'isIssued', title: 'Emitidos' },
        { field: 'isReceived', title: 'Recibidos' },
        { field: 'action', title: 'Acciones', sort: false },
    ]);
    const items: DataAdminUser[] = [
        {
            username: 'Admin',
            fullname: 'Caroline Jensen',
            email: 'carolinejensen@zidant.com',
            isAdmin: true,
            isBilling: false,
            isPayroll: false,
            isIssued: true,
            isReceived: true,
        },
        {
            username: 'User',
            fullname: 'Celeste Grant',
            email: 'celestegrant@polarax.com',
            isAdmin: false,
            isBilling: false,
            isPayroll: false,
            isIssued: true,
            isReceived: true,
        },
    ];
</script>
