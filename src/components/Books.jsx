import React from 'react';
import { useState } from 'react';
import '../assets/css/Books.css'

//components
import Tables from './Tables';

//js
import Details from './Details.js'; 

const Books = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState(Details);

    console.log("Books: ",books);
    const handleChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    // if (!books) return <h1>Loading...</h1>
    
    const filteredBooks = books.filter(items =>
        (items.bookName != null && items.bookName.toLowerCase().includes(search.toLowerCase())) ||
        (items.authorName != null && items.authorName.toLowerCase().includes(search.toLowerCase()))
    );
    console.log("filteredBooks: ",filteredBooks);

    return (
        <div className='books-container'>
            <div className="books-search">
                <form className='form-search'>
                    <button disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#636262"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                    </button>
                    <input
                        type="text"
                        placeholder="Search"
                        className='search-input'
                        value={search}
                        name="search"
                        onChange={handleChange}
                    />
                </form>
            </div>
            {
                (books)? <Tables books={books} setBooks={setBooks} filteredBooks={filteredBooks} />:<h1>Loading...</h1>
            }
        </div>
    )
}

export default Books