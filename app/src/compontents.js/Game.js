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
    // console.log(data)

    // for (var i = 0; i < 16; i++) {
    //     mtx.push(i);
    // }
    const chooseOdd = (e) => {
        (e.target.style.backgroundColor === "gray") ? setActive("yellow") : setActive("gray")

    }

    // const onRemoveP = () => {
    //     setColr(prevState => { // pass callback in setState to avoid race condition
    //         let newData = prevState.data.slice() //copy array from prevState
    //         newData.splice(4, 1) // remove element
    //         return { data: newData } // update state
    //     })
    // }
    const handleOptionChange = (p, option) => {

        console.log(data)
        p[option] = !p[option];
        if (p.color == 'blue') {
            p.color = 'red'

        }
        setColr([...colr, p])
        if (colr.length > 3) {
            // handleOptionChangess(, 'is1Selected')

            // {names.filter(name => name.includes('J')).map(filteredName => (
            //     <li>
            //       {filteredName}
            //     </li>
            //   ))}


            console.log(p.color)

        }
        // console.log(colr)


        setCount(prevCount => prevCount + 1)

        console.log(p.count = count)

    };
    // const handleOptionChange = (p, option) => {

    //     console.log(data)
    //     p[option] = !p[option];
    //     if (p.color == 'blue') {
    //         p.color = 'red'

    //     }
    //     setColr([...colr, p])
    //     if (colr.length > 3) {
    //         // handleOptionChangess(, 'is1Selected')
    //         console.log(p.color)

    //     }
    //     // console.log(colr)


    //     setCount(prevCount => prevCount + 1)

    //     console.log(p.count = count)

    // };


    return (
        <div className="grid">
            {mtx.map(p => (
                <div >

                    <div className="grid-item">
                        {/* <button onClick={() => handleOptionChange(p, 'is1Selected')} style={{ backgroundColor: p.is1Selected ? 'red' : 'Blue' }} >
                            {p.is1Selected ? `BOX# ${p.count}` : ''}
                        </button> */}

                        <button onClick={() => handleOptionChange(p, 'is1Selected')} style={{ backgroundColor: p.color }} >
                            {p.is1Selected ? `BOX# ${p.count}` : ''}
                        </button>

                        {/* style={{ color: textColor }} */}



                    </div>
                </div>
            ))}
        </div>
    )
}

export default Game
