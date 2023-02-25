import axios from "axios";
import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CopyToClipboard from "react-copy-to-clipboard";
import '../../assets/css/Summarize.css'


//components
import Navbar from "../Navbar";

//toast
import { copiedToClipBoard } from "../Toast";


function Summarize() {
    const [percent, setPercent] = useState(10);
    const [data, setdata] = useState("");
    const [ans, setans] = useState("");
    const [show, setShow] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        setdata(e.target.value);
    };


    const submit = (e) => {
        // copiedToClipBoard();
        const dataObj = JSON.stringify({
            language: "english",
            summary_percent: percent,
            text: data,
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
                console.log(response.data);
                setans(response.data.summary);
                // console.log("answer", ans);
            })
            .catch(function (error) {
                console.error(error);
            });

        setShow(true);
        e.preventDefault();
    };


    const onCopy = useCallback(() => {
        setCopied(true);
        copiedToClipBoard();
    }, [])

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="innerContainer">
                    <form className="form">
                        <textarea
                            rows={25}
                            cols={100}
                            value={data}
                            onChange={handleChange}
                            autoFocus
                            placeholder="Enter your text here to summarize"
                        />
                        <div className="slider">
                            <p>Select Percentage to Summarize : </p>
                            <Box sx={{ width: 300 }} className="sliderBox">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={10}
                                    getAriaValueText={(percent) => setPercent(percent)}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={10}
                                    max={90}
                                />
                                <p className="p">{percent}%</p>
                            </Box>
                        </div>
                        
                        <button
                            className="sliderButton"
                            onClick={submit}
                        >
                            Submit
                        </button>
                    </form>
                    {show && ans !== "" ? (
                        <div className="afterSummarize" autoFocus>
                            <div className="insideAfterSummarize">
                                <CopyToClipboard
                                    className="copyButton"
                                    onCopy={onCopy}
                                    text={ans}
                                >
                                    <button>Copy to clipboard</button>
                                </CopyToClipboard>
                                
                            </div>
                            <div className="SummarizedText">
                                {ans}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Summarize;
