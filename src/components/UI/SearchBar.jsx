import React, { useState } from "react";
import styled from "styled-components";
import imgages from '../../assets/images/search.png';


const SearchBar = () => {
  const [query, setQuery] = useState("");

  

  return (
   

        <Search>
      <SearchInput
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      >
        
      </SearchInput>
        <SearchIcon
          src={imgages}
          alt="Search"
        />
       
    </Search>

    
  );
};

export default SearchBar;

const Search = styled.div`
  display: flex;
 gap: 10px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  border: 1px solid #ccc;
  outline: none;
 padding-left: 40px;
  
`;

const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
 position: absolute;
 top: 59px;
 left: 1210px;
`;
