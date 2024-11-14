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

    const experience = ref(null)
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
                        <div class="h-40 w-40 items-center justify-center rounded-full border-[4px] border-green-500 bg-white">
                            <img class="h-full w-full rounded-full" src="/Profile.jpg" alt="" />
                        </div>
                    </div>
                    <div class="flex md:flex-col min-w-[2rem] gap-2 justify-evenly items-center box-shadow-hover border-sky-500 border-2 transition duration-500 shadow-md rounded-md mt-3 md:mt-0 md:ml-3 p-1">
                        <a href="https://www.linkedin.com/in/jos%C3%A9-esteban-juarez-velazquez-68b511293/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BQD5xzlHVQNSK5buTioxGGA%3D%3D" target="_blank">
                            <img src="/Linkedin.svg" alt="" class="w-5 h-5 smoothimg hover:h-7 hover:w-7 transition-all duration-300">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="w-8 h-8 hover:bg-white transition-colors duration-200 rounded-md">
                                <path class="fill-green-400 stroke-none visible" d="M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.5 2.5 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5m1.5 15.38a1.51 1.51 0 0 1-1.5 1.5H5.56a1.51 1.51 0 0 1-1.5-1.5V5.56a1.51 1.51 0 0 1 1.5-1.5h12.88a1.51 1.51 0 0 1 1.5 1.5Z" />
                                <path class="fill-green-400 stroke-none visible" d="M6.376 10.748a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0Z" />
                                <circle class="fill-green-400 stroke-none visible" cx="7.376" cy="6.744" r="1" />
                                <path class="fill-green-400 stroke-none visible" fill="currentColor" d="M17.62 13.37v3.88a1 1 0 1 1-2 0v-3.88a1.615 1.615 0 1 0-3.23 0v3.88a1 1 0 0 1-2 0v-6.5a1.016 1.016 0 0 1 1-1a.94.94 0 0 1 .84.47a3.61 3.61 0 0 1 5.39 3.15" />
                            </svg> -->
                        </a>
                        <a :href="$i18n.locale === 'es' ? 'https://wa.link/jtrqg6' : 'https://wa.link/7cq2xb'" target="_blank">
                            <img src="/Whatsapp.svg" alt="" class="w-6 h-6 smoothimg hover:h-8 hover:w-8 transition-all duration-300">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="w-8 h-8 hover:bg-white transition-colors duration-200 rounded-md">
                                <path class="fill-green-400 stroke-none visible" fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                            </svg> -->
                        </a>
                        <a href="https://github.com/Esteban-jv" target="_blank">
                            <img src="/Github.svg" alt="" class="w-6 h-6 smoothimg hover:h-8 hover:w-8 transition-all duration-300">
                             <!-- <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:bg-white transition-colors duration-200 rounded-md">
                                <g fill="none">
                                    <path class="fill-green-400 stroke-none visible" d="m7.12879292.51417785c1.11274139.23426134 2.47362429.82048782 4.11150568 1.85174647l.1402084.08827939.1615653-.03671938c2.9884399-.67919088 6.1124421-.67919088 8.961135-.00093066l.1674659.03987284.144082-.09420748c1.5716721-1.02763176 2.9182496-1.61310022 4.0524237-1.84775693.759192-.15707421 1.3120134-.14192842 1.7266168-.03827759.2666462.090124.4499633.27344118.5486711.56956426.6704248 1.74425402.8026962 3.4637821.4052819 5.18591101l-.0441449.19129423.1243184.15194469c1.1968139 1.46277248 1.8488866 3.31603184 1.8488866 5.2875725 0 6.3485866-2.8063027 9.1853925-7.7312723 10.4166349l-.419054.1047635.1365949.4097846c.2531851.7595554.3950384 1.6816016.3950384 2.5054211v5.2638242c0 .6102163-.3750007.9852169-.9852169.9852169-.6102163 0-.9852169-.3750006-.9852169-.9852169v-5.4023459c.1418506-1.1099017-.2422784-2.0702241-1.0868091-2.9147549-.3044473-.3044473-.3790379-.6525363-.227066-.8804941l.0552369-.1248658c.0757101-.3028408.3814371-.532136.8466076-.6871928 5.3120827-.5399498 8.0307236-2.8327794 8.0307236-8.6907748 0-1.6564285-.6131873-3.26604496-1.7632966-4.55991791-.2672232-.26819938-.3184945-.62709819-.1965338-.99298027.421569-1.12340343.4584237-2.30275287.1471054-3.54802595l-.0925045-.3700178-.3739989.07479979c-.9478211.18956418-2.1473179.75403325-3.7508016 1.86413736-.1857796.1766551-.4230883.19822862-.7539984.08792526-2.8475111-.81394761-5.9339607-.85464499-8.7911309-.12649584l-.4491585.12135959c-.3628223.12054277-.6384702.09757211-.9149267-.08673225-1.42751816-1.0714084-2.69253421-1.64970145-3.74499762-1.86019412l-.373999-.0747998-.09250445.37001782c-.31131829 1.24527311-.27446362 2.42462255.15204701 3.5619842.10109463.41385961.07644663.71100916-.06562638.86216475l-.13584907.11685726c-1.15010933 1.29387299-1.76329656 2.90348951-1.76329656 4.55991791 0 5.8579954 2.71864082 8.150825 8.11605497 8.7091782.3774067.0021233.658493.2576563.7612762.6687894.1010375.4041497.0114892.8220417-.1718291 1.0053599-.7436348.7436349-1.0868091 1.6587662-1.0868091 2.7762332v5.4023459c0 .6102163-.3750006.9852169-.9852169.9852169-.6102162 0-.9852169-.3750006-.9852169-.9852169v-2.8270529l-.46575959.0776266c-2.54724.42454-4.24481989-.2444101-5.77209467-1.8206127l-.17550688-.1858852c-.2604301-.2828668-.33970082-.3776481-.88018386-1.0382385l-.36159501-.4498172c-.20278887-.2491665-.28041984-.3335268-.4270144-.4801213-.31004981-.3100499-.60764766-.5050278-.94769786-.5900403-.50153879-.1007695-.86640495-.6978232-.69527541-1.1256471.10960673-.5162087.63701397-.8684616 1.05468442-.7739997l.08762892.0271823c1.09149998.3291047 1.69332587.8449555 2.89233084 2.2437946 1.52216405 2.0951415 2.69032089 2.7199695 5.36532835 2.2104443l.32515515-.0619343v-.4695228c0-.8356368.1444822-1.7386502.3869558-2.3448342l.1761248-.4403121-.4637039-.0993651c-4.85568756-1.0405045-7.71806969-4.1305761-7.71806969-10.2750493 0-1.9715406.65207273-3.82479999 1.84888659-5.28757249l.13251746-.16196578-.0574908-.20121779c-.52680966-1.84383388-.39831649-3.54636846.39413925-5.26335592.11499725-.33725524.29831442-.52057241.59443749-.61928009.38670854-.09546266.89997964-.11002355 1.64383232.04657702z" transform="translate(1)"/>
                                </g>
                            </svg> -->
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
            <div class="md:w-[20%] w-full sticky overflow-hidden top-[-13px] dark:bg-slate-900 bg-slate-100 md:pl-10 z-50 max-h-[200px]">
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
                    <div ref="vtimes" class="experience transition-opacity duration-300" :class="[(vtimesProgress > 0 && umProgress < 0.4) ? 'opacity-100' : 'opacity-50']">
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
                                <div class="w-[40%] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                        <path class=" stroke-none visible fill-orange-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        <path class="stroke-none visible fill-orange-500" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                    </svg>
                                    <a href="https://www.organiwork.com/" target="_blank" class="text-orange-500 font-bold">Organiwork</a>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('vtimes.organiwork_description') }}</div>
                            </div>
                            <div class="flex dark:bg-sky-950 bg-sky-50 p-3 my-2">
                                <div class="w-[40%] flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">
                                        <path class=" stroke-none visible fill-sky-500" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        <path class="fill-sky-500 stroke-none visible" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                    </svg>
                                    <a href="https://www.modern-restaurant.com/" target="_blank" class="text-blue-500 font-bold">Modern Restaurant</a>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('vtimes.modern_restaurant_description') }}</div>
                            </div>
                        </div>
                    </div>

                    <div ref="um" class="experience transition-opacity duration-300" :class="[(umProgress > 0.4 && ichProgress < 0.5) ? 'opacity-100' : 'opacity-50']">
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
                                <div class="w-[40%] flex items-center">
                                    <span class="text-blue-600 font-bold">SIUM Escolar</span>
                                </div>
                                <div class="w-[60%] text-sm">{{ $t('um.sium_description') }}</div>
                            </div>
                        </div>
                    </div>

                    <div ref="ich" class="experience transition-opacity duration-300" :class="[ichProgress > 0.5 ? 'opacity-100' : 'opacity-50']">
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
                                <div class="w-[40%] flex items-center">
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