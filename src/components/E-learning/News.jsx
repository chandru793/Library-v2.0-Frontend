import React from 'react'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import '../../assets/css/News.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


//api
import { getAllNews } from '../Api/Api'

//components
import Navbar from '../Navbar'

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

    const countryOptions = [
        { value: 'au', label: 'Australia' },
        { value: 'ca', label: 'Canada' },
        { value: 'cn', label: 'China' },
        { value: 'fr', label: 'France' },
        { value: 'gr', label: 'Gremany' },
        { value: 'in', label: 'India' },
        { value: 'it', label: 'Italy' },
        { value: 'jp', label: 'Japan' },
        { value: 'my', label: 'Malaysia' },
        { value: 'nz', label: 'New Zealand' },
        { value: 'ru', label: 'Russia' },
        { value: 'sa', label: 'Saudi Arabia' },
        { value: 'sg', label: 'Singapore' },
        { value: 'za', label: 'South Africa' },
        { value: 'ae', label: 'UAE' },
        { value: 'ua', label: 'Ukraine' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'us', label: 'United States' },
    ]

    const [country, setCountry] = useState(countryOptions[5].value)
    console.log(country);

    const update = () => {
        getAllNews(category, country).then((res) => {
            console.log(res.data.articles);
            setAllNews(res.data.articles);
            console.log(allNews);
        });
    }

    useEffect(() => {
        update()
    }, []);

    return (
        <>
            <Navbar/>
            <div>
                <div className='filter'>
                    <Dropdown options={countryOptions} onChange={(e) => { setCountry(e.value); update(category, country) }} value={country} placeholder="Select Country" />
                    <Dropdown options={categoryOptions} onChange={(e) => { setCategory(e.value); update(category, country) }} value={category} placeholder="Select News Type" />
                </div>
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
        </>
    )
}

export default News