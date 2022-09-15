import {DataTable, TableContainer, Table, TableBody, TableHeader, TableHead, TableRow, TableCell} from '@carbon/react';



export function View({title, ...props}) {
  return (
        <DataTable 
            // rows={props'rows} headers={props.headers} 
            {...props}
            >
            {({ rows, headers, getHeaderProps, getTableProps }) => (
                <TableContainer title={title}>
                <Table {...getTableProps()}>
                    <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                        </TableHeader>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.cells.map((cell) => (
                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            )}
        </DataTable>
  )
}
