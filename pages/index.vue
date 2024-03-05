<template>
    <div>
        <div class="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat p-6 dark:bg-[#060818] sm:px-16">
            <div
                class="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0"
            >
                <div
                    class="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]"
                >
                    <div
                        class="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"
                    ></div>
                    <div class="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
                        <div class="ms-10 block w-48 lg:w-72">
                            <img src="/assets/images/logo-white.svg" alt="Logo" class="w-full" />
                        </div>
                        <div class="mt-24 hidden w-full max-w-[430px] lg:block">
                            <img src="/assets/images/login.svg" alt="Cover Image" class="w-full" />
                        </div>
                    </div>
                </div>
                <div class="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
                    <div class="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full">
                        <div class="block w-8 lg:hidden">
                            <img src="/assets/images/logo.svg" alt="Logo" class="mx-auto w-10" />
                        </div>
                    </div>
                    <div class="w-full max-w-[440px] lg:mt-8">
                        <div class="mb-8">
                            <h1 class="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Iniciar Sesión</h1>
                        </div>
                        <!-- Form -->
                        <form class="space-y-5 dark:text-white" @submit.prevent="handleLogin">
                            <div>
                                <label for="rfc">RFC</label>
                                <div class="relative text-white-dark">
                                    <input
                                        v-model="state.rfc"
                                        id="rfc"
                                        type="rfc"
                                        placeholder="Ingrese su RFC"
                                        required
                                        class="form-input ps-10 placeholder:text-white-dark"
                                    />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <IconsIconPersonBadge />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label for="email">Correo electronico</label>
                                <div class="relative text-white-dark">
                                    <input
                                        v-model="state.email"
                                        id="email"
                                        type="email"
                                        placeholder="Ingrese su usuario"
                                        required
                                        class="form-input ps-10 placeholder:text-white-dark"
                                    />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <IconsIconPerson />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label for="password">Contraseña</label>
                                <div class="relative text-white-dark">
                                    <input
                                        v-model="state.password"
                                        id="password"
                                        type="password"
                                        placeholder="Ingrese su contraseña"
                                        required
                                        class="form-input ps-10 placeholder:text-white-dark"
                                    />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <IconsIconKey />
                                    </span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-primary bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] !mt-6 w-full border-0 uppercase"
                            >
                                Ingresar
                            </button>
                        </form>
                        <!-- Form -->
                        <!--
                            <div class="text-center dark:text-white">
                                ¿No tiene una cuenta?
                                <NuxtLink to="/auth/cover-register" class="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                    Inscribete
                                </NuxtLink>
                            </div> -->
                    </div>
                    <p class="absolute bottom-10 w-full text-center dark:text-white">© {{ new Date().getFullYear() }} MetaTax All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    useHead({ title: 'Iniciar sesión' });
    definePageMeta({
        layout: 'auth-layout',
    });
    import { useAuthStore } from '../stores/useAuth';
    import type { SigninInput } from '~/types';
    const router = useRouter();
    const authStore = useAuthStore();

    const initialState: SigninInput = {
        rfc: '',
        email: '',
        password: '',
    };
    const state = reactive({
        ...initialState,
    });

    const handleLogin = async () => {
        const signinInput: SigninInput = {
            rfc: state.rfc,
            email: state.email,
            password: state.password,
        };
        await authStore.login(signinInput);
        if (authStore.authenticated) {
            router.push({name: 'riesgo-fiscal'})
        }
    };
    //    if (login.) return router.push({ name: 'riesgo-fiscal' });
</script>
