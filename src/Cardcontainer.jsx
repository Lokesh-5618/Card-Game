import Card from "./Card"
import "./Cardcontainer.css"
import { useState } from "react"
export default function Cardcontainer({ handleclick, cardlist }) {

    return (
        <>
            <div className="container">
                {cardlist.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        handleclick={handleclick}
                    />
                ))}
            </div>


        </>
    )
}