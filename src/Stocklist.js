import React, { useState, useEffect } from 'react';
import { getItems, getFavorites, getRandomItems } from './stockManager';
import StockItem from './StockItem';





const Stocklist = () => {
    const [myStock, setMyStock] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setMyStock(await getFavorites());

        };
        fetchData();
    }, [])


    return (
        <>
            <div className='w3-bar w3-theme-l2'>
                <a href="#" className="w3-bar-item w3-button" onClick={async () => { setMyStock(await getItems()); }}>all</a>
                <a href="#" className="w3-bar-item w3-button" onClick={async () => { setMyStock(await getRandomItems(3)); }}>3</a>
                <a href="#" className="w3-bar-item w3-button" onClick={async () => { setMyStock(await getRandomItems(5)); }}>5</a>
            </div>
            <div className="w3-row-padding ">
                {myStock.map((wagon) =>
                    <StockItem
                        key={wagon.id}
                        stockID={wagon.id}
                        imageURL={wagon.url}
                        name={wagon.name}
                        favorite={wagon.favorite}
                        ontrack={wagon.ontrack}
                    />
                )}
            </div>
        </>
    )
}


export default Stocklist;
