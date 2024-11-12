<script setup>
    import { onMounted, ref, inject } from 'vue'
    import { timeline, stagger, animate, scroll } from "motion"
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';

    const TA = ref('') // Translate Access

    const verticalLineE1 = ref(null)
    const verticalLineE2 = ref(null)
    const verticalLineE3 = ref(null)
    const horizontalE = ref(null)

    const verticalJ = ref(null)
    const horizontalJ = ref(null)
    const horizontalJ2 = ref(null)

    const shapeOutside = ref(null)
    const shapeInisde = ref(null)

    const vtimes = ref(null)
    const vtimesProgress = ref(0)
    const um = ref(null)
    const umProgress = ref(0)
    const ich = ref(null)
    const ichProgress = ref(0)
    const progressBarVt = ref(0)
    const progressBarUm = ref(0)
    const progressBarIch = ref(0)

    const stacks = ref([
        'html', 'css', 'javascript', 'vue', 'tailwindcss', 'laravel', 'php', 'mysql', 'git', 'github', 'linux', 'nginx', 'apache', 'postman',
        'SVN', 'PostgreSQL', 'MMSQL', 'Python', 'DJango', 'DRF', 'Bootstrap', 'Rest'
    ])

    onMounted(() => {
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            document.body.style.overflow = 'auto'
        }, 2800)
        // console.warn(import.meta.env.VITE_APP_MODE)
        if(import.meta.env.VITE_APP_MODE === 'production') {
            TA.value = 'b.s'
        } else {
            TA.value = 'loc.source'
        }
        

        const draw = (progress) => ({
            // This property makes the line "draw" in when animated
            strokeDashoffset: 1 - progress,

            // Each line will be hidden until it starts drawing
            // to fix a bug in Safari where the line can be
            // partially visible even when progress is at 0
            visibility: "visible",
        });

        timeline([
            [".logo", draw(1), { duration: 0.2, at: 0.2, delay: stagger(0.1) }],

            [shapeOutside.value, draw(1), { duration: 0.6, at: 0.8, delay: stagger(0.1) }],
            [shapeInisde.value, draw(1), { duration: 0.6, at: 0.9, delay: stagger(0.1) }],
        ],
        { direction: "alternate", repeat: 1, duration: 1.4 }
        )

        animate(
            ".logo",
            { opacity: [1,0] },
            { delay: 2.5 }
        )

        animate(
            "h1",
            { y: [0,12], opacity: [0,1] },
            { delay: 2.8 }
        )
        animate(
            "section",
            { y: [0,12], opacity: [0,1] },
            { delay: 2.9 }
        )
        timeline([
            [".smoothimg", { y: [6,0], opacity: [0,1] }, { duration: 0.05, at: 3, delay: stagger(0.1) }],
        ])
        timeline([
            ["span", { y: [6,0], opacity: [0,1] }, { duration: 0.05, at: 3.1, delay: stagger(0.05) }],
        ])
        timeline([
            ["footer", { y: [6,0], opacity: [0,1] }, { duration: 0.05, at: 3.2, delay: stagger(0.05) }],
        ])

        scroll((info) => {
                vtimesProgress.value = info.y.progress
            },
            { target: vtimes.value, offset: ["start end", "end end"] }
        )
        scroll(({y}) => { umProgress.value = y.progress }, { target: um.value, offset: ["start end", "end end"] })
        scroll(({y}) => { ichProgress.value = y.progress }, { target: ich.value, offset: ["start end", "end end"] })
        scroll(
            animate(progressBarVt.value, {  scaleX: [0, 1] }),
            { target: vtimes.value, offset: ["start end", "end end"] }
        )
        scroll(
            animate(progressBarUm.value, {  scaleX: [0, 1] }),
            { target: um.value, offset: ["start end", "end end"] }
        )
        scroll(
            animate(progressBarIch.value, {  scaleX: [0, 1] }),
            { target: ich.value, offset: ["start end", "end end"] }
        )
    })

    const getValueKeyFromString = inject('getValueKeyFromString')
