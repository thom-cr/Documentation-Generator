import React from "react";
import { Button } from "@mui/material";
import DocumentationGenerator from "@/functions/DocumentationGenerator";

const ButtonGenerateDocumentation = ({ formData, rows }) => {
    const handleSubmit = (event) => {
        DocumentationGenerator(formData, rows);
    };

    return (
        <Button onClick={handleSubmit} variant="contained">Générer la documentation</Button>
    )
}

export default ButtonGenerateDocumentation;