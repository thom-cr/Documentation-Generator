import React from "react";
import { Button } from "@mui/material";
import DocumentationGenerator from "@/functions/DocumentationGenerator";

const ButtonGenerateDocumentation = ({ formData }) => {
    const handleSubmit = (event) => {
        DocumentationGenerator(formData);
    };

    return (
        <Button onClick={handleSubmit} variant="contained">Générer la documentation</Button>
    )
}

export default ButtonGenerateDocumentation;