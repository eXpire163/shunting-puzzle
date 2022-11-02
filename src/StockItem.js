import React from 'react';


const StockItem = ({
    imageURL,
    name,
    ontrack,
    favorite
}) => {

    return (
        <div className="w3-col m2 w3-padding-16">
            <div className="w3-card-4">
                <div className='w3-container w3-theme-light'>
                    <h3>{name}</h3>
                </div>
                <img src={imageURL} alt="Alps" style={{ width: "100%" }} />
                <div className="w3-container w3-theme-light">
                    <p>
                        <input class="w3-check" type="checkbox" checked={ontrack} disabled />
                        <label> ontrack </label>
                        <input class="w3-check" type="checkbox" checked={favorite} disabled />
                        <label> favorite </label>
                    </p>
                </div>
            </div>
        </div>

    )
}


export default StockItem
