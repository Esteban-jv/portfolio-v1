<script setup>
    import { onMounted, ref } from 'vue'
    import { timeline, stagger, animate } from "motion"

    const verticalLineE1 = ref(null)
    const verticalLineE2 = ref(null)
    const verticalLineE3 = ref(null)
    const horizontalE = ref(null)

    const verticalJ = ref(null)
    const horizontalJ = ref(null)
    const horizontalJ2 = ref(null)

    const shapeOutside = ref(null)
    const shapeInisde = ref(null)

    const stacks = ref([
        'html', 'css', 'javascript', 'vue', 'tailwindcss', 'laravel', 'php', 'mysql', 'git', 'github', 'linux', 'nginx', 'apache', 'postman',
        'SVN', 'PostgreSQL', 'MMSQL', 'Python', 'DJango', 'DRF', 'Bootstrap', 'Rest'
    ])

    onMounted(async () => {

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
        // animate(
        //     "span",
        //     { y: [0,12], opacity: [0,1] },
        //     { delay: 4.5 }
        // )
    })
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
            <path ref="shapeOutside" d="M 6 27 L 6 72 L 50 98 L 94 72 L 94 27 L 50 6 Z" pathLength="1"></path>
            <path ref="shapeInisde" d="M 28 38 L 28 61 L 50 71 L 72 61 L 72 38 L 50 28 Z" pathLength="1"></path>
        </svg>
    </div>
    <div class="p-5 md:p-10">
        <h1 class="bg-primary color-primary text-3xl md:text-5xl">José Esteban Juárez Velázquez</h1>
        <h1 class="bg-primary color-secondary text-2xl md:text-3xl mt-3"> {{ $t('web_developer') }}</h1>
        <!-- <h1 class="bg-slate-800 color-secondary mb-5">{{ $t('web_developer') }}</h1> -->
        <!-- <span class=" text-green-300">Some text</span> -->
    </div>
    <section class="p-5 md:p-10">
        <div class="md:flex inline">
            <!-- <img src="/Profile.jpg" alt="" class="h-40 w-30 bg-auto bg-no-repeat bg-center rounded-lg"> -->
            <div class="w-50">
                <div class="h-40 w-40 items-center justify-center rounded-full border-[4px] border-green-300 bg-white">
                    <img class="h-full w-full rounded-full" src="/Profile.jpg" alt="" />
                </div>
            </div>
            <div class="w-50 self-center">
                <div class="color-primary md:mx-3 mx-0 my-3 md:my-0 bg-slate-800 p-3 rounded-lg max-w-[600px]">
                    <h2 class="text-2xl md:text-3xl">{{ $t('about_me') }}</h2>
                    <p class="mt-3 text-justify">{{ $t('about_me_description') }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="p-5 md:p-10">
        <div class="flex justify-center mb-3">
            <h2 class="text-3xl color-primary">{{ $t('stack') }}</h2>
        </div>
        <div class="color-primary md:mx-3 mx-0 my-3 md:my-0 bg-slate-800 p-3 rounded-lg flex flex-flow gap-2 flex-wrap">
            <span class="badge bg-green-800 text-green-200 shadow-md uppercase inline-flex" v-for="stack in stacks" :key="stack">{{ stack }}</span>
        </div>
    </section>
    <section class="p-5 md:p-10">
        <div class="flex justify-end">
            <h2 class="text-3xl color-primary">{{ $t('experience') }}</h2>
        </div>
        <div class="text-xl color-primary border-l-green-300 border-l-[2px] p-3">2019</div>
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
    transform-origin: 100px 100px;
    transform: rotate(-90deg);
  }
</style>