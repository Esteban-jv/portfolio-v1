<script setup>
    import { onMounted, ref } from 'vue'
    import { timeline, stagger } from "motion"

    const verticalLineE1 = ref(null)
    const verticalLineE2 = ref(null)
    const verticalLineE3 = ref(null)
    const horizontalE = ref(null)

    const verticalJ = ref(null)
    const horizontalJ = ref(null)
    const horizontalJ2 = ref(null)

    const shapeOutside = ref(null)
    const shapeInisde = ref(null)

    onMounted(() => {

        const draw = (progress) => ({
            // This property makes the line "draw" in when animated
            strokeDashoffset: 1 - progress,

            // Each line will be hidden until it starts drawing
            // to fix a bug in Safari where the line can be
            // partially visible even when progress is at 0
            visibility: "visible",
        });

        timeline([
            [verticalLineE1.value, draw(1), { duration: 0.2, at: 0.2, delay: stagger(0.1) }],
            [verticalLineE2.value, draw(1), { duration: 0.2, at: 0.2, delay: stagger(0.1) }],
            [verticalLineE3.value, draw(1), { duration: 0.2, at: 0.2, delay: stagger(0.1) }],
            [horizontalE.value, draw(1), { duration: 0.2, at: 0.4, delay: stagger(0.2) }],

            [verticalJ.value, draw(1), { duration: 0.2, at: 0.6, delay: stagger(0.2) }],
            [horizontalJ.value, draw(1), { duration: 0.2, at: 0.6, delay: stagger(0.2) }],
            [horizontalJ2.value, draw(1), { duration: 0.2, at: 0.6, delay: stagger(0.2) }],

            [shapeOutside.value, draw(1), { duration: 0.6, at: 0.8, delay: stagger(0.1) }],
            [shapeInisde.value, draw(1), { duration: 0.6, at: 1, delay: stagger(0.1) }],
        ])
    })
</script>
<template>
    <div>
        <h1 class="bg-primary color-primary text-3xl">José Esteban Juárez Velázquez</h1>
        <h2 class="bg-slate-800 color-secondary">{{ $t('web_developer') }}</h2>
        <span class=" text-green-300">Some text</span>
        <div class="m-5">
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
    </div>
</template>
<style>
    .box {
        margin: 100px;
        width: 200px;
        height: 200px;
        background-color: #43B883;
        border-radius: 5px;
    }

    /* circle test */
    circle,
  path {
    fill: transparent;
    stroke: #57EB64;
    stroke-width: 6px;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    visibility: hidden;
    position: fixed;
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