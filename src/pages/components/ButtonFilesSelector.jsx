import React from 'react';
import { Button } from '@mui/material';
import FilesSelector from '@/functions/FilesSelector.js';
import FilesArray from '@/functions/FilesArray.js';
import FilesArraySelection from '@/functions/FilesArraySelection';

const ButtonFilesSelector = ({ setRows, formData, setFormData }) => {
    const handleClick = async () => {
        const { extensionsName } = formData;
        const files = await FilesSelector();

        setFormData((prevFormData) => ({
            ...prevFormData,
            files: files,
        }));

        if (extensionsName === "") {
            const filesArray = FilesArraySelection(files);

            setRows(filesArray);
        } else {
            const filesArray = FilesArray(files, extensionsName);
            
            setRows([filesArray]);
        }
        
        return files;
    }
    
    return (
        <Button type="input" variant="contained" value={formData?.files} onClick={handleClick}>Sélection des fichiers</Button>
    )
}

export default ButtonFilesSelector;