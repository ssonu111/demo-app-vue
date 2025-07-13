<template>
  <aside class="side-menu">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">{{ t('menu_app1_link') }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/app2">{{ t('menu_app2_link') }}</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.side-menu {
  width: 220px;
  flex-shrink: 0;
  background-color: #ffffff;
  border-right: 1px solid $border-color;
  padding: 1.5rem 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li a {
    display: flex;
    align-items: center;
    padding: 0.8rem 1.5rem;
    color: $text-secondary;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    border-left: 3px solid transparent;

    &:hover {
      background-color: #f4f7f6;
      color: $text-primary;
    }

    &.router-link-active {
      color: $primary-color;
      border-left: 5px solid $primary-color;
      background-color: #f4f7f6;
    }
  }
}
</style>