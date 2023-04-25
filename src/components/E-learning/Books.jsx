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
    const [search, setSearch] = useState('');
    const [search2, setSearch2] = useState('');

    const update = () => {
        googlebooks(search).then((res) => {
            console.log(res.data.items);
            setLibrary(res.data.items);
            console.log(library);
        });
    }

    const handleKeyEvents = (e) => {
        if (e.key === 'Enter') {
            setSearch2(search)
            update(search2)
        }
    }

    // useEffect(() => {
        // getAllBooks().then((res) => {
        // console.log(res.data.books);
        // setLibrary(res.data.books);
        // });
        // googlebooks(search).then((res) => {
        //     console.log(res.data);
        //     console.log(res.data.items[0].volumeInfo.title);
        //     setLibrary(res.data.items);
        // });
    //     update();
    // }, []);
    return (
        <>
            <Navbar />
            <div className='bookContainer'>
                <div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className='svg' height="35" fill='white' viewBox="0 96 960 960" width="35"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/></svg> */}
                    <input
                        type='text'
                        className='searchbar'
                        placeholder='Enter book name'
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); }}
                        onKeyDown={handleKeyEvents}
                        autoFocus
                    />
                    <button className='svg' onClick={() => { setSearch2(search); update(search2)}} >Search</button>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='cardgrid'>
                    {
                        library.map((book) =>
                            <Grid item xs={3} sm={3} md={3} key={book.id}>
                                <Card sx={{ maxWidth: 300 }} className='cards' key={book.accessInfo.id}>
                                    <CardActionArea style={{ "height": "500px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            alt="green iguana"
                                        />
                                        <CardContent className='card'>
                                            <Typography gutterBottom variant="h6" component="div" className='title'>
                                                {book.volumeInfo.title}
                                            </Typography>
                                            <Typography gutterBottom variant="p" component="div" className='author'>
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
