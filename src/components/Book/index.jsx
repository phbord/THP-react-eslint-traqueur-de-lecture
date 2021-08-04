import React from 'react';

const Book = ({data}) => {
    return (
        <div className='book-card'>
            <div className='book-card-img'>
                <img src={data.thumbnailUrl} alt='book-img' />
                <div className="infos">
                    <h3>{data.title}</h3>
                    <p>{data.shortDescription}</p>
                </div>
            </div>
            <button className='btn btn-primary'>Favoris</button>
            <button className='btn btn-primary'>Lu</button>
        </div>
    )
}

export default Book