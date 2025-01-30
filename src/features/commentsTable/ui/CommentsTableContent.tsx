import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper
} from "@mui/material";

interface Comment {
    id: number;
    name: string;
    body: string;
}

interface TableProps {
    comments: Comment[];
    isLoading: boolean;
    openDetailed: (id: number) => void;
}

export const CommentsTableContent: React.FC<TableProps> = ({comments, isLoading, openDetailed}) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                maxHeight: {md: 600, xs: 450},
            }}
        >
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Body</TableCell>
                        <TableCell>Подробнее</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                Загрузка...
                            </TableCell>
                        </TableRow>
                    ) : (
                        comments.map((comment) => (
                            <TableRow key={comment.id}>
                                <TableCell>{comment.id}</TableCell>
                                <TableCell sx={{
                                    maxWidth: "200px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}>
                                    {comment.name}
                                </TableCell>
                                <TableCell sx={{
                                    maxWidth: "200px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}>
                                    {comment.body}
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => openDetailed(comment.id)}>Подробнее</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
