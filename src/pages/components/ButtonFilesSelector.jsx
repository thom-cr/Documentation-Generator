import React from 'react';
import { Button } from '@mui/material';
import FilesSelector from '@/functions/FilesSelector.js';
import FilesArray from '@/functions/FilesArray.js';

const ButtonFilesSelector = ({ setRows, formData, setFormData }) => {
    const handleClick = async () => {
        const files = await FilesSelector();
        const filesArray = FilesArray(files);
        setFormData((prevFormData) => ({
            ...prevFormData,
            files: files,
        }));
        if (files.length > 0) {
            setRows(filesArray);
        }
    }
    
    return (
        <Button type="input" variant="contained" value={formData.files} onClick={handleClick}>Sélection des fichiers</Button>
    )
}

export default ButtonFilesSelector;