<script setup>
    import { onMounted, ref } from 'vue'
    import { timeline, stagger, animate } from "motion"
    import { RouterLink } from 'vue-router';
    import { usePreferences } from '../stores/usePreferences';

    const preferences = usePreferences()

    const props = defineProps({
        startTime: {
            type: Number,
            default: 0,
        },
    })

    const draw = p => ({
        strokeDashoffset: 1 - p,
        visibility: "visible",
    });
    // now opposite of draw
    const undraw = p => ({
        strokeDashoffset: p,
        visibility: "hidden",
    });

    const isLoading = ref(false)
    const isNavOpen = ref(false)
    const navLinks = ref(null)

    onMounted( () => {
        timeline([
                [".openLine", draw(1), { duration: 0.2, at: 0.4, delay: stagger(0.4) }],
            ], { direction: "alternate", duration: 1, delay: props.startTime }
        )
    })

    const toggleNav = (status = null) => {
        isLoading.value = true
        if(status !== null) {
            isNavOpen.value = status
        } else {
            isNavOpen.value = !isNavOpen.value
        }

        if(isNavOpen.value) {
            timeline([
                    [".openLine", undraw(1), { duration: 0.2, at: 0.0, delay: stagger(0.1) }],
                    [".closeLine", draw(1), { duration: 0.2, at: 0.4, delay: stagger(0.4) }],
                ], { direction: "alternate", duration: 0.4 }
            )
            animate(navLinks.value, 
                { opacity: [0,1], y: [-40, 0] },
                { delay: stagger(0.5) }
            )
            navLinks.value.hidden = false
            isLoading.value = false
        } else {
            animate(navLinks.value, 
                { opacity: [1,0], y: [0, -40] },
                { delay: stagger(0.5) }
            )
            timeline([
                    [".closeLine", undraw(1), { duration: 0.2, at: 0.0, delay: stagger(0.1) }],
                    [".openLine", draw(1), { duration: 0.2, at: 0.4, delay: stagger(0.4) }],
                ], { direction: "alternate", duration: 0.4 }
            )
            setTimeout(() => {
                navLinks.value.hidden = true
            }, 200)
            setTimeout(() => {
                isLoading.value = false
            }, 500)
        }
    }

    const toggleMode = () => {
        if(!isLoading.value) {
            isLoading.value = true
            preferences.toggleMode()
        }
        toggleNav(false)
    }

    const handleChangeLan = () => {
        preferences.setLocaleInStorage()
        toggleNav(false)
    }
