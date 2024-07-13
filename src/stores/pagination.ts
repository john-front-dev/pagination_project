import { defineStore } from 'pinia';

export const usePaginationStore = defineStore('pagination', {
    state: () => ({
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: 100,
    }),
    actions: {
        setPage(page: number) {
            this.currentPage = page;
        },
        setItemsPerPage(items: number) {
            this.itemsPerPage = items;
        }
    },
    getters: {
        totalPages: (state) => Math.ceil(state.totalItems / state.itemsPerPage),
    },
});
