import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ViewMode } from "../model/types.ts";

interface ToggleProps {
    viewMode: ViewMode;
    onChange: (mode: ViewMode) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ viewMode, onChange }) => {
    const handleChange = (_: React.MouseEvent<HTMLElement>, newMode: ViewMode) => {
        if (newMode) {
            onChange(newMode);
        }
    };

    return (
        <ToggleButtonGroup value={viewMode} exclusive onChange={handleChange}>
            <ToggleButton value="table">Таблица</ToggleButton>
            <ToggleButton value="json">JSON</ToggleButton>
        </ToggleButtonGroup>
    );
};