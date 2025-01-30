import React from "react";
import {
    Box,
    Button,
    TextField,
    Grid
} from "@mui/material";

interface FiltersProps {
    filters: { postId: string; email: string; name: string; body: string };
    onFilterChange: (field: keyof FiltersProps["filters"], value: string) => void;
    applyFilters: () => void;
    resetFilters: () => void;
}

export const CommentsFilters: React.FC<FiltersProps> = ({
                                                            filters,
                                                            onFilterChange,
                                                            applyFilters,
                                                            resetFilters
                                                        }) => {
    return (
        <Box sx={{mb: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Post ID"
                        value={filters.postId}
                        onChange={(e) => onFilterChange("postId", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Email"
                        value={filters.email}
                        onChange={(e) => onFilterChange("email", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={filters.name}
                        onChange={(e) => onFilterChange("name", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Body"
                        value={filters.body}
                        onChange={(e) => onFilterChange("body", e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{display: "flex", gap: 2, justifyContent: "flex-end"}}>
                        <Button variant="contained" color="primary" onClick={applyFilters}>
                            Применить
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={resetFilters}>
                            Сбросить
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
