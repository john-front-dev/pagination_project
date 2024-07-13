
<template>
  <div class="container">
    <Table :data="paginatedData" />
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePaginationStore } from './stores/pagination';
import Pagination from './components/Pagination.vue';
import Table from './components/Table.vue';

const store = usePaginationStore();

const data = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
}));

const paginatedData = computed(() => {
  const start = (store.currentPage - 1) * store.itemsPerPage;
  const end = start + store.itemsPerPage;
  return data.slice(start, end);
});
</script>
