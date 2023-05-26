import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {useState, useEffect} from "react";
import useClipboard from "react-use-clipboard";
import Background from "../Resources/Images/background.png";

function Record() {
    let d = new Date();
    let date = d.toDateString();

    const [textToCopy, setTextToCopy] = useState();
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });
    const [transLanguage, setTransLanguage] = useState("");


    function handleSelect(event) {
        setTransLanguage(event.target.value);
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: transLanguage });
        setIsRecording(true);
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setIsRecording(false);
    };

    useEffect(() => {
        let timer;
    
        if (isRecording && elapsedTime < 3600) { 
          timer = setTimeout(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
          }, 1000); 
        }
        return () => {
            clearTimeout(timer);
        };
        }, [isRecording, elapsedTime]);

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        setTextToCopy(transcript); 
      }, [transcript]);

    
    return (
        <div className="record">
            <img src={Background}></img>
            <p className="date">{date}</p>

            <div class="select-lang-div">
                <select className="select-language" value={transLanguage} onChange={handleSelect} name="language">
                    <option value="en-IN">English (India)</option>
                    <option value="hi-IN">Hindi</option>
                    <option value="mr-IN">Marathi</option>
                    <option value="ta-IN">Tamil</option>
                    <option value="gu-IN">Gujarati</option>
                    <option value="bn-IN">Bengali</option>
                    <option value="te-IN">Telugu</option>
                    <option value="kn-IN">Kannada</option>
                </select>
            </div>

            <div class="box" onClick={() => setTextToCopy(transcript)}>
                {transcript}
            </div>

            <button className="clipboard-button" onClick={setCopied}>
                {isCopied ? 'Copied!' : 'Copy to Clipboard'}
            </button>

            <div class="record-buttons">
                <button class="start" onClick={startListening}>Start</button>
                <button class="stop" onClick={stopListening}>Stop</button>
            </div>
        </div>
    )
}

export default Record;