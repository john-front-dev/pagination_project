<template>
  <div class="pagination">
    <button @click="goToPage(1)" :disabled="currentPage === 1">«</button>
    <button @click="goToPage(1)" :class="{ active: currentPage === 1 }">1</button>
    <span v-if="showLeftEllipsis">...</span>
    <button
      v-for="page in pages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>
    <span v-if="showRightEllipsis">...</span>
    <button @click="goToPage(totalPages)" :class="{ active: currentPage === totalPages }">{{ totalPages }}</button>
    <button @click="goToPage(totalPages)" :disabled="currentPage === totalPages">»</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePaginationStore } from '../stores/pagination';

const store = usePaginationStore();
const currentPage = computed(() => store.currentPage);
const totalPages = computed(() => store.totalPages);

const goToPage = (page: number) => {
  store.setPage(page);
};

const pages = computed(() => {
  const pages = [];
  for (let i = Math.max(2, store.currentPage - 1); i <= Math.min(store.totalPages - 1, store.currentPage + 1); i++) {
    pages.push(i);
  }
  return pages;
});

const showLeftEllipsis = computed(() => store.currentPage > 3);
const showRightEllipsis = computed(() => store.currentPage < store.totalPages - 2);
</script>

<style scoped>
.pagination {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.pagination button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #007bff;
  cursor: pointer;
  outline: none;
  padding: 0.5rem 1rem;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
}

.pagination button:disabled {
  color: #6c757d;
  cursor: not-allowed;
}

.pagination button:hover {
  background-color: #e9ecef;
}

</style>
