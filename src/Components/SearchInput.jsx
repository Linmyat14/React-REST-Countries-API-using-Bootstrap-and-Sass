import { useState } from "react";

const SearchInput = ({ onSearch }) => {
    const [ searchInput , setSearchInput] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      onSearch(searchInput);
    }
    return (
      <div className="pt-5">
        <form onSubmit={submitHandler}>
              <div className="d-flex search-input">
              <i className="bi bi-search position-absolute mx-5 my-3"></i>
              <input type="text" 
                      className=" form-control search-input py-2 ms-4 text-center border-0" 
                      placeholder="Search for a country..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      />
              </div>
          </form>
      </div>
    )
  }

export default SearchInput
