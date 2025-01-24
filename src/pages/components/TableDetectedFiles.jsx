import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

// Doc: Ceci est une premiere doc, je suis en train de tester au bout de combien de caracteres le fichier part en cacahuete une fois deux fois trois fois quatre fois cinq fois six fois sept fois huit fois neuf fois dix fois onze fois douze fois treize fois quatorze fois quize fois

const TableDetectedFiles = ({ rows }) => {
    return (
        <Paper sx={{ width: '100%', marginTop: '20px', marginLeft: '10px', border: 1 }}>
          <TableContainer sx={{ maxHeight: 380 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ border: 2 }}>
                <TableRow sx={{ width: '100%' }}>
                  <TableCell align="center" sx={{ border: 2, width: '50%' }}>
                  Files
                  </TableCell>
                  <TableCell align="center" sx={{ border: 2, width: '50%'}}>
                    Extensions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" sx={{ border: 1 }}>{row.file}</TableCell>
                    <TableCell align="center" sx={{ border: 1 }}>{row.extension}</TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      );
}

//Doc: Ceci est une deuxieme doc
//Doc: Ceci est une troisieme docù

export default TableDetectedFiles;