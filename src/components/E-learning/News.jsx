import React from 'react'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import '../../assets/css/News.css'
import { Link } from 'react-router-dom';


//api
import { getAllNews } from '../Api/Api'

const News = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        getAllNews().then((res) => {
            console.log(res.data.articles);
            setAllNews(res.data.articles);
            console.log(allNews);
        });
    }, []);
    return (
        <div>
            <div className='NewsContainer'>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        allNews.filter((news) => news.urlToImage != null).map((news) =>
                            <Grid item xs={4} sm={4} md={4} key={news.id} >
                                <Card sx={{ maxWidth: 400 }} className='Maincards'>
                                    <CardActionArea style={{ "height": "560px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={news.urlToImage}
                                            alt="green iguana"
                                        />
                                        <CardContent className='Textcard'>
                                            <Typography gutterBottom variant="h5" component="div" style={{ "textAlign": "start" }}>
                                                {news.title}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div" style={{ "textAlign": "start", "fontSize": "" }}>
                                                Courtesy: {news.source.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" className='card'>
                                                {news.desciption}
                                            </Typography>
                                            {/* <Typography variant="body2" color="text.secondary" className='card'> */}
                                            {/* </Typography> */}
                                        </CardContent>
                                        <CardContent style={{ "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                            <Button size="small" href={news.url} target='blank' className='button'>
                                                Read Full News
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </div >
        </div>
    )
}

export default News