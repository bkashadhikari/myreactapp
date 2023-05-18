import React, {useState} from 'react'

export default function TextForm(prop) {
    const handleUpperCase = ()=>{
        
        setText(text.toUpperCase())
    }

    const handleLowerCase = ()=>{
        setText(text.toLowerCase())

    }
      const handleClear = ()=>{
        setText('')

    }

    const handleSpeak = ()=>{
        let voice = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(voice)
        const speak = document.getElementById('speak')
        if(speak.innerHTML === 'Speak'){
            speak.innerHTML = 'Stop'
        }
        else if(speak.innerHTML=='Speak'){
            window.speechSynthesis.cancel()
        }
        else{
            speak.innerHTML = 'Speak'

        }
    }
    const handleOnChange = (e)=>{
        let newText = e.target.value
        setText(newText)
    }
    const [text, setText] = useState('Enter the text')
    return (
        <div className='container'>
            <div className="mb-3 text-center">
                <label htmlFor="exampleFormControlTextarea1" className="form-label my-4 text-black"><h1>{prop.yourself}</h1></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary upper" onClick={handleUpperCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 lower" onClick={handleLowerCase}>Convert to Lowercase</button>
            <button className="btn btn-primary clear" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-2" id="speak"onClick={handleSpeak}>Speak</button>


        </div>
    )
}
