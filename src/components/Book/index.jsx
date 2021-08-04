import React from 'react';

const Book = ({data}) => {
    return (
        <li className='col-12 col-sm-4 col-md-3 mb-4'>
            <div className='card'>
                <div className='card-img-top d-flex justify-content-center'>
                    <img src={data.thumbnailUrl} alt='book-img' />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{data.title}</h3>
                    <div className="card-sub-body mb-2">
                        <p className="card-text">{data.shortDescription}</p>
                    </div>
                    <div>
                        <button className='btn btn-primary me-2'>Favoris</button>
                        <button className='btn btn-primary'>Lu</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Book