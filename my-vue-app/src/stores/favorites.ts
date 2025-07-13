import { defineStore } from "pinia";

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    items: [] as Photo[],
  }),
  getters: {
    // check if photo is a favorite photo
    isFavorite: (state) => (photoId: number) => {
      return state.items.some((p) => p.id === photoId);
    },
  },
  actions: {
    toggleFavorite(photo: Photo) {
      const index = this.items.findIndex((p) => p.id === photo.id);
      if (index !== -1) {
        this.items.splice(index, 1);
      } else {
        this.items.push(photo);
      }
    },
  },
});
