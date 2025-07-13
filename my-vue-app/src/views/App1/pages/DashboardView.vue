<template>
  <div class="dashboard-view">
    <PageHeader :title="t('dashboard_title')">
      <RouterLink to="/list" class="button-link">{{ t('go_to_list') }}</RouterLink>
    </PageHeader>

    <h2>{{ t('favorites') }} <span tabindex="-1">♥</span></h2>
    <div class="photo-grid-container" ref="scrollContainer">
      <div class="favorites-grid">
        <template v-if="favoritesStore.items.length > 0">
          <PhotoCard v-for="photo in favoritesStore.items" :key="photo.id" :photo="photo" />
        </template>
        <p v-else class="no-favorites-message">{{ t('no_favorites') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/header-section/PageHeader.vue'
import PhotoCard from '@/components/photos/PhotoCard.vue'

const { t } = useI18n()
const favoritesStore = useFavoritesStore()
</script>

<style scoped lang="scss">
.dashboard-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 2rem 0 1rem 2rem;
}

.photo-grid-container {
  // max-height: 100vh;
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 1rem;
}


.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
}

.no-favorites-message {
  color: #888;
  grid-column: 1 / -1
}
</style>