<script setup>
    import { usePreferences } from '../stores/usePreferences';

    const preferences = usePreferences()
</script>
<template>
    <footer class="dark:text-slate-300 text-slate-800 py-3 md:text-sm text-xs px-5 md:px-10">
        <hr class="w-full border-slate-600">
        <div class="flex mt-3 justify-evenly gap-2">
            <div class="flex flex-col gap-1">
                <h1 class="mb-3 font-bold">{{ $t("contact") }}</h1>
                <p>+52 1 (961)186 5593</p>
                <p>ejv.developer@gmail.com</p>
            </div>
            <div class="flex flex-col gap-1">
                <h1 class="mb-3 font-bold">{{ $t("location") }}</h1>
                <p>Playa del carmen</p>
                <p>Quintana Roo, México</p>
            </div>
            <div class="flex flex-col gap-1">
                <h1 class="mb-3 font-bold">{{ $t("language") }}</h1>
                <select class="dark:bg-slate-800 bg-white" v-model="$i18n.locale" id="locale" @change="preferences.setLocaleInStorage()">
                    <option v-for="locale in $i18n.availableLocales" :value="locale">{{ locale }}</option>
                </select>
                <button class="dark:bg-slate-800 bg-white py-2 rounded-full" @click="preferences.toggleMode()">
                    {{ preferences.theme === 'dark' ? "🌞" : "🌚" }}
                </button>
            </div>
        </div>
        <div class="text-center text-xs mt-3">© {{ new Date().getFullYear() }} {{ $t("copyrigth") }}</div>
    </footer>
</template>