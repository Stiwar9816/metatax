import { defineStore } from 'pinia';
import type { AuthState, SigninInput } from '~/types';

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => ({
        token: process.client ? sessionStorage.getItem('token') || 'null' : 'null',
    }),
    getters: {
        isAuthenticated(state): boolean {
            // Verifica si el código se está ejecutando en el navegador
            if (process.client) {
                console.log(!!state.token);
                return !!state.token;
            }
            return false;
        },
    },
    actions: {
        async login(credentials: SigninInput) {
            if (process.client) {
                const base_url = `${import.meta.env.VITE_BASE_URL}/auth/login`;
                console.log('BASE_URL', base_url);
                try {
                    const data: any = await $fetch(base_url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(credentials),
                    });

                    // console.log(data);
                    sessionStorage.setItem('token', data.token);
                    this.token = data.token;
                    return data;
                } catch (error) {
                    console.log(error);
                    // throw new Error('Inicio de sesión fallido');
                }
            }
        },
        logout() {
            sessionStorage.removeItem('token');
            this.token = null;
            navigateTo('/')
        },
    },
});
