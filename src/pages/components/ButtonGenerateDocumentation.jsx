import React from "react";
import { Button } from "@mui/material";
import DocumentationGenerator from "@/functions/DocumentationGenerator";

const ButtonGenerateDocumentation = ({ formData, rows }) => {
    const handleSubmit = (event) => {
        DocumentationGenerator(formData, rows);
    };

    const isDisabled = !formData.projectName.trim() || formData.files.length === 0 || !formData.formats.pdf && !formData.formats.markdown;

    return (
        <Button onClick={handleSubmit} disabled={isDisabled} variant="contained">Générer la documentation</Button>
    )
}

export default ButtonGenerateDocumentation;