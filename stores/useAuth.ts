import { defineStore } from 'pinia';
import type { DataUser, SigninInput } from '~/types';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        authenticated: false,
    }),
    actions: {
        async login(credentials: SigninInput) {
            const base_url = `${import.meta.env.VITE_BASE_URL}/auth/login`;
            const data: DataUser = await $fetch(base_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            if (data) {
                sessionStorage.setItem('token', data.token);
                this.authenticated = true;
            }
            return data;
        },
        logout() {
            this.authenticated = false;
            sessionStorage.removeItem('token');
            navigateTo('/');
        },
    },
});
