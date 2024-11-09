<script setup>
    import { ref } from 'vue';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
</script>
<template>
    <Header />
    <section class="px-5 md:px-10">
        <div class="flex justify-start pb-1">
            <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('my_projects') }}</h2>
        </div>
    </section>
    <section class="px-5 md:px-10">
        <div class="flex justify-start pb-1">
            <h2 class="text-3xl dark:text-slate-300 text-slate-800 kanit-regular">{{ $t('courses') }}</h2>
        </div>
    </section>
    <Footer />
</template>