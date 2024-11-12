<script setup>
    import { ref, inject, onMounted } from 'vue';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';

    const TA = ref('');

    onMounted(() => {
        if(import.meta.env.VITE_APP_MODE === 'production') {
            TA.value = 'b.s'
        } else {
            TA.value = 'loc.source'
        }
    });

    const getValueKeyFromString = inject('getValueKeyFromString')
</script>
<template>
    <Header />
    <section class="px-5 md:px-10">
        <div class="flex justify-start pb-1">
            <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('my_projects') }}</h2>
        </div>
        <div class="my-3 p-3">
            <h3 class="text-2xl dark:text-slate-300 text-slate-800 kanit-regular mb-2 flex justify-center">ContractFlow</h3>
            <div class="flex flex-col md:flex-row border-2 p-2 border-sky-950 rounded-md">
                <div class="w-full md:w-1/2">
                    <img src="/projects/Contractflow-desk.png" alt="Web Development" class="w-full h-auto p-2" />
                </div>
                <div class="w-full md:w-1/2 md:px-3 my-0">
                    <h4 class="text-xl dark:text-slate-300 text-slate-800 kanit-regular my-1 flex justify-center">{{ $t('short_description') }}</h4>
                    <p class="text-base dark:text-slate-300 text-slate-800 text-justify">{{ $t('contractflow.short_description') }}</p>
                    <h4 class="text-xl dark:text-slate-300 text-slate-800 kanit-regular my-1 flex justify-center">{{ $t('stack') }}</h4>
                    <div class="rounded-lg">
                        <div class="dark:text-slate-300 text-slate-800 mx-0 my-1 md:my-0 flex flex-flow gap-1 flex-wrap text-xs">
                            <span class="badge bg-green-800 text-green-200 shadow-md inline-flex" v-for="st in $tm('contractflow.stack')" :key="st">{{ getValueKeyFromString(st, TA) }}</span>
                        </div>
                    </div>
                    <div class="bg-sky-950 p-3 my-2">
                        <h4 class="text-xl dark:text-slate-300 text-slate-800 kanit-regular my-1 flex justify-center">{{ $t('more_info') }}</h4>
                        <div class="flex">
                            <div class="w-[25%]">
                                 <p class="text-sm dark:text-slate-300 text-slate-800">{{ $t('site_url') }}</p>
                            </div>
                            <div class="w-[75%]">
                                <span class="flex justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                        <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                    </svg>
                                    <a href="https://vacationstimes.com/es/home/" target="_blank" class="text-blue-500 text-xs underline">{{ $t('contractflow.url') }}</a>
                                </span>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-[25%]">
                                 <p class="text-sm dark:text-slate-300 text-slate-800">{{ $t('frontend_code') }}</p>
                            </div>
                            <div class="w-[75%]">
                                <span class="flex justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                        <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                    </svg>
                                    <a href="https://github.com/Esteban-jv/contract-flow-front" target="_blank" class="text-blue-500 text-xs underline">{{ $t('contractflow.frontend_code_url') }}</a>
                                </span>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-[25%]">
                                 <p class="text-sm dark:text-slate-300 text-slate-800">{{ $t('backend_code') }}</p>
                            </div>
                            <div class="w-[75%]">
                                <span class="flex justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                        <path class="fill-red-500 stroke-none visible" fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />
                                    </svg>
                                    <p target="_blank" class="text-red-500 text-xs">{{ $t('contractflow.backend_code_url') }}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="px-5 md:px-10">
        <div class="flex justify-start pb-1">
            <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('courses') }}</h2>
        </div>
    </section>
    <Footer />
</template>