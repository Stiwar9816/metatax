export default defineNuxtRouteMiddleware(({ to, redirect, next }: any) => {
    if (process.client) {
        // Obtiene la instancia del almacén de autenticación
        const { token } = storeToRefs(useAuthStore());
        console.log(token.value);
        // Verifica si el usuario está autenticado
        if (!token.value) {
            // Redirige al usuario a la página de inicio de sesión si no está autenticado
            console.log('Token no existe');
            // return navigateTo('/');
        }

        if (token.value && to?.name === '/') {
            console.log('NavigateTo', token.value, to?.name);
            return navigateTo('/riesgo-fiscal');
        }

        if (!token.value) {
            abortNavigation();
            return redirect('/');
        }
    }
});
