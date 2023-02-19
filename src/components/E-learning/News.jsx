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
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


//api
import { getAllNews } from '../Api/Api'

const News = () => {
    const [allNews, setAllNews] = useState([]);

    const categoryOptions = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },

    ];
    
    const [category, setCategory] = useState(categoryOptions[0].value);
    console.log(category)

    const update = () => {
        getAllNews(category).then((res) => {
            console.log(res.data.articles);
            setAllNews(res.data.articles);
            console.log(allNews);
        });
    }

    useEffect(() => {
        update()
    }, []);

    return (
        <div>
            <Dropdown options={categoryOptions} onChange={(e) => { setCategory(e.value);update(category) }} value={category} placeholder="Select News Type" />
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