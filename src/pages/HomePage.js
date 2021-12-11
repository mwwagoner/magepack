import React from "react";
import pixelBackpack from "../images/pixel-art-backpack.png";

const HomePage = () => {
    return (
        <>
            <h1>Mage Pack</h1>
            <p>It's dangerous to go without it</p>
            <img src={pixelBackpack} alt="A pixel-art brown backpack"></img>
        </>
    )
}

export default HomePage;