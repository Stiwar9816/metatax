export default defineNuxtRouteMiddleware((to) => {
    if (process.server) return;

    const { authenticated } = storeToRefs(useAuthStore());
    const token = sessionStorage.getItem('token');

    token ? (authenticated.value = true) : (authenticated.value = false);

    if (!authenticated.value && to.path !== '/') return navigateTo('/');

    if (authenticated.value && to.path === '/') return navigateTo('/riesgo-fiscal');
});