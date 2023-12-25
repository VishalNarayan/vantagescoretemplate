import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Papa from 'papaparse';

export default function Applications() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        Papa.parse(process.env.PUBLIC_URL +  '/applications.csv', {
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
            <h1>Applications Page</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Organization Name</TableCell>
                        <TableCell>User Email</TableCell>
                        <TableCell>Application Name</TableCell>
                        <TableCell>Custom Scopes</TableCell>
                        <TableCell>Client ID</TableCell>
                        <TableCell>Client Secret</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                        <TableCell>{row["Organization Name"]}</TableCell>
                        <TableCell>{row["User Email"]}</TableCell>
                        <TableCell>{row["Application Name"]}</TableCell>
                        <TableCell>{row["Custom Scopes"]}</TableCell>
                        <TableCell>{row["Client ID"]}</TableCell>
                        <TableCell>{row["Client Secret"]}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
