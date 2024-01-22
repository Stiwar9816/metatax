<template>
    <div>
        <!-- breadcrumbs -->
        <ol class="flex text-primary font-semibold dark:text-white-dark pb-4">
            <li class="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
                <a
                    class="p-1.5 ltr:pl-3 rtl:pr-3 ltr:pr-2 rtl:pl-2 relative h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b]"
                >
                    {{ props.home }}
                </a>
            </li>
            <li class="bg-[#ebedf2] dark:bg-[#1b2e4b]">
                <a
                    class="bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]"
                >
                    {{props.routeActive}}
                </a>
            </li>
        </ol>
        <!-- breadcrumbs -->
    </div>
</template>

<script setup lang="ts">
    // Props
    const props = defineProps({
        home: {
            type: String,
            default: 'Title home',
        },
        routeActive: {
            type: String,
            default: 'Title route',
        },
    });
</script>
