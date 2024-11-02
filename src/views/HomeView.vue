<script setup>
    import { onMounted } from 'vue'
    import { timeline, stagger } from "motion"

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
            // ["circle", draw(1), { duration: 0.8, delay: 1 }],
            ["path #l1", draw(1), { duration: 0.6, at: 1, delay: stagger(0.2) }],
            ["path #l2", draw(1), { duration: 0.6, at: 1, delay: stagger(0.3) }],
            ["path #l3", draw(1), { duration: 0.6, at: 1, delay: stagger(0.4) }],
            ["path #l4", draw(1), { duration: 0.6, at: 1, delay: stagger(0.5) }],
            ["path #l5", draw(1), { duration: 0.6, at: 1, delay: stagger(0.6) }],
            ["path #l6", draw(1), { duration: 0.6, at: 1 }],
            ["path", draw(1), { duration: 0.8, at: "-0.2", delay: stagger(0.2) }],
            ["path #shape2", draw(1), { duration: 0.8, at: "-0.2", delay: stagger(0.1) }],
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
                <!-- <circle cx="150" cy="50" r="40" pathLength="1"></circle> -->
                <path id="shape" d="M 6 27 L 6 72 L 50 98 L 94 72 L 94 27 L 50 6 Z" pathLength="1"></path>
                <path id="l1" d="M6 27 l46 22.5" />
                <!-- <path id="l1" d="M6 27 l 0 45" /> -->
                <path id="l2" d="M6 48 l23 13" />
                <!-- <path id="l3" d="M6 72 l46 25" /> -->

                <!-- <path id="l4" d="M94 72 l -41 24" /> -->
                <!-- <path id="l5" d="M94 72 l 0 -45" /> -->
                <path id="l6" d="M94 27 l -41 22.5" />

                <path id="shape2" d="M 28 38 L 28 61 L 50 71 L 72 61 L 72 38 L 50 28 Z" pathLength="1"></path>
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