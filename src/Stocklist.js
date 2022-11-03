import React, { useState, useEffect } from 'react';
import { getItems, getFavorites, getRandomItems } from './stockManager';
import StockItem from './StockItem';
import { useParams } from 'react-router-dom'





const Stocklist = () => {
    const { show } = useParams()
    const [myStock, setMyStock] = useState([]);
    useEffect(() => {
        async function fetchData(show) {
            console.log(show)
            switch (show) {
                case "3":
                    setMyStock(await getRandomItems(3));
                    break;
                case "5":
                    setMyStock(await getRandomItems(5));
                    break;
                case "all":
                    setMyStock(await getItems());
                    break;
                default:
                    setMyStock(await getFavorites());
            }
        };
        fetchData(show);
    }, [show])


    return (
        <>
            {/* <div className='w3-bar w3-theme-l2'>
                <a href="#" className="w3-bar-item w3-button" onClick={async () => { setMyStock(await getItems()); }}>all</a>
                <a href="#" className="w3-bar-item w3-button" onClick={async () => { setMyStock(await getRandomItems(3)); }}>3</a>
                <a href="#" className="w3-bar-item w3-button" onClick={async () => { setMyStock(await getRandomItems(5)); }}>5</a>
                <a href="./create" className="w3-bar-item w3-button" >new</a>
            </div> */}
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
