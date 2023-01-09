import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from '@mui/material';

const Tables = ({ books, setBooks, filteredBooks }) => {
    const filtered = filteredBooks;
    console.log("filtered",filteredBooks);

    // if(filteredBooks.length === 0) return <h1>No books found</h1>
  return (
      <div>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell styles={{}}>Book Name</TableCell>
                            <TableCell>Author Name</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {filtered.map((book) => (
                          <TableRow key={book.id}>
                              <TableCell>{book.bookName}</TableCell>
                              <TableCell>{book.authorName}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Tables