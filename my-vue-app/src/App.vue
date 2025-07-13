<template>
  <div class="app-layout">
    <AppHeader />
    <div class="app-main">
      <SideMenu />
      <main class="app-content">
        <RouterView v-slot="{ Component }">
          <KeepAlive :include="['ListView']">
            <component :is="Component" />
          </KeepAlive>
        </RouterView>
        <AppFooter />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import SideMenu from '@/components/layout/SideMenu.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.app-main {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.app-content {
  flex-grow: 1;
  overflow-y: auto;
  background-color: #f4f7f6;
  // padding: 1rem 0 0 1rem;
  display: flex;
  flex-direction: column;
}
</style>