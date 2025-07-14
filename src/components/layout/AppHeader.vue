<template>
  <header class="app-header">
    <h1>{{ t('header_title') }}</h1>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.app-header {
  background-color: $primary-color;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    padding-left: 20px;
  }
}
</style>