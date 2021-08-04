import React, { useEffect } from 'react';
import 'bootstrap';
import Books from "components/Books";
import Loading from "components/Loading";

import './assets/scss/App.scss';

function App() {
  const [books, setBooks] = React.useState("")

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json')
    .then(response => (response.json()))
    .then(response => {
      setBooks(response);
    })
  }, [])

  return (
    <div className="App container mt-5">
      <h1>Bienvenue</h1>
      {books ? <Books data={books} /> : <Loading type="spin" color="#454545"/>}
    </div>
  );
}

export default App;
