import Head from "next/head";
import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import ButtonFolderSelector from "./components/ButtonFolderSelector.jsx";
import ButtonFilesSelector from "./components/ButtonFilesSelector.jsx";
import TextBoxProjectName from "./components/TextBoxProjectName.jsx";
import TextBoxExtensions from "./components/TextBoxExtensions.jsx";
import CheckBoxOutputFormat from "./components/CheckBoxOutputFormat.jsx";
import ButtonGenerateDocumentation from "./components/ButtonGenerateDocumentation.jsx";
import TableDetectedFiles from "./components/TableDetectedFiles.jsx";

const MainFrame = () => {
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    projectName: '',
    extensionsName: '',
    files: [],
    formats: {
      pdf: false,
      markdown: false,
    },
  });

  return (
    <>
      <Head>
        <title>Générateur de documentation</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h2" gutterBottom>
              Générateur de documentation
            </Typography>
            <Typography variant="body1" gutterBottom>
              Outil permettant la génération automatique de documentation en fonction des commentaires et des liens entre les différentes méthodes
            </Typography>
          </Box>
          <Box sx={{  display: 'flex', flexDirection: 'row', width: '100%', maxWidth: '820px' }}>
            <Box component="form" sx={{  display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '410px', marginTop: '20px', marginRight: '10px' }}>
              <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <ButtonFolderSelector setRows={setRows} formData={formData} setFormData={setFormData}/>
                <ButtonFilesSelector setRows={setRows} formData={formData} setFormData={setFormData}/>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
                <TextBoxProjectName formData={formData} setFormData={setFormData} disabled='false'/>
                <TextBoxExtensions setRows={setRows} formData={formData} setFormData={setFormData}/>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px', marginBottom: '16px' }}>
                <CheckBoxOutputFormat formData={formData} setFormData={setFormData}/>
              </Box>

              <ButtonGenerateDocumentation formData={formData} rows={rows}/>

            </Box>

            <TableDetectedFiles rows={rows}/>

          </Box>
        </Box>
    </>
  );
}

export default MainFrame;