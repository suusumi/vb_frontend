import React from "react";
import {TablePagination} from "@mui/material";

interface PaginationProps {
    count: number;
    page: number;
    limit: number;
    onPageChange: (newPage: number) => void;
    onRowsPerPageChange: (newLimit: number) => void;
}

export const CommentsPagination: React.FC<PaginationProps> = ({
                                                                  count,
                                                                  page,
                                                                  limit,
                                                                  onPageChange,
                                                                  onRowsPerPageChange
                                                              }) => {
    return (
        <TablePagination
            component="div"
            count={count}
            page={page - 1}
            rowsPerPage={limit}
            onPageChange={(_, newPage) => onPageChange(newPage + 1)}
            onRowsPerPageChange={(e) => onRowsPerPageChange(parseInt(e.target.value, 10))}
        />
    );
};
