import React, { useEffect, useState } from "react";
import './Searchbar.css';

export default function Searchbar(InputProps) {
    const setPageData = InputProps.setPageData;
    const setPageNum = InputProps.setPageNum;
    const userData = InputProps.userData;
    const [searchValue, setSearchValue] = useState("");
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    
    const performSearch = async (text) => {
        const searchData = userData.filter(
          (user) =>
            user.id.toLowerCase().includes(text) ||
            user.name.toLowerCase().includes(text) ||
            user.email.toLowerCase().includes(text) ||
            user.role.toLowerCase().includes(text)
        );
        setPageData(searchData);
        setPageNum(1);
      };
      
    const debounceSearch = (event, debounceTimeout) => {
        const value = event.target.value;
        setSearchValue(value);
        if(debounceTimeout){
          clearTimeout(debounceTimeout);
        }
        const newDebounceTimeout = setTimeout(()=>{
            setSearchValue(value);
          performSearch(value);
        },500);
        setDebounceTimeout(newDebounceTimeout);
      };

  return (
    <div className="container">
      <input className="search" type="search" placeholder="Search by name, email or role"
      onChange={(e)=>debounceSearch(e,debounceTimeout)}/>
    </div>
  )
}