</script>
<template>
    <div class="flex justify-between p-3 header z-50 dark:bg-black bg-white shadow-md">
        <div class="text-green-300 border-solid">
            <RouterLink to="/">
                <img src="/logo.svg" alt="" class="w-10 h-10">
            </RouterLink>
        </div>
        <div class="md:flex hidden">
            <!-- <h1 class="dark:text-white text-black kanit-regular py-3 px-6 hover:bg-green-500 transition-colors duration-200">Lan</h1> -->
            <RouterLink :to="{name: 'home', params: { load: 'home' } }" class="dark:text-white rounded-l-md text-black kanit-regular py-3 px-6 hover:bg-green-500 transition-colors duration-200">{{ $t('home') }}</RouterLink>
            <RouterLink :to="{name: 'projects'}" class="dark:text-white text-black kanit-regular py-3 px-6 hover:bg-green-500 transition-colors duration-200">{{ $t('my_projects') }}</RouterLink>
            <RouterLink :to="{name: 'courses'}" class="dark:text-white text-black kanit-regular py-3 px-6 hover:bg-green-500 transition-colors duration-200">{{ $t('courses') }}</RouterLink>
            <h1 class="dark:text-white text-black kanit-regular py-3 px-6 hover:bg-green-500 transition-colors duration-200" @click="toggleMode()">{{ $t(preferences.noTheme) }}</h1>
            <select class="dark:text-white text-black dark:bg-black bg-white kanit-regular py-3 px-6 rounded-r-md dark:hover:bg-green-500 hover:bg-green-500 transition-colors duration-200" v-model="$i18n.locale" id="locale" @change="preferences.setLocaleInStorage()">
                <option v-for="locale in $i18n.availableLocales" :value="locale">{{ $t(locale) }}</option>
            </select>
        </div>
        <div class="md:hidden flex" @click="toggleNav()">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="#57EB64" class="size-10">
                <path pathLength="1" class="openLine" ref="verticalLineE1" d="M 2 5 L 40 5 " stroke="#57EB64" fill="none" stroke-linejoin="round" stroke-width="3"/>
                <path pathLength="1" class="openLine" ref="verticalLineE2" d="M 10 15 L 40 15 " stroke="#57EB64" fill="none" stroke-linejoin="round" stroke-width="3"/>
                <path pathLength="1" class="openLine" ref="verticalLineE2" d="M 20 25 L 40 25 " stroke="#57EB64" fill="none" stroke-linejoin="round" stroke-width="3"/>
                <path pathLength="1" class="openLine" ref="verticalLineE2" d="M 30 35 L 40 35 " stroke-linejoin="round" stroke-width="3"/>
            <!-- </svg> -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" stroke="#57EB64" class="size-10"> -->
                <path pathLength="1" class="closeLine" ref="verticalLineE1" d="M 5 35 L 35 5 " stroke="#57EB64" fill="none" stroke-linejoin="round" stroke-width="3"/>
                <path pathLength="1" class="closeLine" ref="verticalLineE2" d="M 5 5 L 35 35 " stroke="#57EB64" fill="none" stroke-linejoin="round" stroke-width="3"/>
            </svg>
        </div>
    </div>
    <div ref="navLinks" v-show="isNavOpen" class="opacity-0 dark:bg-black bg-white absolute min-h-5 w-[60%] sm:w-[40%] flex-row right-[0.3rem] top-[4.3rem] rounded-lg p-0 md:hidden">
        <h1 class="dark:text-white text-center text-black kanit-regular rounded-t-md py-3 px-6 hover:bg-green-500 transition-colors duration-200">
            <RouterLink :to="{name: 'home', params: { load: 'home' } }" class="p-0 w-full h-full">{{ $t('home') }}</RouterLink>
        </h1>
        <h1 class="dark:text-white text-center text-black kanit-regular py-3 px-6 hover:bg-green-500 transition-colors duration-200">
            <RouterLink :to="{name: 'projects'}" class="p-0 w-full h-full">{{ $t('my_projects') }}</RouterLink>
        </h1>
        <h1 class="dark:text-white text-center text-black kanit-regular py-3 px-6 hover:bg-green-500 transition-colors duration-200">
            <RouterLink :to="{name: 'courses'}" class="p-0 w-full h-full">{{ $t('courses') }}</RouterLink>
        </h1>
        <h1 class="dark:text-white text-center text-black kanit-regular py-3 px-6 hover:bg-green-500 transition-colors duration-200" @click="toggleMode()">{{ $t(preferences.noTheme) }}</h1>
        <select class="dark:text-white text-center text-black dark:bg-black w-full rounded-b-md bg-white kanit-regular py-3 px-6 rounded-none dark:hover:bg-green-500 hover:bg-green-500 transition-colors duration-200" v-model="$i18n.locale" id="locale" @change="handleChangeLan()">
            <option v-for="locale in $i18n.availableLocales" :value="locale">{{ $t(locale) }}</option>
        </select>
    </div>
</template>
<style scoped>
    path {
        fill: transparent;
        stroke: #57EB64;
        stroke-width: 3px;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        stroke-linecap: round;
        stroke-linejoin: round;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .openLine {
        visibility: visible;
    }
    .closeLine {
        visibility: hidden;
    }
</style>