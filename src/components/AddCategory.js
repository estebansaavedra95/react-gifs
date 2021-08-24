import React, { useState } from 'react'
import PropTypes from 'prop-types'
const AddCategory = ({ setCategories }) => {

    const [anime, setAnime] = useState(''); //si no paso nada queda undifined

    const handleSubmit = (e) => {
        e.preventDefault();
        if(anime.length > 2){
            setCategories( a => [anime, ...a]);
            setAnime('');
        }
    }
    const handleAnimeChange = (e)=>{
        setAnime(e.target.value);
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Buscar gifs" autoFocus value = {anime} onChange = {handleAnimeChange} />
        </form>
    )
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

