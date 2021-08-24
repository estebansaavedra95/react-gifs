import React, { useState } from 'react'; //rafce
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Attack on titan']);


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories = {setCategories} />
            <hr/>
            <ol>
                {
                    categories.map(c => {
                       return <GifGrid key = {c} category = {c} />
                    })
                }
            </ol>
        </>
    )
}
export default GifExpertApp;
