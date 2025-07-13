<template>
  <div class="list-view-layout">
    <PageHeader :title="t('list_title')">
      <RouterLink to="/" class="button-link">{{ t('back_to_dashboard') }}</RouterLink>
    </PageHeader>

    <div class="photo-grid-container" ref="scrollContainer">
      <div class="photo-grid">
        <div v-for="(photo, index) in photosStore.items" :key="photo.id"
          :ref="el => { if (index === photosStore.items.length - 1) lastPhotoElement = el as HTMLElement }">
          <PhotoCard :photo="photo" />
        </div>
      </div>
      <div v-if="photosStore.loading" class="loading-indicator">
        <p>{{ t('loading') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePhotosStore } from '@/stores/photos'
import { useI18n } from 'vue-i18n'
import { useIntersectionObserver } from '@/watcher/useIntersectionObserver'
import PageHeader from '@/components/header-section/PageHeader.vue'
import PhotoCard from '@/components/photos/PhotoCard.vue'

defineOptions({ name: 'ListView' })

const { t } = useI18n()
const photosStore = usePhotosStore()

const lastPhotoElement = ref<HTMLElement | null>(null)
const scrollContainer = ref<HTMLElement | null>(null) // a ref to the scrollable container

onMounted(() => {
  if (photosStore.items.length === 0) {
    photosStore.fetchPhotos()
  }
})

// pass the scroll container as the 'root' for the observer
useIntersectionObserver(
  lastPhotoElement,
  () => photosStore.fetchPhotos(),
  { root: scrollContainer }
)
</script>

<style scoped lang="scss">
.list-view-layout {
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

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
}

.loading-indicator {
  text-align: center;
  padding: 2rem;
  color: #888;
}
</style>