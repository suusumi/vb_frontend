import * as React from "react";
import {useSearchParams, useNavigate} from "react-router-dom";
import {Box, TextField} from "@mui/material";
import {CommentsFilters} from "./CommentsFilters";
import {CommentsTableContent} from "./CommentsTableContent";
import {CommentsPagination} from "./CommentsPagination";
import {GetAllCommentsResponse} from "../../../entities/comments/model/types.ts";

interface CommentsTableProps {
    data: GetAllCommentsResponse | null;
    isLoading: boolean;
}

export const CommentsTable: React.FC<CommentsTableProps> = ({data, isLoading}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const search = searchParams.get("search") || "";
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);

    const activeFilters = {
        postId: searchParams.get("postId") || "",
        email: searchParams.get("email") || "",
        name: searchParams.get("name") || "",
        body: searchParams.get("body") || ""
    };

    const [filters, setFilters] = React.useState(activeFilters);

    const handleFilterChange = (field: keyof typeof filters, value: string) => {
        setFilters((prev) => ({...prev, [field]: value}));
    };

    const applyFilters = () => {
        setSearchParams({
            search,
            page: "1",
            limit: String(limit),
            postId: filters.postId,
            email: filters.email,
            name: filters.name,
            body: filters.body
        });
    };

    const resetFilters = () => {
        setFilters({postId: "", email: "", name: "", body: ""});
        setSearchParams({search, page: "1", limit: String(limit)});
    };

    const openDetailed = (id: number) => {
        navigate(`/comment/${id}`);
    };

    return (
        <Box>
            <TextField
                label="Поиск"
                value={search}
                onChange={(e) => setSearchParams({search: e.target.value, page: "1", limit: String(limit)})}
                fullWidth
                margin="normal"
            />

            <CommentsFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                applyFilters={applyFilters}
                resetFilters={resetFilters}
            />

            <CommentsTableContent comments={data?.comments || []} isLoading={isLoading} openDetailed={openDetailed}/>

            <CommentsPagination
                count={data?.totalCount || 0}
                page={page}
                limit={limit}
                onPageChange={(newPage) =>
                    setSearchParams({search, page: String(newPage), limit: String(limit), ...activeFilters})
                }
                onRowsPerPageChange={(newLimit) =>
                    setSearchParams({search, page: "1", limit: String(newLimit), ...activeFilters})
                }
            />
        </Box>
    );
};
