<template>
  <footer class="app-footer">
    <p>{{ t('footer_text') }}</p>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.app-footer {
  text-align: center;
  margin-top: auto;
  color: $text-secondary;
  font-size: 0.9rem;
  background-color: #eaebed;
}
</style>