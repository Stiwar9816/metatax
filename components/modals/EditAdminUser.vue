<template>
    <!-- large -->
    <div>
        <button type="button" @click="modalShow = true" class="ltr:mr-2 rtl:ml-2" v-tippy:edit>
            <IconsIconPencilSquare />
        </button>
        <tippy target="edit">Editar</tippy>
    </div>
    <div>
        <!-- Modal -->
        <TransitionRoot appear :show="modalShow" as="template">
            <Dialog as="div" @close="modalShow = false" class="relative z-50">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-start justify-center px-4 py-8">
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-xl text-black dark:text-white-dark">
                                <button
                                    type="button"
                                    class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    @click="modalShow = false"
                                >
                                    <IconsIconX class="w-5 h-5" />
                                </button>
                                <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                    {{ props.modalTitle }}
                                </div>
                                <div class="p-5">
                                    <!-- forms grid -->
                                    <form class="space-y-5">
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label for="username">Usuario</label>
                                                <input id="username" type="text" placeholder="Ingrese su usuario" class="form-input" />
                                            </div>
                                            <div>
                                                <label for="fullname">Nombre completo</label>
                                                <input id="fullname" type="text" placeholder="Ingrese su nombre completo" class="form-input" />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="email">Correo electronico</label>
                                            <input id="email" type="email" placeholder="Ingrese su correo electronico" class="form-input" />
                                        </div>

                                        <div class="grid grid-cols-3 gap-4">
                                            <label class="flex items-center mt-1 cursor-pointer">
                                                <input type="checkbox" class="form-checkbox" />
                                                <span class="text-white-dark">Administrador</span>
                                            </label>
                                            <label class="flex items-center mt-1 cursor-pointer">
                                                <input type="checkbox" class="form-checkbox" />
                                                <span class="text-white-dark">Facturación</span>
                                            </label>
                                            <label class="flex items-center mt-1 cursor-pointer">
                                                <input type="checkbox" class="form-checkbox" />
                                                <span class="text-white-dark">Nómina</span>
                                            </label>
                                            <label class="flex items-center mt-1 cursor-pointer">
                                                <input type="checkbox" class="form-checkbox" />
                                                <span class="text-white-dark">Emitidos</span>
                                            </label>
                                            <label class="flex items-center mt-1 cursor-pointer">
                                                <input type="checkbox" class="form-checkbox" />
                                                <span class="text-white-dark">Recibidos</span>
                                            </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Aceptar</button>
                                    </form>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script setup lang="ts">
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
    // Const
    const modalShow = ref<boolean>(false);
    // Props
    const props = defineProps({
        modalTitle: String,
    });
</script>