</script>
<template>
    <div id="logo-loader">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <path class="logo" ref="verticalLineE1" d="M 6 27 l46 22.5 Z" pathLength="1" />
            <path class="logo" ref="verticalLineE2" d="M 6 48 l23 13 Z" pathLength="1"/>
            <path class="logo" ref="verticalLineE3" d="M 6 72 l40 24 Z" pathLength="1"/>
            <path class="logo" ref="horizontalE" d="M 6 27 l 0 45 Z" pathLength="1"/>

            <path class="logo" ref="verticalJ" d="M 94 72 l -41 24 Z" pathLength="1"/>
            <path class="logo" ref="horizontalJ" d="M 94 72 l 0 -45 Z" pathLength="1"/>
            <path class="logo" ref="horizontalJ2" d="M94 27 l -21 12.5" pathLength="1"/>
            <!-- <circle class="logo" id="pointA" cx="50" cy="49" r="4" pathLength="1" fill="#005900"/>
            <circle class="logo" id="pointB" cx="7" cy="27" r="4" fill="#005900" pathLength="1"/>
            <circle class="logo" id="pointC" cx="7" cy="48" r="4" fill="#005900" pathLength="1"/>
            <circle class="logo" id="pointD" cx="7" cy="72" r="4" fill="#005900" pathLength="1"/>
            <circle class="logo" id="pointE" cx="49" cy="96" r="4" fill="#005900" pathLength="1"/> -->

            <!-- <circle class="logo" id="pointF" cx="94" cy="72" r="4" fill="#005900"/>
            <circle class="logo" id="pointG" cx="94" cy="27" r="4" fill="#005900"/> -->

            <path class="logo" ref="shapeOutside" d="M 6 27 L 6 72 L 50 98 L 94 72 L 94 27 L 50 6 Z" pathLength="1"></path>
            <path class="logo" ref="shapeInisde" d="M 28 38 L 28 61 L 50 71 L 72 61 L 72 38 L 50 28 Z" pathLength="1"></path>
        </svg>
    </div>
    <Header />
    <section class="p-5 md:px-10">
        <div class="md:flex inline">
            <div class="md:w-[60%] w-full">
                <div class="md:flex inline">
                    <div class="w-50 flex justify-center self-center">
                        <div class="h-40 w-40 items-center justify-center rounded-full border-[4px] border-green-300 bg-white">
                            <img class="h-full w-full rounded-full" src="/Profile.jpg" alt="" />
                        </div>
                    </div>
                    <div class="flex md:flex-col min-w-[2rem] gap-2 justify-evenly items-center box-shadow-hover hover:bg-white border-sky-500 border-2 transition duration-500 shadow-md rounded-md mt-3 md:mt-0 md:ml-3 p-1">
                        <a href="https://www.linkedin.com/in/jos%C3%A9-esteban-juarez-velazquez-68b511293/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BQD5xzlHVQNSK5buTioxGGA%3D%3D" target="_blank">
                            <img src="/Linkedin.svg" alt="" class="w-5 h-5 smoothimg hover:h-7 hover:w-7 transition-all duration-300">
                        </a>
                        <a :href="$i18n.locale === 'es' ? 'https://wa.link/jtrqg6' : 'https://wa.link/7cq2xb'" target="_blank">
                            <img src="/Whatsapp.svg" alt="" class="w-6 h-6 smoothimg hover:h-8 hover:w-8 transition-all duration-300">
                        </a>
                        <a href="https://github.com/Esteban-jv" target="_blank">
                            <img src="/Github.svg" alt="" class="w-6 h-6 smoothimg hover:h-8 hover:w-8 transition-all duration-300">
                        </a>            
                    </div>
                    <div class="w-50 self-center">
                        <div class="dark:text-slate-300 text-slate-800 md:mx-3 mx-0 my-3 md:my-0 dark:bg-slate-800 bg-white p-3 rounded-lg md:max-w-[600px]">
                            <h2 class="text-2xl md:text-3xl kanit-regular">{{ $t('about_me') }}</h2>
                            <p class="mt-3 text-justify">{{ $t('about_me_description') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-[40%] w-full">
                <div class="dark:bg-slate-800 bg-white p-3 rounded-lg">
                    <div class="flex justify-center mb-3">
                        <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('stack') }}</h2>
                    </div>
                    <div class="dark:text-slate-300 text-slate-800 md:mx-3 mx-0 my-3 md:my-0  flex flex-flow gap-2 flex-wrap">
                        <span class="badge bg-green-800 text-green-200 shadow-md uppercase inline-flex" v-for="stack in stacks" :key="stack">{{ stack }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="p-5 md:p-10">
        <div class="flex justify-start pb-1">
            <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('education') }}</h2>
        </div>
        <div class="text-xl dark:text-slate-300 text-slate-800 border-l-green-300 border-l-[2px] p-3">2019. Universidad Politécnica de Chiapas.</div>
        <div class="dark:text-slate-300 text-slate-800 mt-3">
            <p class="text-justify text-sm">{{ $t('education_description') }}</p>
        </div>
    </section>
    <section class="">
        <div class="flex justify-start pb-1 p-5 md:p-10">
            <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('experience') }}</h2>
        </div>
        <div class="md:flex inline">
            <div class="md:w-[20%] w-full sticky overflow-hidden top-[-13px] dark:bg-slate-900 bg-slate-100 md:pl-10 z-50">
                <div class="md:inline flex justify-evenly gap-0">
                    <div
                        class="md:m-2 text-xl p-2 cursor-pointer md:w-[90%] w-full text-center"
                        :class="[ vtimesProgress > 0 && vtimesProgress < 1 ? 'dark:text-green-400 text-green-600 dark:bg-slate-900 bg-white' : 'text-green-400 dark:bg-slate-800 bg-slate-100' ]"
                    >{{ $t('current') }}</div>
                    <div 
                        class="md:m-2 text-xl p-2 cursor-pointer md:w-[90%] w-full text-center"
                        :class="[ umProgress > 0 && umProgress < 1 ? 'dark:text-green-400 text-green-600 dark:bg-slate-900 bg-white' : 'text-green-400 dark:bg-slate-800 bg-slate-100' ]"
                    >2020</div>
                    <div
                        class="md:m-2 text-xl p-2 cursor-pointer md:w-[90%] w-full text-center"
                        :class="[ ichProgress > 0 && ichProgress < 1 ? 'dark:text-green-400 text-green-600 dark:bg-slate-900 bg-white' : 'text-green-400 dark:bg-slate-800 bg-slate-100' ]"
                    >2019</div>
                </div>
                <div class="md:mx-2">
                    <div ref="progressBarVt" class="progress bg-green-500"></div>
                    <div ref="progressBarUm" class="progress bg-green-400"></div>
                    <div ref="progressBarIch" class="progress bg-green-300"></div>
                </div>
            </div>
            <div class="md:w-[80%] w-full px-5 md:px-10">
                <article ref="experience" class="">
                    <div ref="vtimes" class="experience">
                        <div class="text-xl dark:text-slate-300 text-slate-800 border-l-green-300 border-l-[2px] p-3 kanit-regular">01/2022 - {{ $t('current') }}. Vacation Times</div>
                        <div class="p-2 rounded-lg">
                            <div class="dark:text-slate-300 text-slate-800 mx-0 my-1 md:my-0 flex flex-flow gap-1 flex-wrap text-xs">
                                <span class="badge bg-green-800 text-green-200 shadow-md inline-flex" v-for="st in $tm('vtimes.stack')" :key="st">{{ getValueKeyFromString(st, TA) }}</span>
                            </div>
                        </div>
                        <span class="flex justify-end">
                            <a href="https://vacationstimes.com/es/home/" target="_blank" class="text-blue-500 text-sm underline">{{ $t('vtimes.url') }}</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <div class="dark:text-slate-300 text-slate-800 mt-3"> <!-- Experience container -->
                            <p class="text-justify dark:bg-slate-800 bg-slate-50 p-2 rounded-md">{{ $t('vtimes.description') }}</p>
                            <h2 class="text-xl mt-2 kanit-regular">{{ $t('main_activities') }}</h2>
                            <ul class="list-disc list-inside text-sm">
                                <li v-for="activity in $tm('vtimes.activities')" :key="activity">{{ getValueKeyFromString(activity, TA) }}</li>
                            </ul>
                            <h2 class="text-xl mt-2 kanit-regular">{{ $t('main_development') }}</h2>
                            <div class="flex dark:bg-sky-950 bg-sky-50 p-3 my-2">
                                <div class="w-[40%] flex">
                                    <a href="https://www.organiwork.com/" target="_blank" class="text-orange-500 font-bold underline">Organiwork</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                        <path class=" stroke-none visible fill-orange-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        <path class="stroke-none visible fill-orange-500" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('vtimes.organiwork_description') }}</div>
                            </div>
                            <div class="flex dark:bg-sky-950 bg-sky-50 p-3 my-2">
                                <div class="w-[40%] flex">
                                    <a href="https://www.modern-restaurant.com/" target="_blank" class="text-blue-500 font-bold">Modern Restaurant</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                        <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('vtimes.modern_restaurant_description') }}</div>
                            </div>
                        </div>
                    </div>

                    <div ref="um" class="experience">
                        <div class="text-xl dark:text-slate-300 text-slate-800 border-l-green-300 border-l-[2px] p-3 kanit-regular">09/2019 - 01/2022. Universidad Maya</div>
                        <div class="p-2 rounded-lg">
                            <div class="dark:text-slate-300 text-slate-800 mx-0 my-1 md:my-0 flex flex-flow gap-1 flex-wrap text-xs">
                                <span class="badge bg-green-800 text-green-200 shadow-md inline-flex" v-for="st in $tm('um.stack')" :key="st">{{ getValueKeyFromString(st, TA) }}</span>
                            </div>
                        </div>
                        <span class="flex justify-end">
                            <a href="https://www.universidadmaya.edu.mx/" target="_blank" class="text-blue-500 text-sm underline">{{ $t('um.url') }}</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <div class="dark:text-slate-300 text-slate-800 mt-3"> <!-- Experience container -->
                            <p class="text-justify dark:bg-slate-800 bg-slate-50 p-2 rounded-md">{{ $t('um.description') }}</p>
                            <h2 class="text-xl mt-2 kanit-regular">{{ $t('main_activities') }}</h2>
                            <ul class="list-disc list-inside text-sm">
                                <li v-for="activity in $tm('um.activities')" :key="activity">{{ getValueKeyFromString(activity, TA) }}</li>
                            </ul>
                            <h2 class="text-xl mt-2 kanit-regular">{{ $t('main_development') }}</h2>
                            <div class="flex dark:bg-sky-950 bg-sky-50 p-3 my-2">
                                <div class="w-[40%]">
                                    <span class="text-blue-600 font-bold">SIUM Escolar</span>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('um.sium_description') }}</div>
                            </div>
                        </div>
                    </div>

                    <div ref="ich" class="experience">
                        <div class="text-xl dark:text-slate-300 text-slate-800 border-l-green-300 border-l-[2px] p-3 kanit-regular">02/2019 - 09/2022. Red Laboral ICH</div>
                        <div class="p-2 rounded-lg">
                            <div class="dark:text-slate-300 text-slate-800 mx-0 my-1 md:my-0 flex flex-flow gap-1 flex-wrap text-xs">
                                <span class="badge bg-green-800 text-green-200 shadow-md inline-flex" v-for="st in $tm('ich.stack')" :key="st">{{ getValueKeyFromString(st, TA) }}</span>
                            </div>
                        </div>
                        <span class="flex justify-end">
                            <a href="https://redlaboralich.mx/" target="_blank" class="text-blue-500 text-sm underline">{{ $t('ich.url') }}</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <div class="dark:text-slate-300 text-slate-800 mt-3"> <!-- Experience container -->
                            <p class="text-justify dark:bg-slate-800 bg-slate-50 p-2 rounded-md">{{ $t('ich.description') }}</p>
                            <h2 class="text-xl mt-2 kanit-regular">{{ $t('main_activities') }}</h2>
                            <ul class="list-disc list-inside text-sm">
                                <li v-for="activity in $tm('ich.activities')" :key="activity">{{ getValueKeyFromString(activity, TA) }}</li>
                            </ul>
                            <h2 class="text-xl mt-2 kanit-regular">{{ $t('main_development') }}</h2>
                            <div class="flex dark:bg-sky-950 bg-sky-50 p-3 my-2">
                                <div class="w-[40%]">
                                    <span class="text-red-600 font-bold">RedICH App</span>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('ich.redich_description') }}</div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <Footer />
</template>
<style>
    #logo-loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .box {
        margin: 100px;
        width: 200px;
        height: 200px;
        background-color: #43B883;
        border-radius: 5px;
    }

    path {
        fill: transparent;
        stroke: #57EB64;
        stroke-width: 6px;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        stroke-linecap: round;
        stroke-linejoin: round;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    circle {
        visibility: hidden;
        position: absolute;
    }

    /**progress  */
    .progress {
        position: sticky;
        left: 0;
        right: 0;
        height: 5px;
        top: 30px;
        transform: scaleX(0);
    }

    .box-shadow-hover:hover {
        filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.70));
        /* background-color: white; */
        }
</style>