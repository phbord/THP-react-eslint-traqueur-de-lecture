import React from 'react';
import Book from 'components/Book';

const Books = ({data}) => {
    console.log('data: ', data)
    return (
        <ul className="books-list row">
            {data.map((book, index) => {
                return (
                    <Book data={book} key={index}/>
                )
            })}
        </ul>
    )
}

export default Books