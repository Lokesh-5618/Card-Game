


import { useEffect, useState } from 'react'
import './App.css'
import Cardcontainer from './Cardcontainer'
import Currentscore from './Currentscore'
import Highscore from './Highscore'

function App() {

    const [currentscore, setCurrentscore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    const [cardlist, setCardlist] = useState([])
    const [clickedids, setClickedids] = useState([]);

    useEffect(() => {

        async function fetchPokemon() {
            let temp = [];
            for (let i = 1; i <= 25; i++) {
                let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
                let data = await response.json();
                temp.push({
                    id: data.id,
                    image: data.sprites.front_default
                });
            }
            setCardlist(temp);
        }

        fetchPokemon();
    }, []);

    useEffect(() => { console.log(clickedids) }, [clickedids])

    function handleclickedids(clickedidscopy) {
        setClickedids(clickedidscopy)
    }

    function handlehighscore(currentscore) {
        if (currentscore > highscore) {
            setHighscore(currentscore)
        }
    }

    function updateclickedid(clickedcardid) {
        let clickedidscopy = [...clickedids];

        if (clickedidscopy.includes(clickedcardid)) {
            clickedidscopy.length = 0;
            setCurrentscore(0);
        }
        else {
            clickedidscopy.push(clickedcardid);
            let newscore = currentscore + 1;
            setCurrentscore(newscore);
            handlehighscore(newscore);
        }

        handleclickedids(clickedidscopy);
    }

    function handleclick(id) {
        const clickedcardid = id;
        updateclickedid(clickedcardid);
        shuffler();
    }

    function shuffler() {
        let copy = [...cardlist]
        copy = copy.sort(() => Math.random() - 0.5)
        setCardlist(copy)
    }

    return (
        <>
            <div className='mcont'>
                <div className='heading'>
                    Memory Champion: Pokémon Edition <br /> Test your Memory!
                </div>

                <div className='scoreboard'>
                    <div className='cs'>
                        <Currentscore currentscore={currentscore} />
                    </div>
                    <div className='hs'>
                        <Highscore highscore={highscore} />
                    </div>
                </div>

                <Cardcontainer handleclick={handleclick} cardlist={cardlist} />
            </div>
        </>
    )
}

export default App

