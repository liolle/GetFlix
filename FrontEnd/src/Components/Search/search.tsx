import React, { useState } from 'react';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event:any) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Handle search submission
    console.log(`Search for ${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchText} onChange={handleSearch} placeholder="Recherche" />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default SearchBar;