<script setup>
    import { ref, computed, inject, onMounted } from 'vue';
    import { animate, timeline, stagger } from "motion"
    import { useI18n } from 'vue-i18n';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import ProjectItem from '../components/ProjectItem.vue';

    const { t: $t } = useI18n();
    const TA = ref('');

    const projects = computed( () => {
        return [
            {
                id: 1,
                year: 2024,
                title: $t('contractflow.title'),
                description: $t('contractflow.short_description'),
                stack: ["Python", "DJango", "Django Rest Framework", "PostgreSQL", "AWS", "HTML", "CSS", "Javascript", "VueJS", "Tailwindcss", "Multitenancy"],
                status: true, //means online
                url: $t('contractflow.url'),
                urlText: $t('contractflow.urlText'),
                image: '/projects/Contractflow-desk.png',
                frontendCodeUrl: $t('contractflow.frontend_code_url'),
                frontendCodeUrlText: $t('contractflow.frontend_code_url_text'),
                backendCodeUrl: null,
                backendCodeUrlText: 'private'
            },
            {
                id: 2,
                year: 2023,
                title: $t('app_salon.title'),
                description: $t('app_salon.short_description'),
                stack: ["Vue", "Tailwindcss", "Firebase", "MEVN", "Composition API", "Pinia", "Vue Router", "SFC", "Composables", "APIs"],
                status: true,
                url: $t('app_salon.url'),
                urlText: $t('app_salon.urlText'),
                image: '/projects/AppSalon.png',
                frontendCodeUrl: $t('app_salon.frontend_code_url'),
                frontendCodeUrlText: $t('app_salon.frontend_code_url_text'),
                backendCodeUrl: $t('app_salon.backend_code_url'),
                backendCodeUrlText: $t('app_salon.backend_code_url_text')
            },
            {
                id: 3,
                year: 2018,
                title: $t('lobo.title'),
                description: $t('lobo.short_description'),
                stack: ["PHP", "CPanel", "PostgreSQL"],
                status: false, //means offline
                url: $t('lobo.url'),
                urlText: $t('lobo.urlText'),
                image: '/projects/Lobo.jpg',
                codeUrl: $t('lobo.code_url'),
                codeUrlText: $t('lobo.code_url_text'),
            }
        ]
    })

    onMounted(() => {
        if(import.meta.env.VITE_APP_MODE === 'production') {
            TA.value = 'b.s'
        } else {
            TA.value = 'loc.source'
        }

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

    const getValueKeyFromString = inject('getValueKeyFromString')
</script>
<template>
    <div class="sticky top-0 z-50">
        <Header :start-time="0" />
    </div>
    <section class="px-5 md:px-10">
        <div class="flex justify-start pb-1">
            <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('my_own_projects') }}</h2>
        </div>
        <div class="p-3" v-for="project in projects" :key="project.id">
            <ProjectItem
                :year="project.year"
                :title="project.title"
                :description="project.description"
                :stack="project.stack"
                :status="project.status"
                :url="project.url"
                :url-text="project.urlText"
                :code-url="project.codeUrl"
                :code-url-text="project.codeUrlText"
                :frontend-code-url="project.frontendCodeUrl"
                :frontend-code-url-text="project.frontendCodeUrlText"
                :backend-code-url="project.backendCodeUrl"
                :backend-code-url-text="project.backendCodeUrlText"
                :image="project.image"
                :image-left="project.id % 2 === 0"
            />
        </div>
    </section>
    <Footer />
</template>