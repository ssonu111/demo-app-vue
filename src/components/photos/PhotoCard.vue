<template>
  <div class="photo-card">
    <div class="image-wrapper">
      <img :src="photo.thumbnailUrl" :alt="photo.title" @error="onImageError" />
      <button @click="favoritesStore.toggleFavorite(photo)" class="favorite-button"
        :class="{ 'is-favorite': isFavorite }">
        <span>♥</span>
      </button>
    </div>
    <div class="card-content">
      <span class="photo-id">ID: {{ photo.id }}</span>
      <p class="photo-title" :title="photo.title">{{ photo.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'

interface Photo { id: number; title: string; thumbnailUrl: string; }

const props = defineProps<{ photo: Photo }>()
const favoritesStore = useFavoritesStore()
const isFavorite = computed(() => favoritesStore.isFavorite(props.photo.id))

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  if (target?.parentElement) target.parentElement.classList.add('image-failed');
}

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.photo-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  }
}

.image-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  // Fallback for broken images
  &.image-failed img {
    display: none; // hide the broken image icon
  }

  &.image-failed::before {
    content: '🖼️'; // Show a placeholder icon
    font-size: 3rem;
    color: #adb5bd;
  }
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.2rem;
  line-height: 1;
  opacity: 0;
  transform: scale(0.8);

  .photo-card:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &.is-favorite {
    opacity: 1;
    background-color: $danger-color;
    transform: scale(1);
  }

  &:hover {
    transform: scale(1.1);
  }
}

.card-content {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
}

.photo-id {
  font-size: 0.75rem;
  font-weight: 500;
  color: $text-secondary;
  margin-bottom: 0.25rem;
}

.photo-title {
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: $text-primary;
}
</style>