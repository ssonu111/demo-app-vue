import { defineStore } from "pinia";
import { getPhotos } from "@/services/api";

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export const usePhotosStore = defineStore("photos", {
  state: () => ({
    items: [] as Photo[],
    page: 1,
    loading: false,
    hasMore: true,
  }),
  actions: {
    async fetchPhotos() {
      if (this.loading || !this.hasMore) return;

      this.loading = true;
      try {
        const newPhotos = await getPhotos(this.page);
        if (newPhotos.length > 0) {
          this.items.push(...newPhotos);
          this.page++;
        } else {
          this.hasMore = false;
        }
      } catch (error) {
        console.error("Failed to fetch photos", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
