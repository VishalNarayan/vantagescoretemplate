import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Papa from 'papaparse';

export default function Users() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        Papa.parse(process.env.PUBLIC_URL +  '/users.csv', {
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
            <h1>Users Page</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Organization Name</TableCell>
                        <TableCell>Organization Level</TableCell>
                        <TableCell>User ID</TableCell>
                        <TableCell>User Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Remove</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                        <TableCell>{row["Organization Name"]}</TableCell>
                        <TableCell>{row["Organization Level"]}</TableCell>
                        <TableCell>{row["User ID"]}</TableCell>
                        <TableCell>{row["User Email"]}</TableCell>
                        <TableCell>{row["Phone Number"]}</TableCell>
                        <TableCell>{row["Remove"]}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
