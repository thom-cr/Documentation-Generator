import React from 'react';
import { Button } from '@mui/material';
import FolderSelector from '@/functions/FolderSelector.js';
import FilesArray from '@/functions/FilesArray.js';

const ButtonFolderSelector= ({ setRows, formData, setFormData }) => {
    const handleClick = async () => {
        const files = await FolderSelector();
        const filesArray = FilesArray(files);
        if (files.length > 0) {
            setRows(filesArray);
            return files;
        }
    }
    
    return (
        <Button type="input" variant="contained" value={formData.files} onClick={handleClick}>Sélection du dossier</Button>
    )
}

export default ButtonFolderSelector;