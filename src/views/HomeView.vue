<script setup>
    import { onMounted, ref, inject } from 'vue'
    import { timeline, stagger, animate, scroll } from "motion"
    import { useI18n } from 'vue-i18n'

    const { tm } = useI18n()

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

    onMounted(async () => {
        // console.warn(import.meta.env.VITE_APP_MODE)
        if(import.meta.env.VITE_APP_MODE === 'production') {
            TA.value = 'b.s'
        } else {
            TA.value = 'loc.source'
        }
        // console.log(TA.value)
        // console.log(tm('vtimes.activities'))
        // console.log(getValueKeyFromString(tm('vtimes.activities')[0], TA.value))
        

        const draw = (progress) => ({
            // This property makes the line "draw" in when animated
            strokeDashoffset: 1 - progress,

            // Each line will be hidden until it starts drawing
            // to fix a bug in Safari where the line can be
            // partially visible even when progress is at 0
            visibility: "visible",
        });

        const erase = (progress) => ({
            // This property makes the line "draw" in when animated
            strokeDashoffset: progress - 1,

            // Each line will be hidden until it starts drawing
            // to fix a bug in Safari where the line can be
            // partially visible even when progress is at 0
            visibility: "visible",
        });

        await timeline([
            [verticalLineE1.value, draw(1), { duration: 0.2, at: 0.2, delay: stagger(0.1) }],
            [verticalLineE2.value, draw(1), { duration: 0.2, at: 0.2, delay: stagger(0.1) }],
            [verticalLineE3.value, draw(1), { duration: 0.2, at: 0.2, delay: stagger(0.1) }],
            [horizontalE.value, draw(1), { duration: 0.2, at: 0.4, delay: stagger(0.2) }],

            [verticalJ.value, draw(1), { duration: 0.2, at: 0.6, delay: stagger(0.2) }],
            [horizontalJ.value, draw(1), { duration: 0.2, at: 0.6, delay: stagger(0.2) }],
            [horizontalJ2.value, draw(1), { duration: 0.2, at: 0.6, delay: stagger(0.2) }],

            // ['circle', draw(1), { duration: 0.1, at: 0.7, delay: stagger(0.1, { start: 0.7}) }],

            [shapeOutside.value, draw(1), { duration: 0.6, at: 0.8, delay: stagger(0.1) }],
            [shapeInisde.value, draw(1), { duration: 0.6, at: 0.9, delay: stagger(0.1) }],
        ])

        // now we erase shapeOutise and Inside
        await setTimeout(async() => {
            await timeline([
                [shapeOutside.value, erase(0), { duration: 0.8, at: 1.4, delay: stagger(1.5) }],
                [shapeInisde.value, erase(0), { duration: 0.8, at: 1.4, delay: stagger(1.5) }],

                ["path", erase(0), { duration: 0.1, at: 2.2, delay: stagger(0.1) }],
            ])
        }, 1400)

        await animate(
            "h1",
            { y: [0,12], opacity: [0,1] },
            { delay: 4.5 }
        )
        await animate(
            "section",
            { y: [0,12], opacity: [0,1] },
            { delay: 4.6 }
        )
        await timeline([
            ["span", { y: [6,0], opacity: [0,1] }, { duration: 0.05, at: 4.6, delay: stagger(0.05) }],
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
            <path ref="verticalLineE1" d="M 6 27 l46 22.5 Z" pathLength="1" />
            <path ref="verticalLineE2" d="M 6 48 l23 13 Z" pathLength="1"/>
            <path ref="verticalLineE3" d="M 6 72 l40 24 Z" pathLength="1"/>
            <path ref="horizontalE" d="M 6 27 l 0 45 Z" pathLength="1"/>

            <path ref="verticalJ" d="M 94 72 l -41 24 Z" pathLength="1"/>
            <path ref="horizontalJ" d="M 94 72 l 0 -45 Z" pathLength="1"/>
            <path ref="horizontalJ2" d="M94 27 l -21 12.5" pathLength="1"/>
            <circle id="pointA" cx="50" cy="49" r="4" pathLength="1" fill="#005900"/>
            <circle id="pointB" cx="7" cy="27" r="4" fill="#005900" pathLength="1"/>
            <circle id="pointC" cx="7" cy="48" r="4" fill="#005900" pathLength="1"/>
            <circle id="pointD" cx="7" cy="72" r="4" fill="#005900" pathLength="1"/>
            <circle id="pointE" cx="49" cy="96" r="4" fill="#005900" pathLength="1"/>

            <circle id="pointF" cx="94" cy="72" r="4" fill="#005900"/>
            <circle id="pointG" cx="94" cy="27" r="4" fill="#005900"/>

            <path ref="shapeOutside" d="M 6 27 L 6 72 L 50 98 L 94 72 L 94 27 L 50 6 Z" pathLength="1"></path>
            <path ref="shapeInisde" d="M 28 38 L 28 61 L 50 71 L 72 61 L 72 38 L 50 28 Z" pathLength="1"></path>
        </svg>
    </div>
    <div class="px-5 md:px-10 py-3">
        <h1 class="bg-primary color-primary text-3xl md:text-5xl kanit-regular">José Esteban Juárez Velázquez</h1>
        <h1 class="bg-primary color-secondary text-2xl md:text-3xl mt-1 kanit-regular"> {{ $t('web_developer') }}</h1>
    </div>
    <section class="p-5 md:px-10">
        <div class="md:flex inline">
            <div class="md:w-[60%] w-full">
                <div class="md:flex inline">
                    <div class="w-50 flex justify-center">
                        <div class="h-40 w-40 items-center justify-center rounded-full border-[4px] border-green-300 bg-white">
                            <img class="h-full w-full rounded-full" src="/Profile.jpg" alt="" />
                        </div>
                    </div>
                    <div class="w-50 self-center">
                        <div class="color-primary md:mx-3 mx-0 my-3 md:my-0 bg-slate-800 p-3 rounded-lg max-w-[600px]">
                            <h2 class="text-2xl md:text-3xl kanit-regular">{{ $t('about_me') }}</h2>
                            <p class="mt-3 text-justify">{{ $t('about_me_description') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-[40%] w-full">
                <div class="bg-slate-800 p-3 rounded-lg">
                    <div class="flex justify-center mb-3">
                        <h2 class="text-3xl color-primary kanit-regular">{{ $t('stack') }}</h2>
                    </div>
                    <div class="color-primary md:mx-3 mx-0 my-3 md:my-0  flex flex-flow gap-2 flex-wrap">
                        <span class="badge bg-green-800 text-green-200 shadow-md uppercase inline-flex" v-for="stack in stacks" :key="stack">{{ stack }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="px-5 md:px-10">
    </section>
    <section class="p-5 md:p-10">
        <div class="flex justify-start pb-1">
            <h2 class="text-3xl color-primary kanit-regular">{{ $t('education') }}</h2>
        </div>
        <div class="text-xl color-primary border-l-green-300 border-l-[2px] p-3">2019. Universidad Politécnica de Chiapas.</div>
        <div class="color-primary mt-3">
            <p class="text-justify">{{ $t('education_description') }}</p>
        </div>
    </section>
    <section class="">
        <div class="flex justify-start pb-1 p-5 md:p-10">
            <h2 class="text-3xl color-primary kanit-regular">{{ $t('experience') }}</h2>
        </div>
        <!-- <div class="text-green-500 m-2 text-sm cursor-pointer">
            {{ vtimesProgress }}
            {{ umProgress }}
            {{ ichProgress }}
        </div> -->
        <div class="md:flex inline">
            <div class="md:w-[20%] w-full sticky overflow-hidden top-[-13px] bg-slate-900 md:pl-10">
                <div class="md:inline flex justify-evenly gap-0">
                    <div
                        class="md:m-2 text-xl hover:bg-slate-600 p-2 cursor-pointer md:w-[90%] w-full text-center"
                        :class="[ vtimesProgress > 0 && vtimesProgress < 1 ? 'text-green-300 bg-slate-600' : 'text-green-600 bg-slate-800' ]"
                    >{{ $t('current') }}</div>
                    <div 
                        class="md:m-2 text-xl hover:bg-slate-600 p-2 cursor-pointer md:w-[90%] w-full text-center"
                        :class="[ umProgress > 0 && umProgress < 1 ? 'text-green-300 bg-slate-600' : 'text-green-600 bg-slate-800' ]"
                    >2020</div>
                    <div
                        class="md:m-2 text-xl hover:bg-slate-600 p-2 cursor-pointer md:w-[90%] w-full text-center"
                        :class="[ ichProgress > 0 && ichProgress < 1 ? 'text-green-300 bg-slate-600' : 'text-green-600 bg-slate-800' ]"
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
                        <div class="text-xl color-primary border-l-green-300 border-l-[2px] p-3 kanit-regular">01/2022 - {{ $t('current') }}. Vacation Times</div>
                        <div class="p-2 rounded-lg">
                            <div class="color-primary mx-0 my-1 md:my-0 flex flex-flow gap-1 flex-wrap text-xs">
                                <span class="badge bg-green-800 text-green-200 shadow-md inline-flex" v-for="st in $tm('vtimes.stack')" :key="st">{{ getValueKeyFromString(st, TA) }}</span>
                            </div>
                        </div>
                        <span class="flex justify-end">
                            <a href="https://vacationstimes.com/es/home/" target="_blank" class="text-blue-500 text-sm">{{ $t('vtimes.url') }}</a>
                        </span>
                        <div class="color-primary mt-3"> <!-- Experience container -->
                            <p class="text-justify bg-slate-800 p-2 rounded-md">{{ $t('vtimes.description') }}</p>
                            <h2 class="text-xl mt-2 kanit-regular">{{ $t('main_activities') }}</h2>
                            <ul class="list-disc list-inside text-sm">
                                <li v-for="activity in $tm('vtimes.activities')" :key="activity">{{ getValueKeyFromString(activity, TA) }}</li>
                            </ul>
                            <h2 class="text-xl mt-2 kanit-regular">{{ $t('main_development') }}</h2>
                            <div class="flex bg-secondary p-3 my-2">
                                <div class="w-[40%]">
                                    <a href="https://www.organiwork.com/" class="text-orange-300 font-bold">Organiwork</a>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('vtimes.organiwork_description') }}</div>
                            </div>
                            <div class="flex bg-secondary p-3 my-2">
                                <div class="w-[40%]">
                                    <a href="https://www.modern-restaurant.com/" class="text-blue-500 font-bold">Modern Restaurant</a>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('vtimes.modern_restaurant_description') }}</div>
                            </div>
                        </div>
                    </div>

                    <div ref="um" class="experience">
                        <div class="text-xl color-primary border-l-green-300 border-l-[2px] p-3">09/2019 - 01/2022. Universidad Maya</div>
                        <div class="color-primary mt-3"> <!-- Experience container -->
                            <p class="text-justify">{{ $t('um.description') }}</p>
                            <h2 class="text-xl mt-2">{{ $t('main_activities') }}</h2>
                            <ul class="list-disc list-inside">
                                <li v-for="activity in $tm('um.activities')" :key="activity">{{ getValueKeyFromString(activity, TA) }}</li>
                            </ul>
                        </div>
                    </div>

                    <div ref="ich" class="experience">
                        <div class="text-xl color-primary border-l-green-300 border-l-[2px] p-3">02/2019 - 09/2022. Red Laboral ICH</div>
                        <div class="color-primary mt-3"> <!-- Experience container -->
                            <p class="text-justify">{{ $t('ich.description') }}</p>
                            <p class="text-justify w-80">{{ $t('ich.description') }}</p>
                            <h2 class="text-xl mt-2">{{ $t('main_activities') }}</h2>
                            <ul class="list-disc list-inside">
                                <li v-for="activity in $tm('ich.activities')" :key="activity">{{ getValueKeyFromString(activity, TA) }}</li>
                            </ul>
                        </div>
                    </div>

                    
                </article>
            </div>
        </div>
    </section>
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
</style>