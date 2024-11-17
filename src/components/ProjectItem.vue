<script setup>
    const props = defineProps({
        year: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        },
        stack: {
            type: Array,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        urlText: {
            type: String,
            required: true
        },
        codeUrl: {
            type: String || null,
            required: false
        },
        codeUrlText: {
            type: String || null,
            required: false
        },
        frontendCodeUrl: {
            type: String || null,
            required: false
        },
        frontendCodeUrlText: {
            type: String || null,
            required: false
        },
        backendCodeUrl: {
            type: String || null,
            required: false
        },
        backendCodeUrlText: {
            type: String || null,
            required: false
        },
        image: {
            type: String,
            required: true
        },
        imageLeft: {
            type: Boolean,
            default: true
        }
    })
</script>
<template>
    <div class="my-3">
        <h3 class="text-2xl dark:text-slate-300 text-slate-800 kanit-regular mb-2 flex justify-center">{{ props.title }}</h3>
        <div class="flex flex-col md:flex-row border-2 p-2 dark:border-sky-950 border-sky-200 rounded-md">
            <div v-if="imageLeft" class="w-full md:w-1/2 flex self-center">
                <img :src="props.image" alt="Course certificated" class="w-full h-auto p-2" />
            </div>
            <div class="w-full md:w-1/2 md:px-3 my-0 flex-row self-center">
                <h4 class="text-xl dark:text-slate-300 text-slate-800 kanit-regular my-1 flex justify-end">{{ props.year }}</h4>
                <h4 class="text-xl dark:text-slate-300 text-slate-800 kanit-regular my-1 flex justify-center">{{ $t('short_description') }}</h4>
                <p class="text-base dark:text-slate-300 text-slate-800 text-justify">{{ props.description }}</p>
                <h4 class="text-xl dark:text-slate-300 text-slate-800 kanit-regular my-1 flex justify-center">{{ $t('stack') }}</h4>
                <div class="rounded-lg">
                    <div class="dark:text-slate-300 text-slate-800 mx-0 my-1 md:my-0 flex flex-flow gap-1 flex-wrap text-xs">
                        <span class="badge bg-green-800 text-green-200 shadow-md inline-flex" v-for="st in props.stack" :key="st">{{ st }}</span>
                    </div>
                </div>
                <div class="dark:bg-sky-950 bg-sky-50 p-3 my-2 rounded-md">
                    <h4 class="text-xl dark:text-slate-300 text-slate-800 kanit-regular my-1 flex justify-center">{{ $t('more_info') }}</h4>
                    <div class="flex my-2" :class="{'opacity-50':!props.status}">
                        <div class="w-[25%]">
                            <p class="text-sm dark:text-slate-300 text-slate-800">{{ $t('site_url') }}</p>
                        </div>
                        <div class="w-[75%]">
                            <span class="flex justify-start" v-if="props.status">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                    <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                </svg>
                                <a :href="props.url" target="_blank" class="text-blue-500 text-xs underline">{{ props.urlText }}</a>
                            </span>
                            <span class="flex justify-start" v-else>
                                <p class="dark:text-slate-300 text-slate-800 text-xs">{{ props.urlText }}</p>
                            </span>
                        </div>
                    </div>
                    <div class="flex" v-if="codeUrlText">
                        <div class="w-[25%]">
                            <p class="text-sm dark:text-slate-300 text-slate-800">{{ $t('code') }}</p>
                        </div>
                        <div class="w-[75%]">
                            <span v-if="codeUrlText === 'private'" class="flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path class="fill-red-500 stroke-none visible" fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />
                                </svg>
                                <p class="text-red-500 text-xs">{{ $t('private') }}</p>
                            </span>
                            <span v-else class="flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                    <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                </svg>
                                <a :href="props.codeUrl" target="_blank" class="text-blue-500 text-xs underline">{{ props.codeUrlText }}</a>
                            </span>
                        </div>
                    </div>
                    <div class="flex" v-if="frontendCodeUrlText">
                        <div class="w-[25%]">
                            <p class="text-sm dark:text-slate-300 text-slate-800">{{ $t('frontend_code') }}</p>
                        </div>
                        <div class="w-[75%]">
                            <span v-if="frontendCodeUrlText === 'private'" class="flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path class="fill-red-500 stroke-none visible" fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />
                                </svg>
                                <p class="text-red-500 text-xs">{{ $t('private') }}</p>
                            </span>
                            <span v-else class="flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                    <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                </svg>
                                <a :href="props.frontendCodeUrl" target="_blank" class="text-blue-500 text-xs underline">{{ props.frontendCodeUrlText }}</a>
                            </span>
                        </div>
                    </div>
                    <div class="flex" v-if="backendCodeUrlText">
                        <div class="w-[25%]">
                            <p class="text-sm dark:text-slate-300 text-slate-800">{{ $t('backend_code') }}</p>
                        </div>
                        <div class="w-[75%]">
                            <span v-if="backendCodeUrlText === 'private'" class="flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path class="fill-red-500 stroke-none visible" fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />
                                </svg>
                                <p class="text-red-500 text-xs">{{ $t('private') }}</p>
                            </span>
                            <span v-else class="flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                    <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                </svg>
                                <a :href="props.backendCodeUrl" target="_blank" class="text-blue-500 text-xs underline">{{ props.backendCodeUrlText }}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!imageLeft" class="w-full md:w-1/2 flex self-center">
                <img :src="props.image" alt="Course certificated" class="w-full h-auto p-2" />
            </div>
        </div>
    </div>
</template>