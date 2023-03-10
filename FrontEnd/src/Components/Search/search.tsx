import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


  export const searchBar = () => {

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
    <form onSubmit={handleSubmit} className="ml-100">
      <div className="relative items-center">
      <input type="text" value={searchText} onChange={handleSearch} placeholder="Search..." className="py-1 pl-10 rounded-full bg-gray-100 focus:outline-none focus:bg-white focus:shadow-outline" />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="text-gray-500" />
      </div>
      <button type="submit" className="hidden">Search</button>
      </div>
    </form>
  );
}

export default searchBar;