import React, { useState } from 'react';
import './App.css';
import About from './About';
import Login from './Login';
import Register from './Register';

// Import images
import wishing from './img.1.webp';
import wonder from './wonder.jpg';
import little from './little.jpg';
import web from './OIP.webp';
import kid from './wimpy.jpg';
import holes from './holes.jpg';
import giver from './R.jpg';
import matilda from './matilda.webp';
import dixie from './dixie.jpg';
import percy from './R1.jpg';

function App() {
  const [books] = useState([
    { id: 1, title: "The Wishing Spell", author: "Chris Colfer", year: 2012, genre: "Fantasy", img: wishing },
    { id: 2, title: "Wonder", author: "R.J. Palacio", year: 2012, genre: "Fiction", img: wonder },
    { id: 3, title: "Charlotte's Web", author: "E.B. White", year: 1952, genre: "Classic", img: web },
    { id: 4, title: "The Little Prince", author: "A. de Saint-Exupery", year: 1943, genre: "Classic", img: little },
    { id: 5, title: "Diary of a Wimpy Kid", author: "Jeff Kinney", year: 2007, genre: "Comedy", img: kid },
    { id: 6, title: "Holes", author: "Louis Sachar", year: 1998, genre: "Adventure", img: holes },
    { id: 7, title: "The Giver", author: "Lois Lowry", year: 1993, genre: "Dystopian", img: giver },
    { id: 8, title: "Matilda", author: "Roald Dahl", year: 1988, genre: "Fantasy", img: matilda },
    { id: 9, title: "Because of Winn-Dixie", author: "Kate DiCamillo", year: 2000, genre: "Fiction", img: dixie },
    { id: 10, title: "The Lightning Thief", author: "Rick Riordan", year: 2005, genre: "Fantasy", img: percy }
  ]);

  const [page, setPage] = useState('main');
  const [search, setSearch] = useState('');
  const [sortBy, setBy] = useState('title');

  return (
    <div className="App">
      <header>
        <h1>My Book App</h1>
        <nav>
          <button onClick={() => setPage('main')}>Home</button>
          <button onClick={() => setPage('about')}>About</button>
          <button onClick={() => setPage('login')}>Login</button>
          <button onClick={() => setPage('register')}>Register</button>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        {page === 'about' && <About />}
        {page === 'login' && <Login />}
        {page === 'register' && <Register />}
        
        {page === 'main' && (
          <div>
            <h2>Book Collection</h2>
            <div className="controls">
              <input 
                type="text" 
                placeholder="Search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
              />
              
              {/* UPDATED: Added Genre Option */} 
              <span>Sort by:</span>
              <select value={sortBy} onChange={(e) => setBy(e.target.value)}>
               
                <option value="title">Ratings</option>
                <option value="year">Prices high to low</option>
                <option value="genre">Prices low to high</option>
              </select>
            </div>

           <div className="book-grid">
              {books
                .filter(b => 
                  b.title.toLowerCase().includes(search.toLowerCase()) || 
                  b.year.toString().includes(search) ||
                  b.genre.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => {
                  if (sortBy === 'year') return a.year - b.year;
                  if (sortBy === 'genre') return a.genre.localeCompare(b.genre);
                  return a.title.localeCompare(b.title);
                })
                .map((b) => (
                  <div key={b.id} className="book-card">
                    <img src={b.img} alt={b.title} className="book-img" />
                    <div style={{ padding: '10px' }}>
                      <h3>{b.title}</h3>
                      <p>By: {b.author}</p>
                      <p>Genre: {b.genre}</p>
                      <p>Year: {b.year}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;