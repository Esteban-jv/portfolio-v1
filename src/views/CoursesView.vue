<script setup>
    import { onMounted, computed } from 'vue';
    import { animate, timeline, stagger } from "motion"
    import { useI18n } from 'vue-i18n';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import CourseItem from '../components/CourseItem.vue';

    const { t: $t } = useI18n();

    const courses = computed( () => {
        return [
            {
                id: 1,
                year: 2024,
                title: $t('codeigniter.title'),
                description: $t('codeigniter.short_description'),
                learning: $t('codeigniter.learning'),
                stack: ['PHP', 'Codeigniter', 'MySQL'],
                url: $t('codeigniter.url'),
                urlText: $t('codeigniter.urlText'),
                image: '/courses/CodeIgniter for Beginners Build a Complete Web Application.jpg'
            },
            {
                id: 2,
                year: 2024,
                title: $t('vue.title'),
                description: $t('vue.short_description'),
                learning: $t('codeigniter.learning'),
                stack: ["Vue", "Tailwindcss", "Firebase", "MEVN", "Composition API", "Pinia", "Vue Router", "SFC", "Composables", "APIs"],
                url: $t('vue.url'),
                urlText: $t('vue.urlText'),
                image: '/courses/Vue.jpg'
            },
            {
                id: 3,
                year: 2024,
                title: $t('laravel.title'),
                description: $t('laravel.short_description'),
                learning: $t('laravel.learning'),
                stack: ["Laravel", "MySQL", "Bootstrap", "Laravel Mix", "Vite"],
                url: $t('laravel.url'),
                urlText: $t('laravel.urlText'),
                image: '/courses/Laravel 9.jpg'
            },
            {
                id: 4,
                year: 2023,
                title: $t('chatgpt.title'),
                description: $t('chatgpt.short_description'),
                learning: $t('chatgpt.learning'),
                stack: ["Python", "OpenAI", "GPT-3", "APIs", "Chatbots"],
                url: $t('chatgpt.url'),
                urlText: $t('chatgpt.urlText'),
                image: '/courses/ChatGpt.png'
            },
            {
                id: 5,
                year: 2022,
                title: $t('laravel_websockets.title'),
                description: $t('laravel_websockets.short_description'),
                learning: $t('laravel_websockets.learning'),
                stack: ["PHP", "Laravel", "Websockets", "Realtime", "Ubuntu Server", "Nginx"],
                url: $t('laravel_websockets.url'),
                urlText: $t('laravel_websockets.urlText'),
                image: '/courses/Laravel Websockets.jpg'
            },
            {
                id: 6,
                year: 2021,
                title: $t('python.title'),
                description: $t('python.short_description'),
                learning: $t('python.learning'),
                stack: ["Python", "Django", "Flask", "APIs", "Automation"],
                url: $t('python.url'),
                urlText: $t('python.urlText'),
                image: '/courses/Python 2021.jpg'
            }
        ]
    })

    onMounted(() => {

        animate(
            ".header",
            { y: [-12,0], opacity: [0,1] },
            { delay: 0 }
        )
        animate(
            "h1",
            { y: [-12,0], opacity: [0,1] },
            { delay: 0.1 }
        )
        animate(
            "section",
            { y: [0,12], opacity: [0,1] },
            { delay: 0.2 }
        )
        timeline([
            [".smoothimg", { y: [6,0], opacity: [0,1] }, { duration: 0.05, at: 0.3, delay: stagger(0.1) }],
        ])
        timeline([
            ["span", { y: [6,0], opacity: [0,1] }, { duration: 0.05, at: 0.4, delay: stagger(0.05) }],
        ])
        timeline([
            ["footer", { y: [6,0], opacity: [0,1] }, { duration: 0.05, at: 0.5, delay: stagger(0.05) }],
        ])
    });
</script>
<template>
    <div class="sticky top-0 z-50">
        <Header :start-time="0" />
    </div>
    <section class="px-5 md:px-10">
        <div class="flex justify-start pb-1">
            <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('courses') }}</h2>
        </div>
        <div class="p-3" v-for="course in courses" :key="course.id">
            <CourseItem
                :year="course.year"
                :title="course.title"
                :description="course.description"
                :learning="course.learning"
                :stack="course.stack"
                :url="course.url"
                :url-text="course.urlText"
                :image="course.image"
                :image-left="course.id % 2 === 0"
            />
        </div>
    </section>
    <Footer />
</template>