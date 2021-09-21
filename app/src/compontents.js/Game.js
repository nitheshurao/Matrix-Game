import React, { useState } from 'react'
import './Game.css'
import data from './data'
const Game = () => {
    const [chosen, setChosen] = useState([1])
    const [active, setActive] = useState("blue")
    const [count, setCount] = useState(0);
    const [colr, setColr] = useState([])
    const [mtx, setMtx] = useState(
        data
    )
    console.log(data)

    // for (var i = 0; i < 16; i++) {
    //     mtx.push(i);
    // }
    const chooseOdd = (e) => {
        (e.target.style.backgroundColor === "gray") ? setActive("yellow") : setActive("gray")

    }


    const handleOptionChange = (p, option) => {


        p[option] = !p[option];
        setColr([p])


        setCount(prevCount => prevCount + 1)

        console.log(colr)
        setMtx([...mtx]);
    };

    return (
        <div className="grid">
            {mtx.map(p => (
                <div >

                    <div className="grid-item">
                        <button onClick={() => handleOptionChange(p, 'is1Selected')} style={{ backgroundColor: p.is1Selected ? 'red' : 'Blue' }} >
                            {p.is1Selected ? `BOX ${count}` : ''}
                        </button>





                    </div>
                </div>
            ))}
        </div>
    )
}

export default Game
