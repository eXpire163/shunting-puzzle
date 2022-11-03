import React from 'react';
import { AiFillSetting, AiFillStar, AiFillPlayCircle } from "react-icons/ai";


const StockItem = ({
    stockID,
    imageURL,
    name,
    ontrack,
    favorite
}) => {

    return (
        <div className="w3-col m4 l3 w3-padding-16 ">
            <div className="w3-card-4 w3-theme-light">
                <div className='w3-container'>
                    <h3>{name}</h3>
                </div>
                <img src={imageURL} alt="Alps" style={{ width: "100%" }} />
                <div className="w3-container ">
                    <p>
                        <big>
                            {favorite && (<label > <AiFillStar /> </label>)}
                            {ontrack && (<label> <AiFillPlayCircle /> </label>)}
                            <a href={"/update/" + stockID}><AiFillSetting /></a>
                        </big>
                    </p>
                </div>
            </div>
        </div>

    )
}


export default StockItem
