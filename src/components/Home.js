import React from "react";

function Home ({images}) {
    return (
        <>
            <div>
                <img src={images[0]} alt="left"></img>
                <img src={images[1]} alt="centre"></img>
                <img src={images[2]} alt="right"></img>
            </div>
            <div>
                <img src={images[3]} alt="Meal of The Week"></img>
                <h2>Featured Recipe of The Week</h2>
                <h4>Get Recipe</h4>
            </div>
            <div>
                <h2>Welcome to JIKONI Where Flavor Meets Inspiration!</h2>
                <img src={images[4]} alt="Nyama Choma"></img>
            </div>
        </>
    )
}

export default Home;