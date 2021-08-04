import React from 'react';

const Header = (props) => {
    const [books, setBooks] = React.useState(props.books);
    const [search, setSearch] = React.useState(props.search)
    const [filteredBooks, setFilteredBooks] = React.useState(props.filteredbooks)
    console.log('books1: ',books);

    const sorted = (e) => {
        e.preventDefault()
        console.log('books: ',books);
        const sortedArray = books.filter(book => {
            let result = book.title.toLowerCase()
            return result.search(search) !== -1
        })
        setFilteredBooks(sortedArray)
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <form onSubmit={sorted} action="" className="d-flex">
                        <div className="col-auto me-2">
                            <input value={search} 
                                    onChange={e => setSearch(e.target.value)} 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="Search" />
                        </div>
                        <div className="col-auto me-4">
                            <button type="submit" 
                                    className='fav btn btn-primary'>Rechercher</button>
                        </div>
                        <div className="col-auto me-2">
                            <button type="button" 
                                    className='fav btn btn-secondary'>Favoris</button>
                        </div>
                        <div className="col-auto me-2">
                            <button type="button" 
                                    className='read btn btn-secondary'>A lire</button>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Header
