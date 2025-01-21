import React from 'react';
import { Checkbox, Typography, FormControlLabel, Box } from '@mui/material';

const CheckBoxOutputFormat = ({ formData, setFormData }) => {
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData({
            ...formData,
            formats: {
                ...formData.formats,
                [name]: checked,
            },
        });
    };
    
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ paddingTop: '8px', paddingRight: '40px', paddingLeft: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        Format de sortie :
                    </Typography>
                </Box>
                <FormControlLabel control={<Checkbox sx={{ border: '10px', borderColor: 'white' }} checked={formData.formats?.pdf || false} onChange={handleCheckboxChange} name='pdf'/>} label="PDF" />
                <FormControlLabel control={<Checkbox checked={formData.formats?.markdown || false} onChange={handleCheckboxChange} name='markdown'/>} label="MarkDown" />
            </Box>
        </>
    )
}

export default CheckBoxOutputFormat;