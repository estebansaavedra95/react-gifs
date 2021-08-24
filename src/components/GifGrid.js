import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs(category);



    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
           { <div className="card-grid">
                {
                    data.map(img => (//cuando no tenemos las llaves es un return implicito
                        <GifGridItem
                            {...img} // otra manera de pasar props
                            key={img.id}
                        />
                    )
                    )
                }
            </div>}
        </>
    )
}

export default GifGrid;
