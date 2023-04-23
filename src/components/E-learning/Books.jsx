import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { getAllBooks, googlebooks } from '../Api/Api';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import '../../assets/css/Books.css'

//components
import Navbar from '../Navbar';

export default function Books() {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        // getAllBooks().then((res) => {
            // console.log(res.data.books);
            // setLibrary(res.data.books);
        // });
        googlebooks().then((res) => {
            console.log(res.data);
            console.log(res.data.items[0].volumeInfo.title);
            setLibrary(res.data.items);
        });
    }, []);
    return (
        <>
            <Navbar />
            <div className='bookContainer'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        library.map((book) =>
                            <Grid item xs={4} sm={4} md={4} key={book.id} >
                                <Card sx={{ maxWidth: 400 }} className='cards' key={book.accessInfo.id}>
                                    <CardActionArea style={{ "height": "500px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            alt="green iguana"
                                        />
                                        <CardContent className='card'>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {book.volumeInfo.title}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                ~ {book.volumeInfo.authors}
                                            </Typography>
                                            {/* <Typography variant="body2" color="text.secondary" className='card'>
                                                {book.bookDescription}
                                            </Typography> */}
                                        </CardContent>
                                        <CardContent style={{ "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                            <Button
                                                size="small"
                                                className='button'
                                                onClick={() => { window.open(book.volumeInfo.previewLink, '_blank') }}>
                                                Read Book
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </div >
        </>
    );
}
