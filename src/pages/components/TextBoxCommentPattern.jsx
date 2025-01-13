import React from 'react';
import { TextField } from '@mui/material';

const TextBoxCommentPattern = ({ formData, setFormData }) => {
    const handleChange = (event) => {
        setFormData({
            ...formData,
            commentPattern: event.target.value,
        });
    };
    
    return (
        <TextField type="input" onChange={handleChange} value={formData.commentPattern} label="Pattern des commentaires" variant="outlined" placeholder="ex: //doc: " fullWidth required/>
    )
}

export default TextBoxCommentPattern;