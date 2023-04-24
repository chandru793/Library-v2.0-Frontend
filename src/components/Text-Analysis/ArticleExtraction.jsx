import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { articleExtraction } from '../Api/Api';
import '../../assets/css/ArticleExtraction.css'

//components
import Navbar from '../Navbar';

const ArticleExtraction = () => {
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [text, setText] = useState("");
    const [show, setShow] = useState(true);

    const summarize = () => {
        const dataObj = JSON.stringify({
            language: "english",
            summary_percent: 10,
            text: text,
        });
        console.log(dataObj);
        const options = {
            method: "POST",
            url: "https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1",
            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key": "ab98824deemsh78644ac08a32df7p1f78eajsnc05f5a9483e0",
                "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com",
            },
            data: dataObj,
        };

        axios
            .request(options)
            .then(function (response) {
                // console.log(response.data);
                setSummary(response.data.summary);
                // console.log("summary", summary);
            })
            .catch(function (error) {
                console.error(error);
            });

    }

    const update = () => {
        articleExtraction(data).then((res) => {
            // console.log(res.data);
            setTitle(res.data.title)
            // console.error("title",title)
            setText(res.data.text)
            // console.error("text",text)
            summarize();
        });
    }

    useEffect(() => {
        update();
    }, []);

    return (
        <>
            <Navbar />
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
                    <button className='button1' onClick={() => update(data)}>Submit</button>
                </div>
                {show && title !== "" && summary !== "" && text !== ""? (
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