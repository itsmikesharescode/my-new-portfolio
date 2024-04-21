import type { Projects } from '$lib/types';

export const paginate = (items: Projects[], currentPage: number): Projects[] => {
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    return paginatedItems
}
