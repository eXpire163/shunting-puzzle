import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { getItem, updateItem } from '../stockManager';



const Update = () => {
    const { stockID } = useParams()


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [ontrack, setOnTrack] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const stock = await getItem(stockID);

            setName(stock.name ? stock.name : "");
            setDescription(stock.description ? stock.description : "");
            setUrl(stock.url ? stock.url : "");
            setFavorite(stock.favorite ? stock.favorite : false);
            setOnTrack(stock.ontrack ? stock.ontrack : false);
        };
        fetchData();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`The name you entered was: ${name}`)
        updateItem(stockID, name, description, url, favorite, ontrack);
    }

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr><td><label>Name</label></td><td><input id='name' value={name} onChange={(e) => setName(e.target.value)} /></td></tr>
                    <tr><td><label>description</label></td><td><input id='description' value={description} onChange={(e) => setDescription(e.target.value)} /></td></tr>
                    <tr><td><label>url</label></td><td><input id='url' value={url} onChange={(e) => setUrl(e.target.value)} /></td></tr>
                    <tr><td><label>favorite</label></td><td><input type="checkbox" id='favorite' checked={favorite} onChange={(e) => setFavorite(e.target.checked)} /></td></tr>
                    <tr><td><label>ontrack</label></td><td><input type="checkbox" id='ontrack' checked={ontrack} onChange={(e) => setOnTrack(e.target.checked)} /></td></tr>
                    <tr><td></td><td><button type='submit'>update</button></td></tr>
                </tbody>
            </table>
        </form>


    );
};

export default Update;
