import React, { useState, useEffect } from 'react';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }
        const result = await response.json();
        setBooks(result.data || []);
        setNote(result.note || '');
      } catch (err) {
        setError(err.message || 'Failed to load books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="books-section">
      <div className="section-header">
        <h2>📖 Sample Catalog (In-Memory Data)</h2>
        {note && <span className="data-note-tag">{note}</span>}
      </div>

      {loading && <p className="loading-text">Loading catalog...</p>}
      {error && <p className="error-text">Failed to fetch books: {error}</p>}

      {!loading && !error && (
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover-placeholder">📘</div>
              <div className="book-details">
                <h4 className="book-title">{book.title}</h4>
                <p className="book-author">By {book.author}</p>
                <p className="book-isbn">ISBN: {book.isbn}</p>
                <span className={`status-tag ${book.status.toLowerCase()}`}>
                  {book.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
