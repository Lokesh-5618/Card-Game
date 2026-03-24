import { useState } from "react";
import "./Card.css"
export default function Card({ id, image, handleclick }) {

    return (
        <>
            <div onClick={() => handleclick(id)} className="indcont">
                <img src={image} />
            </div>

        </>
    )
}
function upscore() {
    console.log("Clicked")
}