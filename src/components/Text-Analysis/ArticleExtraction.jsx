import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../../assets/css/ArticleExtraction.css'

//components
import Navbar from '../Navbar';

const ArticleExtraction = () => {
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [text, setText] = useState("");
    const [show, setShow] = useState(true);

    const Submit = (e) => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("language", "english");
        encodedParams.append("url", data);

        const options = {
            method: 'POST',
            url: 'https://text-analysis12.p.rapidapi.com/article-extraction/api/v1.3',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'ab98824deemsh78644ac08a32df7p1f78eajsnc05f5a9483e0',
                'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
            },
            data: encodedParams
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setTitle(response.data.article.title)
            setSummary(response.data.article.summary)
            setText(response.data.article.text)
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <>
            <Navbar/>
            <div className='outerContainer'>
                <div className='field'>
                    <input
                        type="text"
                        autoFocus
                        value={data}
                        className='input'
                        placeholder='Enter url to extract article'
                        onChange={(e) => setData(e.target.value)}
                    />
                    <button className='button1' onClick={Submit}>Submit</button>
                </div>
                {show && title !== "" && summary !== "" && text !== "" ? (
                    <div className='result'>
                        <h1 className='h1'>{title}</h1>
                        <h3>Summary</h3>
                        <p>{summary}</p>
                        <h3>Brief News</h3>
                        <p>{text}</p>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default ArticleExtraction