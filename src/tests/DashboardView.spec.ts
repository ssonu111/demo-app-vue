import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import i18n from "@/i18n";
import DashboardView from "@/views/App1/pages/DashboardView.vue";
import PhotoCard from "@/components/photos/PhotoCard.vue";
import { useFavoritesStore } from "@/stores/favorites";

describe("DashboardView.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const favoritePhoto = {
    id: 101,
    title: "A Beautiful Landscape",
    thumbnailUrl: "https://via.placeholder.com/150/1",
    albumId: 1,
    url: "",
  };

  it("shows a message when there are no favorites", () => {
    const wrapper = mount(DashboardView, {
      global: {
        plugins: [i18n],
        stubs: { RouterLink: true },
      },
    });

    expect(wrapper.text()).toContain("Favorite photos will appear here.");
    expect(wrapper.findComponent(PhotoCard).exists()).toBe(false);
  });

  it("renders favorite items as PhotoCards with correct details", async () => {
    const wrapper = mount(DashboardView, {
      global: {
        plugins: [i18n],
        stubs: { RouterLink: true },
      },
    });

    const favoritesStore = useFavoritesStore();
    favoritesStore.items.push(favoritePhoto);
    await wrapper.vm.$nextTick();

    const card = wrapper.findComponent(PhotoCard);
    expect(card.exists()).toBe(true);

    expect(card.props("photo").id).toBe(101);
    const cardText = card.text();
    expect(cardText).toContain("ID: 101");
    expect(cardText).toContain("A Beautiful Landscape");
  });

  it("renders favorite cards with the favorite icon active", async () => {
    const wrapper = mount(DashboardView, {
      global: {
        plugins: [i18n],
        stubs: { RouterLink: true },
      },
    });

    const favoritesStore = useFavoritesStore();
    favoritesStore.items.push(favoritePhoto);
    await wrapper.vm.$nextTick();

    const card = wrapper.findComponent(PhotoCard);
    const favoriteButton = card.find(".favorite-button");

    expect(favoriteButton.classes()).toContain("is-favorite");
  });
});
