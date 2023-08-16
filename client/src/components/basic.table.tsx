import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FunctionComponent} from "react";

interface BasicTableProps {
    rows: RowData[];
}

interface RowData {
    id: string;
    name: string;
    description: string;
    startDate: number;
    endDate: number;
}
const BasicTable: FunctionComponent<BasicTableProps> = ({ rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Will Start In</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: RowData) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.startDate}</TableCell>
                            <TableCell>{row.startDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;