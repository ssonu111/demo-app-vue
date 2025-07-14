<template>
    <div class="page-header">
        <h1 class="page-title">{{ title }}</h1>
        <div class="page-actions">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $border-color;
    margin-bottom: 1.5rem;
    padding-right: 2rem;
}

.page-title {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
    color: $text-primary;
}

.page-actions {
    display: flex;
    gap: 1rem;
}
</style>