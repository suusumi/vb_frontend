import * as React from "react";
import {Box, Typography} from "@mui/material";

interface RenderJsonProps {
    data: any;
    level?: number;
}

export const RenderJson: React.FC<RenderJsonProps> = ({data, level = 0}) => {
    if (typeof data !== "object" || data === null) {
        return (
            <Typography component="span" sx={{fontFamily: "monospace", fontSize: "14px", color: "#333"}}>
                {JSON.stringify(data)}
            </Typography>
        );
    }

    return (
        <Box sx={{paddingLeft: `${level * 12}px`, borderLeft: "2px solid #ddd", marginTop: 1}}>
            {Array.isArray(data)
                ? data.map((item, index) => (
                    <Box key={index} sx={{marginBottom: 1}}>
                        <Typography variant="body2" sx={{fontWeight: "bold", color: "#007acc"}}>
                            [{index}]
                        </Typography>
                        <RenderJson data={item} level={level + 1}/>
                    </Box>
                ))
                : Object.entries(data).map(([key, value]) => (
                    <Box key={key} sx={{marginBottom: 1}}>
                        <Typography variant="body2" sx={{fontWeight: "bold", color: "#007acc"}}>
                            {key}:
                        </Typography>
                        <RenderJson data={value} level={level + 1}/>
                    </Box>
                ))}
        </Box>
    );
};
