import * as React from "react";
import {Typography} from "@mui/material";

export const RenderPrimitive = (value: any): React.ReactNode => {
    if (value === null) {
        return (
            <Typography component="span" sx={{color: "red", fontFamily: "monospace"}}>
                null
            </Typography>
        );
    }

    if (typeof value === "string") {
        return (
            <Typography component="span" sx={{color: "green", fontFamily: "monospace"}}>
                "{value}"
            </Typography>
        );
    }

    if (typeof value === "number") {
        return (
            <Typography component="span" sx={{color: "blue", fontFamily: "monospace"}}>
                {value}
            </Typography>
        );
    }

    return (
        <Typography component="span" sx={{fontFamily: "monospace"}}>
            {JSON.stringify(value)}
        </Typography>
    );
};
