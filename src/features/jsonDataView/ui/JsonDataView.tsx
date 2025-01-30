import React from "react";
import {Box} from "@mui/material";
import {RenderJson} from "../../../shared/ui/RenderJson.tsx";

interface JsonDataViewProps {
    data: Record<string, any>;
}

export const JsonDataView: React.FC<JsonDataViewProps> = ({data}) => {
    return (
        <Box
            sx={{
                marginTop: '20px',
                padding: "1.5em",
                borderRadius: "0.8em",
                overflow: "auto",
                maxHeight: "70vh",
                backgroundColor: "#fff",
                border: "2px solid #ddd",
            }}
        >
            <RenderJson data={data}/>
        </Box>
    );
};
