import React from 'react';
import { TextField } from '@mui/material';

const TextBoxExtensions = ({ formData, setFormData }) => {
    const handleChange = (event) => {
        setFormData({
            ...formData,
            extensionsName: event.target.value,
        });
    };
    
    return (
        <TextField type="input" onChange={handleChange} value={formData.extensionsName} label="Extensions" variant="outlined" placeholder="js, jsx, ..." fullWidth required/>
    )
}

export default TextBoxExtensions;