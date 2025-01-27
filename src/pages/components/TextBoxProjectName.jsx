import React from 'react';
import { TextField } from '@mui/material';

const TextBoxProjectName = ({ formData, setFormData }) => {
    const handleChange = (event) => {
        setFormData({
            ...formData,
            projectName: event.target.value,
        });
    };

    return (
        <TextField type="input" onChange={handleChange} value={formData?.projectName} label="Nom du projet" variant="outlined" fullWidth required/>
    )
}
//Doc: Commentaire de text box project name 1
//Doc: Commentaire de text box project name 2
//Doc: Commentaire de text box project name 3
//Doc: Commentaire de text box project name 1
//Doc: Commentaire de text box project name 2
//Doc: Commentaire de text box project name 3
//Doc: Commentaire de text box project name 1
//Doc: Commentaire de text box project name 2
//Doc: Commentaire de text box project name 3

export default TextBoxProjectName;