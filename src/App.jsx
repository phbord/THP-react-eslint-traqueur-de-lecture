import React, { useEffect } from 'react';
import 'bootstrap';
import Header from "components/Header";
import Books from "components/Books";
import Loading from "components/Loading";

import './assets/scss/App.scss';

const URL = 'https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json'


function App() {
  const [books, setBooks] = React.useState("")
  const [search, setSearch] = React.useState("")
  const [filteredBooks, setFilteredBooks] = React.useState([])

  useEffect(() => {
    fetch(URL)
    .then(response => (response.json()))
    .then(response => {
      setBooks(response.books[0]);
    })

  }, [])

  const sorted = (e) => {
    e.preventDefault()
    const sortedArray = books.filter(book => {
      let result = book.title.toLowerCase()
      return result.search(search) !== -1
    })
    setFilteredBooks(sortedArray)
  }

  const allBooks = () => {
    if (books) {
      return <Books data={books} />
    } else {
      return <Loading type="bars" color='#454545'/>
    }
  }

  const allFav = () => {
    const filter = books.filter(book => {
      return book.isFav === true
    })
    setFilteredBooks(filter);
  }

  return (<>
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
                      onClick={allFav}
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
    <div className="App container mt-5 pt-5">
      <h1>Bienvenue</h1>
      {filteredBooks ? <Books data={filteredBooks} /> : allBooks()}
    </div>
  </>);
}

export default App;
