import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import i18n from "@/i18n";
import ListView from "@/views/App1/pages/ListView.vue";
import PhotoCard from "@/components/photos/PhotoCard.vue";
import { useFavoritesStore } from "@/stores/favorites";
import { usePhotosStore } from "@/stores/photos";

vi.mock("@/watcher/useIntersectionObserver", () => ({
  useIntersectionObserver: () => {},
}));

describe("ListView.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const samplePhoto = {
    id: 201,
    title: "A Night Sky",
    thumbnailUrl: "https://via.placeholder.com/150/2",
    albumId: 1,
    url: "",
  };

  it("renders photo cards with correct ID and title", async () => {
    const wrapper = mount(ListView, {
      global: {
        plugins: [i18n],
        stubs: { RouterLink: true },
      },
    });

    const photosStore = usePhotosStore();
    photosStore.items.push(samplePhoto);
    await wrapper.vm.$nextTick();

    const card = wrapper.findComponent(PhotoCard);
    expect(card.exists()).toBe(true);

    const cardText = card.text();
    expect(cardText).toContain("ID: 201");
    expect(cardText).toContain("A Night Sky");
  });

  it("toggles the favorite class on a card when its button is clicked", async () => {
    const wrapper = mount(ListView, {
      global: {
        plugins: [i18n],
        stubs: { RouterLink: true },
      },
    });

    const photosStore = usePhotosStore();
    const favoritesStore = useFavoritesStore();
    photosStore.items.push(samplePhoto);
    await wrapper.vm.$nextTick();

    const card = wrapper.findComponent(PhotoCard);
    const favoriteButton = card.find(".favorite-button");

    expect(favoritesStore.isFavorite(201)).toBe(false);
    expect(favoriteButton.classes()).not.toContain("is-favorite");

    await favoriteButton.trigger("click");

    expect(favoritesStore.isFavorite(201)).toBe(true);
    expect(favoriteButton.classes()).toContain("is-favorite");
  });
});
