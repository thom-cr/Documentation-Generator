import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

//doc: Ceci est une premiere doc.

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
                {rows.map((row, index) => (
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

//doc: Ceci est une deuxieme doc.

export default TableDetectedFiles;