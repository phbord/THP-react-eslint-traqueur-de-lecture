import React from 'react';
import Book from 'components/Book';

const Books = ({data}) => {
    const {books} = data

    console.log(books)
    return (
        <ul className="books-list row">
            {books[0].map((book, index) => {
                return (
                    <Book data={book} key={index}/>
                )
            })}
        </ul>
    )
}

export default Books