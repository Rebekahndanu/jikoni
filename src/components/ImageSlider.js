import React, {useState} from "react"


function ImageSlider({images}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    return(
        <div>
            <div className="slider"
            style={{backgroundImage: `url(${images[currentIndex]})`}}
            >

            </div>
        </div>
    )
}

export default ImageSlider;