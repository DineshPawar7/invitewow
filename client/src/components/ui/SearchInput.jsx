import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const rotatingKeywords = ['wedding', 'birthday', 'resume', 'event', 'party'];

const SearchInput = ({ className = '' }) => {
  const [query, setQuery] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim().toLowerCase();

    if (['wedding', 'birthday', 'resume', 'event', 'party'].includes(trimmedQuery)) {
      navigate(`/templates/${trimmedQuery}`);
    } else {
      alert('No matching templates found. Try "wedding", "birthday", etc.');
    }
  };

  return (
    <form onSubmit={handleSearch} className={`flex items-center gap-2 ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search ${rotatingKeywords[placeholderIndex]}...`}
        className="w-full max-w-sm px-5 py-3 rounded-full shadow focus:outline-none text-gray-800"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-hover text-white font-semibold px-6 py-3 rounded-full shadow"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
