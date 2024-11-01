<script setup>
import { usePreferences } from './stores/usePreferences';

const preferences = usePreferences()
</script>

<template>
  <RouterView />
</template>
