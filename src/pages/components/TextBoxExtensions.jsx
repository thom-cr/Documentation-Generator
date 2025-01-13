import React from 'react';
import { TextField } from '@mui/material';

const TextBoxExtensions = ({ formData, setFormData }) => {
    const handleChange = (event) => {
        setFormData({
            ...formData,
            extensions: event.target.value,
        });
    };
    
    return (
        <TextField type="input" onChange={handleChange} value={formData.extensions} label="Extensions" variant="outlined" placeholder="js, jsx, ..." fullWidth required/>
    )
}

export default TextBoxExtensions;