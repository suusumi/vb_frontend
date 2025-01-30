import * as React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useGetCommentByIdQuery} from "../../../entities/comments/model/commentsApi.ts";
import {
    Container,
    CircularProgress,
    Alert,
    Typography,
    Stack,
    Box,
    Button
} from "@mui/material";

export const DetailedCommentPage: React.FC = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data, isLoading, error} = useGetCommentByIdQuery(id!);

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30vh",
                }}
            >
                <CircularProgress/>
            </Box>
        );
    }

    if (error) {
        return (
            <Container sx={{mt: 4}}>
                <Alert severity="error">Ошибка при загрузке комментария</Alert>
            </Container>
        );
    }

    if (!data) {
        return (
            <Container sx={{mt: 4}}>
                <Alert severity="warning">Комментарий не найден</Alert>
            </Container>
        );
    }

    // Обработка перехода
    const goToAllCommentsByPost = () => {
        navigate(`/?postId=${data.postId}&page=1&limit=10`);
    };

    return (
        <Container maxWidth="md" sx={{mt: 4}}>
            <Typography variant="h4" gutterBottom>
                Комментарий
            </Typography>

            <Stack spacing={2}>
                <Typography>
                    <strong>ID:</strong> {data.id}
                </Typography>
                <Typography>
                    <strong>Post ID:</strong> {data.postId}
                </Typography>
                <Typography>
                    <strong>Name:</strong> {data.name}
                </Typography>
                <Typography>
                    <strong>Body:</strong> {data.body}
                </Typography>

                <Button
                    variant="contained"
                    onClick={goToAllCommentsByPost}
                    sx={{alignSelf: "flex-start"}}
                >
                    Посмотреть все комментарии к посту
                </Button>
            </Stack>
        </Container>
    );
};
