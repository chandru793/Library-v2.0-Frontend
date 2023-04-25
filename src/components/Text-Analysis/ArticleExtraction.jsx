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
    const [points, setPoints] = useState([]);

    const update = () => {
        articleExtraction(data).then((res) => {
            // console.log("data of extraction: ",res.data);
            setTitle(res.data.title)
            // console.log("title",title)
            setText(res.data.text)
            // console.log("text",text)
            summarize();
            // console.log("Points");
            // setPoints(summary.toString().split('. '));
            // console.log("Points", points);
            // settingPoints();
        });
    }

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
                console.log("summary", summary);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // const settingPoints = () => {
    //     var temp = summary.toString();
    //     console.log("temp: ", temp)
    //     var temp2 = [temp.split('.')];
    //     console.log("temp2: ", temp2)
    //     setPoints(temp2.split());
    //     console.log("Points", points);
    // }

    // useEffect(() => {
    //     update();
        // settingPoints();
    // }, []);

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
                {show && title !== "" && summary !== "" && text !== "" && points !== "" ? (
                    <div className='result'>
                        <h1 className='h1'>{title}</h1>
                        <h3>Summary</h3>
                        <p>{summary}</p>
                        {/* <ul>
                            {points.map((list) =>
                                <li>{list}</li>
                            )}
                        </ul> */}
                        <h3>Brief News</h3>
                        <p>{text}</p>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default ArticleExtraction
