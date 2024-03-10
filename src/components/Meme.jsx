import React, {useState} from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    const [memeURL,getMemeURL] = useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        getMemeURL(memesArray[randomNumber].url)  
        
    }
    return(
        <main>
            <div className="meme--form">

                <div>
                    <label>Top Text
                        <input 
                        type="text" 
                        placeholder="Shut up"
                        className="meme--input"
                        />
                    </label>
                </div>

                <div>
                    <label>Bottom Text
                        <input 
                        type="text" 
                        placeholder="and take my money"
                        className="meme--input"
                        />
                    </label>
                </div>

                <button 
                className="meme--button" onClick={handleClick}>
                    Get a new meme image 🖼
                </button>
                <img src={memeURL} className="meme--Image"/>
            </div>
        </main>
    );
}