import React from 'react';
import Book from 'components/Book';

const Books = ({data}) => {
    const {books} = data

    console.log(books)
    return (
        <div className="books-list">
            {books[0].map((book, index) => {
                return (
                    <Book data={book} key={index}/>
                )
            })}
        </div>
    )
}

export default Books