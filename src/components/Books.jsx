import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../assets/css/Books.css'
import { getAllBooks } from './Axios';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

export default function Books() {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        getAllBooks().then((res) => {
            console.log(res.data.books);
            setLibrary(res.data.books);
        });
    }, []);
    return (
        <div className='bookContainer'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                    library.map((book) =>
                    <Grid item xs={4} sm={4} md={4} key={book.id} >
                    <Card sx={{ maxWidth: 345 }} className='cards' key={book._id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={book.image}
                                alt="green iguana"
                            />
                            <CardContent className='card'>
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.bookName}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {book.authorName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='card'>
                                    {book.bookDescription}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions background="transparent">
                            <Button size="small" color="primary" className='cards'>
                                Read Book
                            </Button>
                        </CardActions>
                            </Card>
                            </Grid>
                )
                }
                </Grid>
        </div>
    );
}
