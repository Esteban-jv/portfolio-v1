<script setup>
</script>
<template>
    <div class="px-5 md:px-10 py-3">
        <h1 class="dark:text-slate-300 text-slate-800 text-3xl md:text-5xl kanit-regular">José Esteban Juárez Velázquez</h1>
        <h1 class="text-slate-500 text-2xl md:text-3xl mt-1 kanit-regular"> {{ $t('web_developer') }}</h1>
        <div class="flex gap-2 justify-end">
            <a :href="$i18n.locale === 'es' ? 'https://wa.link/jtrqg6' : 'https://wa.link/7cq2xb'" target="_blank">
                <img src="/Whatsapp.svg" alt="" class="w-10 h-10">
            </a>
            <a href="https://github.com/Esteban-jv" target="_blank">
                <img src="/Github.svg" alt="" class="w-10 h-10">
            </a>            
        </div>
    </div>
</template>