<template>
  <div class="app2-container">
    <h2>{{ t('app2_placeholder') }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style scoped lang="scss">
.app2-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #888;
}
</style>