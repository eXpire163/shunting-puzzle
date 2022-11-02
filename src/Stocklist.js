import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Stock } from './models';
import StockItem from './StockItem';





const Stocklist = () => {
    const [myStock, setMyStock] = useState([]);
    const getStock = async function (amount) {
        const models = await DataStore.query(Stock);
        //console.log(models);
        if (amount > 0) {
            setMyStock(getMultipleRandom(models, amount));
        } else {
            setMyStock(models)
        }
    }
    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };
    useEffect(() => { getStock(3); }, [])


    return (
        <>
            <div className='w3-bar w3-theme-l2'>
                <a href="#" className="w3-bar-item w3-button" onClick={() => { getStock(); }}>all</a>
                <a href="#" className="w3-bar-item w3-button" onClick={() => { getStock(3); }}>3</a>
                <a href="#" className="w3-bar-item w3-button" onClick={() => { getStock(5); }}>5</a>
            </div>
            <div className="w3-row-padding ">
                {myStock.map((wagon, index) =>
                    <StockItem
                        key={index}
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
