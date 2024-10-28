import React,{useState} from 'react'

const SearchBar = ({onSearch}) => {
    const [input,setInput] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        onSearch(input);
    }
  return (
    <form onSubmit={handleSubmit} className='search-bar' >
        <input
        type='text'
        placeholder='Enter City'
        value={input}
        onChange={(e) => setInput(e.target.value)}></input>
        <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar