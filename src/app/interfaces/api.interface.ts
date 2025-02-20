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

interface ParagraphBlock {
    type: 'text';
    text: string;
}
export interface RichTextBlock {
    id?: number;
    type: 'paragraph';
    children: ParagraphBlock[];
}

export interface ContentTypeBase {
    id: number;
    documentId: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    locale?: string;
}