import React from 'react';
import { TextField } from '@mui/material';
import FilesArray from '@/functions/FilesArray';

const TextBoxExtensions = ({ setRows, formData, setFormData }) => {
    const handleChange = async (event) => {
        const { files } = formData;
        

        setFormData((prevFormData) => ({
            ...prevFormData,
            extensionsName: event.target.value,
        }));

        const filesArray = await FilesArray(files, event.target.value);
        
        setRows(filesArray);
    };

    /*doc: 
    ceci est une autre doc
    entre la 3eme et la 4eme
    */
    
    return (
        <TextField type="input" onChange={handleChange} value={formData.extensionsName} label="Extensions" variant="outlined" placeholder="js, jsx, ..." fullWidth/>
    )
}

export default TextBoxExtensions;