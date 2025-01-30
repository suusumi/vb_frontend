import * as React from "react";
import {Box, Typography, CircularProgress} from "@mui/material";
import {CommentsTable} from "../../../features/commentsTable";
import {Toggle} from "../../../features/toggle";
import {ViewMode} from "../../../features/toggle/model/types.ts";
import {JsonDataView} from "../../../features/jsonDataView";
import {useSearchParams} from "react-router-dom";
import {useGetAllCommentsQuery} from "../../../entities/comments/model/commentsApi.ts";
import {GetAllCommentsResponse} from "../../../entities/comments/model/types.ts";

export const AllCommentsPage: React.FC = () => {
    const [viewMode, setViewMode] = React.useState<ViewMode>("table");

    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const postId = searchParams.get("postId") || "";
    const email = searchParams.get("email") || "";
    const name = searchParams.get("name") || "";
    const body = searchParams.get("body") || "";

    const filters = {postId, email, name, body};

    const {data, isLoading} = useGetAllCommentsQuery({
        search,
        page,
        limit,
        filters,
    });

    const defaultData: GetAllCommentsResponse = {
        comments: [],
        totalCount: 0,
        totalPages: 0,
        currentPage: 1
    };

    return (
        <Box sx={{marginTop: "10px"}}>
            <Typography variant="h4">Комментарии</Typography>
            <Toggle viewMode={viewMode} onChange={setViewMode}/>

            {isLoading ? (
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "200px"}}>
                    <CircularProgress size={50}/>
                </Box>
            ) : viewMode === "table" ? (
                <CommentsTable data={data || defaultData} isLoading={isLoading}/>
            ) : (
                <JsonDataView data={data || defaultData}/>
            )}
        </Box>
    );
};
