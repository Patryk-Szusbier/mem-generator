import React, {useState} from "react"
import memesData from "../memesData.js"

export default function Meme() {
    let url;
    const [num, setNum] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    const handleClick = () => {
        setNum(randomNumberInRange(1, 100));
        url = memesData.data.memes[num].url
    };
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
                <p>{url}</p>
            </div>
        </main>
    );
}