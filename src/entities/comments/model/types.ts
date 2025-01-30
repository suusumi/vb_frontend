export interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export interface GetAllCommentsResponse {
    comments: Comment[];
    totalPages: number;
    totalCount: number;
    currentPage: number;
}

export interface GetAllCommentsParams {
    search?: string;
    page?: number;
    limit?: number;
    filters?: Record<string, any>;
}
