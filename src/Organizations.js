import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Papa from 'papaparse';

export default function Organizations() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        Papa.parse(process.env.PUBLIC_URL +  '/organizations.csv', {
            download: true,
            delimiter: ",",
            header: true,
            complete: function(results) {
                console.log(results);
                setRows(results.data);
            }
        });
    }, []);

    
    
    return (
        <div>
            <h1>Organizations Page</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Organization Name</TableCell>
                        <TableCell>Number of Users</TableCell>
                        <TableCell>Date Created</TableCell>
                        <TableCell>Master Contact</TableCell>
                        <TableCell>Master Address</TableCell>
                        <TableCell>Add / Remove Users</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                        <TableCell>{row["Organization Name"]}</TableCell>
                        <TableCell>{row["Number of Users"]}</TableCell>
                        <TableCell>{row["Date Created"]}</TableCell>
                        <TableCell>{row["Master Contact"]}</TableCell>
                        <TableCell>{row["Master Address"]}</TableCell>
                        <TableCell>{row["Add / Remove Users"]}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
