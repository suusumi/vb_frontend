import * as React from "react";
import {Box, Typography, IconButton} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {RenderPrimitive} from "./RenderPrimitive.tsx";

interface RenderJsonProps {
    data: any;
    level?: number;
}

export const RenderJson: React.FC<RenderJsonProps> = ({data, level = 0}) => {
    const [expanded, setExpanded] = React.useState(true);
    const isArray = Array.isArray(data);

    if (typeof data !== "object" || data === null) {
        return RenderPrimitive(data);
    }

    const entries = isArray ? data : Object.entries(data);

    return (
        <Box sx={{paddingLeft: `${level * 12}px`, marginTop: 1}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <IconButton
                    size="small"
                    onClick={() => setExpanded(!expanded)}
                    sx={{padding: 0, marginRight: "4px"}}
                >
                    {expanded ? <ExpandLess fontSize="small"/> : <ExpandMore fontSize="small"/>}
                </IconButton>
                <Typography
                    component="span"
                    sx={{fontFamily: "monospace", fontSize: "14px", color: "#333"}}
                >
                    {isArray ? "[" : "{"}
                </Typography>
            </Box>

            {expanded && (
                <Box sx={{paddingLeft: "16px", borderLeft: "2px solid #ddd"}}>
                    {isArray
                        ? (entries as any[]).map((item, index) => (
                            <Box key={index} sx={{marginBottom: 1}}>
                                <RenderJson data={item} level={level + 1}/>
                            </Box>
                        ))
                        : (entries as [string, any][]).map(([key, value]) => (
                            <Box key={key} sx={{marginBottom: 1, display: "flex"}}>
                                <Typography
                                    variant="body2"
                                    sx={{color: "#a31515", fontFamily: "monospace", marginRight: "4px"}}
                                >
                                    "{key}"
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{fontFamily: "monospace", marginRight: "4px"}}
                                >
                                    :
                                </Typography>
                                <RenderJson data={value} level={level + 1}/>
                            </Box>
                        ))}
                </Box>
            )}

            <Typography
                component="span"
                sx={{
                    fontFamily: "monospace",
                    fontSize: "14px",
                    color: "#333",
                    display: "block",
                    marginLeft: "24px",
                }}
            >
                {isArray ? "]" : "}"}
            </Typography>
        </Box>
    );
};
