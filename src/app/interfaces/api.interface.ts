interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface Meta {
    pagination: Pagination;
}

export interface APISingleResponse<T> {
    data: T;
    meta: Meta;
}

export interface APIResponse<T> {
    data: T[];
    meta: Meta;
}
