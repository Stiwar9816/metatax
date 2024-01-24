<template>
    <div>
        <!-- Modal -->
        <client-only>
            <TransitionRoot appear :show="props.modalShowCer" as="template">
                <Dialog as="div" @close="closeModalCer" class="relative z-[51]">
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
                                <DialogPanel class="panel w-full max-w-md overflow-hidden rounded-lg border-0 px-4 py-1 text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        class="absolute top-7 text-white-dark outline-none hover:text-dark ltr:right-9 rtl:left-9"
                                        @click="closeModalCer"
                                    >
                                        <IconsIconX class="w-5 h-5" />
                                    </button>
                                    <div class="py-5 text-lg font-semibold ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5">{{ props.modalTitle }}</div>
                                    <div class="p-5">
                                        <form>
                                            <div class="relative mb-4">
                                                <label for="fileCer">Selecciona el archivo .cer</label>
                                                <input
                                                    id="fileCer"
                                                    type="file"
                                                    accept=".cer"
                                                    class="rtl:file-ml-5 form-input p-0 file:border-0 file:bg-primary/90 file:px-4 file:py-2 file:font-semibold file:text-white file:hover:bg-primary ltr:file:mr-5"
                                                    required
                                                />
                                            </div>
                                            <div class="relative mb-4">
                                                <label for="fileKey">Selecciona el archivo .key</label>
                                                <input
                                                    id="fileKey"
                                                    type="file"
                                                    accept=".key"
                                                    class="rtl:file-ml-5 form-input p-0 file:border-0 file:bg-primary/90 file:px-4 file:py-2 file:font-semibold file:text-white file:hover:bg-primary ltr:file:mr-5"
                                                    required
                                                />
                                            </div>

                                            <div class="relative my-5">
                                                <span class="absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark">
                                                    <IconsIconKey class="w-5 h-5" />
                                                </span>
                                                <input type="password" placeholder="Contraseña FIEL" required class="form-input ltr:pl-10 rtl:pr-10" />
                                            </div>

                                            <button type="submit" class="btn btn-primary w-full">Aceptar</button>
                                        </form>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </client-only>
    </div>
</template>

<script setup lang="ts">
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
    // Props
    const props = defineProps({
        modalShowCer: Boolean,
        modalTitle: String,
    });
    // Emits
    const emit = defineEmits();
    // Emit events to open and close the modal
    const openModalCer = () => emit('update:modalShowCer', true);
    const closeModalCer = () => emit('update:modalShowCer', false);
</script>
